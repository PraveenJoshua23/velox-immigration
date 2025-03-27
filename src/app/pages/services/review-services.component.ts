import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-review-services',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="space-y-8">
      <!-- Hero Section -->
      <div
        class="bg-sea-900 text-white rounded-lg px-8 py-10 relative bg-cover bg-center"
        [style.backgroundImage]="'url(/assets/images/review-hero.png)'"
        style="min-height: 250px;"
      >
        <h1 class="text-3xl md:text-5xl mb-4">Review Services</h1>
        <p class="text-lg">
          Understand what went wrong. Fix what comes next. Get clarity, answers,
          and a path forward for your immigration file.
        </p>
      </div>

      <!-- Overview Section -->
      <section class="bg-white p-6 rounded-md">
        <h2 class="text-2xl text-sea-900 mb-4">Expert File Review Services</h2>
        <p class="text-gray-700">
          Immigration refusals, unclear eligibility, or complex IRCC requests
          can be overwhelming. Our review services help you understand the
          reason behind a decision, analyze what needs to change, and guide your
          next steps. Whether it's a GCMS notes review, NOC code verification, a
          procedural fairness letter (PFL), or past refusal, Velox Immigration
          gives your case the attention it deserves.
        </p>
      </section>

      <!-- Who We Help Section -->
      <section class="bg-gray-50 rounded-md p-6">
        <h2 class="text-2xl text-sea-900 mb-4">Who We Help</h2>
        <p class="text-gray-700 mb-4">This service is ideal for:</p>
        <ul class="space-y-3 text-gray-700">
          <li class="flex items-start gap-3">
            <div class="bg-fire-600 p-2 size-10 rounded-lg flex-shrink-0">
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
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <span>
              <span class="font-medium"
                >Applicants with a refused visa, work permit, or PR
                application</span
              >
            </span>
          </li>
          <li class="flex items-start gap-3">
            <div class="bg-fire-600 p-2 size-10 rounded-lg flex-shrink-0">
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
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <span>
              <span class="font-medium"
                >Clients who have received a Procedural Fairness Letter
                (PFL)</span
              >
            </span>
          </li>
          <li class="flex items-start gap-3">
            <div class="bg-fire-600 p-2 size-10 rounded-lg flex-shrink-0">
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
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                />
              </svg>
            </div>
            <span>
              <span class="font-medium"
                >Individuals unsure if their NOC code matches their actual job
                duties</span
              >
            </span>
          </li>
          <li class="flex items-start gap-3">
            <div class="bg-fire-600 p-2 size-10 rounded-lg flex-shrink-0">
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
                  d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <span>
              <span class="font-medium"
                >Anyone needing to request and interpret GCMS or CAIPS notes
                from IRCC</span
              >
            </span>
          </li>
          <li class="flex items-start gap-3">
            <div class="bg-fire-600 p-2 size-10 rounded-lg flex-shrink-0">
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
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
            </div>
            <span>
              <span class="font-medium"
                >People preparing to reapply or respond after a refusal</span
              >
            </span>
          </li>
        </ul>
      </section>

      <!-- Our Services Section -->
      <section class="bg-white rounded-md p-6">
        <h2 class="text-2xl text-sea-900 mb-4">Our Services</h2>
        <p class="text-gray-700 mb-6">
          We help you make sense of complex files and build a stronger case:
        </p>

        <div class="space-y-6">
          <div class="bg-gray-50 p-5 rounded-lg">
            <h3 class="text-xl font-medium text-fire-600 mb-2">
              GCMS Notes Request & Analysis
            </h3>
            <p class="text-gray-700">
              GCMS (Global Case Management System) notes are the official IRCC
              officer's remarks on your application. We submit the
              access-to-information request, retrieve your file, and provide a
              plain-language explanation of what went wrong—and how to fix it in
              your reapplication.
            </p>
          </div>

          <div class="bg-gray-50 p-5 rounded-lg">
            <h3 class="text-xl font-medium text-fire-600 mb-2">
              NOC Code Review & Guidance
            </h3>
            <p class="text-gray-700">
              Incorrect or mismatched NOC codes are a common reason for PR
              refusals. We help you choose and justify the correct National
              Occupation Classification (NOC) code based on your actual duties
              and responsibilities—not just your job title.
            </p>
          </div>

          <div class="bg-gray-50 p-5 rounded-lg">
            <h3 class="text-xl font-medium text-fire-600 mb-2">
              Procedural Fairness Letter (PFL) Responses
            </h3>
            <p class="text-gray-700">
              If IRCC has concerns about your admissibility, fraud,
              misrepresentation, or qualification, they may issue a PFL. We
              draft a detailed and legally sound response backed by evidence,
              clarification, and case law if necessary.
            </p>
          </div>

          <div class="bg-gray-50 p-5 rounded-lg">
            <h3 class="text-xl font-medium text-fire-600 mb-2">
              Refusal Review & Reapplication Strategy
            </h3>
            <p class="text-gray-700">
              A refusal isn't the end of the road. We analyze your decision
              letter, review the submitted application, and recommend whether to
              appeal, request reconsideration, or submit a stronger
              reapplication.
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
          Depending on the type of review service, you may need:
        </p>

        <ul class="space-y-2 list-disc pl-5 text-gray-700 mb-4">
          <li>
            <span class="font-medium">A copy of your refusal letter</span> or
            IRCC communication
          </li>
          <li>
            <span class="font-medium">Submitted application package</span> (or
            access credentials)
          </li>
          <li>
            <span class="font-medium">IRCC application number</span> or UCI
          </li>
          <li>
            <span class="font-medium">Current or proposed NOC code</span> and
            job duties
          </li>
          <li>
            <span class="font-medium">Any received PFL notice</span> and
            supporting documentation
          </li>
          <li>
            <span class="font-medium">Signed consent form</span> for GCMS access
            (IMM 5744)
          </li>
        </ul>

        <p class="text-gray-700">
          We guide you through gathering what's needed and offer clear timelines
          and next steps.
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
              <p class="font-medium">Initial File Intake</p>
              <p class="text-gray-600">
                We collect your refusal letter, application copy, PFL (if any),
                or relevant information.
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
              <p class="font-medium">Strategic Review & Notes Request</p>
              <p class="text-gray-600">
                We request GCMS notes (if needed) and review all available
                information in context.
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
              <p class="font-medium">Report & Consultation</p>
              <p class="text-gray-600">
                You receive a clear explanation of officer reasoning, gaps, and
                next steps—with a reapplication or response plan.
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
              <p class="font-medium">Document Drafting or Correction</p>
              <p class="text-gray-600">
                We help you draft your PFL reply, revise job duties for NOC, or
                prepare an improved application based on findings.
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
              d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
            ></path>
          </svg>
          Common Scenarios We Handle
        </h2>
        <div class="space-y-3 mt-4">
          <div
            class="bg-white p-4 rounded-lg shadow-sm border-l-4 border-fire-600"
          >
            <p class="text-gray-700">
              A client denied a visitor visa due to
              <span class="font-medium">insufficient ties to home country</span
              >, needing clarity
            </p>
          </div>
          <div
            class="bg-white p-4 rounded-lg shadow-sm border-l-4 border-fire-600"
          >
            <p class="text-gray-700">
              A PR applicant who used an incorrect NOC code and must revise
              their Express Entry profile
            </p>
          </div>
          <div
            class="bg-white p-4 rounded-lg shadow-sm border-l-4 border-fire-600"
          >
            <p class="text-gray-700">
              A worker accused of misrepresentation receiving a
              <span class="font-medium">PFL</span> from IRCC
            </p>
          </div>
          <div
            class="bg-white p-4 rounded-lg shadow-sm border-l-4 border-fire-600"
          >
            <p class="text-gray-700">
              A student reapplying for a study permit after receiving vague
              refusal reasons
            </p>
          </div>
          <div
            class="bg-white p-4 rounded-lg shadow-sm border-l-4 border-fire-600"
          >
            <p class="text-gray-700">
              A client preparing for judicial review who needs
              <span class="font-medium">GCMS analysis</span>
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
              <span class="font-medium">What are GCMS notes?</span>
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
                  GCMS (Global Case Management System) notes are internal IRCC
                  officer records. They reveal the real reasons for approval,
                  refusal, or delay.
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
                >Can I access GCMS notes on my own?</span
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
                  Only if you are a Canadian citizen or PR—or working with a
                  representative like us who can request them on your behalf.
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
                >Do PFLs mean a guaranteed refusal?</span
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
                  No. It's an opportunity to respond before a decision is
                  finalized. A strong reply can save your application.
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
                >Can a wrong NOC code really lead to refusal?</span
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
                  Yes. NOC mismatch is a major reason for Express Entry or PNP
                  refusal, especially if your job duties don't align.
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
                >Is it better to reapply or appeal?</span
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
                  It depends. We'll review your case to determine whether a
                  reapplication, reconsideration, or appeal is the best next
                  move.
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
              <span class="font-medium"
                >What is the processing time for GCMS?</span
              >
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
                  GCMS timelines are controlled by IRCC and ATIP offices. We
                  monitor every stage of the process on your behalf.
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
              Need a Second Opinion or Full Case Review?
            </h2>
            <p class="text-lg font-light pr-4">
              Don't guess what went wrong—get answers. Velox Immigration will
              help you decode your file, fix what's broken, and move forward
              with confidence.
            </p>
          </div>
          <div>
            <button
              routerLink="/book-your-appointment"
              class="bg-white text-fire-600 px-8 py-3 rounded-lg cursor-pointer font-medium hover:bg-gray-100 transition-colors shadow-lg"
            >
              Book a Review Consultation Now
            </button>
          </div>
        </div>
      </section>
    </div>
  `,
})
export class ReviewServicesComponent {
  activeFaq = signal(-1);

  toggleFaq(index: number) {
    this.activeFaq.update((current) => (current === index ? -1 : index));
  }
}
