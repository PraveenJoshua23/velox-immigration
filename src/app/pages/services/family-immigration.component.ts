import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-family-immigration',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="space-y-8">
      <div class="bg-sea-900 text-white rounded-lg p-8">
        <h1 class="text-3xl font-bold mb-4">Family Immigration</h1>
        <p class="text-lg">Reunite with your loved ones in Canada</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="space-y-6">
          <section>
            <h2 class="text-2xl font-bold text-sea-900 mb-4">
              Sponsorship Categories
            </h2>
            <div class="space-y-4">
              <div
                class="bg-white p-6 rounded-lg shadow-sm border-l-4 border-fire-600"
              >
                <h3 class="font-semibold">Spouse/Partner Sponsorship</h3>
                <ul class="mt-2 space-y-1 text-sm text-gray-600">
                  <li>• Married spouse</li>
                  <li>• Common-law partner</li>
                  <li>• Conjugal partner</li>
                </ul>
              </div>

              <div
                class="bg-white p-6 rounded-lg shadow-sm border-l-4 border-fire-600"
              >
                <h3 class="font-semibold">
                  Parent and Grandparent Sponsorship
                </h3>
                <ul class="mt-2 space-y-1 text-sm text-gray-600">
                  <li>• Annual intake program</li>
                  <li>• Super Visa option</li>
                </ul>
              </div>

              <div
                class="bg-white p-6 rounded-lg shadow-sm border-l-4 border-fire-600"
              >
                <h3 class="font-semibold">Dependent Children</h3>
                <ul class="mt-2 space-y-1 text-sm text-gray-600">
                  <li>• Under 22 years old</li>
                  <li>• Exceptions for students/dependents</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 class="text-2xl font-bold text-sea-900 mb-4">
              Sponsor Requirements
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
                  <span>Canadian citizen or permanent resident</span>
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
                  <span>18 years or older</span>
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
                  <span>Meet minimum income requirements</span>
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
                  <span>Sign undertaking agreement</span>
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
                  <h3 class="font-semibold">Eligibility Assessment</h3>
                  <p class="text-sm text-gray-600">
                    Evaluate sponsorship eligibility
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
                    Complete application assistance
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
                  <h3 class="font-semibold">Relationship Evidence</h3>
                  <p class="text-sm text-gray-600">
                    Help gathering required proof
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 class="text-2xl font-bold text-sea-900 mb-4">
              Processing Times
            </h2>
            <div class="bg-gray-50 p-6 rounded-lg">
              <div class="space-y-4">
                <div class="flex justify-between items-center border-b pb-2">
                  <span class="font-medium">Spouse/Partner Inside Canada</span>
                  <span class="text-fire-600">12 months</span>
                </div>
                <div class="flex justify-between items-center border-b pb-2">
                  <span class="font-medium">Spouse/Partner Outside Canada</span>
                  <span class="text-fire-600">12-16 months</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="font-medium">Parents and Grandparents</span>
                  <span class="text-fire-600">20-24 months</span>
                </div>
              </div>
            </div>
          </section>

          <div class="bg-fire-50 p-6 rounded-lg">
            <h3 class="font-bold text-fire-900 mb-2">Reunite Your Family</h3>
            <p class="text-fire-700 mb-4">
              Let us help bring your loved ones to Canada
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
export class FamilyImmigrationComponent {}
