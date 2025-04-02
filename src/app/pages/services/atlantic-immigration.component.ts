import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ServiceHeaderComponent } from '../../components/service-header.component';

@Component({
  selector: 'app-atlantic-immigration',
  standalone: true,
  imports: [CommonModule, RouterModule, ServiceHeaderComponent],
  template: `
    <div class="space-y-8">
      <app-service-header
        title="Atlantic Immigration Program"
        description="Live and work in Eastern Canada—through a fast and employer-driven
          permanent residence pathway."
        backgroundImage="/assets/images/atlantic-immigration-hero.png"
      />

      <!-- Overview Section -->
      <section class="bg-white p-6 rounded-md">
        <h2 class="text-2xl text-sea-900 mb-4">
          Settle in Atlantic Canada with the Support of a Designated Employer
        </h2>
        <p class="text-gray-700">
          The Atlantic Immigration Program (AIP) offers a streamlined route to
          permanent residence for skilled workers and international graduates
          who want to live and work in Nova Scotia, New Brunswick, Prince Edward
          Island, or Newfoundland and Labrador. At Velox Immigration, we guide
          both applicants and employers through the AIP process—making it
          seamless, compliant, and successful.
        </p>
      </section>

      <!-- Who This Is For Section -->
      <section class="bg-gray-50 rounded-md p-6">
        <h2 class="text-2xl text-sea-900 mb-4">Who This Is For</h2>
        <p class="text-gray-700">This program is ideal for:</p>
        <ul class="py-3 space-y-2 list-disc pl-5 text-gray-700">
          <li>
            <span class="font-medium">
              Skilled foreign workers with a job offer from a designated
              Atlantic employer
            </span>
          </li>
          <li>
            <span class="font-medium">
              Recent international graduates of eligible Atlantic institutions
            </span>
          </li>
          <li>
            <span class="font-medium">
              Employers in Atlantic Canada looking to hire foreign talent for
              long-term positions
            </span>
          </li>
          <li>
            <span class="font-medium">
              Candidates seeking PR without needing a high CRS score in Express
              Entry
            </span>
          </li>
        </ul>
      </section>

      <!-- What We Offer Section -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <section class="bg-white rounded-md p-6">
          <h2 class="text-2xl text-sea-900 mb-4">What We Offer</h2>
          <p class="text-gray-700 mb-4">
            We support both employers and applicants at every stage of the AIP
            process:
          </p>

          <div class="space-y-6">
            <div>
              <h3 class="text-xl font-medium text-fire-600 mb-2">
                Applicant Support (Workers & Graduates)
              </h3>
              <p class="text-gray-700">
                We assess your eligibility, review your job offer, and guide you
                through the full permanent residence application under AIP.
                Whether you're in Canada or abroad, we ensure your application
                is complete, strategic, and aligned with IRCC requirements.
              </p>
            </div>

            <div>
              <h3 class="text-xl font-medium text-fire-600 mb-2">
                Employer Support (Designation & Hiring)
              </h3>
              <p class="text-gray-700">
                We help employers become designated under AIP and navigate their
                responsibilities in the process. This includes job matching,
                compliance letters, onboarding plans, and coordination with
                settlement service providers.
              </p>
            </div>

            <div>
              <h3 class="text-xl font-medium text-fire-600 mb-2">
                Settlement Planning & Coordination
              </h3>
              <p class="text-gray-700">
                A core part of AIP is submitting a personalized settlement plan.
                We connect applicants with approved providers, ensure the plan
                meets IRCC requirements, and assist with long-term integration
                guidance.
              </p>
            </div>
          </div>
        </section>

        <!-- Requirements Section -->
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
            To apply under the AIP, you must have:
          </p>

          <ul class="space-y-2 list-disc pl-5 text-gray-700 mb-4">
            <li>
              A full-time, <strong>non-seasonal job offer</strong> from a
              designated employer in Atlantic Canada
            </li>
            <li>
              A valid <strong>language test</strong> result (CLB 4 or higher)
            </li>
            <li>
              Proof of <strong>education</strong> (ECA required if completed
              outside Canada)
            </li>
            <li>
              Proof of <strong>funds</strong> (unless already working in Canada)
            </li>
            <li>
              An official <strong>settlement plan</strong> from an IRCC-approved
              provider
            </li>
            <li>
              An <strong>endorsement certificate</strong> from the province
            </li>
          </ul>

          <p class="text-gray-700 font-medium">For international graduates:</p>
          <ul class="space-y-2 list-disc pl-5 text-gray-700 mb-4">
            <li>
              You must have completed a <strong>2-year program</strong> at a
              publicly funded institution in one of the four Atlantic provinces,
              within the last 24 months.
            </li>
          </ul>

          <p class="text-gray-700">
            We'll provide a step-by-step checklist tailored to your specific AIP
            stream.
          </p>
        </section>
      </div>

      <!-- How We Work Section -->
      <section class="bg-white rounded-md p-6">
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
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          How We Work
        </h2>
        <p class="text-gray-700 mb-4">
          When you work with Velox Immigration, you get a streamlined,
          transparent process:
        </p>

        <div class="space-y-4">
          <div class="flex gap-3">
            <div
              class="bg-fire-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0"
            >
              1
            </div>
            <div>
              <p class="font-medium">Eligibility & Job Offer Review</p>
              <p class="text-gray-600">
                We assess whether you or your candidate qualifies for AIP based
                on job offer, experience, or graduate status.
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
              <p class="font-medium">Employer Designation & Coordination</p>
              <p class="text-gray-600">
                For employers, we help secure designation and ensure the job
                offer meets AIP requirements.
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
              <p class="font-medium">Settlement Plan Guidance</p>
              <p class="text-gray-600">
                We connect the applicant with an IRCC-approved provider and
                coordinate the plan's completion.
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
              <p class="font-medium">Endorsement Application</p>
              <p class="text-gray-600">
                We compile and submit the provincial endorsement application on
                your behalf.
              </p>
            </div>
          </div>

          <div class="flex gap-3">
            <div
              class="bg-fire-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0"
            >
              5
            </div>
            <div>
              <p class="font-medium">Permanent Residence Filing</p>
              <p class="text-gray-600">
                Once endorsed, we prepare your full PR application for
                submission to IRCC.
              </p>
            </div>
          </div>

          <div class="flex gap-3">
            <div
              class="bg-fire-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0"
            >
              6
            </div>
            <div>
              <p class="font-medium">Follow-Up & Landing Support</p>
              <p class="text-gray-600">
                We track the application status and guide you through landing
                and long-term settlement.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Common Scenarios Section -->
      <section class="bg-gray-50 rounded-md p-6">
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
              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          Common Scenarios We Handle
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div
            class="bg-white p-4 rounded-lg shadow-sm border-l-4 border-fire-600"
          >
            <p class="text-gray-700">
              An international graduate in New Brunswick with a job offer
              needing full PR support under AIP
            </p>
          </div>
          <div
            class="bg-white p-4 rounded-lg shadow-sm border-l-4 border-fire-600"
          >
            <p class="text-gray-700">
              A designated employer in Nova Scotia hiring skilled cooks and
              needing help with endorsements
            </p>
          </div>
          <div
            class="bg-white p-4 rounded-lg shadow-sm border-l-4 border-fire-600"
          >
            <p class="text-gray-700">
              A PR candidate with low CRS looking for a non-Express Entry
              immigration pathway
            </p>
          </div>
          <div
            class="bg-white p-4 rounded-lg shadow-sm border-l-4 border-fire-600"
          >
            <p class="text-gray-700">
              An applicant confused about whether they qualify as a skilled
              worker vs. graduate under AIP
            </p>
          </div>
        </div>
      </section>

      <!-- FAQ Section with Accordion -->
      <section class="bg-gray-50 rounded-md p-6">
        <h2 class="text-2xl text-sea-900 mb-6">
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
              <span class="font-medium">Do I need an LMIA for AIP?</span>
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
                  No, AIP is LMIA-exempt—but the employer must be designated
                  under the program.
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
              <span class="font-medium">Can I apply from outside Canada?</span>
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
                <p>Yes. AIP is open to both inland and overseas applicants.</p>
              </div>
            </div>
          </div>

          <!-- FAQ Item 3 -->
          <div class="border rounded-lg overflow-hidden">
            <button
              (click)="toggleFaq(2)"
              class="w-full flex justify-between items-center p-4 text-left bg-white hover:bg-gray-50 transition-colors"
            >
              <span class="font-medium">Is language testing required?</span>
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
                  Yes. You must demonstrate CLB 4 in English or French through
                  an approved test.
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
              <span class="font-medium">Can I bring my family with me?</span>
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
                  Absolutely. Spouses can apply for open work permits, and
                  children can apply for study permits.
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
              <span class="font-medium">How is AIP different from PNP?</span>
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
                  AIP is faster, LMIA-exempt, and includes a mandatory
                  settlement plan component. It's also employer-driven and not
                  based on a points system.
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
              <span class="font-medium">What is the processing time?</span>
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
                  Timelines may vary. See IRCC and provincial websites for
                  updated processing times.
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
              Start Your Atlantic Canada Journey Today
            </h2>
            <p class="text-lg font-light pr-4">
              Whether you're a worker, graduate, or employer, the Atlantic
              Immigration Program offers a supportive and fast-track route to
              permanent residency—with Velox Immigration as your trusted guide.
            </p>
          </div>
          <div>
            <button
              routerLink="/book-your-appointment"
              class="bg-white text-fire-600 px-8 py-3 rounded-lg cursor-pointer font-medium hover:bg-gray-100 transition-colors shadow-lg"
            >
              Book a consultation today
            </button>
          </div>
        </div>
      </section>
    </div>
  `,
})
export class AtlanticImmigrationComponent {
  activeFaq = signal(-1);

  toggleFaq(index: number) {
    this.activeFaq.update((current) => (current === index ? -1 : index));
  }
}
