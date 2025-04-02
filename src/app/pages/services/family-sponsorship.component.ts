import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ServiceHeaderComponent } from '../../components/service-header.component';

@Component({
  selector: 'app-family-sponsorship',
  standalone: true,
  imports: [CommonModule, RouterModule, ServiceHeaderComponent],
  template: `
    <div class="space-y-8">
      <app-service-header
        title="Family Sponsorship"
        description="Reunite with your loved ones in Canada through the family sponsorship
          program—with expert support every step of the way."
        backgroundImage="/assets/images/family-hero.png"
      />

      <!-- Overview Section -->
      <section class="bg-white p-6 rounded-md">
        <h2 class="text-2xl text-sea-900 mb-4">
          Bring Your Family Home to Canada
        </h2>
        <p class="text-gray-700">
          Canada's immigration system prioritizes family reunification—and the
          family sponsorship program allows Canadian citizens and permanent
          residents to sponsor their spouse, partner, children, parents, or
          grandparents for permanent residence. At Velox Immigration, we support
          you through every step of the sponsorship process, making sure it's
          complete, compliant, and compassionate.
        </p>
      </section>

      <!-- Who We Help Section -->
      <section class="bg-gray-50 rounded-md p-6">
        <h2 class="text-2xl text-sea-900 mb-4">Who This Is For</h2>
        <p class="text-gray-700">
          You may be eligible for family sponsorship if you are:
        </p>
        <ul class="py-3 space-y-2 list-disc pl-5 text-gray-700">
          <li>
            <span class="font-medium"
              >A Canadian citizen or permanent resident looking to sponsor your
              spouse or partner</span
            >
          </li>
          <li>
            <span class="font-medium"
              >A parent or grandparent seeking to reunite with your children or
              grandchildren</span
            >
          </li>
          <li>
            <span class="font-medium"
              >A dependent child of a Canadian or permanent resident</span
            >
          </li>
          <li>
            <span class="font-medium"
              >A spouse or common-law partner applying for inland or overseas
              sponsorship</span
            >
          </li>
        </ul>
      </section>

      <!-- Our Services Section -->
      <section class="bg-white rounded-md p-6">
        <h2 class="text-2xl text-sea-900 mb-4">What We Offer</h2>
        <p class="text-gray-700 mb-4">
          We assist with a wide range of sponsorship categories:
        </p>

        <div class="space-y-6">
          <div>
            <h3 class="text-xl font-medium text-fire-600 mb-2">
              Spouse/Common-Law/Conjugal Sponsorship
            </h3>
            <p class="text-gray-700">
              We help Canadian citizens and PRs sponsor their spouse or partner,
              whether they're in Canada (inland sponsorship) or abroad (outland
              sponsorship). Our service includes application prep, relationship
              documentation guidance, and handling complex cases like previous
              marriages, lack of documentation, or cohabitation issues.
            </p>
          </div>

          <div>
            <h3 class="text-xl font-medium text-fire-600 mb-2">
              Dependent Child Sponsorship
            </h3>
            <p class="text-gray-700">
              We help parents bring their biological or adopted children to
              Canada as permanent residents. We guide you through custody
              documents, proof of dependency, and medical/identity paperwork.
            </p>
          </div>

          <div>
            <h3 class="text-xl font-medium text-fire-600 mb-2">
              Parents & Grandparents Sponsorship (PGP)
            </h3>
            <p class="text-gray-700">
              If you've been selected through the PGP lottery, we'll help you
              complete and submit a strong sponsorship and permanent residence
              application. We also assist with Super Visa applications for
              long-term visits when sponsorship isn't immediately available.
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
          Each sponsorship case is different, but typical requirements include:
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 class="font-semibold text-sea-900 mb-3">For the Sponsor:</h3>
            <ul class="space-y-2 list-disc pl-5 text-gray-700">
              <li>
                Proof of
                <span class="font-medium"
                  >Canadian citizenship or PR status</span
                >
              </li>
              <li>
                A signed
                <span class="font-medium">sponsorship undertaking</span> to
                support the family member
              </li>
              <li>
                Proof of <span class="font-medium">income</span> (for PGP)
              </li>
              <li>
                Completed
                <span class="font-medium">sponsorship agreement and forms</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 class="font-semibold text-sea-900 mb-3">
              For the Sponsored Person:
            </h3>
            <ul class="space-y-2 list-disc pl-5 text-gray-700">
              <li>Valid <span class="font-medium">passport</span></li>
              <li>
                <span class="font-medium">Medical exam</span> and
                <span class="font-medium">police certificates</span>
              </li>
              <li>
                Civil documents (e.g., marriage certificate, birth certificate)
              </li>
              <li>
                Photos and documents proving the
                <span class="font-medium"
                  >genuine nature of the relationship</span
                >
              </li>
            </ul>
          </div>
        </div>

        <p class="text-gray-700 mt-4">
          We help you build a strong and well-documented application package
          that meets IRCC expectations.
        </p>
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
              <p class="font-medium">Eligibility & Relationship Assessment</p>
              <p class="text-gray-600">
                We confirm that you meet all sponsorship and relationship
                requirements and advise on inland vs. outland processing.
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
              <p class="font-medium">Document Gathering & Review</p>
              <p class="text-gray-600">
                We guide you on collecting relationship proofs, income
                documentation, and all supporting materials.
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
                We complete the required forms, draft a personalized
                relationship narrative (if needed), and submit your sponsorship
                package.
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
              <p class="font-medium">Ongoing File Monitoring</p>
              <p class="text-gray-600">
                We assist with biometric appointments, medical exams, and any
                additional IRCC document requests until a final decision is
                reached.
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
            ></path>
          </svg>
          Common Scenarios We Handle
        </h2>

        <div class="bg-white p-6 rounded-lg space-y-4">
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
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            </div>
            <div>
              <h3 class="font-semibold">Overseas Spouse Sponsorship</h3>
              <p class="text-sm text-gray-600">
                A Canadian citizen sponsoring a spouse living overseas
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
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <div>
              <h3 class="font-semibold">Common-Law Relationship Proof</h3>
              <p class="text-sm text-gray-600">
                A common-law couple unsure how to prove 12 months of
                cohabitation
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
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            </div>
            <div>
              <h3 class="font-semibold">Child Custody Sponsorship</h3>
              <p class="text-sm text-gray-600">
                A parent sponsoring a child from a previous relationship
                involving custody documents
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
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <div>
              <h3 class="font-semibold">Parent Sponsorship Requirements</h3>
              <p class="text-sm text-gray-600">
                A family looking to sponsor elderly parents but unsure about
                income requirements
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
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div>
              <h3 class="font-semibold">Inland Sponsorship with Work Permit</h3>
              <p class="text-sm text-gray-600">
                A couple seeking inland sponsorship with an open work permit
                option
              </p>
            </div>
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
              <span class="font-medium"
                >Can I sponsor my spouse if I'm living outside Canada?</span
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
                  Only if you are a Canadian citizen (not a permanent resident)
                  and show intent to return once PR is granted.
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
                >Can my spouse work while the inland sponsorship is in
                process?</span
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
                  Yes. Inland spousal applicants may apply for an open work
                  permit while their sponsorship is being processed.
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
                >What if I don't meet the income requirement for PGP?</span
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
                  You may be ineligible for PGP but can apply for a Super Visa,
                  which allows long-term visits without the same income bar.
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
              <span class="font-medium">Can I sponsor my siblings?</span>
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
                  Generally, no. There are limited exceptions, such as orphaned
                  siblings under 18, or if you have no other family in Canada.
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
              <span class="font-medium">What will be the processing time?</span>
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
                  Processing times vary by country of residence and case
                  complexity. Check
                  <a
                    href="https://www.canada.ca/en/immigration-refugees-citizenship/services/application/check-processing-times.html"
                    class="text-fire-600 underline"
                    >IRCC processing times</a
                  >
                  for updates.
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
              Reunite with Your Family—Start Today
            </h2>
            <p class="text-lg font-light pr-4">
              Whether you're sponsoring your spouse, child, or parent, we'll
              guide you with compassion, clarity, and legal precision.
            </p>
          </div>
          <div>
            <button
              routerLink="/book-your-appointment"
              class="bg-white text-fire-600 px-8 py-3 rounded-lg cursor-pointer font-medium hover:bg-gray-100 transition-colors shadow-lg"
            >
              Schedule Your Family Sponsorship Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  `,
})
export class FamilySponsorshipComponent {
  activeFaq = signal(-1);

  toggleFaq(index: number) {
    this.activeFaq.update((current) => (current === index ? -1 : index));
  }
}
