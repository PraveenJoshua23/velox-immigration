import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lmia',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="space-y-8">
      <div class="bg-sea-900 text-white rounded-lg p-8">
        <h1 class="text-3xl font-bold mb-4">
          Labour Market Impact Assessment (LMIA)
        </h1>
        <p class="text-lg">
          Essential document for employers hiring foreign workers
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="space-y-6">
          <section>
            <h2 class="text-2xl font-bold text-sea-900 mb-4">What is LMIA?</h2>
            <div class="bg-gray-50 p-6 rounded-lg">
              <p class="text-gray-700">
                A Labour Market Impact Assessment is a document that an employer
                in Canada may need to get before hiring a foreign worker. An
                LMIA will verify that there is a need for a foreign worker to
                fill the job and that no Canadian worker or permanent resident
                is available to do the job.
              </p>
            </div>
          </section>

          <section>
            <h2 class="text-2xl font-bold text-sea-900 mb-4">LMIA Process</h2>
            <div class="space-y-4">
              <div
                class="bg-white p-4 rounded-lg shadow-sm border-l-4 border-fire-600"
              >
                <h3 class="font-semibold">1. Job Advertisement</h3>
                <p class="text-sm text-gray-600">
                  Minimum 4-week recruitment period
                </p>
              </div>
              <div
                class="bg-white p-4 rounded-lg shadow-sm border-l-4 border-fire-600"
              >
                <h3 class="font-semibold">2. Application Submission</h3>
                <p class="text-sm text-gray-600">
                  Detailed documentation and forms
                </p>
              </div>
              <div
                class="bg-white p-4 rounded-lg shadow-sm border-l-4 border-fire-600"
              >
                <h3 class="font-semibold">3. Processing</h3>
                <p class="text-sm text-gray-600">
                  Government review and assessment
                </p>
              </div>
            </div>
          </section>
        </div>

        <div class="space-y-6">
          <section>
            <h2 class="text-2xl font-bold text-sea-900 mb-4">
              Our LMIA Services
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
                  <h3 class="font-semibold">Application Preparation</h3>
                  <p class="text-sm text-gray-600">
                    Complete LMIA application assistance
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
                  <h3 class="font-semibold">Recruitment Strategy</h3>
                  <p class="text-sm text-gray-600">
                    Guidance on meeting advertising requirements
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
                  <h3 class="font-semibold">Compliance Support</h3>
                  <p class="text-sm text-gray-600">
                    Help meeting employer obligations
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 class="text-2xl font-bold text-sea-900 mb-4">
              Processing Time & Fees
            </h2>
            <div class="bg-gray-50 p-6 rounded-lg space-y-4">
              <div class="flex justify-between items-center border-b pb-2">
                <span class="font-medium">Regular Processing</span>
                <span class="text-fire-600">8-10 weeks</span>
              </div>
              <div class="flex justify-between items-center border-b pb-2">
                <span class="font-medium">Global Talent Stream</span>
                <span class="text-fire-600">2 weeks</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="font-medium">Government Filing Fee</span>
                <span class="text-fire-600">$1,000 CAD</span>
              </div>
            </div>
          </section>

          <div class="bg-fire-50 p-6 rounded-lg">
            <h3 class="font-bold text-fire-900 mb-2">Need LMIA Support?</h3>
            <p class="text-fire-700 mb-4">
              Get expert guidance for your LMIA application
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
export class LMIAComponent {}
