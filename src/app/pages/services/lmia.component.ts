import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-lmia',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="space-y-8">
      <!-- Hero Section -->
      <div
        class="bg-sea-900 text-white rounded-lg px-8 py-10 relative bg-cover bg-center"
        [style.backgroundImage]="'url(/assets/images/lmia-hero.png)'"
        style="min-height: 250px;"
      >
        <!-- <div class="absolute inset-0 bg-sea-900 bg-opacity-70 rounded-lg"></div> -->
        <div class="relative z-10">
          <h1 class="text-3xl md:text-5xl mb-4">
            LMIA & Employer-Based Work Permits
          </h1>
          <p class="text-lg">
            Bring your skills to the Canadian workforce with a job-specific work
            permit backed by a legitimate job offer.
          </p>
        </div>
      </div>

      <!-- Overview Section -->
      <section class="bg-white p-6">
        <h2 class="text-2xl text-sea-900 mb-4">
          Start Your Career in Canada—With a Valid Job Offer
        </h2>
        <p class="text-gray-700">
          Whether you're an employer looking to hire a foreign worker or a
          skilled applicant with a Canadian job offer, we help you secure the
          right work permit through Labour Market Impact Assessment (LMIA) or
          employer-specific programs. At Velox Immigration, we ensure your
          application is strong, compliant, and set up for success.
        </p>
        <div class="mt-6">
          <button
            routerLink="/book-your-appointment"
            class="bg-fire-600 text-white px-6 py-3 rounded-lg hover:bg-fire-700 transition-colors"
          >
            Book a Work Permit Consultation
          </button>
        </div>
      </section>

      <!-- Who We Help Section -->
      <section class="bg-gray-50 rounded-md p-6">
        <h2 class="text-2xl text-sea-900 mb-4">Who This Is For</h2>
        <p class="text-gray-700">This service is for:</p>
        <ul class="py-3 space-y-2 list-disc pl-5 text-gray-700">
          <li>
            <span class="font-medium">
              Foreign nationals with a Canadian job offer who need a
              closed/employer-specific work permit
            </span>
          </li>
          <li>
            <span class="font-medium">
              Canadian employers looking to hire foreign workers through the
              Temporary Foreign Worker Program (TFWP)
            </span>
          </li>
          <li>
            <span class="font-medium">
              LMIA-exempt job offers under International Mobility Programs (IMP)
              (e.g., intra-company transfers, trade agreements)
            </span>
          </li>
        </ul>
      </section>

      <!-- Our Services Section -->
      <section class="bg-white rounded-md p-6">
        <h2 class="text-2xl text-sea-900 mb-4">What We Offer</h2>
        <p class="text-gray-700 mb-4">
          Velox Immigration provides full-service support for both applicants
          and employers navigating LMIA or employer-specific work permit
          processes.
        </p>

        <div class="space-y-6">
          <div>
            <h3 class="text-xl font-medium text-fire-600 mb-2">
              LMIA-Based Work Permits
            </h3>
            <p class="text-gray-700">
              A Labour Market Impact Assessment (LMIA) is a document that
              Canadian employers must obtain to demonstrate that no Canadian
              worker is available to fill a specific position. We assist
              employers with drafting job advertisements, filing LMIA
              applications with Employment and Social Development Canada (ESDC),
              and preparing for employer compliance reviews.
            </p>
            <p class="text-gray-700 mt-2">
              Once the LMIA is approved, we help the foreign worker submit a
              complete work permit application.
            </p>
          </div>

          <div>
            <h3 class="text-xl font-medium text-fire-600 mb-2">
              LMIA-Exempt Employer-Specific Work Permits
            </h3>
            <p class="text-gray-700">
              Some employer-specific work permits do not require an LMIA under
              the International Mobility Program (IMP). These include:
            </p>
            <ul class="py-3 space-y-2 list-disc pl-5 text-gray-700">
              <li>Intra-company transferees</li>
              <li>Workers covered by trade agreements (e.g., CUSMA)</li>
              <li>Certain charitable or religious work permits</li>
              <li>French-speaking skilled workers outside Quebec</li>
            </ul>
            <p class="text-gray-700">
              We evaluate whether your offer qualifies for LMIA exemption and
              guide you through the Employer Portal and compliance obligations.
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
          What You Need to Apply
        </h2>
        <p class="text-gray-700 mb-4">
          To apply for an LMIA-based or employer-specific work permit, the
          applicant will generally need:
        </p>

        <ul class="space-y-2 list-disc pl-5 text-gray-700 mb-4">
          <li>
            A <strong>valid job offer</strong> supported by either an
            <strong>LMIA</strong> or an
            <strong>LMIA-exempt offer of employment</strong>
          </li>
          <li>
            A <strong>contract or employment letter</strong> outlining wages,
            duties, and conditions
          </li>
          <li>A valid <strong>passport</strong></li>
          <li>
            <strong>Employer compliance fee</strong> payment (for LMIA-exempt
            cases)
          </li>
          <li>
            Proof of qualifications (education, licenses, work experience)
          </li>
          <li>
            Any <strong>police certificates</strong>,
            <strong>biometrics</strong>, or <strong>medical exams</strong> if
            required
          </li>
        </ul>

        <p class="text-gray-700 font-medium mt-4">
          For employers, the LMIA process requires:
        </p>
        <ul class="space-y-2 list-disc pl-5 text-gray-700 mt-2">
          <li>Drafting a compliant job description</li>
          <li>Advertising on required platforms (minimum 4 weeks)</li>
          <li>Demonstrating efforts to hire Canadians</li>
          <li>Filing the correct LMIA stream (high-wage, low-wage, etc.)</li>
        </ul>
      </section>

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
        <p class="text-gray-700 mb-4">
          We work with both employers and workers to ensure complete and
          compliant submissions:
        </p>

        <div class="space-y-4">
          <div class="flex gap-3">
            <div
              class="bg-fire-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0"
            >
              1
            </div>
            <div>
              <p class="font-medium">Initial Strategy Session</p>
              <p class="text-gray-600">
                We assess whether an LMIA is needed or if an LMIA-exempt route
                is available.
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
              <p class="font-medium">Employer Support (if required)</p>
              <p class="text-gray-600">
                We help employers with job advertising, LMIA paperwork, wage
                verification, and compliance preparation.
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
              <p class="font-medium">Offer of Employment & Employer Portal</p>
              <p class="text-gray-600">
                For LMIA-exempt streams, we manage the Employer Portal
                submission and ensure fee compliance.
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
              <p class="font-medium">Work Permit Application Filing</p>
              <p class="text-gray-600">
                We prepare and submit the complete work permit application,
                supporting documents, and respond to IRCC requests.
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
              <p class="font-medium">Follow-Up & Support Until Decision</p>
              <p class="text-gray-600">
                We track your file, assist with biometrics, and provide guidance
                until a decision is received.
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
              d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
            ></path>
          </svg>
          Common Scenarios We Handle
        </h2>
        <ul class="space-y-2 list-disc pl-5 text-gray-700">
          <li>
            A Canadian employer struggling to navigate the LMIA process for
            hiring a chef, Nurse, Teacher, or caregiver
          </li>
          <li>
            A professional transferring to a Canadian branch of their company
            (intra-company transfer)
          </li>
          <li>
            A skilled worker from India with a valid job offer and no idea how
            to begin the permit process
          </li>
          <li>
            A business owner needing to prove recruitment efforts to get an LMIA
            approved
          </li>
        </ul>
      </section>

      <!-- Processing Times Section -->
      <!-- <section class="bg-white rounded-md p-6">
        <h2 class="text-2xl text-sea-900 mb-4">Processing Time & Fees</h2>
        <div class="overflow-x-auto">
          <table class="min-w-full bg-white border">
            <thead>
              <tr class="bg-gray-100">
                <th class="py-3 px-4 text-left border">Process Type</th>
                <th class="py-3 px-4 text-left border">Timeline</th>
                <th class="py-3 px-4 text-left border">Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="py-3 px-4 border">Regular LMIA Processing</td>
                <td class="py-3 px-4 border text-fire-600 font-medium">
                  8-10 weeks
                </td>
                <td class="py-3 px-4 border">
                  Standard processing for most positions
                </td>
              </tr>
              <tr>
                <td class="py-3 px-4 border">Global Talent Stream</td>
                <td class="py-3 px-4 border text-fire-600 font-medium">
                  2 weeks
                </td>
                <td class="py-3 px-4 border">
                  For eligible high-demand occupations
                </td>
              </tr>
              <tr>
                <td class="py-3 px-4 border">Work Permit Processing</td>
                <td class="py-3 px-4 border text-fire-600 font-medium">
                  Varies by country
                </td>
                <td class="py-3 px-4 border">After LMIA approval</td>
              </tr>
              <tr>
                <td class="py-3 px-4 border">Government LMIA Fee</td>
                <td class="py-3 px-4 border text-fire-600 font-medium">
                  $1,000 CAD
                </td>
                <td class="py-3 px-4 border">
                  Paid by employer (non-refundable)
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p class="text-sm italic text-gray-500 mt-3">
          *Processing times are estimates and may change. Visit IRCC and ESDC
          websites for current processing times.
        </p>
      </section> -->

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
              <span class="font-medium"
                >What's the difference between an open and employer-specific
                work permit?</span
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
                  An open work permit lets you work for any employer; an
                  employer-specific permit restricts you to one employer and
                  position.
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
                >Do all job offers require an LMIA?</span
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
                  No. Some are LMIA-exempt under the International Mobility
                  Program (IMP). We'll assess this for you.
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
              <span class="font-medium">How long is an LMIA valid for?</span>
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
                  Usually 6 months. You must apply for the work permit before it
                  expires.
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
                >Can I bring my family with me on a closed work permit?</span
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
                  Yes, in most cases your spouse may apply for an open work
                  permit and your children may study in Canada.
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
              <span class="font-medium">Can I change employers later?</span>
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
                  Not with an employer-specific permit. You'd need a new job
                  offer and, in most cases, a new work permit.
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
              Ready to Start Working in Canada?
            </h2>
            <p class="text-lg font-light pr-4">
              Whether you're an employer or a skilled worker, our team can help
              you navigate every step of the LMIA and work permit process with
              precision and care.
            </p>
          </div>
          <div>
            <button
              routerLink="/book-your-appointment"
              class="bg-white text-fire-600 px-8 py-3 rounded-lg cursor-pointer font-medium hover:bg-gray-100 transition-colors shadow-lg"
            >
              Book a Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  `,
})
export class LMIAComponent {
  activeFaq = signal(-1);

  toggleFaq(index: number) {
    this.activeFaq.update((current) => (current === index ? -1 : index));
  }
}
