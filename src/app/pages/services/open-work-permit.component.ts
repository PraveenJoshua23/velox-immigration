import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-open-work-permit',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="space-y-8">
      <!-- Hero Section -->
      <div
        class="bg-sea-900 text-white rounded-lg px-8 py-10 relative bg-cover bg-center"
        [style.backgroundImage]="'url(/assets/images/open-work-hero.png)'"
        style="min-height: 250px;"
      >
        <h1 class="text-3xl md:text-5xl mb-4">
          Open & Post-Graduation Work Permits
        </h1>
        <p class="text-lg">
          Your path to Canadian work experience—flexible, accessible, and fully
          supported.
        </p>
      </div>

      <!-- Overview Section -->
      <section class="bg-white p-6">
        <h2 class="text-2xl text-sea-900 mb-4">
          Work in Canada Without Job Restrictions
        </h2>
        <p class="text-gray-700">
          Whether you're a recent graduate or the spouse of an international
          student, open work permits offer the flexibility to work for any
          employer in Canada. At Velox Immigration, we guide you through the
          process of obtaining or extending your open or post-graduation work
          permit, helping you stay compliant and career-ready.
        </p>
      </section>

      <!-- Work Permit Extensions & Co-op Work Permits -->
      <section class="bg-gray-50 rounded-md p-6">
        <h2 class="text-2xl text-sea-900 mb-4">
          Work Permit Extensions & Co-op Work Permits
        </h2>
        <p class="text-gray-700">
          Continue working legally in Canada or gain experience through your
          academic program—without interruption.
        </p>
      </section>

      <!-- Hero Section from Document -->
      <section class="bg-white rounded-md p-6">
        <h2 class="text-2xl text-sea-900 mb-4">
          Stay Compliant. Keep Working. Move Forward.
        </h2>
        <p class="text-gray-700 mb-4">
          If your work permit is about to expire or you're a student needing a
          co-op work permit for your program, you need the right application,
          filed on time. At Velox Immigration, we help you maintain legal
          status, avoid disruptions, and stay focused on your career or
          education goals.
        </p>
        <div class="mt-6">
          <button
            routerLink="/book-your-appointment"
            class="bg-fire-600 text-white px-6 py-3 rounded-lg hover:bg-fire-700 transition-colors"
          >
            Apply for Your Extension or Co-op Permit Today
          </button>
        </div>
      </section>

      <!-- Who This Is For Section -->
      <section class="bg-gray-50 rounded-md p-6">
        <h2 class="text-2xl text-sea-900 mb-4">Who This Is For</h2>
        <p class="text-gray-700">This service is ideal for:</p>
        <ul class="py-3 space-y-2 list-disc pl-5 text-gray-700">
          <li>
            <span class="font-medium"
              >Foreign nationals whose employer-specific or open work permit is
              expiring</span
            >
          </li>
          <li>
            <span class="font-medium"
              >International students enrolled in programs that require co-op or
              internship placements</span
            >
          </li>
          <li>
            <span class="font-medium"
              >Workers looking to restore status after a work permit
              expires</span
            >
          </li>
          <li>
            <span class="font-medium"
              >Applicants transitioning between permits (e.g., PGWP to bridging
              work permit)</span
            >
          </li>
        </ul>
      </section>

      <!-- What We Offer Section -->
      <section class="bg-white rounded-md p-6">
        <h2 class="text-2xl text-sea-900 mb-4">What We Offer</h2>
        <p class="text-gray-700 mb-4">
          We provide personalized support for two key permit types:
        </p>

        <div class="space-y-6">
          <div>
            <h3 class="text-xl font-medium text-fire-600 mb-2">
              Work Permit Extensions
            </h3>
            <p class="text-gray-700">
              Whether you're on an open work permit, employer-specific permit,
              or PGWP, we assist with timely extensions to ensure your continued
              legal status. We review eligibility, handle all IRCC forms, and
              file your extension application before your current permit
              expires. If you're switching employers or roles, we guide you
              through the process of modifying your permit terms.
            </p>
            <p class="text-gray-700 mt-2">
              We also assist in <strong>status restoration</strong> if your
              permit has expired within the past 90 days.
            </p>
          </div>

          <div>
            <h3 class="text-xl font-medium text-fire-600 mb-2">
              Co-op Work Permits
            </h3>
            <p class="text-gray-700">
              If your academic program includes a mandatory work component, such
              as an internship or field placement, you must apply for a co-op
              work permit. This permit is free and must be approved before you
              begin your placement. We coordinate with your institution to
              gather the necessary documentation and ensure timely submission.
            </p>
          </div>
        </div>
      </section>

      <!-- What You Need to Apply Section -->
      <section class="bg-gray-50 rounded-md p-6">
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
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            ></path>
          </svg>
          <span class="mt-1">What You Need to Apply</span>
        </h2>

        <div class="space-y-6">
          <div>
            <h3 class="text-xl font-medium text-fire-600 mb-2">
              For Work Permit Extensions:
            </h3>
            <ul class="space-y-2 list-disc pl-5 text-gray-700">
              <li>A valid <strong>passport</strong></li>
              <li>Copy of your <strong>current work permit</strong></li>
              <li><strong>Job offer letter</strong> (if employer-specific)</li>
              <li>
                <strong>Pay stubs or proof of employment</strong> (for PGWP
                holders)
              </li>
              <li>
                <strong>Explanation letter</strong> (if changing employers or
                job duties)
              </li>
              <li>
                Proof of <strong>ongoing eligibility</strong> (e.g., PR file
                number for BOWP)
              </li>
            </ul>
          </div>

          <div>
            <h3 class="text-xl font-medium text-fire-600 mb-2">
              For Co-op Work Permits:
            </h3>
            <ul class="space-y-2 list-disc pl-5 text-gray-700">
              <li>
                <strong>Letter from your DLI</strong> confirming that the work
                component is essential
              </li>
              <li>Valid <strong>study permit</strong></li>
              <li>A valid <strong>passport</strong></li>
              <li>
                School's <strong>co-op/internship agreement</strong> (if
                applicable)
              </li>
            </ul>
          </div>
        </div>
        <p class="text-gray-700 mt-4">
          We'll provide a custom checklist based on your situation.
        </p>
      </section>

      <!-- How We Work Section -->
      <section class="bg-white rounded-md p-6">
        <h2 class="text-2xl text-sea-900 mb-4">How We Work</h2>

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
                guide you on writing effective explanations (if needed).
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
                We monitor your application status and assist with biometrics or
                additional document requests.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Common Scenarios Section -->
      <section class="bg-gray-50 rounded-md p-6">
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
        <ul class="py-3 space-y-2 list-disc pl-5 text-gray-700">
          <li>
            A PGWP holder who is continuing employment but has a permit expiring
            next month
          </li>
          <li>
            An international student ready to begin an internship but has no
            co-op work permit
          </li>
          <li>
            A worker whose permit expired 3 weeks ago and needs to restore
            status
          </li>
          <li>
            A professional changing jobs and needing a modified
            employer-specific permit
          </li>
        </ul>
      </section>

      <!-- FAQ Section with Accordion -->
      <section class=" bg-gray-50 rounded-md p-6">
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

        <div class="space-y-4">
          <!-- FAQ Item 1 -->
          <div class="border rounded-lg overflow-hidden">
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
          <div class="border rounded-lg overflow-hidden">
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
          <div class="border rounded-lg overflow-hidden">
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
          <div class="border rounded-lg overflow-hidden">
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

          <!-- FAQ Item 6 -->
          <div class="border rounded-lg overflow-hidden">
            <button
              (click)="toggleFaq(5)"
              class="w-full flex justify-between items-center p-4 text-left bg-white hover:bg-gray-50 transition-colors"
            >
              <span class="font-medium">What is the Processing Time?</span>
              <svg
                [class]="
                  'w-5 h-5 transition-transform ' +
                  (activeFaq() === 5 ? 'transform rotate-180' : '')
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
                (activeFaq() === 5 ? 'max-h-40' : 'max-h-0')
              "
            >
              <div class="p-4 border-t bg-gray-50">
                <p>
                  Processing times vary. Check
                  <a
                    href="https://www.canada.ca/en/immigration-refugees-citizenship/services/application/check-processing-times.html"
                    class="text-fire-600 hover:underline"
                    target="_blank"
                    >IRCC processing times</a
                  >
                  for current estimates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Ready to Begin Banner -->
      <section class="bg-fire-600 text-white rounded-lg p-8 my-8">
        <div class="flex flex-col md:flex-row items-center justify-between">
          <div class="mb-6 md:mb-0">
            <h2 class="text-2xl font-bold mb-2">
              Don't Let Your Status Expire
            </h2>
            <p class="text-lg font-light pr-4">
              Whether you need a renewal, a change, or a brand-new co-op permit,
              we'll help you stay compliant and employed.
            </p>
          </div>
          <div>
            <button
              routerLink="/book-your-appointment"
              class="bg-white text-fire-600 px-8 py-3 rounded-lg cursor-pointer font-medium hover:bg-gray-100 transition-colors shadow-lg"
            >
              Book a Consultation Today
            </button>
          </div>
        </div>
      </section>
    </div>
  `,
})
export class OpenWorkPermitComponent {
  activeFaq = signal(-1);

  toggleFaq(index: number) {
    this.activeFaq.update((current) => (current === index ? -1 : index));
  }
}
