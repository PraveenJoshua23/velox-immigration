import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-express-entry',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="space-y-8">
      <div class="bg-sea-900 text-white rounded-lg p-8">
        <h1 class="text-3xl font-bold mb-4">Express Entry</h1>
        <p class="text-lg">
          Fast-track pathway to Canadian permanent residence
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="space-y-6">
          <section>
            <h2 class="text-2xl font-bold text-sea-900 mb-4">
              Eligible Programs
            </h2>
            <div class="space-y-4">
              <div
                class="bg-white p-6 rounded-lg shadow-sm border-l-4 border-fire-600"
              >
                <h3 class="font-semibold">Federal Skilled Worker (FSW)</h3>
                <p class="text-sm text-gray-600 mt-2">
                  For skilled workers with foreign work experience
                </p>
                <ul class="mt-2 space-y-1 text-sm text-gray-600">
                  <li>• Minimum 1 year skilled work experience</li>
                  <li>• Language proficiency (CLB 7)</li>
                  <li>• Education assessment (ECA)</li>
                </ul>
              </div>

              <div
                class="bg-white p-6 rounded-lg shadow-sm border-l-4 border-fire-600"
              >
                <h3 class="font-semibold">Canadian Experience Class (CEC)</h3>
                <p class="text-sm text-gray-600 mt-2">
                  For those with Canadian work experience
                </p>
                <ul class="mt-2 space-y-1 text-sm text-gray-600">
                  <li>• 1 year Canadian work experience</li>
                  <li>
                    • Language proficiency (CLB 7 for NOC 0/A, CLB 5 for B)
                  </li>
                </ul>
              </div>

              <div
                class="bg-white p-6 rounded-lg shadow-sm border-l-4 border-fire-600"
              >
                <h3 class="font-semibold">Federal Skilled Trades (FST)</h3>
                <p class="text-sm text-gray-600 mt-2">
                  For qualified tradespersons
                </p>
                <ul class="mt-2 space-y-1 text-sm text-gray-600">
                  <li>• 2 years work experience in a skilled trade</li>
                  <li>• Language proficiency (CLB 5)</li>
                  <li>• Valid job offer or certification</li>
                </ul>
              </div>
            </div>
          </section>
        </div>

        <div class="space-y-6">
          <section>
            <h2 class="text-2xl font-bold text-sea-900 mb-4">
              CRS Score Factors
            </h2>
            <div class="bg-gray-50 p-6 rounded-lg">
              <div class="space-y-4">
                <div class="flex justify-between items-center border-b pb-2">
                  <span class="font-medium">Core Factors</span>
                  <span class="text-fire-600">up to 600 points</span>
                </div>
                <div class="flex justify-between items-center border-b pb-2">
                  <span class="font-medium">Spouse Factors</span>
                  <span class="text-fire-600">up to 40 points</span>
                </div>
                <div class="flex justify-between items-center border-b pb-2">
                  <span class="font-medium">Skill Transferability</span>
                  <span class="text-fire-600">up to 100 points</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="font-medium">Additional Points</span>
                  <span class="text-fire-600">up to 600 points</span>
                </div>
              </div>
            </div>
          </section>

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
                  <h3 class="font-semibold">Eligibility Assessment</h3>
                  <p class="text-sm text-gray-600">
                    Comprehensive evaluation of your profile
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
                  <h3 class="font-semibold">CRS Score Optimization</h3>
                  <p class="text-sm text-gray-600">
                    Strategies to improve your ranking
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
                    Complete application assistance
                  </p>
                </div>
              </div>
            </div>
          </section>

          <div class="bg-fire-50 p-6 rounded-lg">
            <h3 class="font-bold text-fire-900 mb-2">Get Started Today</h3>
            <p class="text-fire-700 mb-4">
              Let us help you navigate Express Entry
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
export class ExpressEntryComponent {}
