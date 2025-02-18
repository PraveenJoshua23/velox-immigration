import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-citizenship',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="space-y-8">
      <!-- Hero Section -->
      <div class="bg-sea-900 text-white rounded-lg p-8">
        <h1 class="text-3xl font-bold mb-4">Canadian Citizenship</h1>
        <p class="text-lg">
          Take the final step in your Canadian journey and become a citizen
        </p>
      </div>

      <!-- Main Content Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Left Column -->
        <div class="space-y-6">
          <!-- Basic Requirements -->
          <section>
            <h2 class="text-2xl font-bold text-sea-900 mb-4">
              Basic Requirements
            </h2>
            <div class="space-y-4">
              <div class="bg-white p-4 rounded-lg shadow">
                <h3 class="font-semibold text-fire-600">
                  Permanent Resident Status
                </h3>
                <p class="text-sm text-gray-600">
                  Must be a permanent resident and have filed taxes if required
                </p>
              </div>
              <div class="bg-white p-4 rounded-lg shadow">
                <h3 class="font-semibold text-fire-600">Physical Presence</h3>
                <p class="text-sm text-gray-600">
                  Must have been physically present in Canada for 1,095 days in
                  the last 5 years
                </p>
              </div>
              <div class="bg-white p-4 rounded-lg shadow">
                <h3 class="font-semibold text-fire-600">Language Skills</h3>
                <p class="text-sm text-gray-600">
                  Proof of English or French language skills (CLB/NCLC 4 or
                  higher)
                </p>
              </div>
            </div>
          </section>

          <!-- Additional Requirements -->
          <section class="bg-gray-50 p-6 rounded-lg">
            <h2 class="text-2xl font-bold text-sea-900 mb-4">
              Application Requirements
            </h2>
            <ul class="space-y-3">
              <li class="flex gap-2">
                <svg
                  class="w-6 h-6 text-fire-600"
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
                <span>Pass the citizenship test (if 18-54 years old)</span>
              </li>
              <li class="flex gap-2">
                <svg
                  class="w-6 h-6 text-fire-600"
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
                <span>Provide income tax returns for 3 years</span>
              </li>
              <li class="flex gap-2">
                <svg
                  class="w-6 h-6 text-fire-600"
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
                <span>No criminal prohibitions</span>
              </li>
              <li class="flex gap-2">
                <svg
                  class="w-6 h-6 text-fire-600"
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
                <span>Declare intent to reside in Canada</span>
              </li>
            </ul>
          </section>
        </div>

        <!-- Right Column -->
        <div class="space-y-6">
          <!-- Services Section -->
          <section>
            <h2 class="text-2xl font-bold text-sea-900 mb-4">
              Our Citizenship Services
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
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold">Eligibility Assessment</h3>
                  <p class="text-sm text-gray-600">
                    Complete evaluation of your citizenship eligibility
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
                  <h3 class="font-semibold">Application Preparation</h3>
                  <p class="text-sm text-gray-600">
                    Full assistance with citizenship application forms and
                    documents
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
                  <h3 class="font-semibold">Test Preparation</h3>
                  <p class="text-sm text-gray-600">
                    Citizenship test study materials and practice sessions
                  </p>
                </div>
              </div>
            </div>
          </section>

          <!-- Process Timeline -->
          <section
            class="bg-white p-6 rounded-lg shadow-sm border-l-4 border-fire-600"
          >
            <h2 class="text-xl font-bold text-sea-900 mb-4">
              Application Process
            </h2>
            <ul class="space-y-3">
              <li class="flex gap-2">
                <span class="text-fire-600 font-semibold">1.</span>
                <span>Submit application and documents</span>
              </li>
              <li class="flex gap-2">
                <span class="text-fire-600 font-semibold">2.</span>
                <span>Take citizenship test (if required)</span>
              </li>
              <li class="flex gap-2">
                <span class="text-fire-600 font-semibold">3.</span>
                <span>Attend citizenship ceremony</span>
              </li>
              <li class="flex gap-2">
                <span class="text-fire-600 font-semibold">4.</span>
                <span>Receive citizenship certificate</span>
              </li>
            </ul>
          </section>

          <!-- CTA Section -->
          <div class="bg-fire-50 p-6 rounded-lg">
            <h3 class="font-bold text-fire-900 mb-2">
              Begin Your Journey to Citizenship
            </h3>
            <p class="text-fire-700 mb-4">
              Let us guide you through the citizenship application process
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
export class CitizenshipComponent {}
