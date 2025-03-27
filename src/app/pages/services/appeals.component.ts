import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-appeals-refugee',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="space-y-8">
      <!-- Hero Section -->
      <div
        class="bg-sea-900 text-white rounded-lg px-8 py-10 relative bg-cover bg-center"
        [style.backgroundImage]="'url(/assets/images/refugee-hero.png)'"
        style="min-height: 250px;"
      >
        <h1 class="text-3xl md:text-5xl mb-4">Appeals, Refugee & H&C Cases</h1>
        <p class="text-lg">
          When your case needs compassion, legal strategy, and strong
          representation—Velox Immigration is here.
        </p>
      </div>

      <!-- Overview Section -->
      <section class="bg-white p-6 rounded-lg">
        <h2 class="text-2xl text-sea-900 font-bold mb-4">
          Denied? At Risk? Seeking Protection? We Can Help.
        </h2>
        <p class="text-gray-700">
          Immigration isn't always a straightforward path. If your application
          has been refused, you're facing removal, or you're in Canada under
          exceptional circumstances, Velox Immigration provides professional
          support for appeals, refugee claims, and humanitarian & compassionate
          (H&C) applications. We're here when the stakes are highest.
        </p>
        <button
          routerLink="/book-your-appointment"
          class="mt-4 bg-fire-600 text-white px-6 py-2 rounded-lg hover:bg-fire-700 transition-colors"
        >
          Book a Confidential Consultation
        </button>
      </section>

      <!-- Who We Help Section -->
      <section class="bg-gray-50 rounded-lg p-6">
        <h2 class="text-2xl text-sea-900 font-bold mb-4">
          <svg
            class="w-6 h-6 inline-block mr-2 text-sea-900"
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
        <p class="text-gray-700">This service is ideal for:</p>
        <ul class="py-3 space-y-2 list-disc pl-5 text-gray-700">
          <li>
            <span class="font-medium"
              >Individuals with a refused visa or sponsorship application</span
            >
          </li>
          <li>
            <span class="font-medium"
              >Permanent residents facing loss of status or removal orders</span
            >
          </li>
          <li>
            <span class="font-medium"
              >Refugee claimants in need of legal representation before the
              IRB</span
            >
          </li>
          <li>
            <span class="font-medium"
              >Foreign nationals in Canada applying for H&C consideration due to
              hardship</span
            >
          </li>
          <li>
            <span class="font-medium"
              >Clients seeking judicial review or appeals before the Immigration
              Appeal Division (IAD)</span
            >
          </li>
        </ul>
      </section>

      <!-- Our Services Section -->
      <section class="bg-white rounded-lg p-6">
        <h2 class="text-2xl text-sea-900 font-bold mb-4">
          <svg
            class="w-6 h-6 inline-block mr-2 text-sea-900"
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
          We represent and support clients through complex, high-stakes
          immigration matters:
        </p>

        <div class="space-y-6">
          <div>
            <h3 class="text-xl font-medium text-fire-600 mb-2">
              Appeals (IAD)
            </h3>
            <p class="text-gray-700">
              We handle immigration appeals for sponsorship refusals, residency
              obligation breaches, and removal orders. Our services include
              gathering evidence, preparing legal submissions, coordinating with
              counsel, and representing you at hearings before the IAD.
            </p>
          </div>

          <div>
            <h3 class="text-xl font-medium text-fire-600 mb-2">
              Refugee Claims
            </h3>
            <p class="text-gray-700">
              We represent individuals claiming asylum in Canada based on fear
              of persecution, risk to life, or cruel and unusual treatment. We
              assist with claim preparation, form completion (Basis of Claim),
              supporting documentation, and representation at the Immigration
              and Refugee Board (IRB).
            </p>
          </div>

          <div>
            <h3 class="text-xl font-medium text-fire-600 mb-2">
              Humanitarian & Compassionate (H&C) Applications
            </h3>
            <p class="text-gray-700">
              When you have compelling personal circumstances and no other
              pathway to remain in Canada, we build a strong H&C application. We
              highlight hardship, establishment in Canada, best interests of
              children, and other compassionate grounds to support your case.
            </p>
          </div>
        </div>
      </section>

      <!-- Requirements Section -->
      <section class="bg-gray-50 rounded-lg p-6">
        <h2 class="text-2xl text-sea-900 font-bold mb-4">
          <svg
            class="w-6 h-6 inline-block mr-2 text-sea-900"
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

        <div class="space-y-6">
          <div>
            <h3 class="text-lg font-medium text-sea-900 mb-2">For Appeals:</h3>
            <ul class="space-y-2 list-disc pl-5 text-gray-700">
              <li>
                A <strong>copy of the refusal letter</strong> or removal order
              </li>
              <li>
                Supporting <strong>legal and factual documentation</strong>
              </li>
              <li>
                Evidence of <strong>genuine relationships</strong>, residency,
                or rehabilitation (as applicable)
              </li>
            </ul>
          </div>

          <div>
            <h3 class="text-lg font-medium text-sea-900 mb-2">
              For Refugee Claims:
            </h3>
            <ul class="space-y-2 list-disc pl-5 text-gray-700">
              <li>Completed <strong>Basis of Claim (BOC) Form</strong></li>
              <li>Passport and <strong>identity documents</strong></li>
              <li>Medical or psychological reports (if applicable)</li>
              <li>
                <strong>Country condition evidence</strong> and personal
                narrative
              </li>
            </ul>
          </div>

          <div>
            <h3 class="text-lg font-medium text-sea-900 mb-2">
              For H&C Applications:
            </h3>
            <ul class="space-y-2 list-disc pl-5 text-gray-700">
              <li>Detailed <strong>personal statement</strong></li>
              <li>
                Supporting letters, community support, or
                <strong>proof of establishment</strong> in Canada
              </li>
              <li>Medical or hardship documentation</li>
              <li>
                <strong>Proof of best interests of any children</strong>
                involved
              </li>
              <li>Country-specific documentation showing hardship or risk</li>
            </ul>
          </div>
        </div>

        <p class="text-gray-700 mt-4">
          We carefully evaluate and compile all necessary material, providing
          full legal submissions that present your case with clarity and
          compassion.
        </p>
      </section>

      <!-- How We Work Section -->
      <section class="bg-white rounded-lg p-6">
        <h2 class="text-2xl text-sea-900 font-bold mb-4">
          <svg
            class="w-6 h-6 inline-block mr-2 text-sea-900"
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

        <div class="space-y-4">
          <div class="flex gap-3">
            <div
              class="bg-fire-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0"
            >
              1
            </div>
            <div>
              <p class="font-medium">Initial Assessment & File Review</p>
              <p class="text-gray-600">
                We review your refusal, risk, or circumstances and determine the
                appropriate remedy.
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
              <p class="font-medium">Strategy & Documentation</p>
              <p class="text-gray-600">
                We build your legal case with supporting evidence, witness
                statements, and expert reports where necessary.
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
              <p class="font-medium">Application or Appeal Preparation</p>
              <p class="text-gray-600">
                We prepare submissions, file your appeal, or complete your
                refugee/H&C application with careful legal framing.
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
              <p class="font-medium">Representation & Follow-Up</p>
              <p class="text-gray-600">
                We advocate for you throughout the process, including hearing
                preparation and ongoing updates.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Common Scenarios Section -->
      <section class="bg-gray-50 rounded-lg p-6">
        <h2 class="text-2xl text-sea-900 font-bold mb-4">
          <svg
            class="w-6 h-6 inline-block mr-2 text-sea-900"
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

        <div class="space-y-3">
          <div class="flex items-start gap-2">
            <svg
              class="w-5 h-5 text-fire-600 mt-0.5 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span class="text-gray-700"
              >A refused <strong>spousal sponsorship</strong> with incomplete
              relationship evidence</span
            >
          </div>
          <div class="flex items-start gap-2">
            <svg
              class="w-5 h-5 text-fire-600 mt-0.5 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span class="text-gray-700"
              >A client issued a <strong>removal order</strong> due to residency
              obligation breach</span
            >
          </div>
          <div class="flex items-start gap-2">
            <svg
              class="w-5 h-5 text-fire-600 mt-0.5 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span class="text-gray-700"
              >A woman fleeing gender-based violence filing a
              <strong>refugee claim</strong></span
            >
          </div>
          <div class="flex items-start gap-2">
            <svg
              class="w-5 h-5 text-fire-600 mt-0.5 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span class="text-gray-700"
              >A long-time resident with no status applying under
              <strong>H&C grounds</strong></span
            >
          </div>
          <div class="flex items-start gap-2">
            <svg
              class="w-5 h-5 text-fire-600 mt-0.5 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span class="text-gray-700"
              >A rejected visitor visa applicant seeking
              <strong>judicial review guidance</strong></span
            >
          </div>
        </div>
      </section>

      <!-- FAQ Section with Accordion -->
      <section class="bg-gray-50 rounded-lg p-6">
        <h2 class="text-2xl text-sea-900 font-bold mb-6">
          <svg
            class="w-6 h-6 inline-block mr-2 text-sea-900"
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
                >What is the Immigration Appeal Division (IAD)?</span
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
                  The IAD is a tribunal where you can appeal certain immigration
                  decisions—like sponsorship refusals, removal orders, or loss
                  of PR status.
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
                >Can I appeal a refugee claim refusal?</span
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
                  Not all claimants have appeal rights. In some cases, you may
                  seek leave for judicial review in Federal Court.
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
                >What qualifies as "compassionate grounds"?</span
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
                  Establishment in Canada, family hardship, medical issues, or
                  best interests of children may be considered in H&C cases.
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
                >Can I be removed from Canada while my H&C application is
                processing?</span
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
                  Yes—unless you have a stay of removal. We help you explore all
                  possible legal protections.
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
                >Is legal representation necessary for a refugee claim?</span
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
                  While not mandatory, it's highly recommended. The IRB process
                  is complex and emotional; professional support improves your
                  chances.
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
              <span class="font-medium">What will be the processing time?</span>
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
                  Timelines vary by complexity, region, and case type. Urgent
                  timelines may apply in some removal scenarios.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Ready to Begin Banner -->
      <section class="bg-fire-600 text-white rounded-lg p-8">
        <div class="flex flex-col md:flex-row items-center justify-between">
          <div class="mb-6 md:mb-0">
            <h2 class="text-2xl font-bold mb-2">
              You Deserve to Be Heard—Let's Advocate Together
            </h2>
            <p class="text-lg font-light">
              When your future in Canada is uncertain, Velox Immigration brings
              experience, care, and strategy to every complex case.
            </p>
          </div>
          <div>
            <button
              routerLink="/book-your-appointment"
              class="bg-white text-fire-600 px-8 py-3 rounded-lg cursor-pointer font-medium hover:bg-gray-100 transition-colors shadow-lg"
            >
              Book a Confidential Case Review Now
            </button>
          </div>
        </div>
      </section>
    </div>
  `,
})
export class AppealsRefugeeComponent {
  activeFaq = signal(-1);

  toggleFaq(index: number) {
    this.activeFaq.update((current) => (current === index ? -1 : index));
  }
}
