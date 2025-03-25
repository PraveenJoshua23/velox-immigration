import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="space-y-8">
      <div class="bg-sea-900 text-white rounded-lg p-8">
        <h1 class="text-3xl font-bold mb-4">Work in Canada</h1>
        <p class="text-lg">
          Build your career in Canada's diverse and growing economy
        </p>
      </div>

      <!-- Overview Section -->
      <section class="bg-white p-6 ">
        <h2 class="text-2xl font-bold text-sea-900 mb-4">Overview</h2>
        <p class="text-gray-700">
          Canada offers various work permits that allow foreign nationals to
          gain employment experience, contribute to the economy, and, in many
          cases, transition to permanent residency. Whether you're an
          international graduate, a skilled worker, or a spouse of a student or
          worker, there are multiple pathways to legally work in Canada.
        </p>
      </section>

      <!-- Why Work in Canada -->
      <section class="bg-fire-50 p-6 rounded-lg">
        <h2 class="text-2xl font-bold text-sea-900 mb-4">
          Why Work in Canada?
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="flex items-start gap-2">
            <span class="text-fire-600">✔</span>
            <p>Gain valuable Canadian work experience</p>
          </div>
          <div class="flex items-start gap-2">
            <span class="text-fire-600">✔</span>
            <p>Opportunity for permanent residency</p>
          </div>
          <div class="flex items-start gap-2">
            <span class="text-fire-600">✔</span>
            <p>Competitive wages and labor protections</p>
          </div>
          <div class="flex items-start gap-2">
            <span class="text-fire-600">✔</span>
            <p>Access to diverse job markets</p>
          </div>
          <div class="flex items-start gap-2 md:col-span-2">
            <span class="text-fire-600">✔</span>
            <p>Pathways for spouses and family members to join workers</p>
          </div>
        </div>
      </section>

      <!-- Types of Work Permits -->
      <section>
        <h2
          class="text-2xl font-bold text-sea-900 mb-4 flex items-center gap-2 px-6"
        >
          Types of Work Permits
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div class="bg-sea-50 px-6 py-8 rounded-lg border border-sea-500">
            <h3 class="font-semibold text-fire-600 text-xl mb-2">
              Open Work Permit
            </h3>
            <p class="text-sm">
              Work for any employer in Canada (with exceptions)
            </p>
          </div>
          <div class="bg-sea-50 px-6 py-8 rounded-lg border border-sea-500">
            <h3 class="font-semibold text-fire-600 text-xl mb-2">
              Employer-Specific (Closed) Work Permit
            </h3>
            <p class="text-sm">Restricted to a specific employer and job</p>
          </div>
        </div>
      </section>

      <!-- Post-Graduation Work Permit -->
      <section class="bg-white p-6 ">
        <h2
          class="text-2xl font-bold text-sea-900 mb-4 flex items-center gap-2"
        >
          <img src="assets/images/plane.svg" class="pb-1" />Post-Graduation Work
          Permit (PGWP)
        </h2>

        <h3 class="text-xl font-semibold mb-3">Overview</h3>
        <p class="mb-4 text-gray-700">
          The PGWP allows international students who have completed an eligible
          program at a Designated Learning Institution (DLI) to work in Canada
          without an employer-specific restriction. It serves as a great pathway
          to permanent residency through Express Entry.
        </p>

        <div class="mb-4">
          <h4 class="font-semibold text-fire-600 mb-2 flex items-center gap-2">
            Eligibility Requirements:
          </h4>
          <ul class="list-disc pl-8 space-y-2 text-gray-700">
            <li>
              Completed a full-time program at an eligible DLI (minimum 8
              months)
            </li>
            <li>Program must lead to a degree, diploma, or certificate</li>
            <li>Applied within 180 days of receiving final marks</li>
            <li>Held valid student status at the time of application</li>
          </ul>
        </div>

        <div class="mb-4">
          <h4 class="font-semibold text-fire-600 mb-2 flex items-center gap-2">
            Work Duration:
          </h4>
          <p class="text-gray-700 pl-8">
            Matches the length of the study program, up to a maximum of 3 years.
          </p>
        </div>

        <div>
          <h4 class="font-semibold text-fire-600 mb-2 flex items-center gap-2">
            How Velox Immigration Helps:
          </h4>
          <div class="pl-8 space-y-1">
            <div class="flex items-center  gap-2">
              <img src="assets/icons/tick-circle.svg" class="size-5" />
              <p>Eligibility assessment and compliance checks</p>
            </div>
            <div class="flex items-start gap-2">
              <img src="assets/icons/tick-circle.svg" class="size-5" />
              <p>Application preparation and submission</p>
            </div>
            <div class="flex items-start gap-2">
              <img src="assets/icons/tick-circle.svg" class="size-5" />
              <p>PR pathway guidance (Express Entry, PNP)</p>
            </div>
          </div>
        </div>
      </section>

      <hr />

      <!-- Co-op Work Permit -->
      <section class="bg-white p-6">
        <h2
          class="text-2xl font-bold text-sea-900 mb-4 flex items-center gap-2"
        >
          <img src="assets/images/plane.svg" class="pb-1" />Co-op Work Permit
        </h2>

        <h3 class="text-xl font-semibold mb-3">Overview</h3>
        <p class="mb-4 text-gray-700">
          A Co-op Work Permit is required for students whose academic program
          includes a mandatory work component.
        </p>

        <div class="mb-4">
          <h4 class="font-semibold text-fire-600 mb-2 flex items-center gap-2">
            Key Requirements:
          </h4>
          <ul class="list-disc pl-8 space-y-2 text-gray-700">
            <li>Must hold a valid study permit</li>
            <li>Work must be an integral part of the academic program</li>
            <li>DLI must confirm the work requirement in writing</li>
          </ul>
        </div>

        <div>
          <h4 class="font-semibold text-fire-600 mb-2 flex items-center gap-2">
            How Velox Immigration Helps:
          </h4>
          <div class="pl-8 space-y-1">
            <div class="flex items-center gap-2">
              <img src="assets/icons/tick-circle.svg" class="size-5" />
              <p>Assistance in obtaining a Co-op Work Permit</p>
            </div>
            <div class="flex items-start gap-2">
              <img src="assets/icons/tick-circle.svg" class="size-5" />
              <p>Compliance with institutional and IRCC regulations</p>
            </div>
            <div class="flex items-start gap-2">
              <img src="assets/icons/tick-circle.svg" class="size-5" />
              <p>Transition support to PGWP after graduation</p>
            </div>
          </div>
        </div>
      </section>

      <hr />

      <!-- Open Work Permit -->
      <section class="bg-white p-6">
        <h2
          class="text-2xl font-bold text-sea-900 mb-4 flex items-center gap-2"
        >
          <img src="assets/images/plane.svg" class="pb-1" /> Open Work Permit
          (Includes Spousal Open Work Permit)
        </h2>

        <h3 class="text-xl font-semibold mb-3">Overview</h3>
        <p class="mb-4 text-gray-700">
          An Open Work Permit allows eligible individuals to work for any
          employer in Canada, except those listed as ineligible by IRCC.
        </p>

        <div class="mb-4">
          <h4 class="font-semibold text-fire-600 mb-2 flex items-center gap-2">
            Who Can Apply?
          </h4>
          <ul class="list-disc pl-8 space-y-2 text-gray-700">
            <li>International graduates eligible for a PGWP</li>
            <li>
              Spouses of foreign workers and students (Spousal Open Work Permit)
            </li>
            <li>Refugee claimants and protected persons</li>
            <li>Certain employer-specific permit holders in special cases</li>
          </ul>
        </div>

        <div>
          <h4 class="font-semibold text-fire-600 mb-2 flex items-center gap-2">
            How Velox Immigration Helps:
          </h4>
          <div class="pl-8 space-y-1">
            <div class="flex items-center gap-2">
              <img src="assets/icons/tick-circle.svg" class="size-5" />
              <p>Identifying eligibility and best work permit options</p>
            </div>
            <div class="flex items-start gap-2">
              <img src="assets/icons/tick-circle.svg" class="size-5" />
              <p>Assistance with application preparation and renewals</p>
            </div>
            <div class="flex items-start gap-2">
              <img src="assets/icons/tick-circle.svg" class="size-5" />
              <p>Advising on PR pathways (Express Entry, PNP)</p>
            </div>
          </div>
        </div>
      </section>

      <hr />

      <!-- Bridging Open Work Permit -->
      <section class="bg-white p-6 ">
        <h2
          class="text-2xl font-bold text-sea-900 mb-4 flex items-center gap-2"
        >
          <img src="assets/images/plane.svg" class="pb-1" /> Bridging Open Work
          Permit (BOWP)
        </h2>

        <h3 class="text-xl font-semibold mb-3">Overview</h3>
        <p class="mb-4 text-gray-700">
          A BOWP allows applicants awaiting a decision on their PR application
          to continue working in Canada.
        </p>

        <div class="mb-4">
          <h4 class="font-semibold text-fire-600 mb-2 flex items-center gap-2">
            Eligibility Requirements:
          </h4>
          <ul class="list-disc pl-8 space-y-2 text-gray-700">
            <li>
              Applied for PR under an eligible program (Express Entry, PNP, AIP,
              etc.)
            </li>
            <li>
              Must hold a valid work permit or have applied for an extension
              before expiry
            </li>
          </ul>
        </div>

        <div>
          <h4 class="font-semibold text-fire-600 mb-2 flex items-center gap-2">
            How Velox Immigration Helps:
          </h4>
          <div class="pl-8 space-y-1">
            <div class="flex items-center gap-2">
              <img src="assets/icons/tick-circle.svg" class="size-5" />
              <p>Ensuring seamless transition from current work permit</p>
            </div>
            <div class="flex items-start gap-2">
              <img src="assets/icons/tick-circle.svg" class="size-5" />
              <p>Avoiding employment gaps while awaiting PR approval</p>
            </div>
            <div class="flex items-start gap-2">
              <img src="assets/icons/tick-circle.svg" class="size-5" />
              <p>Handling complex cases, including refusals</p>
            </div>
          </div>
        </div>
      </section>

      <hr />

      <!-- Closed Work Permit -->
      <section class="bg-white p-6 ">
        <h2
          class="text-2xl font-bold text-sea-900 mb-4 flex items-center gap-2"
        >
          <img src="assets/images/plane.svg" class="pb-1" /> Closed Work Permit
          (Employer-Specific) & LMIA-Exempt Permits
        </h2>

        <h3 class="text-xl font-semibold mb-3">Overview</h3>
        <p class="mb-4 text-gray-700">
          A Closed Work Permit is tied to a specific employer, job, and
          location. Most require an <strong>LMIA</strong>, unless exempt under
          special categories.
        </p>

        <div class="mb-4">
          <h4 class="font-semibold text-fire-600 mb-2 flex items-center gap-2">
            Key Requirements:
          </h4>
          <ul class="list-disc pl-8 space-y-2 text-gray-700">
            <li>Must have a valid job offer from a Canadian employer</li>
            <li>
              Employer must secure a positive
              <strong>Labour Market Impact Assessment (LMIA)</strong> unless
              exempt
            </li>
            <li>
              Worker must meet the skills, education, and experience required
            </li>
          </ul>
        </div>

        <div class="mb-4">
          <h4 class="font-semibold text-fire-600 mb-2 flex items-center gap-2">
            LMIA-Exempt Work Permits:
          </h4>
          <ul class="list-disc pl-8 space-y-2 text-gray-700">
            <li>Intra-company transferees</li>
            <li>International agreements (CUSMA, CETA, GATS, etc.)</li>
            <li>Charitable and religious workers</li>
          </ul>
        </div>

        <div>
          <h4 class="font-semibold text-fire-600 mb-2 flex items-center gap-2">
            How Velox Immigration Helps:
          </h4>
          <div class="pl-8 space-y-1">
            <div class="flex items-center gap-2">
              <img src="assets/icons/tick-circle.svg" class="size-5" />
              <p>Assisting employers with LMIA approvals</p>
            </div>
            <div class="flex items-start gap-2">
              <img src="assets/icons/tick-circle.svg" class="size-5" />
              <p>Helping workers obtain employer-specific permits</p>
            </div>
            <div class="flex items-start gap-2">
              <img src="assets/icons/tick-circle.svg" class="size-5" />
              <p>Advising on LMIA exemptions and PR pathways</p>
            </div>
          </div>
        </div>
      </section>

      <hr />

      <!-- Work Permit Extensions -->
      <section class="bg-white p-6 ">
        <h2
          class="text-2xl font-bold text-sea-900 mb-4 flex items-center gap-2"
        >
          <img src="assets/images/plane.svg" class="pb-1" /> Work Permit
          Extensions
        </h2>

        <h3 class="text-xl font-semibold mb-3">Overview</h3>
        <p class="mb-4 text-gray-700">
          Workers in Canada must apply for an extension before their current
          work permit expires to maintain legal status.
        </p>

        <div class="mb-4">
          <h4 class="font-semibold text-fire-600 mb-2 flex items-center gap-2">
            Key Points:
          </h4>
          <ul class="list-disc pl-8 space-y-2 text-gray-700">
            <li>
              If applied before expiry, the worker may continue working under
              <strong>implied status</strong>
            </li>
            <li>
              Extensions depend on job offer validity, employer compliance, and
              PR eligibility
            </li>
          </ul>
        </div>

        <div>
          <h4 class="font-semibold text-fire-600 mb-2 flex items-center gap-2">
            How Velox Immigration Helps:
          </h4>
          <div class="pl-8 space-y-1">
            <div class="flex items-center gap-2">
              <img src="assets/icons/tick-circle.svg" class="size-5" />
              <p>Ensuring timely renewal applications</p>
            </div>
            <div class="flex items-start gap-2">
              <img src="assets/icons/tick-circle.svg" class="size-5" />
              <p>
                Reviewing eligibility for alternative work permits or PR
                pathways
              </p>
            </div>
            <div class="flex items-start gap-2">
              <img src="assets/icons/tick-circle.svg" class="size-5" />
              <p>Handling extension refusals and reapplications</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Why Choose Velox Immigration -->
      <section class="bg-fire-50 p-6 rounded-lg">
        <h2 class="text-2xl font-bold text-sea-900 mb-4">
          Why Choose Velox Immigration for Your Work Permit?
        </h2>
        <p class="text-gray-700 mb-6">
          Navigating Canadian work permit options can be overwhelming, but Velox
          Immigration makes it simple, efficient, and stress-free. Whether you
          need a
          <strong>closed work permit, PGWP, LMIA, or open work permit</strong>,
          our team ensures your application meets all eligibility requirements
          and maximizes your chances of success.
        </p>

        <div class="bg-white p-6 rounded-lg shadow">
          <h3 class="font-bold text-fire-900 mb-4 flex items-center gap-2">
            <img src="assets/images/plane.svg" class="pb-1" /> Ready to Work in
            Canada? Contact us today!
          </h3>
          <button
            routerLink="/contact"
            class="bg-fire-600 text-white px-6 py-3 rounded-lg hover:bg-fire-700 transition-colors w-full sm:w-auto"
          >
            Book Consultation
          </button>
        </div>
      </section>
    </div>
  `,
})
export class WorkComponent {}
