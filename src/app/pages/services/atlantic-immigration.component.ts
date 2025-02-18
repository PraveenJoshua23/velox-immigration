import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-atlantic-immigration',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="space-y-8">
      <div class="bg-sea-900 text-white rounded-lg p-8">
        <h1 class="text-3xl font-bold mb-4">Atlantic Immigration Program</h1>
        <p class="text-lg">
          Immigration pathway through Atlantic Canada provinces
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="space-y-6">
          <section>
            <h2 class="text-2xl font-bold text-sea-900 mb-4">
              Participating Provinces
            </h2>
            <div class="space-y-4">
              <div
                class="bg-white p-6 rounded-lg shadow-sm border-l-4 border-fire-600"
              >
                <h3 class="font-semibold">New Brunswick</h3>
                <p class="text-sm text-gray-600">
                  Growing technology and healthcare sectors
                </p>
              </div>
              <div
                class="bg-white p-6 rounded-lg shadow-sm border-l-4 border-fire-600"
              >
                <h3 class="font-semibold">Nova Scotia</h3>
                <p class="text-sm text-gray-600">
                  Strong maritime and education industries
                </p>
              </div>
              <div
                class="bg-white p-6 rounded-lg shadow-sm border-l-4 border-fire-600"
              >
                <h3 class="font-semibold">Prince Edward Island</h3>
                <p class="text-sm text-gray-600">
                  Opportunities in agriculture and tourism
                </p>
              </div>
              <div
                class="bg-white p-6 rounded-lg shadow-sm border-l-4 border-fire-600"
              >
                <h3 class="font-semibold">Newfoundland and Labrador</h3>
                <p class="text-sm text-gray-600">
                  Focus on natural resources and energy
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 class="text-2xl font-bold text-sea-900 mb-4">
              Key Requirements
            </h2>
            <div class="bg-gray-50 p-6 rounded-lg">
              <ul class="space-y-3">
                <li class="flex gap-2">
                  <svg
                    class="w-6 h-6 text-fire-600 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Job offer from designated employer</span>
                </li>
                <li class="flex gap-2">
                  <svg
                    class="w-6 h-6 text-fire-600 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Work experience (1+ year)</span>
                </li>
                <li class="flex gap-2">
                  <svg
                    class="w-6 h-6 text-fire-600 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Language ability (CLB 4 minimum)</span>
                </li>
                <li class="flex gap-2">
                  <svg
                    class="w-6 h-6 text-fire-600 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Educational credentials</span>
                </li>
              </ul>
            </div>
          </section>
        </div>

        <div class="space-y-6">
          <section>
            <h2 class="text-2xl font-bold text-sea-900 mb-4">Our Services</h2>
            <div class="bg-gray-50 p-6 rounded-lg space-y-4">
              <div class="flex gap-4">
                <div class="bg-fire-600 p-2 rounded-lg">
                  <svg
                    class="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold">Employer Connections</h3>
                  <p class="text-sm text-gray-600">
                    Access to designated employers
                  </p>
                </div>
              </div>
              <div class="flex gap-4">
                <div class="bg-fire-600 p-2 rounded-lg">
                  <svg
                    class="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold">Settlement Plan</h3>
                  <p class="text-sm text-gray-600">
                    Customized integration strategy
                  </p>
                </div>
              </div>
              <div class="flex gap-4">
                <div class="bg-fire-600 p-2 rounded-lg">
                  <svg
                    class="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold">Application Support</h3>
                  <p class="text-sm text-gray-600">
                    End-to-end application assistance
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 class="text-2xl font-bold text-sea-900 mb-4">
              Program Benefits
            </h2>
            <div class="bg-gray-50 p-6 rounded-lg space-y-4">
              <div class="flex gap-4">
                <div class="bg-fire-600 p-2 rounded-lg">
                  <svg
                    class="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold">Fast Processing</h3>
                  <p class="text-sm text-gray-600">
                    Expedited application processing
                  </p>
                </div>
              </div>
              <div class="flex gap-4">
                <div class="bg-fire-600 p-2 rounded-lg">
                  <svg
                    class="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold">Settlement Support</h3>
                  <p class="text-sm text-gray-600">
                    Assistance with integration
                  </p>
                </div>
              </div>
            </div>
          </section>

          <div class="bg-fire-50 p-6 rounded-lg">
            <h3 class="font-bold text-fire-900 mb-2">
              Explore Atlantic Canada
            </h3>
            <p class="text-fire-700 mb-4">
              Let us help you find opportunities in Atlantic provinces
            </p>
            <button
              routerLink="/contact"
              class="bg-fire-600 text-white px-6 py-2 rounded-lg hover:bg-fire-700 transition-colors"
            >
              Book Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class AtlanticImmigrationComponent {}
