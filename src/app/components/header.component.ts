import { Component } from '@angular/core';
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
        <div class="flex items-center">
          <img src="/assets/images/logo.svg" alt="Velox Immigration" />
        </div>

        <div class="hidden md:flex space-x-6">
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
                      routerLink="/services/pr-card"
                      class="text-sm text-gray-600 hover:text-fire-600"
                      >PR Card Renewal</a
                    >
                    <a
                      routerLink="/services/citizenship"
                      class="text-sm text-gray-600 hover:text-fire-600"
                      >Citizenship Applications</a
                    >
                    <a
                      routerLink="/services/review"
                      class="text-sm text-gray-600 hover:text-fire-600"
                      >Application Review</a
                    >
                    <a
                      routerLink="/services/sponsorship"
                      class="text-sm text-gray-600 hover:text-fire-600"
                      >Family Sponsorship</a
                    >
                    <a
                      routerLink="/services/appeals"
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
        </div>

        <button
          class="bg-fire-600 text-white px-6 py-2 rounded-lg transition-colors hover:bg-fire-700"
        >
          Book Your Consultation
        </button>
      </nav>
    </header>
    <div class="h-16"></div>
    <!-- Spacer to prevent content from going under fixed header -->
  `,
  styles: [
    `
      :host {
        display: block;
      }

      /* Ensure dropdown stays visible while hovering */
      .group:hover .group-hover\\:visible {
        visibility: visible;
        pointer-events: auto;
      }
    `,
  ],
})
export class HeaderComponent {}
