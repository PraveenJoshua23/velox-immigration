import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="space-y-8">
      <!-- Hero Section -->
      <div
        class="bg-sea-900 text-white rounded-lg px-8 py-10 relative bg-cover bg-center"
        [style.backgroundImage]="'url(/assets/images/work-extension-hero.png)'"
        style="min-height: 250px;"
      >
        <h1 class="text-3xl md:text-5xl mb-4">
          Work Permit Extensions & Co-op Work Permits
        </h1>
        <p class="text-lg">
          Secure the right permit to begin or continue your studies in
          Canada—with expert support every step of the way.
        </p>
      </div>

      <!-- Overview Section -->
      <section class="bg-white p-6 ">
        <h2 class="text-2xl text-sea-900 mb-4">
          Stay Compliant. Keep Working. Move Forward.
        </h2>
        <p class="text-gray-700">
          If your work permit is about to expire or you're a student needing a
          co-op work permit for your program, you need the right application,
          filed on time. At Velox Immigration, we help you maintain legal
          status, avoid disruptions, and stay focused on your career or
          education goals.
        </p>
      </section>

      <!-- Work Permit Extensions & Co-op Work Permits Section (Based on the new document) -->
      <section class="bg-white p-6">
        <!-- Who This Is For Section -->
        <div class="bg-gray-50 p-6 rounded-lg mb-6">
          <h2 class="text-2xl  text-sea-900 mb-3">Who This Is For</h2>
          <p class="mb-2">This service is ideal for:</p>
          <ul class="list-disc pl-8 space-y-2 text-gray-700">
            <li>
              Foreign nationals whose
              <strong>employer-specific or open work permit is expiring</strong>
            </li>
            <li>
              International students enrolled in programs that require
              <strong>co-op or internship placements</strong>
            </li>
            <li>
              Workers looking to <strong>restore status</strong> after a work
              permit expires
            </li>
            <li>
              Applicants transitioning between permits (e.g., PGWP to bridging
              work permit)
            </li>
          </ul>
        </div>

        <!-- What We Offer Section -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div
            class="bg-white p-6 rounded-lg shadow-md border-l-4 border-fire-600"
          >
            <h2 class="text-2xl text-sea-900 mb-4">Work Permit Extensions</h2>

            <p class="text-gray-700 mb-4">
              Whether you're on an open work permit, employer-specific permit,
              or PGWP, we assist with timely extensions to ensure your continued
              legal status. We review eligibility, handle all IRCC forms, and
              file your extension application before your current permit
              expires.
            </p>
            <p class="text-gray-700">
              If you're switching employers or roles, we guide you through the
              process of modifying your permit terms. We also assist in
              <strong>status restoration</strong>
              if your permit has expired within the past 90 days.
            </p>
          </div>

          <div
            class="bg-white p-6 rounded-lg shadow-md border-l-4 border-fire-600"
          >
            <h2 class="text-2xl text-sea-900 mb-4">Co-op Work Permits</h2>

            <p class="text-gray-700">
              If your academic program includes a mandatory work component, such
              as an internship or field placement, you must apply for a co-op
              work permit. This permit is free and must be approved before you
              begin your placement. We coordinate with your institution to
              gather the necessary documentation and ensure timely submission.
            </p>
          </div>
        </div>

        <!-- What You Need to Apply Section -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div class="bg-gray-50 p-6 rounded-lg">
            <h3 class="text-xl text-sea-900 mb-4">
              What You Need for Work Permit Extensions
            </h3>

            <ul class="space-y-2 text-gray-700">
              <li class="flex items-start gap-2">
                <svg
                  class="w-5 h-5 text-fire-600 flex-shrink-0 mt-1"
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
                <span>A valid <strong>passport</strong></span>
              </li>
              <li class="flex items-start gap-2">
                <svg
                  class="w-5 h-5 text-fire-600 flex-shrink-0 mt-1"
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
                <span>Copy of your <strong>current work permit</strong></span>
              </li>
              <li class="flex items-start gap-2">
                <svg
                  class="w-5 h-5 text-fire-600 flex-shrink-0 mt-1"
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
                <span
                  ><strong>Job offer letter</strong> (if
                  employer-specific)</span
                >
              </li>
              <li class="flex items-start gap-2">
                <svg
                  class="w-5 h-5 text-fire-600 flex-shrink-0 mt-1"
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
                <span
                  ><strong>Pay stubs or proof of employment</strong> (for PGWP
                  holders)</span
                >
              </li>
              <li class="flex items-start gap-2">
                <svg
                  class="w-5 h-5 text-fire-600 flex-shrink-0 mt-1"
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
                <span
                  ><strong>Explanation letter</strong> (if changing employers or
                  job duties)</span
                >
              </li>
            </ul>
          </div>

          <div class="bg-gray-50 p-6 rounded-lg">
            <h3 class="text-xl text-sea-900 mb-4">
              What You Need for Co-op Work Permits
            </h3>

            <ul class="space-y-2 text-gray-700">
              <li class="flex items-start gap-2">
                <svg
                  class="w-5 h-5 text-fire-600 flex-shrink-0 mt-1"
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
                <span
                  ><strong>Letter from your DLI</strong> confirming that the
                  work component is essential</span
                >
              </li>
              <li class="flex items-start gap-2">
                <svg
                  class="w-5 h-5 text-fire-600 flex-shrink-0 mt-1"
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
                <span>Valid <strong>study permit</strong></span>
              </li>
              <li class="flex items-start gap-2">
                <svg
                  class="w-5 h-5 text-fire-600 flex-shrink-0 mt-1"
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
                <span>A valid <strong>passport</strong></span>
              </li>
              <li class="flex items-start gap-2">
                <svg
                  class="w-5 h-5 text-fire-600 flex-shrink-0 mt-1"
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
                <span
                  >School's <strong>co-op/internship agreement</strong> (if
                  applicable)</span
                >
              </li>
            </ul>
            <p class="mt-4 text-gray-700">
              We'll provide a custom checklist based on your situation.
            </p>
          </div>
        </div>

        <!-- How We Work Section -->
        <div class="bg-white p-6 rounded-lg mb-6">
          <h2 class="text-2xl text-sea-900 mb-4">
            <svg
              class="w-6 h-6 inline-block mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              ></path>
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              ></path>
            </svg>
            <span class="mt-1">How We Work</span>
          </h2>
          <div class="space-y-4">
            <div class="flex gap-3">
              <div
                class="bg-fire-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0"
              >
                1
              </div>
              <div>
                <p class="font-medium">Consultation & Permit Review</p>
                <p class="text-gray-600">
                  We assess your current permit and eligibility for extension or
                  co-op issuance.
                </p>
              </div>
            </div>
            <div class="flex gap-3">
              <div
                class="bg-fire-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0"
              >
                2
              </div>
              <div>
                <p class="font-medium">Document Collection & Strategy</p>
                <p class="text-gray-600">
                  We create a checklist, review all supporting documents, and
                  guide you on writing effective explanations.
                </p>
              </div>
            </div>
            <div class="flex gap-3">
              <div
                class="bg-fire-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0"
              >
                3
              </div>
              <div>
                <p class="font-medium">Application Preparation & Filing</p>
                <p class="text-gray-600">
                  We prepare and submit your IRCC application, ensuring accuracy
                  and completeness.
                </p>
              </div>
            </div>
            <div class="flex gap-3">
              <div
                class="bg-fire-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0"
              >
                4
              </div>
              <div>
                <p class="font-medium">Follow-Up & Status Monitoring</p>
                <p class="text-gray-600">
                  We monitor your application status and assist with biometrics
                  or additional document requests.
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Common Scenarios Section -->
        <div class="bg-gray-50 p-6 rounded-lg mb-6">
          <h2 class="flex items-center text-2xl text-sea-900 mb-4">
            <svg
              class="w-6 h-6 inline-block mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
              ></path>
            </svg>
            Common Scenarios We Handle
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="bg-white p-4 rounded border-l-4 border-fire-500">
              <p>
                A PGWP holder who is continuing employment but has a permit
                expiring next month
              </p>
            </div>
            <div class="bg-white p-4 rounded border-l-4 border-fire-500">
              <p>
                An international student ready to begin an internship but has no
                co-op work permit
              </p>
            </div>
            <div class="bg-white p-4 rounded border-l-4 border-fire-500">
              <p>
                A worker whose permit expired 3 weeks ago and needs to restore
                status
              </p>
            </div>
            <div class="bg-white p-4 rounded border-l-4 border-fire-500">
              <p>
                A professional changing jobs and needing a modified
                employer-specific permit
              </p>
            </div>
          </div>
        </div>

        <!-- FAQ Section -->
        <div class="bg-white p-6 rounded-lg mb-6">
          <h2 class="flex items-center text-2xl text-sea-900 mb-6">
            <svg
              class="w-6 h-6 inline-block mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            Frequently Asked Questions
          </h2>

          <!-- FAQ Item 1 -->
          <div class="border rounded-lg overflow-hidden mb-3">
            <button
              (click)="toggleFaq(0)"
              class="w-full flex justify-between items-center p-4 text-left bg-white hover:bg-gray-50 transition-colors"
            >
              <span class="font-medium"
                >Can I keep working while waiting for my extension?</span
              >
              <svg
                [class]="
                  'w-5 h-5 transition-transform ' +
                  (activeFaq() === 0 ? 'transform rotate-180' : '')
                "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              [class]="
                'overflow-hidden transition-all duration-300 ' +
                (activeFaq() === 0 ? 'max-h-40' : 'max-h-0')
              "
            >
              <div class="p-4 border-t bg-gray-50">
                <p>
                  Yes—if you applied before your permit expired, you're under
                  "maintained status" and can continue working under the same
                  conditions.
                </p>
              </div>
            </div>
          </div>

          <!-- FAQ Item 2 -->
          <div class="border rounded-lg overflow-hidden mb-3">
            <button
              (click)="toggleFaq(1)"
              class="w-full flex justify-between items-center p-4 text-left bg-white hover:bg-gray-50 transition-colors"
            >
              <span class="font-medium"
                >Do I need a co-op permit if my program includes unpaid
                work?</span
              >
              <svg
                [class]="
                  'w-5 h-5 transition-transform ' +
                  (activeFaq() === 1 ? 'transform rotate-180' : '')
                "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              [class]="
                'overflow-hidden transition-all duration-300 ' +
                (activeFaq() === 1 ? 'max-h-40' : 'max-h-0')
              "
            >
              <div class="p-4 border-t bg-gray-50">
                <p>
                  Yes. Even unpaid work as part of your program requires a valid
                  co-op work permit.
                </p>
              </div>
            </div>
          </div>

          <!-- FAQ Item 3 -->
          <div class="border rounded-lg overflow-hidden mb-3">
            <button
              (click)="toggleFaq(2)"
              class="w-full flex justify-between items-center p-4 text-left bg-white hover:bg-gray-50 transition-colors"
            >
              <span class="font-medium"
                >Can I switch jobs with the same permit?</span
              >
              <svg
                [class]="
                  'w-5 h-5 transition-transform ' +
                  (activeFaq() === 2 ? 'transform rotate-180' : '')
                "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              [class]="
                'overflow-hidden transition-all duration-300 ' +
                (activeFaq() === 2 ? 'max-h-40' : 'max-h-0')
              "
            >
              <div class="p-4 border-t bg-gray-50">
                <p>
                  Not on an employer-specific permit. You'll need to apply to
                  change the conditions of your work permit.
                </p>
              </div>
            </div>
          </div>

          <!-- FAQ Item 4 -->
          <div class="border rounded-lg overflow-hidden mb-3">
            <button
              (click)="toggleFaq(3)"
              class="w-full flex justify-between items-center p-4 text-left bg-white hover:bg-gray-50 transition-colors"
            >
              <span class="font-medium"
                >How early should I apply for an extension?</span
              >
              <svg
                [class]="
                  'w-5 h-5 transition-transform ' +
                  (activeFaq() === 3 ? 'transform rotate-180' : '')
                "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              [class]="
                'overflow-hidden transition-all duration-300 ' +
                (activeFaq() === 3 ? 'max-h-40' : 'max-h-0')
              "
            >
              <div class="p-4 border-t bg-gray-50">
                <p>
                  At least 30 days before your permit expires, but we recommend
                  sooner to avoid delays.
                </p>
              </div>
            </div>
          </div>

          <!-- FAQ Item 5 -->
          <div class="border rounded-lg overflow-hidden">
            <button
              (click)="toggleFaq(4)"
              class="w-full flex justify-between items-center p-4 text-left bg-white hover:bg-gray-50 transition-colors"
            >
              <span class="font-medium"
                >What if my permit already expired?</span
              >
              <svg
                [class]="
                  'w-5 h-5 transition-transform ' +
                  (activeFaq() === 4 ? 'transform rotate-180' : '')
                "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              [class]="
                'overflow-hidden transition-all duration-300 ' +
                (activeFaq() === 4 ? 'max-h-40' : 'max-h-0')
              "
            >
              <div class="p-4 border-t bg-gray-50">
                <p>
                  You may apply for restoration within 90 days. We can help act
                  fast to restore your legal status.
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- CTA Section -->
        <div class="bg-fire-50 p-6 rounded-lg">
          <h3 class="text-xl font-bold text-fire-900 mb-4">
            Don't Let Your Status Expire
          </h3>
          <p class="text-fire-700 mb-4">
            Whether you need a renewal, a change, or a brand-new co-op permit,
            we'll help you stay compliant and employed.
          </p>
          <button
            routerLink="/contact"
            class="bg-fire-600 text-white px-6 py-3 rounded-lg hover:bg-fire-700 transition-colors w-full md:w-auto"
          >
            Book a Consultation
          </button>
        </div>
      </section>
    </div>
  `,
})
export class WorkComponent {
  activeFaq = signal(-1);

  toggleFaq(index: number) {
    this.activeFaq.update((current) => (current === index ? -1 : index));
  }
}
