import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-business-immigration',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="space-y-8">
      <div class="bg-sea-900 text-white rounded-lg p-8">
        <h1 class="text-3xl font-bold mb-4">Business Immigration</h1>
        <p class="text-lg">Invest and establish your business in Canada</p>
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
                <h3 class="font-semibold">Start-up Visa</h3>
                <ul class="mt-2 space-y-1 text-sm text-gray-600">
                  <li>• Support from designated organization</li>
                  <li>• Innovative business idea</li>
                  <li>• Language proficiency required</li>
                </ul>
              </div>

              <div
                class="bg-white p-6 rounded-lg shadow-sm border-l-4 border-fire-600"
              >
                <h3 class="font-semibold">Self-employed Program</h3>
                <ul class="mt-2 space-y-1 text-sm text-gray-600">
                  <li>• Cultural or athletic contribution</li>
                  <li>• Experience in relevant field</li>
                  <li>• Ability to be self-employed in Canada</li>
                </ul>
              </div>

              <div
                class="bg-white p-6 rounded-lg shadow-sm border-l-4 border-fire-600"
              >
                <h3 class="font-semibold">Provincial Business Programs</h3>
                <ul class="mt-2 space-y-1 text-sm text-gray-600">
                  <li>• Varies by province</li>
                  <li>• Investment requirements</li>
                  <li>• Business management experience</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 class="text-2xl font-bold text-sea-900 mb-4">
              Investment Requirements
            </h2>
            <div class="bg-gray-50 p-6 rounded-lg">
              <div class="space-y-4">
                <div class="flex justify-between items-center border-b pb-2">
                  <span class="font-medium">Start-up Visa</span>
                  <span class="text-fire-600">From $75,000 CAD</span>
                </div>
                <div class="flex justify-between items-center border-b pb-2">
                  <span class="font-medium">Provincial Programs</span>
                  <span class="text-fire-600">$150,000 - $800,000 CAD</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="font-medium">Personal Net Worth</span>
                  <span class="text-fire-600">Varies by program</span>
                </div>
              </div>
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
                  <h3 class="font-semibold">Business Plan Development</h3>
                  <p class="text-sm text-gray-600">
                    Professional business plan preparation
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
                  <h3 class="font-semibold">Market Research</h3>
                  <p class="text-sm text-gray-600">
                    Industry and location analysis
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
            <h2 class="text-2xl font-bold text-sea-900 mb-4">Key Benefits</h2>
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
                  <h3 class="font-semibold">Permanent Residency</h3>
                  <p class="text-sm text-gray-600">
                    Direct path to permanent residence
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
                  <h3 class="font-semibold">Family Inclusion</h3>
                  <p class="text-sm text-gray-600">
                    Include family in application
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
                  <h3 class="font-semibold">Business Freedom</h3>
                  <p class="text-sm text-gray-600">Operate your own business</p>
                </div>
              </div>
            </div>
          </section>

          <div class="bg-fire-50 p-6 rounded-lg">
            <h3 class="font-bold text-fire-900 mb-2">
              Start Your Business Journey
            </h3>
            <p class="text-fire-700 mb-4">
              Let us help you establish your business in Canada
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
export class BusinessImmigrationComponent {}
