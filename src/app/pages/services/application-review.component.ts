import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-application-review',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="space-y-8">
      <!-- Hero Section -->
      <div class="bg-sea-900 text-white rounded-lg p-8">
        <h1 class="text-3xl font-bold mb-4">Application Review Service</h1>
        <p class="text-lg">
          Expert review of your immigration application before submission
        </p>
      </div>

      <!-- Main Content Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Left Column -->
        <div class="space-y-6">
          <!-- Review Service Types -->
          <section>
            <h2 class="text-2xl font-bold text-sea-900 mb-4">
              Review Services
            </h2>
            <div class="space-y-4">
              <div class="bg-white p-4 rounded-lg shadow">
                <h3 class="font-semibold text-fire-600">Document Review</h3>
                <p class="text-sm text-gray-600">
                  Comprehensive review of all supporting documents and forms
                </p>
              </div>
              <div class="bg-white p-4 rounded-lg shadow">
                <h3 class="font-semibold text-fire-600">
                  Eligibility Assessment
                </h3>
                <p class="text-sm text-gray-600">
                  Evaluation of eligibility criteria and program requirements
                </p>
              </div>
              <div class="bg-white p-4 rounded-lg shadow">
                <h3 class="font-semibold text-fire-600">Quality Check</h3>
                <p class="text-sm text-gray-600">
                  Detailed review of application completeness and accuracy
                </p>
              </div>
            </div>
          </section>

          <!-- What We Check -->
          <section class="bg-gray-50 p-6 rounded-lg">
            <h2 class="text-2xl font-bold text-sea-900 mb-4">What We Check</h2>
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
                <span>Form completion and accuracy</span>
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
                <span>Supporting document requirements</span>
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
                <span>Document formatting and translation</span>
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
                <span>Program eligibility criteria</span>
              </li>
            </ul>
          </section>
        </div>

        <!-- Right Column -->
        <div class="space-y-6">
          <!-- Benefits Section -->
          <section>
            <h2 class="text-2xl font-bold text-sea-900 mb-4">
              Benefits of Review
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
                  <h3 class="font-semibold">Reduce Processing Delays</h3>
                  <p class="text-sm text-gray-600">
                    Minimize the risk of application returns or refusals
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
                  <h3 class="font-semibold">Expert Feedback</h3>
                  <p class="text-sm text-gray-600">
                    Receive detailed recommendations for improvement
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
                  <h3 class="font-semibold">Peace of Mind</h3>
                  <p class="text-sm text-gray-600">
                    Confidence in your application's completeness
                  </p>
                </div>
              </div>
            </div>
          </section>

          <!-- Review Process -->
          <section
            class="bg-white p-6 rounded-lg shadow-sm border-l-4 border-fire-600"
          >
            <h2 class="text-xl font-bold text-sea-900 mb-4">Review Process</h2>
            <ul class="space-y-3">
              <li class="flex gap-2">
                <span class="text-fire-600 font-semibold">1.</span>
                <span>Submit your application package for review</span>
              </li>
              <li class="flex gap-2">
                <span class="text-fire-600 font-semibold">2.</span>
                <span
                  >Receive detailed assessment within 3-5 business days</span
                >
              </li>
              <li class="flex gap-2">
                <span class="text-fire-600 font-semibold">3.</span>
                <span>Review recommendations and feedback</span>
              </li>
              <li class="flex gap-2">
                <span class="text-fire-600 font-semibold">4.</span>
                <span>Make necessary improvements</span>
              </li>
            </ul>
          </section>

          <!-- CTA Section -->
          <div class="bg-fire-50 p-6 rounded-lg">
            <h3 class="font-bold text-fire-900 mb-2">
              Ready for Expert Review?
            </h3>
            <p class="text-fire-700 mb-4">
              Ensure your application meets all requirements before submission
            </p>
            <button
              routerLink="/contact"
              class="bg-fire-600 text-white px-6 py-2 rounded-lg hover:bg-fire-700 transition-colors"
            >
              Book Review Service
            </button>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class ApplicationReviewComponent {}
