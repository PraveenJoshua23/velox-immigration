import {
  Component,
  inject,
  OnInit,
  signal,
  PLATFORM_ID,
  Inject,
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DirectusService } from '../services/directus.service';

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
    <header class="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <nav
        class="container mx-auto px-4 py-4 flex justify-between items-center"
      >
        <!-- Logo -->
        <div class="flex items-center cursor-pointer">
          <img
            routerLink="/"
            src="/assets/images/logo.svg"
            alt="Velox Immigration"
            class="h-14"
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
            class="text-gray-600 font-light text-sm hover:text-fire-600 transition-colors"
          >
            {{ item.label }}
          </a>
          } @else if(item.sub_menu && !item.isCta) {
          <!-- Services Dropdown -->
          <div class="services-dropdown relative">
            <a
              class="text-gray-600 font-light text-sm hover:text-fire-600 transition-colors cursor-pointer flex items-center gap-1"
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
              class="primary-dropdown absolute left-1/2 -translate-x-1/2 bg-white border-t border-fire-500 shadow-lg rounded-lg mt-2 py-2 w-[250px] z-10"
            >
              @for(subItem of item.sub_menu; track $index) {
              <li class="dropdown-item relative">
                @if(subItem.sub_menu) {
                <a
                  class="px-4 py-2 text-gray-700 text-sm font-light hover:bg-gray-50 w-full flex justify-between items-center"
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
                  class="secondary-dropdown absolute left-full top-0 bg-white shadow-lg rounded-lg py-2 w-[280px] z-20"
                >
                  @for(subSubItem of subItem.sub_menu; track $index) {
                  <li>
                    <a
                      [routerLink]="subSubItem.url"
                      class="px-4 py-2 text-gray-600 text-sm font-light hover:bg-gray-50 hover:text-fire-600 block"
                    >
                      {{ subSubItem.label }}
                    </a>
                  </li>
                  }
                </ul>
                } @else {
                <a
                  [routerLink]="subItem.url"
                  class="px-4 py-2 text-gray-700 text-sm font-light hover:bg-gray-50 hover:text-fire-600 block w-full"
                >
                  {{ subItem.label }}
                </a>
                }
              </li>
              }
            </ul>
          </div>
          } }

          <!-- Desktop CTA -->
          <button
            *ngIf="ctaButton()"
            [routerLink]="ctaButton()?.url"
            class="hidden lg:block bg-fire-600 text-white text-sm px-6 py-3 ml-2 rounded-lg transition-colors hover:bg-fire-700"
          >
            {{ ctaButton()?.label }}
          </button>
        </div>

        <!-- Mobile Menu Button -->
        <div class="lg:hidden">
          <button
            (click)="toggleMenu()"
            class="text-gray-600 hover:text-fire-600 focus:outline-none p-2"
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
        style="top: 65px;"
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
              class="mt-6 w-full bg-fire-600 text-white px-6 py-3 rounded-lg transition-colors hover:bg-fire-700 text-center"
            >
              {{ ctaButton()?.label }}
            </button>
          </div>
        </div>
      </div>
    </header>
    <div class="h-16"></div>
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
  isMenuOpen = signal(false);
  menuData = signal<MenuData | null>(null);
  menuItems = signal<MenuItem[]>([]);
  ctaButton = signal<MenuItem | null>(null);
  directusService = inject(DirectusService);
  expandedCategories: string[] = [];

  // Constants for localStorage cache
  private readonly MENU_CACHE_KEY = 'velox_navigation_menu';
  private readonly CACHE_EXPIRATION_TIME = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

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
    // Check if we're in a browser environment
    if (isPlatformBrowser(this.platformId)) {
      // Check if menu data exists in localStorage
      const cachedData = localStorage.getItem(this.MENU_CACHE_KEY);

      if (cachedData) {
        try {
          const { data, timestamp } = JSON.parse(cachedData);
          const now = new Date().getTime();

          // Check if the cache is still valid (not expired)
          if (
            data &&
            timestamp &&
            now - timestamp < this.CACHE_EXPIRATION_TIME
          ) {
            // Use cached data initially
            this.processMenuData(data);

            // But still fetch from API to check for updates
            this.directusService.getMenu('navigation').subscribe({
              next: (response) => {
                if (response && response.data && response.data.length > 0) {
                  // Compare the date_updated field to check if data has changed
                  const cachedDateUpdated = data[0]?.date_updated;
                  const newDateUpdated = response.data[0]?.date_updated;

                  // If date_updated is different or the structure has changed, update the cache
                  if (
                    !cachedDateUpdated ||
                    !newDateUpdated ||
                    cachedDateUpdated !== newDateUpdated ||
                    JSON.stringify(data) !== JSON.stringify(response.data)
                  ) {
                    // Process and update the cache with new data
                    this.processMenuData(response.data);

                    // Update the cache
                    const cacheData = {
                      data: response.data,
                      timestamp: new Date().getTime(),
                    };
                    localStorage.setItem(
                      this.MENU_CACHE_KEY,
                      JSON.stringify(cacheData)
                    );
                  }
                }
              },
              error: (err) => {
                console.error('Error checking for menu updates:', err);
              },
            });

            return;
          }
        } catch (error) {
          console.error('Error parsing cached menu data:', error);
          // Continue with API call if there's an error parsing the cache
        }
      }
    }

    // If no valid cache exists or we're not in a browser, fetch from service
    this.directusService.getMenu('navigation').subscribe({
      next: (response) => {
        if (response && response.data && response.data.length > 0) {
          this.processMenuData(response.data);

          // Cache the fresh data with current timestamp if in browser
          if (isPlatformBrowser(this.platformId)) {
            const cacheData = {
              data: response.data,
              timestamp: new Date().getTime(),
            };
            localStorage.setItem(
              this.MENU_CACHE_KEY,
              JSON.stringify(cacheData)
            );
          }
        } else {
          console.error('Invalid menu data structure received', response);
        }
      },
      error: (err) => {
        console.error('Error fetching menu data:', err);
      },
    });
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
