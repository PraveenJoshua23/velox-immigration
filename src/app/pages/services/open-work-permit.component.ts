import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ServiceHeaderComponent } from '../../components/service-header.component';

@Component({
  selector: 'app-open-work-permit',
  standalone: true,
  imports: [CommonModule, RouterModule, ServiceHeaderComponent],
  template: `
    <div class="space-y-8">
      <app-service-header
        title="Open & Post-Graduation Work Permits"
        description="Your path to Canadian work experience—flexible, accessible, and fully
          supported."
        backgroundImage="/assets/images/open-work-hero.png"
      />

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
        <div class="mt-6">
          <button
            routerLink="/book-your-appointment"
            class="bg-fire-600 text-white px-6 py-3 rounded-lg hover:bg-fire-700 transition-colors"
          >
            Start Your Work Permit Application Today
          </button>
        </div>
      </section>

      <!-- Who This Is For Section -->
      <section class="bg-gray-50 rounded-md p-6">
        <h2 class="text-2xl text-sea-900 mb-4">Who This Is For</h2>
        <p class="text-gray-700">This service is designed for:</p>
        <ul class="py-3 space-y-2 list-disc pl-5 text-gray-700">
          <li>
            <span class="font-medium">
              International graduates eligible for a Post-Graduation Work Permit
              (PGWP)
            </span>
          </li>
          <li>
            <span class="font-medium">
              Spouses or common-law partners of international students or
              workers
            </span>
          </li>
          <li>
            <span class="font-medium">
              Bridging Open Work Permit (BOWP) applicants awaiting permanent
              residency
            </span>
          </li>
          <li>
            <span class="font-medium">
              Individuals applying for Open Work Permits under special public
              policies
            </span>
          </li>
        </ul>
      </section>

      <!-- What We Offer Section -->
      <section class="bg-white rounded-md p-6">
        <h2 class="text-2xl text-sea-900 mb-4">What We Offer</h2>
        <p class="text-gray-700 mb-4">
          At Velox Immigration, we support you with the following:
        </p>

        <div class="space-y-6">
          <div>
            <h3 class="text-xl font-medium text-fire-600 mb-2">
              Post-Graduation Work Permits (PGWP)
            </h3>
            <p class="text-gray-700">
              Graduated from a Canadian DLI? You may be eligible for an open
              work permit valid up to three years. We help you determine
              eligibility based on your institution and program, ensure timely
              submission, and prepare supporting documents such as transcripts
              and completion letters.
            </p>
          </div>

          <div>
            <h3 class="text-xl font-medium text-fire-600 mb-2">
              Spousal Open Work Permits
            </h3>
            <p class="text-gray-700">
              If your spouse or partner is a full-time student or skilled worker
              in Canada, you may be eligible for an open work permit. We assess
              your relationship documentation, draft affidavits (if needed), and
              handle all IRCC forms and communications.
            </p>
          </div>

          <div>
            <h3 class="text-xl font-medium text-fire-600 mb-2">
              Bridging Open Work Permits (BOWP)
            </h3>
            <p class="text-gray-700">
              Already applied for permanent residence and your current work
              permit is expiring? A BOWP lets you keep working while awaiting a
              decision. We verify your PR file status and guide you through this
              transitional process to ensure you don't fall out of status.
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

        <p class="text-gray-700 mb-4">
          While document requirements vary by permit type, most applicants will
          need:
        </p>

        <ul class="space-y-2 list-disc pl-5 text-gray-700">
          <li>A valid <span class="font-medium">passport</span></li>
          <li>
            Proof of <span class="font-medium">eligibility</span> (e.g.,
            graduation letter, relationship documents, or PR file number)
          </li>
          <li><span class="font-medium">Digital photo</span></li>
          <li>
            <span class="font-medium">Proof of status</span> in Canada (if
            applying inland)
          </li>
          <li>
            Supporting documents such as transcripts, pay stubs, or proof of
            cohabitation
          </li>
          <li>
            Payment of the
            <span class="font-medium">open work permit fee</span> and
            <span class="font-medium">processing fee</span>
          </li>
        </ul>

        <p class="text-gray-700 mt-4">
          We'll provide a personalized document checklist and guide you
          step-by-step based on your category.
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
              <p class="font-medium">
                Initial Consultation & Category Assessment
              </p>
              <p class="text-gray-600">
                We identify the best open work permit route based on your
                current status and goals.
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
              <p class="font-medium">Document Support & Review</p>
              <p class="text-gray-600">
                From marriage certificates to graduation letters, we review all
                documents for accuracy.
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
              <p class="font-medium">Application Preparation & Submission</p>
              <p class="text-gray-600">
                We handle the online filing and monitor your IRCC account for
                updates or requests.
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
              <p class="font-medium">Post-Submission Support</p>
              <p class="text-gray-600">
                We assist with biometrics, medical exams, or any additional
                document requests until a final decision is issued.
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
            A PGWP applicant who studied at a non-eligible private college and
            needs help understanding options
          </li>
          <li>
            A spouse of a PGWP holder wanting to work and contribute to
            household income
          </li>
          <li>
            A graduate who missed the PGWP deadline and is looking at
            restoration or alternate permits
          </li>
          <li>
            A PR applicant in Express Entry needing a BOWP to stay employed
            during processing
          </li>
        </ul>
      </section>

      <!-- FAQ Section with Accordion -->
      <section class="bg-gray-50 rounded-md p-6">
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
              <span class="font-medium">How long is a PGWP valid for?</span>
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
                  It depends on the length of your study program. 8 months to 2
                  years = same duration. 2+ years = up to 3 years.
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
                >Can I apply for a PGWP from outside Canada?</span
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
                  Yes, if you meet all eligibility criteria and studied online
                  during COVID-era policies (check expiry of those exemptions).
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
              <span class="font-medium">Is my school eligible for a PGWP?</span>
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
                  Only graduates from eligible Designated Learning Institutions
                  (DLIs) qualify. We'll check your institution's status before
                  applying.
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
                >Can my spouse apply for a work permit if I'm on a PGWP?</span
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
                  Yes, if you are working in a TEER 0, 1, 2, or 3 occupation and
                  meet minimum income thresholds.
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
                >Can I work full-time while waiting for my PGWP?</span
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
                  If you applied while your study permit was still valid,
                  yes—you can work under maintained status until a decision is
                  made.
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
            <h2 class="text-2xl font-bold mb-2">Ready to Work in Canada?</h2>
            <p class="text-lg font-light pr-4">
              Whether you're graduating soon or applying as a spouse, let Velox
              Immigration help you secure the right open work permit and start
              your career in Canada.
            </p>
          </div>
          <div>
            <button
              routerLink="/book-your-appointment"
              class="bg-white text-fire-600 px-8 py-3 rounded-lg cursor-pointer font-medium hover:bg-gray-100 transition-colors shadow-lg"
            >
              Book Your Work Permit Consultation Today
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
