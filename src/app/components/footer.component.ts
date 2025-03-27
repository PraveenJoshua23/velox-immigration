import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div
      class="relative"
      [classList]="hideContactBanner ? 'mt-0' : 'mt-[100px]'"
    >
      <!-- Floating Contact Banner -->
      @if (!hideContactBanner) {
      <div class="absolute -top-20 left-0 right-0">
        <div class="container mx-auto px-4">
          <div
            class="bg-red-600 rounded-lg p-8 flex flex-col md:flex-row justify-between items-center"
          >
            <div
              class="flex flex-col md:flex-row items-center gap-4 mb-4 md:mb-0"
            >
              <h3 class="text-xl md:text-2xl text-white font-light">
                Are you looking for a
                <div class="font-medium">
                  Licensed Canadian Immigration Consultant?
                </div>
              </h3>
            </div>
            <div class="flex items-center gap-2 text-white">
              <span class="text-sm">Feel free to call us</span>
              <div class="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span class="text-lg font-medium">+1 416-662-0652</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      }

      <!-- Footer -->
      <footer class="bg-[#1B2534] pt-32 pb-8">
        <div class="container mx-auto px-4">
          <div
            class="grid grid-cols-1 md:grid-cols-7 gap-8 mb-12 text-center md:text-left"
          >
            <!-- Company Info -->
            <div class="col-span-2">
              <img
                src="assets/images/logo-white.svg"
                alt="Velox Immigration"
                class="h-14 mb-4 mx-auto md:mx-0"
              />
              <p class="text-gray-400 font-light text-sm mb-4">
                Velox Immigration is a regulated Canadian Immigration
                Consultant.
              </p>

              <div
                class="flex items-center justify-center md:justify-start gap-10"
              >
                <div class="flex flex-col gap-2">
                  <p class="text-gray-400 font-light">Toronto, Canada</p>
                  <p class="text-gray-400 font-light">+1 416-662-0652</p>
                </div>
                <div class="flex flex-col gap-2">
                  <p class="text-gray-400 font-light">Chennai, India</p>
                  <p class="text-gray-400 font-light">+91 77088 53882</p>
                </div>
              </div>
            </div>

            <!-- Study Category -->
            <div>
              <h4 class="text-white font-medium mb-4">Study</h4>
              <ul class="space-y-2 text-sm">
                <li>
                  <a
                    routerLink="/services/study/study-in-canada"
                    class="text-gray-400 font-light hover:text-white"
                  >
                    Study in Canada
                  </a>
                </li>
              </ul>
            </div>

            <!-- Work Category -->
            <div>
              <h4 class="text-white font-medium mb-4">Work</h4>
              <ul class="space-y-2 text-sm">
                <li>
                  <a
                    routerLink="/services/work/open-pgwp-permits"
                    class="text-gray-400 font-light hover:text-white"
                  >
                    Open & PGWP Permits
                  </a>
                </li>
                <li>
                  <a
                    routerLink="/services/work/lmia-employer-permits"
                    class="text-gray-400 font-light hover:text-white"
                  >
                    LMIA & Employer Permits
                  </a>
                </li>
                <li>
                  <a
                    routerLink="/services/work/extensions-coop"
                    class="text-gray-400 font-light hover:text-white"
                  >
                    Extensions & Co-op Permits
                  </a>
                </li>
              </ul>
            </div>

            <!-- Visit Category -->
            <div>
              <h4 class="text-white font-medium mb-4">Visit</h4>
              <ul class="space-y-2 text-sm">
                <li>
                  <a
                    routerLink="/services/visit/visitor-visas"
                    class="text-gray-400 font-light hover:text-white"
                  >
                    Visitor Visas
                  </a>
                </li>
              </ul>
            </div>

            <!-- Immigrate Category -->
            <div>
              <h4 class="text-white font-medium mb-4">Immigrate</h4>
              <ul class="space-y-2 text-sm">
                <li>
                  <a
                    routerLink="/services/immigrate/express-entry"
                    class="text-gray-400 font-light hover:text-white text-fire-600"
                  >
                    Express Entry Programs
                  </a>
                </li>
                <li>
                  <a
                    routerLink="/services/immigrate/provincial-nominee"
                    class="text-gray-400 font-light hover:text-white"
                  >
                    Provincial Nominee Program
                  </a>
                </li>
                <li>
                  <a
                    routerLink="/services/immigrate/atlantic-immigration"
                    class="text-gray-400 font-light hover:text-white"
                  >
                    Atlantic Immigration
                  </a>
                </li>
                <li>
                  <a
                    routerLink="/services/immigrate/family-sponsorship"
                    class="text-gray-400 font-light hover:text-white"
                  >
                    Family Sponsorship
                  </a>
                </li>
                <li>
                  <a
                    routerLink="/services/immigrate/business-immigration"
                    class="text-gray-400 font-light hover:text-white"
                  >
                    Business Immigration
                  </a>
                </li>
              </ul>
            </div>

            <!-- Other Services Category -->
            <div>
              <h4 class="text-white font-medium mb-4">Other Services</h4>
              <ul class="space-y-2 text-sm">
                <li>
                  <a
                    routerLink="/services/other/pr-citizenship"
                    class="text-gray-400 font-light hover:text-white"
                  >
                    PR Card & Citizenship
                  </a>
                </li>
                <li>
                  <a
                    routerLink="/services/other/appeals-refugee"
                    class="text-gray-400 font-light hover:text-white"
                  >
                    Appeals, Refugee & H&C
                  </a>
                </li>
                <li>
                  <a
                    routerLink="/services/other/review-services"
                    class="text-gray-400 font-light hover:text-white"
                  >
                    Application Reviews
                  </a>
                </li>
                <li>
                  <a
                    routerLink="/services/other/sop-dli-opinion"
                    class="text-gray-400 font-light hover:text-white"
                  >
                    SOP, DLI Change & Review
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <!-- Copyright and Social Links -->
          <div
            class="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center"
          >
            <p class="text-gray-400 text-xs font-light mb-4 md:mb-0">
              Copyright © 2025. All rights reserved.
            </p>
            <div class="flex space-x-4">
              <a
                href="https://www.facebook.com/share/18ZQKWcRMx/?mibextid=wwXIfr"
                class="text-gray-400 hover:text-white"
              >
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"
                  />
                </svg>
              </a>

              <a
                href="https://www.instagram.com/velox_immigration?igsh=MWM0aXhiMm42NjVsMQ%3D%3D&utm_source=qr"
                class="text-gray-400 hover:text-white"
              >
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                  />
                </svg>
              </a>
              <a
                href="https://x.com/Velox_Immig"
                class="text-gray-400 hover:text-white"
              >
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
        position: relative;
      }
    `,
  ],
})
export class FooterComponent {
  @Input() hideContactBanner = false;
}
