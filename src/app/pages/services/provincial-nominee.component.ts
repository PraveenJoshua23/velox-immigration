import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-provincial-nominee',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="space-y-8">
      <div class="bg-sea-900 text-white rounded-lg p-8">
        <h1 class="text-3xl font-bold mb-4">
          Provincial Nominee Program (PNP)
        </h1>
        <p class="text-lg">Immigration pathways through Canadian provinces</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="space-y-6">
          <section>
            <h2 class="text-2xl font-bold text-sea-900 mb-4">
              Program Categories
            </h2>
            <div class="space-y-4">
              <div
                class="bg-white p-6 rounded-lg shadow-sm border-l-4 border-fire-600"
              >
                <h3 class="font-semibold">Skilled Worker Stream</h3>
                <p class="text-sm text-gray-600">
                  For professionals and skilled workers
                </p>
              </div>
              <div
                class="bg-white p-6 rounded-lg shadow-sm border-l-4 border-fire-600"
              >
                <h3 class="font-semibold">Business Stream</h3>
                <p class="text-sm text-gray-600">
                  For entrepreneurs and investors
                </p>
              </div>
              <div
                class="bg-white p-6 rounded-lg shadow-sm border-l-4 border-fire-600"
              >
                <h3 class="font-semibold">International Graduate Stream</h3>
                <p class="text-sm text-gray-600">
                  For graduates from Canadian institutions
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 class="text-2xl font-bold text-sea-900 mb-4">
              Popular Provincial Programs
            </h2>
            <div class="bg-gray-50 p-6 rounded-lg">
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
                  <span>Ontario Immigrant Nominee Program (OINP)</span>
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
                  <span>British Columbia PNP (BC PNP)</span>
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
                  <span>Alberta Advantage Immigration Program</span>
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
                  <h3 class="font-semibold">Province Selection</h3>
                  <p class="text-sm text-gray-600">
                    Find the best province matching your profile
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
                  <h3 class="font-semibold">Documentation Support</h3>
                  <p class="text-sm text-gray-600">
                    Complete application preparation
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
                  <h3 class="font-semibold">Nomination Process</h3>
                  <p class="text-sm text-gray-600">
                    Step-by-step guidance through nomination
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 class="text-2xl font-bold text-sea-900 mb-4">
              Processing Timeline
            </h2>
            <div class="bg-gray-50 p-6 rounded-lg">
              <div class="space-y-4">
                <div class="flex justify-between items-center border-b pb-2">
                  <span class="font-medium">Profile Assessment</span>
                  <span class="text-fire-600">1-2 weeks</span>
                </div>
                <div class="flex justify-between items-center border-b pb-2">
                  <span class="font-medium">Provincial Processing</span>
                  <span class="text-fire-600">3-6 months</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="font-medium">PR Processing</span>
                  <span class="text-fire-600">6-8 months</span>
                </div>
              </div>
            </div>
          </section>

          <div class="bg-fire-50 p-6 rounded-lg">
            <h3 class="font-bold text-fire-900 mb-2">Start Your PNP Journey</h3>
            <p class="text-fire-700 mb-4">
              Let us help you choose the right provincial program
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
export class ProvincialNomineeComponent {}
