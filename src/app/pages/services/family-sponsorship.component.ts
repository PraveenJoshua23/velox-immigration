import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-family-sponsorship',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="space-y-8">
      <!-- Hero Section -->
      <div class="bg-sea-900 text-white rounded-lg p-8">
        <h1 class="text-3xl font-bold mb-4">Family Sponsorship</h1>
        <p class="text-lg">
          Reunite with your loved ones in Canada through family sponsorship
        </p>
      </div>

      <!-- Main Content Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Left Column -->
        <div class="space-y-6">
          <!-- Sponsorship Categories -->
          <section>
            <h2 class="text-2xl font-bold text-sea-900 mb-4">
              Who Can You Sponsor?
            </h2>
            <div class="space-y-4">
              <div class="bg-white p-4 rounded-lg shadow">
                <h3 class="font-semibold text-fire-600">Spouse or Partner</h3>
                <p class="text-sm text-gray-600">
                  Legally married spouse, common-law or conjugal partner
                </p>
              </div>
              <div class="bg-white p-4 rounded-lg shadow">
                <h3 class="font-semibold text-fire-600">Dependent Children</h3>
                <p class="text-sm text-gray-600">
                  Children under 22 years old who don't have a spouse/partner
                </p>
              </div>
              <div class="bg-white p-4 rounded-lg shadow">
                <h3 class="font-semibold text-fire-600">
                  Parents & Grandparents
                </h3>
                <p class="text-sm text-gray-600">
                  Through the Parents and Grandparents Program (PGP)
                </p>
              </div>
            </div>
          </section>

          <!-- Sponsor Requirements -->
          <section class="bg-gray-50 p-6 rounded-lg">
            <h2 class="text-2xl font-bold text-sea-900 mb-4">
              Sponsor Requirements
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
                <span>Be a Canadian citizen or permanent resident</span>
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
                <span>Be 18 years of age or older</span>
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
                <span
                  >Meet minimum income requirements (for certain
                  categories)</span
                >
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
                <span>Sign an undertaking to provide financial support</span>
              </li>
            </ul>
          </section>
        </div>

        <!-- Right Column -->
        <div class="space-y-6">
          <!-- Our Services -->
          <section>
            <h2 class="text-2xl font-bold text-sea-900 mb-4">
              Our Sponsorship Services
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
                    Complete evaluation of sponsor and applicant eligibility
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
                    Full assistance with forms, documents, and submissions
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
                  <h3 class="font-semibold">Ongoing Support</h3>
                  <p class="text-sm text-gray-600">
                    Guidance throughout the sponsorship process
                  </p>
                </div>
              </div>
            </div>
          </section>

          <!-- Processing Times -->
          <section
            class="bg-white p-6 rounded-lg shadow-sm border-l-4 border-fire-600"
          >
            <h2 class="text-xl font-bold text-sea-900 mb-4">
              Processing Times
            </h2>
            <ul class="space-y-3">
              <li class="flex gap-2">
                <span class="text-fire-600 font-semibold">Spouse/Partner:</span>
                <span>12 months (standard)</span>
              </li>
              <li class="flex gap-2">
                <span class="text-fire-600 font-semibold"
                  >Dependent Children:</span
                >
                <span>12 months (standard)</span>
              </li>
              <li class="flex gap-2">
                <span class="text-fire-600 font-semibold"
                  >Parents/Grandparents:</span
                >
                <span>20-24 months</span>
              </li>
              <li class="text-sm text-gray-600 mt-2">
                *Processing times may vary based on circumstances
              </li>
            </ul>
          </section>

          <!-- CTA Section -->
          <div class="bg-fire-50 p-6 rounded-lg">
            <h3 class="font-bold text-fire-900 mb-2">
              Start Your Family Sponsorship
            </h3>
            <p class="text-fire-700 mb-4">
              Take the first step towards reuniting with your family in Canada
            </p>
            <button
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
export class FamilySponsorshipComponent {}
