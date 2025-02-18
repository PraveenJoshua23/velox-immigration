import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

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
        <div class="flex items-center cursor-pointer" routerLink="/">
          <img
            src="/assets/images/logo.svg"
            alt="Velox Immigration"
            class="h-8"
          />
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden lg:flex justify-center items-center space-x-6">
          <a
            routerLink="/"
            routerLinkActive="text-fire-600"
            class="text-gray-600 font-spartan hover:text-fire-600 transition-colors"
          >
            Home
          </a>

          <a
            routerLink="/about"
            routerLinkActive="text-fire-600"
            class="text-gray-600 font-spartan hover:text-fire-600 transition-colors"
          >
            About Us
          </a>

          <div class="relative group">
            <a
              class="text-gray-600 font-spartan hover:text-fire-600 transition-colors cursor-pointer flex items-center gap-1"
            >
              Our Services
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

            <div
              class="absolute left-1/2 -translate-x-1/2 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 w-[800px] bg-white shadow-lg rounded-lg mt-2 p-6"
            >
              <div class="grid grid-cols-3 gap-6">
                <!-- Temporary Resident Services -->
                <div>
                  <h3 class="font-bold text-fire-600 mb-3">
                    Temporary Resident Services
                  </h3>
                  <div class="flex flex-col gap-2">
                    <a
                      routerLink="/services/temporary-services/study"
                      class="text-sm text-gray-600 hover:text-fire-600"
                      >Study in Canada</a
                    >
                    <a
                      routerLink="/services/temporary-services/work"
                      class="text-sm text-gray-600 hover:text-fire-600"
                      >Work in Canada</a
                    >
                    <a
                      routerLink="/services/temporary-services/visitor-visa"
                      class="text-sm text-gray-600 hover:text-fire-600"
                      >Visitor Visa</a
                    >
                    <a
                      routerLink="/services/temporary-services/super-visa"
                      class="text-sm text-gray-600 hover:text-fire-600"
                      >Parent/Grandparent Super Visa</a
                    >
                    <a
                      routerLink="/services/temporary-services/lmia"
                      class="text-sm text-gray-600 hover:text-fire-600"
                      >Labour Market Impact Assessment</a
                    >
                  </div>
                </div>

                <!-- Permanent Residency -->
                <div>
                  <h3 class="font-bold text-fire-600 mb-3">
                    Permanent Residency
                  </h3>
                  <div class="flex flex-col gap-2">
                    <a
                      routerLink="/services/permanent-residency/express-entry"
                      class="text-sm text-gray-600 hover:text-fire-600"
                      >Express Entry</a
                    >
                    <a
                      routerLink="/services/permanent-residency/provincial-nominee"
                      class="text-sm text-gray-600 hover:text-fire-600"
                      >Provincial Nominee Program</a
                    >
                    <a
                      routerLink="/services/permanent-residency/atlantic-immigration"
                      class="text-sm text-gray-600 hover:text-fire-600"
                      >Atlantic Immigration Program</a
                    >
                    <a
                      routerLink="/services/permanent-residency/family-immigration"
                      class="text-sm text-gray-600 hover:text-fire-600"
                      >Family Immigration</a
                    >
                    <a
                      routerLink="/services/permanent-residency/business-immigration"
                      class="text-sm text-gray-600 hover:text-fire-600"
                      >Business Immigration</a
                    >
                  </div>
                </div>

                <!-- Additional Services -->
                <div>
                  <h3 class="font-bold text-fire-600 mb-3">
                    Additional Services
                  </h3>
                  <div class="flex flex-col gap-2">
                    <a
                      routerLink="/services/additional-services/pr-card-renewal"
                      class="text-sm text-gray-600 hover:text-fire-600"
                      >PR Card Renewal</a
                    >
                    <a
                      routerLink="/services/additional-services/citizenship"
                      class="text-sm text-gray-600 hover:text-fire-600"
                      >Citizenship Applications</a
                    >
                    <a
                      routerLink="/services/additional-services/application-review"
                      class="text-sm text-gray-600 hover:text-fire-600"
                      >Application Review</a
                    >
                    <a
                      routerLink="/services/additional-services/family-sponsorship"
                      class="text-sm text-gray-600 hover:text-fire-600"
                      >Family Sponsorship</a
                    >
                    <a
                      routerLink="/services/additional-services/appeals"
                      class="text-sm text-gray-600 hover:text-fire-600"
                      >Appeals & Humanitarian</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>

          <a
            routerLink="/contact"
            routerLinkActive="text-fire-600"
            class="text-gray-600 font-spartan hover:text-fire-600 transition-colors"
          >
            Contact
          </a>
          <!-- Desktop CTA -->
          <button
            routerLink="/contact"
            class="hidden lg:block bg-fire-600 text-white text-sm px-6 py-3 ml-2 rounded-lg transition-colors hover:bg-fire-700"
          >
            Book Your Consultation
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
            <a
              routerLink="/"
              (click)="closeMenu()"
              class="text-xl font-medium text-gray-800 hover:text-fire-600"
            >
              Home
            </a>
            <a
              routerLink="/about"
              (click)="closeMenu()"
              class="text-xl font-medium text-gray-800 hover:text-fire-600"
            >
              About Us
            </a>

            <!-- Services Sections -->
            <div class="space-y-6">
              <!-- Temporary Resident Services -->
              <div>
                <h3 class="text-xl font-bold text-fire-600 mb-3">
                  Temporary Resident Services
                </h3>
                <div class="flex flex-col gap-3 pl-4">
                  <a
                    *ngFor="let service of temporaryServices"
                    [routerLink]="service.route"
                    (click)="closeMenu()"
                    class="text-gray-600 hover:text-fire-600"
                  >
                    {{ service.name }}
                  </a>
                </div>
              </div>

              <!-- Permanent Residency -->
              <div>
                <h3 class="text-xl font-bold text-fire-600 mb-3">
                  Permanent Residency
                </h3>
                <div class="flex flex-col gap-3 pl-4">
                  <a
                    *ngFor="let service of permanentServices"
                    [routerLink]="service.route"
                    (click)="closeMenu()"
                    class="text-gray-600 hover:text-fire-600"
                  >
                    {{ service.name }}
                  </a>
                </div>
              </div>

              <!-- Additional Services -->
              <div>
                <h3 class="text-xl font-bold text-fire-600 mb-3">
                  Additional Services
                </h3>
                <div class="flex flex-col gap-3 pl-4">
                  <a
                    *ngFor="let service of additionalServices"
                    [routerLink]="service.route"
                    (click)="closeMenu()"
                    class="text-gray-600 hover:text-fire-600"
                  >
                    {{ service.name }}
                  </a>
                </div>
              </div>
            </div>

            <a
              routerLink="/contact"
              (click)="closeMenu()"
              class="text-xl font-medium text-gray-800 hover:text-fire-600"
            >
              Contact
            </a>

            <!-- Mobile CTA -->
            <button
              routerLink="/contact"
              (click)="closeMenu()"
              class="mt-6 w-full bg-fire-600 text-white px-6 py-3 rounded-lg transition-colors hover:bg-fire-700 text-center"
            >
              Book Your Consultation
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

      .group:hover .group-hover\\:visible {
        visibility: visible;
        pointer-events: auto;
      }

      /* Prevent body scroll when menu is open */
      :host-context(body.menu-open) {
        overflow: hidden;
      }
    `,
  ],
})
export class HeaderComponent {
  isMenuOpen = signal(false);

  temporaryServices = [
    { name: 'Study in Canada', route: '/services/temporary-services/study' },
    { name: 'Work in Canada', route: '/services/temporary-services/work' },
    {
      name: 'Visitor Visa',
      route: '/services/temporary-services/visitor-visa',
    },
    {
      name: 'Parent/Grandparent Super Visa',
      route: '/services/temporary-services/super-visa',
    },
    {
      name: 'Labour Market Impact Assessment',
      route: '/services/temporary-services/lmia',
    },
  ];

  permanentServices = [
    {
      name: 'Express Entry',
      route: '/services/permanent-residency/express-entry',
    },
    {
      name: 'Provincial Nominee Program',
      route: '/services/permanent-residency/provincial-nominee',
    },
    {
      name: 'Atlantic Immigration Program',
      route: '/services/permanent-residency/atlantic-immigration',
    },
    {
      name: 'Family Immigration',
      route: '/services/permanent-residency/family-immigration',
    },
    {
      name: 'Business Immigration',
      route: '/services/permanent-residency/business-immigration',
    },
  ];

  additionalServices = [
    {
      name: 'PR Card Renewal',
      route: '/services/additional-services/pr-card-renewal',
    },
    {
      name: 'Citizenship Applications',
      route: '/services/additional-services/citizenship',
    },
    {
      name: 'Application Review',
      route: '/services/additional-services/application-review',
    },
    {
      name: 'Family Sponsorship',
      route: '/services/additional-services/family-sponsorship',
    },
    {
      name: 'Appeals & Humanitarian',
      route: '/services/additional-services/appeals',
    },
  ];

  toggleMenu() {
    this.isMenuOpen.update((value) => !value);
    document.body.classList.toggle('menu-open');
  }

  closeMenu() {
    this.isMenuOpen.set(false);
    document.body.classList.remove('menu-open');
  }
}
