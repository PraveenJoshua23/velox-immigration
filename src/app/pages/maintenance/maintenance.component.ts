import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-maintenance',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4"
    >
      <div class="max-w-2xl mx-auto text-center">
        <!-- Logo or Brand -->
        <div class="mb-8">
          <img
            src="/assets/images/logo.svg"
            alt="Velox Immigration"
            class="h-16 mx-auto mb-4"
            onerror="this.style.display='none'"
          />
          <!-- <h1 class="text-3xl font-bold text-gray-800">Velox Immigration</h1> -->
        </div>

        <!-- Maintenance Icon -->
        <!-- <div class="mb-8">
          <div
            class="w-24 h-24 mx-auto bg-white rounded-full flex items-center justify-center mb-6"
          >
            <svg
              class="w-12 h-12 text-orange-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              ></path>
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              ></path>
            </svg>
          </div>
        </div> -->

        <!-- Main Content -->
        <div class="mb-8">
          <h2 class="text-4xl font-bold text-gray-800 mb-4">
            We'll Be Back Soon!
          </h2>
          <p class="text-xl text-gray-600 mb-6">
            Our website is currently undergoing scheduled maintenance to serve
            you better.
          </p>
          <p class="text-lg text-gray-500 mb-8">
            We're working hard to improve your experience and will be back
            online shortly.
          </p>
        </div>

        <!-- Contact Information -->
        <div class="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h3 class="text-xl font-semibold text-gray-800 mb-4">
            Need Immediate Assistance?
          </h3>
          <div class="space-y-3">
            <div class="flex items-center justify-center space-x-2">
              <svg
                class="w-5 h-5 text-blue-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                ></path>
              </svg>
              <span class="text-gray-700">+1 (647) 123-4567</span>
            </div>
            <div class="flex items-center justify-center space-x-2">
              <svg
                class="w-5 h-5 text-blue-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                ></path>
              </svg>
              <span class="text-gray-700">info&#64;veloximmigration.com</span>
            </div>
          </div>
        </div>

        <!-- Estimated Time -->
        <div class="text-center">
          <p class="text-sm text-gray-500">
            Estimated downtime: <span class="font-semibold">2-4 hours</span>
          </p>
          <p class="text-xs text-gray-400 mt-2">
            Thank you for your patience and understanding.
          </p>
        </div>

        <!-- Social Links (Optional) -->
        <div class="mt-8 flex justify-center space-x-4">
          <a
            href="#"
            class="text-gray-400 hover:text-blue-500 transition-colors"
            aria-label="Facebook"
          >
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
              />
            </svg>
          </a>
          <a
            href="#"
            class="text-gray-400 hover:text-blue-500 transition-colors"
            aria-label="LinkedIn"
          >
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  `,
  styles: `
    :host {
      display: block;
    }
  `,
})
export class MaintenanceComponent {
  constructor() {}
}
