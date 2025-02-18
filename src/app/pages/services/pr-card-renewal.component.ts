import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-pr-card-renewal',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="space-y-8">
      <!-- Hero Section -->
      <div class="bg-sea-900 text-white rounded-lg p-8">
        <h1 class="text-3xl font-bold mb-4">PR Card Renewal</h1>
        <p class="text-lg">
          Maintain your permanent resident status with timely card renewal
        </p>
      </div>

      <!-- Main Content Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Left Column -->
        <div class="space-y-6">
          <!-- Renewal Information -->
          <section>
            <h2 class="text-2xl font-bold text-sea-900 mb-4">
              Renewal Requirements
            </h2>
            <div class="space-y-4">
              <div class="bg-white p-4 rounded-lg shadow">
                <h3 class="font-semibold text-fire-600">
                  Residency Obligation
                </h3>
                <p class="text-sm text-gray-600">
                  Must have been physically present in Canada for at least 730
                  days in the past 5 years
                </p>
              </div>
              <div class="bg-white p-4 rounded-lg shadow">
                <h3 class="font-semibold text-fire-600">Valid Documentation</h3>
                <p class="text-sm text-gray-600">
                  Current or expired PR card, landing papers, passport photos
                </p>
              </div>
              <div class="bg-white p-4 rounded-lg shadow">
                <h3 class="font-semibold text-fire-600">Application Timing</h3>
                <p class="text-sm text-gray-600">
                  Apply at least 6 months before your current PR card expires
                </p>
              </div>
            </div>
          </section>

          <!-- Eligibility Criteria -->
          <section class="bg-gray-50 p-6 rounded-lg">
            <h2 class="text-2xl font-bold text-sea-900 mb-4">
              Required Documents
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
                <span>Completed PR Card renewal application form</span>
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
                <span>Two recent passport-style photographs</span>
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
                <span>Proof of residency in Canada</span>
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
                <span>Valid passport or travel document</span>
              </li>
            </ul>
          </section>
        </div>

        <!-- Right Column -->
        <div class="space-y-6">
          <!-- Services Section -->
          <section>
            <h2 class="text-2xl font-bold text-sea-900 mb-4">
              Our PR Card Services
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
                  <h3 class="font-semibold">Application Review</h3>
                  <p class="text-sm text-gray-600">
                    Thorough review of your renewal application and documents
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
                  <h3 class="font-semibold">Document Preparation</h3>
                  <p class="text-sm text-gray-600">
                    Assistance with gathering and organizing required documents
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
                  <h3 class="font-semibold">Residency Calculation</h3>
                  <p class="text-sm text-gray-600">
                    Detailed calculation of your physical presence in Canada
                  </p>
                </div>
              </div>
            </div>
          </section>

          <!-- Timeline Card -->
          <section
            class="bg-white p-6 rounded-lg shadow-sm border-l-4 border-fire-600"
          >
            <h2 class="text-xl font-bold text-sea-900 mb-4">
              Processing Timeline
            </h2>
            <ul class="space-y-3">
              <li class="flex gap-2">
                <span class="text-fire-600 font-semibold"
                  >Standard Processing:</span
                >
                <span>40-60 business days</span>
              </li>
              <li class="flex gap-2">
                <span class="text-fire-600 font-semibold"
                  >Urgent Processing:</span
                >
                <span>20-30 business days</span>
              </li>
              <li class="flex gap-2">
                <span class="text-fire-600 font-semibold"
                  >Express Processing:</span
                >
                <span>10-15 business days</span>
              </li>
            </ul>
          </section>

          <!-- CTA Section -->
          <div class="bg-fire-50 p-6 rounded-lg">
            <h3 class="font-bold text-fire-900 mb-2">
              Don't Risk Your PR Status
            </h3>
            <p class="text-fire-700 mb-4">
              Start your PR card renewal process today with expert guidance
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
export class PRCardRenewalComponent {}
