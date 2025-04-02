import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ServiceHeaderComponent } from '../../components/service-header.component';

@Component({
  selector: 'app-provincial-nominee',
  standalone: true,
  imports: [CommonModule, RouterModule, ServiceHeaderComponent],
  template: `
    <div class="space-y-8">
      <app-service-header
        title="Provincial Nominee Program (PNP)"
        description="Immigrate to Canada through the province that values your skills most.
          Whether you're applying directly or through Express Entry, we'll guide
          you through the right PNP path."
        backgroundImage="/assets/images/pnp-hero.png"
      />

      <!-- Overview Section -->
      <section class="bg-white p-6 rounded-md">
        <h2 class="text-2xl text-sea-900 mb-4">
          Build Your Future in a Province That Needs You
        </h2>
        <p class="text-gray-700">
          The Provincial Nominee Program (PNP) offers a unique opportunity for
          individuals with the right skills, experience, and education to become
          permanent residents of Canada—through targeted streams chosen by each
          province. Our expert team will help you navigate the specific
          requirements of each province and maximize your chances of success.
        </p>
      </section>

      <!-- Who We Help Section -->
      <section class="bg-gray-50 rounded-md p-6">
        <h2 class="text-2xl text-sea-900 mb-4">Who We Help</h2>
        <p class="text-gray-700">This service is ideal for:</p>
        <ul class="py-3 space-y-2 list-disc pl-5 text-gray-700">
          <li>
            <span class="font-medium">
              Skilled workers or international graduates with a connection to a
              specific province
            </span>
          </li>
          <li>
            <span class="font-medium">
              Foreign workers with a Canadian job offer
            </span>
          </li>
          <li>
            <span class="font-medium">
              Temporary residents seeking pathways to permanent status
            </span>
          </li>
          <li>
            <span class="font-medium">
              Entrepreneurs or self-employed individuals interested in business
              immigration streams
            </span>
          </li>
          <li>
            <span class="font-medium">
              Candidates in the Express Entry pool hoping to boost their CRS
              with a provincial nomination
            </span>
          </li>
        </ul>
      </section>

      <!-- Our Services Section -->
      <section class="bg-white rounded-md p-6">
        <h2 class="text-2xl text-sea-900 mb-4">Our Services</h2>
        <p class="text-gray-700 mb-4">
          We help you choose and navigate the right PNP stream based on your
          education, occupation, work experience, and ties to a province:
        </p>

        <div class="space-y-6">
          <div>
            <h3 class="text-xl font-medium text-fire-600 mb-2">
              Skilled Worker Streams (Direct or Express Entry-linked)
            </h3>
            <p class="text-gray-700">
              Each province and territory has unique criteria based on local
              labour needs. We assess which stream best suits your background
              and help you prepare your Expression of Interest (EOI) or
              provincial application—whether through British Columbia, Ontario,
              Alberta, Saskatchewan, or others.
            </p>
          </div>

          <div>
            <h3 class="text-xl font-medium text-fire-600 mb-2">
              Employer-Sponsored or Job Offer Streams
            </h3>
            <p class="text-gray-700">
              Some PNPs require a job offer from a provincial employer. We work
              closely with both the applicant and the employer to prepare the
              employer forms, compliance letters, and offer documentation.
            </p>
          </div>

          <div>
            <h3 class="text-xl font-medium text-fire-600 mb-2">
              International Graduate Streams
            </h3>
            <p class="text-gray-700">
              Graduates of eligible institutions in provinces like Ontario, Nova
              Scotia, and Manitoba may qualify for PR through tailored PNP
              streams. We support you in transitioning from study or work permit
              to PR status.
            </p>
          </div>

          <div>
            <h3 class="text-xl font-medium text-fire-600 mb-2">
              PNP-Aligned Express Entry Profiles
            </h3>
            <p class="text-gray-700">
              We also help eligible candidates in the Express Entry pool receive
              600 bonus CRS points through a provincial nomination, drastically
              increasing the chance of receiving an ITA.
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
          While requirements vary by province and stream, applicants generally
          need:
        </p>

        <ul class="space-y-2 list-disc pl-5 text-gray-700 mb-4">
          <li>A valid passport</li>
          <li>A clear and detailed resume or CV</li>
          <li>Language test results (IELTS/CELPIP/TEF)</li>
          <li>Proof of education (transcripts, ECA if foreign credentials)</li>
          <li>Proof of work experience</li>
          <li>Job offer letter (if applicable)</li>
          <li>
            Connection to the province (education, work, relatives, or prior
            stay)
          </li>
          <li>Settlement funds (varies by stream)</li>
        </ul>

        <p class="text-gray-700">
          Each province has its own documentation and submission portal—we
          manage all of this for you.
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
              <p class="font-medium">Eligibility Review Across Provinces</p>
              <p class="text-gray-600">
                We screen your profile against all available PNP options to find
                your best fit.
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
              <p class="font-medium">Stream Selection & Strategy</p>
              <p class="text-gray-600">
                Based on your goals and qualifications, we recommend the most
                strategic route—direct, job-offer based, or Express
                Entry-linked.
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
              <p class="font-medium">Document Preparation & Submission</p>
              <p class="text-gray-600">
                We handle everything from EOI submissions to employer paperwork
                and nomination applications.
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
              <p class="font-medium">Post-Nomination PR Support</p>
              <p class="text-gray-600">
                Once nominated, we help you file your PR application through
                Express Entry or the paper-based route.
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
              <p class="font-medium">Follow-Up & Landing Guidance</p>
              <p class="text-gray-600">
                We track your application and provide guidance on settlement
                planning and next steps.
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

        <div class="grid md:grid-cols-2 gap-4 mt-4">
          <div class="bg-white p-4 rounded-lg shadow-sm">
            <p class="text-gray-800">
              A tech worker with 1 year of experience in Ontario aiming to apply
              through the
              <span class="font-semibold">OINP Human Capital Stream</span>
            </p>
          </div>

          <div class="bg-white p-4 rounded-lg shadow-sm">
            <p class="text-gray-800">
              A restaurant worker in Alberta with a full-time job offer needing
              help with an
              <span class="font-semibold">employer-driven stream</span>
            </p>
          </div>

          <div class="bg-white p-4 rounded-lg shadow-sm">
            <p class="text-gray-800">
              A Manitoba graduate transitioning from PGWP to PR via the
              <span class="font-semibold">International Graduate Stream</span>
            </p>
          </div>

          <div class="bg-white p-4 rounded-lg shadow-sm">
            <p class="text-gray-800">
              A foreign nurse in the Express Entry pool looking to gain 600
              points through a
              <span class="font-semibold">Saskatchewan nomination</span>
            </p>
          </div>
        </div>
      </section>

      <!-- FAQ Section with Accordion -->
      <section class="bg-white rounded-md p-6">
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
                >Do I need a job offer to apply for PNP?</span
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
                  Not always. Some streams are open to individuals with work or
                  study experience in the province, or strong credentials alone.
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
                >Can I apply to multiple provinces at once?</span
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
                  You can't apply to more than one province at the same time if
                  you're in an active process. But we can assess which one
                  offers the strongest chance.
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
                >What's the difference between PNP and Express Entry?</span
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
                  PNP is run by provinces; Express Entry is federal. Some PNP
                  streams are aligned with Express Entry and offer bonus points.
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
                >Do I need to live in the province after nomination?</span
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
                  Yes—at least initially. Each nomination is based on the
                  genuine intention to settle in that province.
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
              <span class="font-medium">Is there a fee to apply for PNP?</span>
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
                  Yes, most provinces charge a processing fee. We'll advise you
                  on costs depending on the province you apply to.
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
                  Times are estimates and vary by province and stream. See
                  individual PNP portals for updates.
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
              Want to Know Which Province Is Right for You?
            </h2>
            <p class="text-lg font-light pr-4">
              Whether you're in Canada or abroad, we help you navigate the most
              suitable PNP stream for your profile—and turn your nomination into
              permanent residency.
            </p>
          </div>
          <div>
            <button
              routerLink="/book-your-appointment"
              class="bg-white text-fire-600 px-8 py-3 rounded-lg cursor-pointer font-medium hover:bg-gray-100 transition-colors shadow-lg"
            >
              Book a PNP Consultation Today
            </button>
          </div>
        </div>
      </section>
    </div>
  `,
})
export class ProvincialNomineeComponent {
  activeFaq = signal(-1);

  toggleFaq(index: number) {
    this.activeFaq.update((current) => (current === index ? -1 : index));
  }
}
