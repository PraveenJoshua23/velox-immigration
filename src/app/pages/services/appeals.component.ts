import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-appeals-humanitarian',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="space-y-8">
      <!-- Hero Section -->
      <div class="bg-sea-900 text-white rounded-lg p-8">
        <h1 class="text-3xl font-bold mb-4">
          Appeals & Humanitarian Applications
        </h1>
        <p class="text-lg">
          Expert assistance with immigration appeals and humanitarian cases
        </p>
      </div>

      <!-- Main Content Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Left Column -->
        <div class="space-y-6">
          <!-- Appeal Types -->
          <section>
            <h2 class="text-2xl font-bold text-sea-900 mb-4">
              Types of Appeals
            </h2>
            <div class="space-y-4">
              <div class="bg-white p-4 rounded-lg shadow">
                <h3 class="font-semibold text-fire-600">Sponsorship Appeals</h3>
                <p class="text-sm text-gray-600">
                  Appeals against denied family sponsorship applications
                </p>
              </div>
              <div class="bg-white p-4 rounded-lg shadow">
                <h3 class="font-semibold text-fire-600">
                  Residency Obligations
                </h3>
                <p class="text-sm text-gray-600">
                  Appeals related to permanent residency status determination
                </p>
              </div>
              <div class="bg-white p-4 rounded-lg shadow">
                <h3 class="font-semibold text-fire-600">
                  Removal Order Appeals
                </h3>
                <p class="text-sm text-gray-600">
                  Appeals against deportation or removal orders
                </p>
              </div>
            </div>
          </section>

          <!-- Humanitarian Applications -->
          <section class="bg-gray-50 p-6 rounded-lg">
            <h2 class="text-2xl font-bold text-sea-900 mb-4">
              Humanitarian & Compassionate Applications
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
                <span>Establishment in Canada</span>
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
                <span>Ties to Canadian community</span>
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
                <span>Best interests of children affected</span>
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
                <span>Hardship if required to leave Canada</span>
              </li>
            </ul>
          </section>
        </div>

        <!-- Right Column -->
        <div class="space-y-6">
          <!-- Our Services -->
          <section>
            <h2 class="text-2xl font-bold text-sea-900 mb-4">Our Services</h2>
            <div class="bg-gray-50 p-6 rounded-lg space-y-4">
              <div class="flex gap-4">
                <div class="bg-fire-600 p-2 size-10 rounded-lg">
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
                  <h3 class="font-semibold">Case Assessment</h3>
                  <p class="text-sm text-gray-600">
                    Evaluation of appeal grounds and success probability
                  </p>
                </div>
              </div>
              <div class="flex gap-4">
                <div class="bg-fire-600 p-2 size-10 rounded-lg">
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
                  <h3 class="font-semibold">Documentation Preparation</h3>
                  <p class="text-sm text-gray-600">
                    Preparation of appeal documents and supporting evidence
                  </p>
                </div>
              </div>
              <div class="flex gap-4">
                <div class="bg-fire-600 p-2 size-10 rounded-lg">
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
                  <h3 class="font-semibold">Representation</h3>
                  <p class="text-sm text-gray-600">
                    Professional representation at appeal hearings
                  </p>
                </div>
              </div>
            </div>
          </section>

          <!-- Appeal Process -->
          <section
            class="bg-white p-6 rounded-lg shadow-sm border-l-4 border-fire-600"
          >
            <h2 class="text-xl font-bold text-sea-900 mb-4">Appeal Process</h2>
            <ul class="space-y-3">
              <li class="flex gap-2">
                <span class="text-fire-600 font-semibold">1.</span>
                <span>File Notice of Appeal (within 30 days)</span>
              </li>
              <li class="flex gap-2">
                <span class="text-fire-600 font-semibold">2.</span>
                <span>Prepare Appeal Record and submissions</span>
              </li>
              <li class="flex gap-2">
                <span class="text-fire-600 font-semibold">3.</span>
                <span>Attend hearing at Immigration Appeal Division</span>
              </li>
              <li class="flex gap-2">
                <span class="text-fire-600 font-semibold">4.</span>
                <span>Receive and act on appeal decision</span>
              </li>
            </ul>
          </section>

          <!-- CTA Section -->
          <div class="bg-fire-50 p-6 rounded-lg">
            <h3 class="font-bold text-fire-900 mb-2">
              Need Help with Your Appeal?
            </h3>
            <p class="text-fire-700 mb-4">
              Don't face the appeals process alone. Get expert guidance today.
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
export class AppealsHumanitarianComponent {}
