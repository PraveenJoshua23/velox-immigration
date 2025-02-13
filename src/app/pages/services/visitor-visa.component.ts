import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-visitor-visa',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="space-y-8">
      <div class="bg-sea-900 text-white rounded-lg p-8">
        <h1 class="text-3xl font-bold mb-4">Visitor Visa</h1>
        <p class="text-lg">
          Experience Canada as a visitor with a Temporary Resident Visa
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="space-y-6">
          <section>
            <h2 class="text-2xl font-bold text-sea-900 mb-4">
              Types of Visitor Visas
            </h2>
            <div class="bg-gray-50 p-6 rounded-lg space-y-4">
              <div class="border-b pb-4">
                <h3 class="font-semibold text-fire-600">Single Entry Visa</h3>
                <p class="text-sm text-gray-600">
                  Valid for one entry into Canada
                </p>
              </div>
              <div class="border-b pb-4">
                <h3 class="font-semibold text-fire-600">Multiple Entry Visa</h3>
                <p class="text-sm text-gray-600">
                  Enter Canada multiple times during the visa validity
                </p>
              </div>
              <div>
                <h3 class="font-semibold text-fire-600">Transit Visa</h3>
                <p class="text-sm text-gray-600">
                  Pass through Canada to reach another country
                </p>
              </div>
            </div>
          </section>

          <section>
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
                    d="M9 5l7 7-7 7"
                  />
                </svg>
                <span>Valid passport</span>
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
                    d="M9 5l7 7-7 7"
                  />
                </svg>
                <span>Proof of financial support</span>
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
                    d="M9 5l7 7-7 7"
                  />
                </svg>
                <span>Travel history</span>
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
                    d="M9 5l7 7-7 7"
                  />
                </svg>
                <span>Ties to home country</span>
              </li>
            </ul>
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
                  <h3 class="font-semibold">Application Review</h3>
                  <p class="text-sm text-gray-600">
                    Expert review of your visa application
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
                    Assistance with required documentation
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
                  <h3 class="font-semibold">Travel Planning</h3>
                  <p class="text-sm text-gray-600">
                    Guidance on travel arrangements
                  </p>
                </div>
              </div>
            </div>
          </section>

          <div class="bg-fire-50 p-6 rounded-lg">
            <h3 class="font-bold text-fire-900 mb-2">Start Your Journey</h3>
            <p class="text-fire-700 mb-4">
              Let us help you plan your visit to Canada
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
export class VisitorVisaComponent {}
