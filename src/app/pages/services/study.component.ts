import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-study',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="space-y-8">
      <!-- Hero Section -->
      <div class="bg-sea-900 text-white rounded-lg p-8">
        <h1 class="text-3xl font-bold mb-4">Study in Canada</h1>
        <p class="text-lg">
          Start your academic journey in one of the world's most welcoming
          countries
        </p>
      </div>

      <!-- Main Content -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="space-y-6">
          <section>
            <h2 class="text-2xl font-bold text-sea-900 mb-4">
              Why Study in Canada?
            </h2>
            <ul class="space-y-3">
              <li class="flex gap-2 items-start">
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
                <span>World-class education at competitive tuition rates</span>
              </li>
              <li class="flex gap-2 items-start">
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
                <span>Post-graduation work opportunities</span>
              </li>
              <li class="flex gap-2 items-start">
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
                <span>Pathway to permanent residency</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 class="text-2xl font-bold text-sea-900 mb-4">Requirements</h2>
            <ul class="space-y-3">
              <li class="flex gap-2 items-start">
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
                    d="M9 5l7 7-7 7"
                  />
                </svg>
                <span
                  >Acceptance letter from a Designated Learning Institution
                  (DLI)</span
                >
              </li>
              <li class="flex gap-2 items-start">
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
                    d="M9 5l7 7-7 7"
                  />
                </svg>
                <span>Proof of financial support</span>
              </li>
              <li class="flex gap-2 items-start">
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
                    d="M9 5l7 7-7 7"
                  />
                </svg>
                <span>Language proficiency test results</span>
              </li>
            </ul>
          </section>
        </div>

        <div class="space-y-6">
          <section>
            <h2 class="text-2xl font-bold text-sea-900 mb-4">
              Our Services Include
            </h2>
            <div class="bg-gray-50 p-6 rounded-lg space-y-4">
              <div class="flex gap-4 items-start">
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
                  <h3 class="font-semibold">School Selection Guidance</h3>
                  <p class="text-sm text-gray-600">
                    Help choosing the right institution and program
                  </p>
                </div>
              </div>
              <div class="flex gap-4 items-start">
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
                    Complete assistance with study permit application
                  </p>
                </div>
              </div>
              <div class="flex gap-4 items-start">
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
                    Expert review and preparation of all required documents
                  </p>
                </div>
              </div>
            </div>
          </section>

          <div class="bg-fire-50 p-6 rounded-lg">
            <h3 class="font-bold text-fire-900 mb-2">Ready to Start?</h3>
            <p class="text-fire-700 mb-4">
              Book a consultation with our education experts today
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
export class StudyComponent {}
