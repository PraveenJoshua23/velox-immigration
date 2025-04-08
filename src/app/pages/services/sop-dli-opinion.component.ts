import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ServiceHeaderComponent } from '../../components/service-header.component';

@Component({
  selector: 'app-sop-dli-opinion',
  standalone: true,
  imports: [CommonModule, RouterModule, ServiceHeaderComponent],
  template: `
    <div class="space-y-8">
      <app-service-header
        title="SOP Writing, DLI Change & Second Opinion"
        description=" Clarity. Compliance. Confidence—when you need it most."
        backgroundImage="/assets/images/writing-hero.png"
      />

      <!-- Overview Section -->
      <section class="bg-white p-6 rounded-lg">
        <h2 class="text-2xl text-sea-900 mb-4">
          Your Application Deserves a Strong Foundation
        </h2>
        <p class="text-gray-700">
          Whether you're crafting a Statement of Purpose (SOP), considering a
          change in your Designated Learning Institution (DLI), or seeking a
          professional second opinion before submitting, we provide clear,
          honest, and strategic guidance to give your application the best
          chance of success.
        </p>
        <div class="mt-4">
          <button
            routerLink="/book-your-appointment"
            class="bg-fire-600 text-white px-6 py-2 rounded-lg hover:bg-fire-700 transition-colors"
          >
            Book a Personalized Review or SOP Session
          </button>
        </div>
      </section>

      <!-- Who We Help Section -->
      <section class="bg-gray-50 rounded-lg p-6">
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
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            ></path>
          </svg>
          Who This Is For
        </h2>
        <p class="text-gray-700 mb-3">This service is ideal for:</p>
        <ul class="space-y-2 list-disc pl-5 text-gray-700">
          <li>
            <span class="font-medium"
              >Study permit applicants needing a professionally written
              SOP</span
            >
          </li>
          <li>
            <span class="font-medium"
              >International students considering a transfer to another
              DLI</span
            >
          </li>
          <li>
            <span class="font-medium"
              >Clients who've prepared their own file but want a second opinion
              before submitting</span
            >
          </li>
          <li>
            <span class="font-medium"
              >Individuals who've been refused before and want to avoid making
              the same mistake</span
            >
          </li>
        </ul>
      </section>

      <!-- Our Services Section -->
      <section class="bg-white rounded-lg p-6">
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
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
            ></path>
          </svg>
          What We Offer
        </h2>
        <p class="text-gray-700 mb-4">
          Our focus is on getting your story, strategy, and documents aligned
          with IRCC expectations—before it's too late.
        </p>

        <div class="space-y-6">
          <div>
            <h3 class="text-xl font-medium text-fire-600 mb-2">
              SOP Writing & Editing
            </h3>
            <p class="text-gray-700 mb-2">
              A well-crafted Statement of Purpose is critical for study permit
              approval. We write compelling, personalized SOPs that explain your
              study goals, background, and intentions in Canada, while
              addressing past refusals, gaps in studies, or non-traditional
              profiles.
            </p>
            <p class="text-gray-700 font-medium mb-2">Includes:</p>
            <ul class="list-disc pl-5 text-gray-700 space-y-1">
              <li>1-on-1 interview to understand your story</li>
              <li>Professionally written or edited SOP</li>
              <li>
                Highlighting career goals, education, financials, and return
                plans
              </li>
              <li>Optional revision based on feedback or prior refusal</li>
            </ul>
          </div>

          <div>
            <h3 class="text-xl font-medium text-fire-600 mb-2">
              DLI Change Guidance
            </h3>
            <p class="text-gray-700 mb-2">
              Switching institutions? We guide you through the legal steps for
              DLI change reporting, ensuring you remain in compliance with IRCC
              requirements and avoid putting your status at risk.
            </p>
            <p class="text-gray-700 font-medium mb-2">Includes:</p>
            <ul class="list-disc pl-5 text-gray-700 space-y-1">
              <li>Step-by-step guidance for IRCC portal update</li>
              <li>Advice on eligibility and study permit implications</li>
              <li>
                Help communicating with your current and new institution (if
                needed)
              </li>
            </ul>
          </div>

          <div>
            <h3 class="text-xl font-medium text-fire-600 mb-2">
              Second Opinion on Applications
            </h3>
            <p class="text-gray-700 mb-2">
              Not sure if your file is strong enough? Let us take a final look.
              We review your full draft (including forms, letters, and
              supporting documents), identify red flags, and recommend
              corrections before submission.
            </p>
            <p class="text-gray-700 font-medium mb-2">Includes:</p>
            <ul class="list-disc pl-5 text-gray-700 space-y-1">
              <li>Detailed feedback on strengths and risks</li>
              <li>Practical recommendations to improve approval chances</li>
              <li>Optional checklist and edit suggestions</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- What You Need to Apply Section -->
      <section class="bg-gray-50 rounded-lg p-6">
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
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            ></path>
          </svg>
          What You Need to Apply
        </h2>
        <p class="text-gray-700 mb-3">
          Depending on your situation, we may need:
        </p>
        <ul class="space-y-2 list-disc pl-5 text-gray-700">
          <li>
            Draft SOP (if already written) or basic background for SOP writing
          </li>
          <li>
            Your <strong>Letter of Acceptance (LOA)</strong> and academic
            transcripts
          </li>
          <li>Immigration history, prior refusals, or travel history</li>
          <li>Draft IRCC forms or document packages (for second opinion)</li>
          <li>Student portal access for DLI change (if applicable)</li>
        </ul>
        <p class="text-gray-700 mt-3">
          We'll tailor a checklist and approach based on your needs.
        </p>
      </section>

      <!-- How We Work Section -->
      <section class="bg-gray-50 rounded-lg p-6">
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

        <div class="space-y-4 mt-4">
          <div class="flex gap-3">
            <div
              class="bg-fire-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0"
            >
              1
            </div>
            <div>
              <p class="font-medium">Initial Consultation</p>
              <p class="text-gray-600">
                We discuss your goals, current situation, and identify the right
                service or combination.
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
              <p class="font-medium">Review & Strategy</p>
              <p class="text-gray-600">
                For SOPs, we draft or improve your content. For second opinions,
                we review your file thoroughly. For DLI changes, we guide your
                steps and ensure compliance.
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
              <p class="font-medium">Delivery & Feedback</p>
              <p class="text-gray-600">
                We provide your final SOP, review notes, or compliance
                instructions. Optional revisions or follow-up available as
                needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Common Scenarios Section -->
      <section class="bg-white rounded-lg p-6">
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

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div class="bg-gray-50 p-4 rounded-md">
            <div class="flex items-center mb-2">
              <div class="bg-fire-600 p-2 rounded-md mr-3">
                <svg
                  class="w-5 h-5 text-white"
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
              <p class="font-medium">Refusal for Unclear Study Goals</p>
            </div>
            <p class="text-gray-600 text-sm">
              A student refused for unclear study goals, needing a fresh SOP
            </p>
          </div>

          <div class="bg-gray-50 p-4 rounded-md">
            <div class="flex items-center mb-2">
              <div class="bg-fire-600 p-2 rounded-md mr-3">
                <svg
                  class="w-5 h-5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                  />
                </svg>
              </div>
              <p class="font-medium">Institution Transfer</p>
            </div>
            <p class="text-gray-600 text-sm">
              A client switching from a private to public DLI needing guidance
            </p>
          </div>

          <div class="bg-gray-50 p-4 rounded-md">
            <div class="flex items-center mb-2">
              <div class="bg-fire-600 p-2 rounded-md mr-3">
                <svg
                  class="w-5 h-5 text-white"
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
              <p class="font-medium">Self-Prepared Applications</p>
            </div>
            <p class="text-gray-600 text-sm">
              A self-prepared PR application needing a last-minute professional
              check
            </p>
          </div>

          <div class="bg-gray-50 p-4 rounded-md">
            <div class="flex items-center mb-2">
              <div class="bg-fire-600 p-2 rounded-md mr-3">
                <svg
                  class="w-5 h-5 text-white"
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
              <p class="font-medium">Academic Gaps</p>
            </div>
            <p class="text-gray-600 text-sm">
              A student with academic gaps needing an SOP that addresses red
              flags
            </p>
          </div>
        </div>
      </section>

      <!-- FAQ Section with Accordion -->
      <section class="bg-gray-50 rounded-lg p-6">
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
              <span class="font-medium">What makes a good SOP?</span>
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
                  It should clearly explain your study plans, career goals,
                  choice of institution, financial readiness, and your intent to
                  return or follow legal pathways after studies.
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
                >Can I change my DLI after arriving in Canada?</span
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
                  Yes, but you must notify IRCC through your online account. We
                  can help you stay compliant during the transition.
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
                >Is a second opinion necessary if I already worked with an
                agent?</span
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
                  Absolutely. Many refusals happen due to incomplete
                  documentation or weak narratives—even if filed by someone
                  else.
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
              <span class="font-medium">Do you offer rush SOP services?</span>
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
                  Yes. We can accommodate urgent requests depending on
                  availability—fees may vary.
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
                >Will you write my SOP from scratch?</span
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
                  Yes, but we'll ask you questions about your background to
                  ensure it's authentic and personalized.
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
              Don't Leave Your File to Chance
            </h2>
            <p class="text-lg font-light pr-4">
              Whether you're refining your SOP, switching schools, or submitting
              a critical application, we'll help you get it right.
            </p>
          </div>
          <div>
            <button
              routerLink="/book-your-appointment"
              class="bg-white text-fire-600 px-8 py-3 rounded-lg cursor-pointer font-medium hover:bg-gray-100 transition-colors shadow-lg"
            >
              Book a Review, Edit, or Writing Session Now
            </button>
          </div>
        </div>
      </section>
    </div>
  `,
})
export class SopDliOpinionComponent {
  activeFaq = signal(-1);

  toggleFaq(index: number) {
    this.activeFaq.update((current) => (current === index ? -1 : index));
  }
}
