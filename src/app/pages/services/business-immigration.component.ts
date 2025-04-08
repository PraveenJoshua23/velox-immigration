import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ServiceHeaderComponent } from '../../components/service-header.component';

@Component({
  selector: 'app-business-immigration',
  standalone: true,
  imports: [CommonModule, RouterModule, ServiceHeaderComponent],
  template: `
    <div class="space-y-8">
      <app-service-header
        title="Business Immigration"
        description="Turn your business experience into permanent residency in Canada with
          expert support every step of the way."
        backgroundImage="/assets/images/business-immigration-hero.png"
      />

      <!-- Overview Section -->
      <section class="bg-white p-6 rounded-lg">
        <h2 class="text-2xl text-sea-900 mb-4">
          Bring Your Ambition to Canada's Business Landscape
        </h2>
        <p class="text-gray-700">
          Canada welcomes experienced entrepreneurs, investors, and
          self-employed individuals who can contribute to its economy and
          innovation. Velox Immigration helps you navigate federal and
          provincial business immigration pathways, with personalized support
          tailored to your business goals and immigration objectives.
        </p>
        <div class="mt-6">
          <button
            routerLink="/book-your-appointment"
            class="bg-fire-600 text-white px-6 py-3 rounded-lg hover:bg-fire-700 transition-colors"
          >
            Start Your Business Immigration Assessment
          </button>
        </div>
      </section>

      <!-- Who We Help Section -->
      <section class="bg-gray-50 rounded-md p-6">
        <h2 class="text-2xl text-sea-900 mb-4">Who We Help</h2>
        <p class="text-gray-700">
          Our business immigration services are designed for:
        </p>
        <ul class="py-3 space-y-2 list-disc pl-5 text-gray-700">
          <li>
            <span class="font-medium">
              Entrepreneurs looking to launch or invest in a Canadian business
            </span>
          </li>
          <li>
            <span class="font-medium">
              Innovative founders applying under the Start-Up Visa (SUV)
            </span>
          </li>
          <li>
            <span class="font-medium">
              Self-employed professionals in arts, culture, or athletics
            </span>
          </li>
          <li>
            <span class="font-medium">
              Business owners applying under provincial entrepreneur streams
              (PNPs)
            </span>
          </li>
          <li>
            <span class="font-medium">
              Clients seeking business pathways to permanent residence
            </span>
          </li>
        </ul>
      </section>

      <!-- Our Services Section -->
      <section class="bg-white rounded-md p-6">
        <h2 class="text-2xl text-sea-900 mb-4">What We Offer</h2>
        <p class="text-gray-700 mb-4">
          We help you determine the right business immigration route and ensure
          your application meets legal, financial, and operational requirements.
        </p>

        <div class="space-y-6">
          <div>
            <h3 class="text-xl font-medium text-fire-600 mb-2">
              Start-Up Visa (SUV)
            </h3>
            <p class="text-gray-700">
              This federal program allows innovative entrepreneurs to obtain PR
              by securing support from a designated organization (venture
              capital fund, angel investor group, or incubator). We guide you
              through preparing your business concept, securing a letter of
              support, and submitting a strong PR application.
            </p>
          </div>

          <div>
            <h3 class="text-xl font-medium text-fire-600 mb-2">
              Self-Employed Persons Program
            </h3>
            <p class="text-gray-700">
              For individuals with significant experience in athletics, culture,
              or the arts, this program offers a route to PR based on your
              ability to contribute to Canada's cultural or athletic life. We
              help you demonstrate relevant experience and your intent to be
              self-employed in Canada.
            </p>
          </div>

          <div>
            <h3 class="text-xl font-medium text-fire-600 mb-2">
              Provincial Entrepreneur Streams (PNPs)
            </h3>
            <p class="text-gray-700">
              Many provinces offer business immigration streams for applicants
              willing to invest in and actively manage a business. We assist
              with business proposals, Expressions of Interest (EOIs),
              interviews, performance agreements, and eventual PR applications
              after nomination.
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
          Requirements vary by program, but generally include:
        </p>

        <div class="space-y-8">
          <div>
            <h3 class="font-semibold text-fire-600 mb-2">For Start-Up Visa:</h3>
            <ul class="space-y-2 list-disc pl-5 text-gray-700">
              <li>An innovative, scalable <strong>business idea</strong></li>
              <li>
                Letter of support from a
                <strong>designated organization</strong>
              </li>
              <li>Language test results (CLB 5 or higher)</li>
              <li>Sufficient <strong>settlement funds</strong></li>
              <li>Active involvement in business management</li>
            </ul>
          </div>

          <div>
            <h3 class="font-semibold text-fire-600 mb-2">
              For Self-Employed Program:
            </h3>
            <ul class="space-y-2 list-disc pl-5 text-gray-700">
              <li>
                2+ years of relevant self-employed experience in cultural or
                athletic fields
              </li>
              <li>
                Proof of intent and ability to continue self-employment in
                Canada
              </li>
              <li>Portfolio of achievements or recognition in your field</li>
            </ul>
          </div>

          <div>
            <h3 class="font-semibold text-fire-600 mb-2">
              For Provincial Entrepreneur Streams:
            </h3>
            <ul class="space-y-2 list-disc pl-5 text-gray-700">
              <li>
                Minimum <strong>net worth</strong> and
                <strong>investment amount</strong> (varies by province)
              </li>
              <li>Detailed <strong>business plan</strong></li>
              <li>Relevant <strong>management experience</strong></li>
              <li>
                Willingness to
                <strong>reside in the nominating province</strong>
              </li>
            </ul>
          </div>
        </div>

        <p class="text-gray-700 mt-4">
          We'll help you build a strategic, accurate application tailored to
          your goals and provincial/federal requirements.
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
              <p class="font-medium">Eligibility Assessment & Strategy</p>
              <p class="text-gray-600">
                We analyze your background and recommend the most suitable
                business immigration stream.
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
              <p class="font-medium">Business Concept & Documentation</p>
              <p class="text-gray-600">
                We assist with developing your business plan, collecting
                financial and legal documents, and preparing for interviews or
                presentations.
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
              <p class="font-medium">Program-Specific Guidance</p>
              <p class="text-gray-600">
                Whether it's securing a Start-Up Visa letter or meeting PNP
                requirements, we tailor our support to your selected pathway.
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
              <p class="font-medium">Application Filing & Monitoring</p>
              <p class="text-gray-600">
                We submit all required applications—federal or provincial—and
                handle correspondence with immigration authorities.
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
              <p class="font-medium">Post-Approval Support</p>
              <p class="text-gray-600">
                We provide guidance on arrival, business set-up, and fulfilling
                program obligations (such as PNP performance agreements).
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

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div class="bg-white p-4 rounded-lg shadow-sm">
            <div class="flex gap-3 items-start">
              <div class="bg-fire-600 p-2 rounded-lg flex-shrink-0">
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
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <p class="text-gray-700">
                An international entrepreneur with a scalable tech idea seeking
                a Start-Up Visa
              </p>
            </div>
          </div>

          <div class="bg-white p-4 rounded-lg shadow-sm">
            <div class="flex gap-3 items-start">
              <div class="bg-fire-600 p-2 rounded-lg flex-shrink-0">
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
                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <p class="text-gray-700">
                A self-employed artist or athlete looking to gain PR through
                their professional background
              </p>
            </div>
          </div>

          <div class="bg-white p-4 rounded-lg shadow-sm">
            <div class="flex gap-3 items-start">
              <div class="bg-fire-600 p-2 rounded-lg flex-shrink-0">
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
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <p class="text-gray-700">
                A business owner with $500,000 net worth seeking PR through the
                BC PNP Entrepreneur Program
              </p>
            </div>
          </div>

          <div class="bg-white p-4 rounded-lg shadow-sm">
            <div class="flex gap-3 items-start">
              <div class="bg-fire-600 p-2 rounded-lg flex-shrink-0">
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
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <p class="text-gray-700">
                A client choosing between Start-Up Visa and PNP for faster
                processing and settlement support
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
                >Can I apply for a Start-Up Visa without a business already
                running?</span
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
                  Yes. You need a viable concept and support from a designated
                  organization—not necessarily a functioning business.
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
                >Is business experience mandatory for PNP entrepreneur
                programs?</span
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
                  Yes. Most streams require 2-3 years of business ownership or
                  senior management experience.
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
                >Do I get PR right away under business streams?</span
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
                  In most PNP streams, you start with a temporary work permit
                  and get PR after fulfilling business commitments. Start-Up
                  Visa leads directly to PR.
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
              <span class="font-medium">Can my family immigrate with me?</span>
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
                  Yes. Your spouse and dependent children can be included in
                  your PR application.
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
              <span class="font-medium">Do I need to invest my own funds?</span>
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
                  Yes. Whether it's an SUV, self-employed, or PNP stream,
                  personal financial commitment is required.
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
                  Processing times may vary depending on stream and individual
                  case complexity. Contact us for the latest updates.
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
              Build Your Future in Canada—Through Business
            </h2>
            <p class="text-lg font-light pr-4">
              Your business experience can be your bridge to permanent residency
              in Canada. Let Velox Immigration guide you through every
              step—strategically and professionally.
            </p>
          </div>
          <div>
            <button
              routerLink="/book-your-appointment"
              class="bg-white text-fire-600 px-8 py-3 rounded-lg cursor-pointer font-medium hover:bg-gray-100 transition-colors shadow-lg"
            >
              Book your consultation today
            </button>
          </div>
        </div>
      </section>
    </div>
  `,
})
export class BusinessImmigrationComponent {
  activeFaq = signal(-1);

  toggleFaq(index: number) {
    this.activeFaq.update((current) => (current === index ? -1 : index));
  }
}
