import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ServiceHeaderComponent } from '../../components/service-header.component';

@Component({
  selector: 'app-visitor-visa',
  standalone: true,
  imports: [CommonModule, RouterModule, ServiceHeaderComponent],
  template: `
    <div class="space-y-8">
      <app-service-header
        title="Visitor Visas to Canada"
        description="Explore, connect, or conduct business in Canada—with the right visa in
          hand."
        backgroundImage="/assets/images/visitor-hero.png"
      />

      <!-- Overview Section -->
      <section class="bg-white p-6">
        <h2 class="text-2xl text-sea-900 mb-4">
          Visit Canada—The Right Way, the First Time
        </h2>
        <p class="text-gray-700">
          Whether you're planning a family visit, attending a business event, or
          reuniting with your children or grandchildren, a visitor visa ensures
          your entry to Canada is smooth and stress-free. At Velox Immigration,
          we simplify the process, ensure your documents are strong, and help
          you present a clear purpose for travel.
        </p>
        <button
          routerLink="/book-your-appointment"
          class="mt-4 bg-fire-600 text-white px-6 py-3 rounded-lg hover:bg-fire-700 transition-colors"
        >
          Start Your Visitor Visa Application Today
        </button>
      </section>

      <!-- Who This Is For Section -->
      <section class="bg-gray-50 rounded-md p-6">
        <h2 class="text-2xl text-sea-900 mb-4">
          <svg
            class="w-6 h-6 inline-block mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
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
        <p class="text-gray-700">This service is designed for:</p>
        <ul class="py-3 space-y-2 list-disc pl-5 text-gray-700">
          <li>
            <span class="font-medium"
              >Tourists or family members applying for a Temporary Resident Visa
              (TRV)</span
            >
          </li>
          <li>
            <span class="font-medium"
              >Parents and grandparents applying for a Super Visa</span
            >
          </li>
          <li>
            <span class="font-medium"
              >Business professionals attending meetings, trade shows, or
              conferences as Business Visitors</span
            >
          </li>
        </ul>
      </section>

      <!-- What We Offer Section -->
      <section class="bg-white rounded-md p-6">
        <h2 class="text-2xl text-sea-900 mb-4">
          <svg
            class="w-6 h-6 inline-block mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
          What We Offer
        </h2>
        <p class="text-gray-700 mb-4">
          Our visitor visa services are tailored for different purposes of
          travel:
        </p>

        <div class="space-y-6">
          <div class="bg-gray-50 p-5 rounded-lg">
            <h3 class="text-xl font-medium text-fire-600 mb-2">
              Visitor Visa (TRV)
            </h3>
            <p class="text-gray-700">
              For most foreign nationals, a Temporary Resident Visa is required
              to enter Canada. We help you demonstrate strong ties to your home
              country, a clear purpose of visit, and sufficient financial
              support. Whether you're visiting family or exploring Canada for
              leisure, we structure your file for approval.
            </p>
          </div>

          <div class="bg-gray-50 p-5 rounded-lg">
            <h3 class="text-xl font-medium text-fire-600 mb-2">Super Visa</h3>
            <p class="text-gray-700">
              The Super Visa is ideal for parents and grandparents of Canadian
              citizens or permanent residents. It allows extended stays in
              Canada—up to five years per visit. We assist with the required
              medical insurance, invitation letter, and financial documentation
              from your Canadian host.
            </p>
          </div>

          <div class="bg-gray-50 p-5 rounded-lg">
            <h3 class="text-xl font-medium text-fire-600 mb-2">
              Business Visitor Visa
            </h3>
            <p class="text-gray-700">
              Coming to Canada for a short-term business activity without
              entering the labour market? We help eligible applicants with
              invitations, business documents, and strong justification letters
              that align with IRCC requirements.
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
          Depending on your purpose of travel, you may need:
        </p>

        <ul class="space-y-2 list-disc pl-5 text-gray-700 mb-4">
          <li>A valid <strong>passport</strong></li>
          <li>
            Proof of <strong>financial support</strong> (bank statements,
            employment letter, assets)
          </li>
          <li>
            <strong>Letter of invitation</strong> from a Canadian host (family
            or business)
          </li>
          <li><strong>Travel itinerary</strong> (if applicable)</li>
          <li>
            Evidence of <strong>ties to your home country</strong> (job, family,
            property)
          </li>
          <li>
            Medical exam and <strong>proof of private insurance</strong> (Super
            Visa only)
          </li>
          <li>Proof of relationship (for family-based visits)</li>
        </ul>

        <p class="text-gray-700">
          We assess your purpose of travel and provide a personalized checklist
          to support a complete, convincing application.
        </p>
      </section>

      <!-- How We Work Section -->
      <section class="bg-white rounded-md p-6">
        <h2 class="text-2xl text-sea-900 mb-4">
          <svg
            class="w-6 h-6 inline-block mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
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
          We take the guesswork out of visitor visa applications through our
          4-step process:
        </p>

        <div class="space-y-4">
          <div class="flex gap-3">
            <div
              class="bg-fire-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0"
            >
              1
            </div>
            <div>
              <p class="font-medium">Consultation & Purpose Review</p>
              <p class="text-gray-600">
                We assess your visit goals and identify the correct visa
                category.
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
              <p class="font-medium">
                Document Strategy & Invitation Letter Support
              </p>
              <p class="text-gray-600">
                We help draft a strong invitation letter and guide you on proof
                of ties, finances, and travel plans.
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
                We complete your IRCC forms and submit your application with a
                compelling explanation of your visit.
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
              <p class="font-medium">Follow-Up & Support</p>
              <p class="text-gray-600">
                We assist with biometrics appointments, respond to IRCC
                requests, and guide you until a decision is issued.
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
            viewBox="0 0 24 24"
            stroke="currentColor"
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
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div class="bg-white p-4 rounded-lg shadow-sm">
            <p class="text-gray-700">
              A parent applying for a <strong>Super Visa</strong> to stay
              long-term with their children in Canada
            </p>
          </div>
          <div class="bg-white p-4 rounded-lg shadow-sm">
            <p class="text-gray-700">
              A student's family visiting for <strong>convocation</strong>
            </p>
          </div>
          <div class="bg-white p-4 rounded-lg shadow-sm">
            <p class="text-gray-700">
              A business owner attending a
              <strong>conference or trade show</strong>
            </p>
          </div>
          <div class="bg-white p-4 rounded-lg shadow-sm">
            <p class="text-gray-700">
              A tourist wanting to visit
              <strong>family and explore Canada</strong>
            </p>
          </div>
          <div class="bg-white p-4 rounded-lg shadow-sm">
            <p class="text-gray-700">
              A first-time applicant with
              <strong>no travel history</strong> needing guidance on building a
              strong case
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
              <span class="font-medium">Do I need a visa to visit Canada?</span>
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
                  If you are from a visa-required country, yes. We will confirm
                  your eligibility and assist you accordingly.
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
                >How long can I stay in Canada on a visitor visa?</span
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
                  Normally up to 6 months. A Super Visa allows up to 5 years per
                  visit.
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
                >Can I work or study with a visitor visa?</span
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
                  No. Visitor visas do not permit work or study in Canada unless
                  you apply to change your status.
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
                >Can I extend my stay in Canada as a visitor?</span
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
                  Yes, but you must apply at least 30 days before your current
                  status expires.
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
                >Will I need to undergo a medical exam?</span
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
                  Only in specific cases (e.g., Super Visa or long-term visits
                  from certain countries). We'll guide you.
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
                  Processing times vary by country and application type. We'll
                  provide the most current timeline based on IRCC's published
                  processing times for your region.
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
            <h2 class="text-2xl font-bold mb-2">Ready to Visit Canada?</h2>
            <p class="text-lg font-light pr-4">
              A strong, well-prepared application is key to a smooth entry.
              Whether you're applying for a visitor visa, Super Visa, or coming
              on business, we ensure your application tells a clear and
              compelling story.
            </p>
          </div>
          <div>
            <button
              routerLink="/book-your-appointment"
              class="bg-white text-fire-600 px-8 py-3 rounded-lg cursor-pointer font-medium hover:bg-gray-100 transition-colors shadow-lg"
            >
              Book a Visitor Visa Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  `,
})
export class VisitorVisaComponent {
  activeFaq = signal(-1);

  toggleFaq(index: number) {
    this.activeFaq.update((current) => (current === index ? -1 : index));
  }
}
