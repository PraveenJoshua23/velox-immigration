import {
  afterNextRender,
  Component,
  computed,
  DestroyRef,
  inject,
  input,
  NgZone,
  OnInit,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter } from 'rxjs';
import { DirectusService } from '../services/directus.service';
import { HeroCtaService } from '../services/hero-cta.service';

export interface MenuItem {
  label: string;
  url: string;
  visible?: boolean;
  sub_menu?: MenuItem[];
  isCta?: boolean;
}

export interface MenuData {
  id: number;
  date_updated: string | null;
  title: string;
  menu_items: MenuItem[];
}

export interface MenuResponse {
  data: MenuData[];
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  providers: [DirectusService],
  template: `
    <!-- data-transparent drives the white-on-image styles via group-data-[transparent]:.
         No backdrop-blur while the menu is open: it would trap the fixed menu panel inside the header. -->
    <header
      class="group fixed top-0 left-0 right-0 z-50 transition-[background-color,box-shadow] duration-300"
      [class]="
        isMenuOpen()
          ? 'bg-white'
          : solid()
          ? 'bg-white/95 backdrop-blur shadow-sm'
          : 'bg-gradient-to-b from-black/60 to-transparent'
      "
      [attr.data-transparent]="solid() ? null : ''"
    >
      <nav
        class="container mx-auto px-4 py-3 flex justify-between items-center"
      >
        <!-- Logo -->
        <div class="flex items-center cursor-pointer">
          <img
            routerLink="/"
            [src]="
              solid() ? '/assets/images/logo.svg' : '/assets/images/logo-white.svg'
            "
            alt="Velox Immigration"
            class="h-12"
          />
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden lg:flex justify-center items-center space-x-6">
          @for(item of menuItems(); track $index) { @if(!item.sub_menu &&
          !item.isCta) {
          <a
            [routerLink]="item.url"
            routerLinkActive="text-fire-600"
            [routerLinkActiveOptions]="{ exact: item.url === '/' }"
            class="text-gray-600 text-sm hover:text-fire-600 transition-colors group-data-[transparent]:text-white group-data-[transparent]:hover:text-fire-300"
          >
            {{ item.label }}
          </a>
          } @else if(item.sub_menu && !item.isCta) {
          <!-- Services Dropdown -->
          <div class="services-dropdown relative">
            <a
              class="text-gray-600 text-sm hover:text-fire-600 transition-colors cursor-pointer flex items-center gap-1 group-data-[transparent]:text-white group-data-[transparent]:hover:text-fire-300"
            >
              {{ item.label }}
              <svg
                class="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </a>

            <!-- First level dropdown - Service Categories -->
            <ul
              class="primary-dropdown absolute left-1/2 -translate-x-1/2 bg-white border border-gray-200 shadow-xl rounded-xl mt-2 py-2 w-[250px] z-10"
            >
              @for(subItem of item.sub_menu; track $index) {
              <li class="dropdown-item relative">
                @if(subItem.sub_menu) {
                <a
                  class="px-4 py-2 text-gray-700 text-sm hover:bg-gray-50 w-full flex justify-between items-center"
                >
                  {{ subItem.label }}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4 text-gray-500 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>

                <!-- Second level dropdown - Services within Category -->
                <ul
                  class="secondary-dropdown absolute left-full top-0 bg-white border border-gray-200 shadow-xl rounded-xl py-2 w-[280px] z-20"
                >
                  @for(subSubItem of subItem.sub_menu; track $index) {
                  <li>
                    <a
                      [routerLink]="subSubItem.url"
                      class="px-4 py-2 text-gray-600 text-sm hover:bg-gray-50 hover:text-fire-600 block"
                    >
                      {{ subSubItem.label }}
                    </a>
                  </li>
                  }
                </ul>
                } @else {
                <a
                  [routerLink]="subItem.url"
                  class="px-4 py-2 text-gray-700 text-sm hover:bg-gray-50 hover:text-fire-600 block w-full"
                >
                  {{ subItem.label }}
                </a>
                }
              </li>
              }
            </ul>
          </div>
          } }

          <!-- Desktop CTA; faded out while the page's own hero CTA (data-hero-cta) is on screen -->
          <button
            *ngIf="ctaButton()"
            [routerLink]="ctaButton()?.url"
            class="hidden lg:block bg-fire-600 text-white text-sm font-medium px-6 py-3 ml-2 rounded-lg transition-opacity duration-300 hover:bg-fire-700"
            [class.opacity-0]="heroCtaVisible()"
            [class.pointer-events-none]="heroCtaVisible()"
            [attr.aria-hidden]="heroCtaVisible() ? true : null"
            [tabIndex]="heroCtaVisible() ? -1 : 0"
          >
            {{ ctaButton()?.label }}
          </button>
        </div>

        <!-- Mobile Menu Button -->
        <div class="lg:hidden">
          <button
            (click)="toggleMenu()"
            class="text-gray-600 hover:text-fire-600 focus:outline-none p-2 group-data-[transparent]:text-white group-data-[transparent]:hover:text-fire-300"
            aria-label="Toggle menu"
          >
            <svg
              class="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                *ngIf="!isMenuOpen()"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M4 6h16M4 12h16m-16 6h16"
              />
              <path
                *ngIf="isMenuOpen()"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </nav>

      <!-- Mobile Menu -->
      <div
        *ngIf="isMenuOpen()"
        class="lg:hidden fixed inset-0 bg-white z-50 overflow-y-auto"
        style="top: 72px;"
      >
        <div class="container mx-auto px-4 py-6">
          <!-- Main Navigation Links -->
          <div class="flex flex-col gap-6 pl-4">
            @for(item of menuItems(); track $index) { @if(!item.sub_menu &&
            !item.isCta) {
            <h2
              [routerLink]="item.url"
              (click)="closeMenu()"
              class="text-2xl  text-gray-800 hover:text-fire-600"
            >
              {{ item.label }}
            </h2>
            } @else if(item.isCta) {
            <!-- Mobile CTA rendered at the bottom -->
            } @else if(item.sub_menu) {
            <!-- Services Sections -->
            <div>
              <h2 class="text-2xl  text-gray-800 mb-4">
                {{ item.label }}
              </h2>
              <div class="space-y-4 pl-4">
                @for(subItem of item.sub_menu; track $index) {
                <div>
                  @if(subItem.sub_menu) {
                  <div
                    class="flex items-center justify-between cursor-pointer"
                    (click)="toggleCategory(subItem.label)"
                  >
                    <h2 class="text-2xl  text-fire-600">
                      {{ subItem.label }}
                    </h2>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      [class]="
                        expandedCategories.includes(subItem.label)
                          ? 'transform rotate-90 h-5 w-5 text-gray-600'
                          : 'h-5 w-5 text-gray-600'
                      "
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                  <div
                    class="flex flex-col gap-3 pl-4 overflow-hidden transition-all duration-300"
                    [class.max-h-0]="
                      !expandedCategories.includes(subItem.label)
                    "
                    [class.max-h-96]="
                      expandedCategories.includes(subItem.label)
                    "
                  >
                    @for(subSubItem of subItem.sub_menu; track $index) {
                    <h2
                      [routerLink]="subSubItem.url"
                      (click)="closeMenu()"
                      class="text-gray-600 hover:text-fire-600 text-2xl "
                    >
                      {{ subSubItem.label }}
                    </h2>
                    }
                  </div>
                  } @else {
                  <h2
                    [routerLink]="subItem.url"
                    (click)="closeMenu()"
                    class="text-2xl text-fire-600 block mb-2"
                  >
                    {{ subItem.label }}
                  </h2>
                  }
                </div>
                }
              </div>
            </div>
            } }

            <!-- Mobile CTA -->
            <button
              *ngIf="ctaButton()"
              [routerLink]="ctaButton()?.url"
              (click)="closeMenu()"
              class="mt-6 w-full bg-fire-600 text-white font-medium px-6 py-3 rounded-lg transition-colors hover:bg-fire-700 text-center"
            >
              {{ ctaButton()?.label }}
            </button>
          </div>
        </div>
      </div>
    </header>
    <!-- Spacer for the fixed header; overlay pages let content run underneath -->
    @if (!overlay()) {
    <div class="h-[72px]"></div>
    }
  `,
  styles: [
    `
      :host {
        display: block;
      }

      /* === DROPDOWN STYLING === */
      /* First-level dropdown (hidden by default) */
      .primary-dropdown {
        visibility: hidden;
        opacity: 0;
        transition: visibility 0.2s, opacity 0.2s;
      }

      /* Show first-level dropdown on hover */
      .services-dropdown:hover .primary-dropdown {
        visibility: visible;
        opacity: 1;
      }

      /* Second-level dropdown (hidden by default) */
      .secondary-dropdown {
        visibility: hidden;
        opacity: 0;
        transition: visibility 0.2s, opacity 0.2s;
      }

      /* Show second-level dropdown only when parent is hovered */
      .dropdown-item:hover .secondary-dropdown {
        visibility: visible;
        opacity: 1;
      }

      /* Add connecting space to prevent dropdown from closing */
      .dropdown-item::after {
        content: '';
        position: absolute;
        top: 0;
        right: -10px;
        height: 100%;
        width: 10px;
      }

      /* Transition for expandable mobile menu items */
      .max-h-0 {
        max-height: 0;
        overflow: hidden;
      }

      .max-h-96 {
        max-height: 24rem;
      }

      /* Prevent body scroll when menu is open */
      :host-context(body.menu-open) {
        overflow: hidden;
      }
    `,
  ],
})
export class HeaderComponent implements OnInit {
  /** Transparent over a full-screen hero until the user scrolls past it. */
  overlay = input(false);
  private pastHero = signal(false);
  solid = computed(
    () => !this.overlay() || this.pastHero() || this.isMenuOpen()
  );
  /**
   * True while the page's own hero CTA is effectively on screen: the current
   * page declares one (HeroCtaService, known at render time on server and
   * client alike) and the user hasn't scrolled it past the header yet.
   */
  private heroCtaPresent = inject(HeroCtaService).present;
  private scrolledPastHeroCta = signal(false);
  heroCtaVisible = computed(
    () => this.heroCtaPresent() && !this.scrolledPastHeroCta()
  );
  isMenuOpen = signal(false);
  menuData = signal<MenuData | null>(null);
  menuItems = signal<MenuItem[]>([]);
  ctaButton = signal<MenuItem | null>(null);
  directusService = inject(DirectusService);
  expandedCategories: string[] = [];

