import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { localServices, nav } from '../utils/constants/navigation';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <header class="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <nav
        class="container mx-auto px-4 py-4 flex justify-between items-center"
      >
        <!-- Logo -->
        <div class="flex items-center cursor-pointer">
          <img
            [routerLink]="nav().logoTitle.href"
            src="/assets/images/logo.svg"
            [alt]="nav().logoTitle.label"
            class="h-8"
          />
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden lg:flex justify-center items-center space-x-6">
          @for(item of nav().navItem; track item.id) { @if(!item.hasDropdown) {
          <a
            [routerLink]="item.href"
            [href]="item.isExternal ? item.href : null"
            [target]="item.isExternal ? '_blank' : undefined"
            routerLinkActive="text-fire-600"
            [routerLinkActiveOptions]="{ exact: true }"
            class="text-gray-600 font-light hover:text-fire-600 transition-colors"
          >
            {{ item.label }}
          </a>
          } @else {
          <!-- Services Dropdown -->
          <div class="services-dropdown relative">
            <a
              class="text-gray-600 font-light hover:text-fire-600 transition-colors cursor-pointer flex items-center gap-1"
            >
              Services
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
              @for(category of localServices(); track category.id) {
              <li class="dropdown-item relative">
                <a
                  class="px-4 py-2 text-gray-700 font-light hover:bg-gray-50 w-full flex justify-between items-center"
                >
                  {{ category.title }}
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
                  @for(service of category.items; track service.id) {
                  <li>
                    <a
                      [routerLink]="service.path"
                      class="px-4 py-2 text-gray-600 font-light hover:bg-gray-50 hover:text-fire-600 block"
                    >
                      {{ service.label }}
                    </a>
                  </li>
                  }
                </ul>
              </li>
              }
            </ul>
          </div>
          } }
          <!-- Desktop CTA -->
          <button
            [routerLink]="nav().ctaButton.href"
            class="hidden lg:block bg-fire-600 text-white text-sm px-6 py-3 ml-2 rounded-lg transition-colors hover:bg-fire-700"
          >
            {{ nav().ctaButton.label }}
          </button>
        </div>

        <!-- Mobile Menu Button -->
        <div class="lg:hidden">
          <button
            (click)="toggleMenu()"
            class="text-gray-600 hover:text-fire-600 focus:outline-none"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                *ngIf="!isMenuOpen()"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-16 6h16"
              />
              <path
                *ngIf="isMenuOpen()"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
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
          <div class="flex flex-col gap-6">
            @for(item of nav().navItem; track item.id) { @if(!item.hasDropdown
            || item.label === 'Book Consultation' || item.label === 'Contact') {
            <a
              [routerLink]="item.href"
              [href]="item.isExternal ? item.href : null"
              [target]="item.isExternal ? '_blank' : undefined"
              (click)="closeMenu()"
              class="text-xl font-light text-gray-800 hover:text-fire-600"
            >
              {{ item.label }}
            </a>
            } @else {
            <!-- Services Sections -->
            <div>
              <h2 class="text-2xl font-light text-gray-800 mb-4">Services</h2>
              <div class="space-y-4 pl-4">
                @for(category of localServices(); track category.id) {
                <div>
                  <div
                    class="flex items-center justify-between cursor-pointer mb-2"
                    (click)="toggleCategory(category.id)"
                  >
                    <h3 class="text-xl font-medium text-fire-600">
                      {{ category.title }}
                    </h3>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      [class]="
                        expandedCategories.includes(category.id)
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
                    [class.max-h-0]="!expandedCategories.includes(category.id)"
                    [class.max-h-96]="expandedCategories.includes(category.id)"
                  >
                    @for(service of category.items; track service.id) {
                    <a
                      [routerLink]="service.path"
                      (click)="closeMenu()"
                      class="text-gray-600 hover:text-fire-600 py-1"
                    >
                      {{ service.label }}
                    </a>
                    }
                  </div>
                </div>
                }
              </div>
            </div>
            } }

            <!-- Mobile CTA -->
            <button
              [routerLink]="nav().ctaButton.href"
              (click)="closeMenu()"
              class="mt-6 w-full bg-fire-600 text-white px-6 py-3 rounded-lg transition-colors hover:bg-fire-700 text-center"
            >
              {{ nav().ctaButton.label }}
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
  nav = signal(nav);
  localServices = signal(localServices);
  expandedCategories: string[] = [];

  ngOnInit() {
    // Initialization code if needed
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
}
