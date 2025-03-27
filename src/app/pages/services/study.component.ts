import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-study',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="space-y-8">
      <!-- Hero Section -->
      <div
        class="bg-sea-900 text-white rounded-lg px-8 py-10 relative bg-cover bg-center"
        [style.backgroundImage]="'url(/assets/images/study-hero.png)'"
        style="min-height: 250px;"
      >
        <h1 class="text-3xl md:text-5xl mb-4">Study in Canada</h1>
        <p class="text-lg">
          Secure the right permit to begin or continue your studies in
          Canada—with expert support every step of the way.
        </p>
      </div>

      <!-- Overview Section -->
      <section class="bg-white p-6 ">
        <h2 class="text-2xl text-sea-900 mb-4">
          Start Your Canadian Education Journey with Confidence
        </h2>
        <p class="text-gray-700">
          Canada is a top destination for international students—and for good
          reason. With world-class institutions, welcoming communities, and
          post-study work opportunities, it's the perfect place to grow
          academically and professionally. At Velox Immigration, we help you
          navigate every step of the study permit process—whether you're
          applying for the first time, renewing your permit, or helping a minor
          begin their education here.
        </p>
      </section>

      <!-- Who We Help Section -->
      <section class="bg-gray-50 rounded-md p-6 ">
        <h2 class="text-2xl text-sea-900 mb-4">Who We Help</h2>
        <p class="text-gray-700">This service is designed for:</p>
        <ul class="py-3 space-y-2 list-disc pl-5 text-gray-700">
          <li>
            <span class="font-medium"
              >Adults applying for a Canadian study permit for college or
              university</span
            >
          </li>
          <li>
            <span class="font-medium"
              >Parents of children under 18 enrolling in primary or secondary
              school
            </span>
          </li>
          <li>
            <span class="font-medium"
              >International students needing to extend their current study
              permits to continue their program
            </span>
          </li>
        </ul>
      </section>

      <!-- Our Services Section -->
      <section class="bg-white rounded-md p-6">
        <h2 class="text-2xl text-sea-900 mb-4">Our Services</h2>
        <p class="text-gray-700 mb-4">
          We offer tailored support across three key areas:
        </p>

        <div class="space-y-6">
          <div>
            <h3 class="text-xl font-medium text-fire-600 mb-2">
              Study Permits
            </h3>
            <p class="text-gray-700">
              Whether you've just received an acceptance letter from a
              Designated Learning Institution (DLI) or are preparing for your
              academic future, we guide you through the full process—from
              application to approval. We'll help you gather the required
              documents, write a strong Statement of Purpose (SOP), and ensure
              your application meets all IRCC criteria.
            </p>
          </div>

          <div>
            <h3 class="text-xl font-medium text-fire-600 mb-2">
              Minor Study Permits
            </h3>
            <p class="text-gray-700">
              If your child is planning to attend school in Canada, we assist
              with obtaining a study permit that complies with all custodianship
              and documentation requirements. We also support parents in
              securing visitor or work status to accompany their child, where
              applicable.
            </p>
          </div>

          <div>
            <h3 class="text-xl font-medium text-fire-600 mb-2">
              Study Permit Extensions
            </h3>
            <p class="text-gray-700">
              Need more time to complete your studies? We'll help you apply for
              an extension before your current permit expires. We ensure your
              continued legal status in Canada and guide you through new proof
              of funds, updated enrollment letters, and any changes in your
              academic program.
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
          Each case is different, but generally, you'll need the following:
        </p>

        <ul class="space-y-2 list-disc pl-5 text-gray-700 mb-4">
          <li>A valid letter of acceptance from a DLI</li>
          <li>Proof of sufficient funds</li>
          <li>Valid passport</li>
          <li>Recent photographs</li>
          <li>Biometrics</li>
          <li>
            An Immigration Medical Exam (IME) (only required in specific cases)
          </li>
          <li>
            A well-written Statement of Purpose (SOP) explaining your study plan
            and intentions
          </li>
          <li>
            Evidence of ties to your home country (such as family, property, or
            employment)
          </li>
        </ul>

        <p class="text-gray-700">
          If you're applying on behalf of a minor, additional documents are
          needed, such as a custodianship declaration, birth certificate, and
          identification for the parent(s) or guardian(s).
        </p>
        <p class="text-gray-700 mt-2">
          We will guide you through each of these requirements and help you
          gather a complete and accurate set of documents tailored to your
          unique situation.
        </p>
      </section>

      <!-- How We Work Section -->
      <section class="bg-white rounded-md p-6">
        <h2 class="text-2xl text-sea-900 mb-4">🛠️ How We Work</h2>
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
              <p class="font-medium">Initial Consultation</p>
              <p class="text-gray-600">
                We assess your academic background, goals, and timeline.
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
              <p class="font-medium">Document Support</p>
              <p class="text-gray-600">
                You receive a complete checklist and help drafting your SOP.
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
              <p class="font-medium">Application Filing</p>
              <p class="text-gray-600">
                We prepare and submit your application through the IRCC portal.
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
              <p class="font-medium">Follow-up & Communication</p>
              <p class="text-gray-600">
                We monitor your file and handle any updates or requests from
                IRCC.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Why Choose Velox Section -->
      <section class="bg-gray-50 rounded-md p-6">
        <h2 class="text-2xl text-sea-900 mb-4">Why Choose Velox?</h2>
        <p class="text-gray-700">
          We know how important your education is—and we treat your file with
          that same level of care. With a licensed consultant guiding you,
          you'll avoid unnecessary delays, errors, and refusals. Our experience
          spans college, university, and minor applications across provinces,
          ensuring your case is in capable hands.
        </p>
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
                >Can I work while studying in Canada?</span
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
                  Yes, if you're enrolled full-time at a DLI, you may work up to
                  20 hours per week during academic sessions.
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
                >Do I need a permit for a 3-month course?</span
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
                  Not necessarily. If your course is under 6 months, you may not
                  require a permit—but you'll be ineligible for a post-grad work
                  permit.
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
              <span class="font-medium">How early can I apply?</span>
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
                  You can apply as soon as you have your acceptance letter. The
                  earlier, the better—ideally 3–6 months before your program
                  starts.
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
                >What if my permit expires before I finish school?</span
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
                  You can apply to extend your permit. It's important to apply
                  before your current permit expires to maintain your status.
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
              <span class="font-medium">What are your fees?</span>
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
                  Our service fees are competitive and based on the complexity
                  of your case. Contact us for a personalized quote.
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
            <h2 class="text-2xl font-bold  mb-2">Ready to Begin?</h2>
            <p class="text-lg font-light pr-4">
              Whether you're a first-time applicant or need to extend your stay,
              we're here to help you every step of the way.
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
export class StudyComponent {
  activeFaq = signal(-1);

  toggleFaq(index: number) {
    this.activeFaq.update((current) => (current === index ? -1 : index));
  }
}