  constructor() {
    const zone = inject(NgZone);
    const destroyRef = inject(DestroyRef);
    const router = inject(Router);
    afterNextRender(() => {
      // Listen outside the zone; only re-enter when the state actually flips.
      const onScroll = () => {
        const past = window.scrollY > window.innerHeight - 72;
        if (past !== this.pastHero()) zone.run(() => this.pastHero.set(past));
      };
      onScroll();
      zone.runOutsideAngular(() =>
        window.addEventListener('scroll', onScroll, { passive: true })
      );
      destroyRef.onDestroy(() =>
        window.removeEventListener('scroll', onScroll)
      );

      // Tracks whether the current page's hero CTA (marked [data-hero-cta])
      // has scrolled past the header. Only refines heroCtaVisible; whether a
      // hero CTA exists at all comes from HeroCtaService, so the very first
      // render (server and client) is already correct.
      let observer: IntersectionObserver | undefined;
      const watchHeroCta = () => {
        observer?.disconnect();
        const el = document.querySelector('[data-hero-cta]');
        if (!el) return;
        observer = new IntersectionObserver(
          ([entry]) =>
            zone.run(() => this.scrolledPastHeroCta.set(!entry.isIntersecting)),
          // Shrink the viewport by the header's own height, so a hero CTA
          // scrolled up behind the fixed header no longer counts as visible.
          { rootMargin: '-72px 0px 0px 0px' }
        );
        observer.observe(el);
      };

      watchHeroCta();
      zone.runOutsideAngular(() =>
        router.events
          .pipe(
            filter((e) => e instanceof NavigationEnd),
            takeUntilDestroyed(destroyRef)
          )
          .subscribe(() => {
            // Reset immediately (navigation also resets scroll position);
            // re-target the observer once the new route's view has rendered.
            zone.run(() => this.scrolledPastHeroCta.set(false));
            setTimeout(watchHeroCta);
          })
      );
      destroyRef.onDestroy(() => observer?.disconnect());
    });
  }

