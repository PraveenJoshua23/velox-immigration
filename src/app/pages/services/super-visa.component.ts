import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-super-visa',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="space-y-8">
      <div class="bg-sea-900 text-white rounded-lg p-8">
        <h1 class="text-3xl font-bold mb-4">Parent/Grandparent Super Visa</h1>
        <p class="text-lg">
          Long-term multiple entry visa for family reunification
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="space-y-6">
          <section>
            <h2 class="text-2xl font-bold text-sea-900 mb-4">
              Super Visa Benefits
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
                  <h3 class="font-semibold">Extended Stay</h3>
                  <p class="text-sm text-gray-600">
                    Visit for up to 2 years at a time
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
                  <h3 class="font-semibold">Multiple Entry</h3>
                  <p class="text-sm text-gray-600">Valid for 10 years</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 class="text-2xl font-bold text-sea-900 mb-4">
              Eligibility Requirements
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
                <span
                  >Child or grandchild in Canada who meets minimum income
                  requirements</span
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
                    d="M9 5l7 7-7 7"
                  />
                </svg>
                <span>Medical examination</span>
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
                <span>Canadian medical insurance coverage</span>
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
                  <h3 class="font-semibold">Application Assistance</h3>
                  <p class="text-sm text-gray-600">
                    Complete support with super visa application
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
                  <h3 class="font-semibold">Insurance Guidance</h3>
                  <p class="text-sm text-gray-600">
                    Help finding suitable medical insurance
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
                  <h3 class="font-semibold">Document Review</h3>
                  <p class="text-sm text-gray-600">
                    Expert review of all required documentation
                  </p>
                </div>
              </div>
            </div>
          </section>

          <div class="bg-fire-50 p-6 rounded-lg">
            <h3 class="font-bold text-fire-900 mb-2">
              Reunite with Your Family
            </h3>
            <p class="text-fire-700 mb-4">
              Let us help you bring your parents or grandparents to Canada
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
export class SuperVisaComponent {}
