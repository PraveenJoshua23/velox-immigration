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
                <span class="text-lg font-medium">+ 416-589-0123</span>
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
            class="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12 text-center md:text-left"
          >
            <!-- Company Info -->
            <div class="col-span-1 md:col-span-2 ">
              <img
                src="assets/images/logo-white.svg"
                alt="Velox Immigration"
                class="h-14 mb-4 mx-auto md:mx-0"
              />
              <p class="text-gray-400 font-light text-sm mb-4">
                Velox Immigration is a regulated Canadian Immigration
                Consultant.
              </p>
              <div class="flex flex-col gap-2">
                <p class="text-gray-400 font-light">Toronto, Canada</p>
                <p class="text-gray-400 font-light">+ 416-589-0123</p>
              </div>
            </div>

            <!-- Temporary Resident Services -->
            <div>
              <h4 class="text-white font-medium mb-4">Temporary Services</h4>
              <ul class="space-y-2">
                <li>
                  <a
                    routerLink="/services/temporary-services/study"
                    class="text-gray-400 font-light hover:text-white"
                  >
                    Study in Canada
                  </a>
                </li>
                <li>
                  <a
                    routerLink="/services/temporary-services/work"
                    class="text-gray-400 font-light hover:text-white"
                  >
                    Work in Canada
                  </a>
                </li>
                <li>
                  <a
                    routerLink="/services/temporary-services/visitor-visa"
                    class="text-gray-400 font-light hover:text-white"
                  >
                    Visitor Visa
                  </a>
                </li>
                <li>
                  <a
                    routerLink="/services/temporary-services/super-visa"
                    class="text-gray-400 font-light hover:text-white"
                  >
                    Super Visa
                  </a>
                </li>
                <li>
                  <a
                    routerLink="/services/temporary-services/lmia"
                    class="text-gray-400 font-light hover:text-white"
                  >
                    LMIA
                  </a>
                </li>
              </ul>
            </div>

            <!-- Permanent Residency -->
            <div>
              <h4 class="text-white font-medium mb-4">Permanent Residency</h4>
              <ul class="space-y-2">
                <li>
                  <a
                    routerLink="/services/permanent-residency/express-entry"
                    class="text-gray-400 font-light hover:text-white"
                  >
                    Express Entry
                  </a>
                </li>
                <li>
                  <a
                    routerLink="/services/permanent-residency/provincial-nominee"
                    class="text-gray-400 font-light hover:text-white"
                  >
                    Provincial Nominee
                  </a>
                </li>
                <li>
                  <a
                    routerLink="/services/permanent-residency/atlantic-immigration"
                    class="text-gray-400 font-light hover:text-white"
                  >
                    Atlantic Immigration
                  </a>
                </li>
                <li>
                  <a
                    routerLink="/services/permanent-residency/family-immigration"
                    class="text-gray-400 font-light hover:text-white"
                  >
                    Family Immigration
                  </a>
                </li>
                <li>
                  <a
                    routerLink="/services/permanent-residency/business-immigration"
                    class="text-gray-400 font-light hover:text-white"
                  >
                    Business Immigration
                  </a>
                </li>
              </ul>
            </div>

            <!-- Additional Services -->
            <div>
              <h4 class="text-white font-medium mb-4">Additional Services</h4>
              <ul class="space-y-2">
                <li>
                  <a
                    routerLink="/services/additional-services/pr-card-renewal"
                    class="text-gray-400 font-light hover:text-white"
                  >
                    PR Card Renewal
                  </a>
                </li>
                <li>
                  <a
                    routerLink="/services/additional-services/citizenship"
                    class="text-gray-400 font-light hover:text-white"
                  >
                    Citizenship
                  </a>
                </li>
                <li>
                  <a
                    routerLink="/services/additional-services/application-review"
                    class="text-gray-400 font-light hover:text-white"
                  >
                    Application Review
                  </a>
                </li>
                <li>
                  <a
                    routerLink="/services/additional-services/family-sponsorship"
                    class="text-gray-400 font-light hover:text-white"
                  >
                    Family Sponsorship
                  </a>
                </li>
                <li>
                  <a
                    routerLink="/services/additional-services/appeals-humanitarian"
                    class="text-gray-400 font-light hover:text-white"
                  >
                    Appeals & Humanitarian
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
              <a href="#" class="text-gray-400 hover:text-white">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"
                  />
                </svg>
              </a>
              <a href="#" class="text-gray-400 hover:text-white">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"
                  />
                </svg>
              </a>
              <a href="#" class="text-gray-400 hover:text-white">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                  />
                </svg>
              </a>
              <a href="#" class="text-gray-400 hover:text-white">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
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