  ngOnInit() {
    this.getMenuFromBackend();
  }

  toggleMenu() {
    this.isMenuOpen.update((value) => !value);
    document.body.classList.toggle('menu-open');
    // Clear expanded categories when closing menu
    if (!this.isMenuOpen()) {
      this.expandedCategories = [];
    }
  }

  closeMenu() {
    this.isMenuOpen.set(false);
    document.body.classList.remove('menu-open');
    this.expandedCategories = [];
  }

  toggleCategory(categoryId: string) {
    if (this.expandedCategories.includes(categoryId)) {
      this.expandedCategories = this.expandedCategories.filter(
        (id) => id !== categoryId
      );
    } else {
      this.expandedCategories.push(categoryId);
    }
  }

  getMenuFromBackend() {
    this.directusService
      .getMenu('navigation')
      .subscribe((response) => this.processMenuData(response.data));
  }

  processMenuData(data: any) {
    if (Array.isArray(data) && data.length > 0) {
      const menuData = data[0] as MenuData;
      this.menuData.set(menuData);

      // Filter only visible menu items
      const visibleItems = menuData.menu_items.filter(
        (item) => item.visible !== false
      );

      // Extract CTA button
      const ctaButton =
        visibleItems.find((item) => item.isCta === true) || null;
      this.ctaButton.set(ctaButton);

      // Set regular menu items (excluding CTA)
      const regularItems = visibleItems.filter((item) => item.isCta !== true);
      this.menuItems.set(regularItems);
    }
  }
}
