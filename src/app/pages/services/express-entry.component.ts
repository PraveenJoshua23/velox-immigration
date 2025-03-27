import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-express-entry',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="space-y-8">
      <!-- Hero Section -->
      <div
        class="bg-sea-900 text-white rounded-lg px-8 py-10 relative bg-cover bg-center"
        [style.backgroundImage]="'url(/assets/images/express-entry-hero.png)'"
        style="min-height: 250px;"
      >
        <h1 class="text-3xl md:text-5xl mb-4">Express Entry Programs</h1>
        <p class="text-lg">
          Your fast-track pathway to permanent residency in Canada—built for
          skilled professionals like you.
        </p>
      </div>

      <!-- Overview Section -->
      <section class="bg-white p-6 ">
        <h2 class="text-2xl text-sea-900 mb-4">
          Move to Canada as a Skilled Worker
        </h2>
        <p class="text-gray-700">
          Canada's Express Entry system is one of the fastest and most
          competitive immigration pathways for skilled workers. Whether you're
          applying under the Canadian Experience Class (CEC), Federal Skilled
          Worker Program (FSW), or Federal Skilled Trades Program (FST), Velox
          Immigration helps you navigate every stage—from profile creation to
          receiving your permanent resident visa.
        </p>
        <button
          routerLink="/book-your-appointment"
          class="mt-4 bg-fire-600 text-white px-6 py-3 rounded-lg hover:bg-fire-700 transition-colors shadow-md"
        >
          Book Consultation to Check Your Eligibility
        </button>
      </section>

      <!-- Who This Is For Section -->
      <section class="bg-gray-50 rounded-md p-6">
        <h2 class="text-2xl text-sea-900 mb-4 flex items-center">
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
            />
          </svg>
          Who This Is For
        </h2>
        <p class="text-gray-700 mb-4">
          You may qualify under Express Entry if you are:
        </p>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div
            class="bg-white p-6 rounded-lg shadow-sm border-l-4 border-fire-600"
          >
            <h3 class="font-semibold">Federal Skilled Worker (FSW)</h3>
            <p class="text-sm text-gray-600 mt-2">
              For skilled workers with foreign work experience
            </p>
            <ul class="mt-2 space-y-1 text-sm text-gray-600">
              <li>• Minimum 1 year skilled work experience</li>
              <li>• Language proficiency (CLB 7)</li>
              <li>• Education assessment (ECA)</li>
            </ul>
          </div>

          <div
            class="bg-white p-6 rounded-lg shadow-sm border-l-4 border-fire-600"
          >
            <h3 class="font-semibold">Canadian Experience Class (CEC)</h3>
            <p class="text-sm text-gray-600 mt-2">
              For recent graduates with Canadian experience
            </p>
            <ul class="mt-2 space-y-1 text-sm text-gray-600">
              <li>• 1 year Canadian work experience</li>
              <li>• Language proficiency (CLB 7 for NOC 0/A, CLB 5 for B)</li>
            </ul>
          </div>

          <div
            class="bg-white p-6 rounded-lg shadow-sm border-l-4 border-fire-600"
          >
            <h3 class="font-semibold">Federal Skilled Trades (FST)</h3>
            <p class="text-sm text-gray-600 mt-2">
              For qualified tradespersons
            </p>
            <ul class="mt-2 space-y-1 text-sm text-gray-600">
              <li>• 2 years work experience in a skilled trade</li>
              <li>• Language proficiency (CLB 5)</li>
              <li>• Valid job offer or certification</li>
            </ul>
          </div>
        </div>

        <div class="mt-6 space-y-3">
          <div class="flex gap-2 items-start">
            <svg
              class="w-5 h-5 text-fire-600 mt-0.5 flex-shrink-0"
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
            <span
              >PR-ready candidates with strong language skills, education, and
              job experience</span
            >
          </div>
          <div class="flex gap-2 items-start">
            <svg
              class="w-5 h-5 text-fire-600 mt-0.5 flex-shrink-0"
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
            <span
              >Potential Provincial Nominee Program (PNP) applicants using an
              Express Entry-aligned stream</span
            >
          </div>
        </div>
      </section>

      <!-- Our Services Section -->
      <section class="bg-white rounded-md p-6">
        <h2 class="text-2xl text-sea-900 mb-4 flex items-center">
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
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          What We Offer
        </h2>
        <p class="text-gray-700 mb-4">
          Velox Immigration provides end-to-end support through each step of the
          Express Entry journey:
        </p>

        <div class="space-y-6">
          <div
            class="bg-white p-6 rounded-lg shadow-sm border-l-4 border-sea-600"
          >
            <h3 class="text-xl font-medium text-sea-900 mb-2">
              Express Entry Profile Creation
            </h3>
            <p class="text-gray-700">
              We assess your eligibility and prepare your online profile,
              ensuring accurate entry of education, work history, language
              results (IELTS/CELPIP/TEF), and National Occupation Classification
              (NOC) codes.
            </p>
          </div>

          <div
            class="bg-white p-6 rounded-lg shadow-sm border-l-4 border-sea-600"
          >
            <h3 class="text-xl font-medium text-sea-900 mb-2">
              Comprehensive Ranking System (CRS) Optimization
            </h3>
            <p class="text-gray-700">
              We help you improve your CRS score by exploring job offers,
              provincial nominations, education equivalency (ECA), and language
              retesting strategies.
            </p>
            <div class="bg-gray-50 p-4 rounded-lg mt-4">
              <div class="space-y-4">
                <div class="flex justify-between items-center border-b pb-2">
                  <span class="font-medium">Core Factors</span>
                  <span class="text-fire-600">up to 600 points</span>
                </div>
                <div class="flex justify-between items-center border-b pb-2">
                  <span class="font-medium">Spouse Factors</span>
                  <span class="text-fire-600">up to 40 points</span>
                </div>
                <div class="flex justify-between items-center border-b pb-2">
                  <span class="font-medium">Skill Transferability</span>
                  <span class="text-fire-600">up to 100 points</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="font-medium">Additional Points</span>
                  <span class="text-fire-600">up to 600 points</span>
                </div>
              </div>
            </div>
          </div>

          <div
            class="bg-white p-6 rounded-lg shadow-sm border-l-4 border-sea-600"
          >
            <h3 class="text-xl font-medium text-sea-900 mb-2">
              Permanent Residence Application After ITA
            </h3>
            <p class="text-gray-700">
              Once you receive an Invitation to Apply (ITA), we help you gather
              and submit all required documentation—proof of work experience,
              police clearances, medical exams, and more—within the 60-day
              window.
            </p>
          </div>
        </div>
      </section>

      <!-- Requirements Section -->
      <section class="bg-gray-50 rounded-md p-6">
        <h2 class="text-2xl text-sea-900 mb-4 flex items-center">
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
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          What You Need to Apply
        </h2>
        <p class="text-gray-700 mb-4">
          To enter the Express Entry pool, you typically need:
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 class="font-medium text-sea-900 mb-3">
              For Express Entry Pool:
            </h3>
            <ul class="space-y-3">
              <li class="flex gap-2 items-start">
                <svg
                  class="w-5 h-5 text-fire-600 mt-0.5 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
                <span
                  ><strong>Language test results</strong> (IELTS/CELPIP for
                  English, TEF for French)</span
                >
              </li>
              <li class="flex gap-2 items-start">
                <svg
                  class="w-5 h-5 text-fire-600 mt-0.5 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
                <span
                  ><strong>Educational Credential Assessment (ECA)</strong> if
                  your education is from outside Canada</span
                >
              </li>
              <li class="flex gap-2 items-start">
                <svg
                  class="w-5 h-5 text-fire-600 mt-0.5 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
                <span
                  >At least
                  <strong>1 year of skilled work experience</strong> (in Canada
                  or abroad)</span
                >
              </li>
              <li class="flex gap-2 items-start">
                <svg
                  class="w-5 h-5 text-fire-600 mt-0.5 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
                <span>A valid <strong>passport</strong></span>
              </li>
              <li class="flex gap-2 items-start">
                <svg
                  class="w-5 h-5 text-fire-600 mt-0.5 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
                <span
                  >Proof of <strong>settlement funds</strong> (FSW & FST
                  only)</span
                >
              </li>
              <li class="flex gap-2 items-start">
                <svg
                  class="w-5 h-5 text-fire-600 mt-0.5 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
                <span
                  ><strong>Job offer</strong> or
                  <strong>PNP nomination</strong> (if applicable)</span
                >
              </li>
            </ul>
          </div>

          <div>
            <h3 class="font-medium text-sea-900 mb-3">
              After Receiving an ITA:
            </h3>
            <ul class="space-y-3">
              <li class="flex gap-2 items-start">
                <svg
                  class="w-5 h-5 text-fire-600 mt-0.5 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
                <span
                  >Medical exam and <strong>police certificates</strong></span
                >
              </li>
              <li class="flex gap-2 items-start">
                <svg
                  class="w-5 h-5 text-fire-600 mt-0.5 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
                <span
                  ><strong>Employment letters</strong> verifying work
                  experience</span
                >
              </li>
              <li class="flex gap-2 items-start">
                <svg
                  class="w-5 h-5 text-fire-600 mt-0.5 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
                <span
                  ><strong>Proof of funds</strong> to support yourself and
                  family in Canada</span
                >
              </li>
              <li class="flex gap-2 items-start">
                <svg
                  class="w-5 h-5 text-fire-600 mt-0.5 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
                <span
                  ><strong>Digital photographs</strong> meeting
                  specifications</span
                >
              </li>
              <li class="flex gap-2 items-start">
                <svg
                  class="w-5 h-5 text-fire-600 mt-0.5 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
                <span
                  ><strong>Civil status documents</strong> (marriage
                  certificates, birth certificates)</span
                >
              </li>
            </ul>
          </div>
        </div>

        <p class="text-gray-700 mt-4">
          We will create a complete and personalized checklist for your profile.
        </p>
      </section>

      <!-- How We Work Section -->
      <section class="bg-white rounded-md p-6">
        <h2 class="text-2xl text-sea-900 mb-4 flex items-center">
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
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          How We Work
        </h2>

        <div class="space-y-4 mt-6">
          <div class="flex gap-3">
            <div
              class="bg-fire-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0"
            >
              1
            </div>
            <div>
              <p class="font-medium">Eligibility Assessment & Strategy</p>
              <p class="text-gray-600">
                We assess your qualifications and recommend the strongest EE
                stream or alternative if needed.
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
              <p class="font-medium">Profile Creation & Document Prep</p>
              <p class="text-gray-600">
                We guide you through language testing, ECAs, NOC code alignment,
                and profile creation.
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
              <p class="font-medium">CRS Score Optimization</p>
              <p class="text-gray-600">
                We work with you to explore ways to increase your CRS score
                while waiting for a draw.
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
              <p class="font-medium">Post-ITA PR Submission</p>
              <p class="text-gray-600">We compile and submit</p>
            </div>
          </div>

          <div class="flex gap-3">
            <div
              class="bg-fire-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0"
            >
              5
            </div>
            <div>
              <p class="font-medium">Follow-Up & Final Steps</p>
              <p class="text-gray-600">
                We track your file, respond to IRCC requests, and support you
                through approval and landing.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Common Scenarios Section -->
      <section class="bg-gray-50 rounded-md p-6">
        <h2 class="text-2xl text-sea-900 mb-4 flex items-center">
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
            />
          </svg>
          Common Scenarios We Handle
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <div
            class="bg-white p-5 rounded-lg shadow-sm border-l-4 border-sea-600"
          >
            <h3 class="font-medium text-sea-900 mb-2">
              Foreign Work Experience
            </h3>
            <p class="text-gray-700">
              Skilled workers abroad needing help with properly classifying
              their experience using NOC codes and selecting the right ECA
              provider for their credentials.
            </p>
          </div>

          <div
            class="bg-white p-5 rounded-lg shadow-sm border-l-4 border-sea-600"
          >
            <h3 class="font-medium text-sea-900 mb-2">
              Canadian Experience Class
            </h3>
            <p class="text-gray-700">
              Recent international graduates and skilled workers in Canada
              looking to transition from temporary to permanent status through
              CEC.
            </p>
          </div>

          <div
            class="bg-white p-5 rounded-lg shadow-sm border-l-4 border-sea-600"
          >
            <h3 class="font-medium text-sea-900 mb-2">CRS Score Enhancement</h3>
            <p class="text-gray-700">
              Candidates with job offers or provincial nominations looking to
              maximize their CRS scores to improve their chances in Express
              Entry draws.
            </p>
          </div>

          <div
            class="bg-white p-5 rounded-lg shadow-sm border-l-4 border-sea-600"
          >
            <h3 class="font-medium text-sea-900 mb-2">PNP Alternatives</h3>
            <p class="text-gray-700">
              Express Entry candidates with lower scores seeking alternative
              pathways through provincial nomination programs to secure
              additional points.
            </p>
          </div>

          <div
            class="bg-white p-5 rounded-lg shadow-sm border-l-4 border-sea-600"
          >
            <h3 class="font-medium text-sea-900 mb-2">
              Post-ITA Documentation
            </h3>
            <p class="text-gray-700">
              Clients who received an Invitation to Apply (ITA) and need help
              gathering, organizing, and properly submitting the required
              documentation within the 60-day window.
            </p>
          </div>

          <div
            class="bg-white p-5 rounded-lg shadow-sm border-l-4 border-sea-600"
          >
            <h3 class="font-medium text-sea-900 mb-2">
              Language Test Preparation
            </h3>
            <p class="text-gray-700">
              Applicants preparing for IELTS, CELPIP, or TEF language tests who
              need guidance on requirements and strategies to achieve their
              target CLB levels.
            </p>
          </div>
        </div>
      </section>

      <!-- FAQ Section -->
      <section class="bg-white rounded-md p-6 mt-8">
        <h2 class="text-2xl text-sea-900 mb-6 flex items-center">
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
              d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
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
                >What's a competitive CRS score for an invitation?</span
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
                (activeFaq() === 0 ? 'max-h-56' : 'max-h-0')
              "
            >
              <div class="p-4 border-t bg-gray-50">
                <p>
                  CRS score cutoffs vary with each draw. In recent general
                  draws, scores between 470-490 have been competitive for
                  Federal Skilled Worker (FSW) and Canadian Experience Class
                  (CEC) candidates. Program-specific or PNP draws may have
                  different thresholds. Our team monitors these trends and helps
                  optimize your profile to meet or exceed current requirements.
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
                >Can I include my spouse and children in my application?</span
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
                (activeFaq() === 1 ? 'max-h-56' : 'max-h-0')
              "
            >
              <div class="p-4 border-t bg-gray-50">
                <p>
                  Yes, your spouse or common-law partner and dependent children
                  can be included as accompanying dependents on your Express
                  Entry application. Your spouse's factors (like language skills
                  and education) can provide additional points to your CRS
                  score. Dependent children are typically those under 22 years
                  of age who don't have a spouse and are financially dependent
                  on you.
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
                >What if my CRS score isn't high enough for an ITA?</span
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
                (activeFaq() === 2 ? 'max-h-64' : 'max-h-0')
              "
            >
              <div class="p-4 border-t bg-gray-50">
                <p>
                  If your CRS score isn't competitive, we'll work with you on
                  multiple strategies to improve it:
                </p>
                <ul class="mt-2 space-y-1 list-disc pl-5 text-sm text-gray-700">
                  <li>
                    Pursuing Provincial Nominee Programs (adds 600 points)
                  </li>
                  <li>Improving language test scores (up to 310 points)</li>
                  <li>Gaining additional Canadian work experience</li>
                  <li>Adding education credentials or Canadian education</li>
                  <li>
                    Exploring alternative immigration programs outside Express
                    Entry
                  </li>
                </ul>
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
                >Does Express Entry guarantee permanent residency?</span
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
                (activeFaq() === 3 ? 'max-h-56' : 'max-h-0')
              "
            >
              <div class="p-4 border-t bg-gray-50">
                <p>
                  No. Being in the Express Entry pool doesn't guarantee an
                  invitation to apply, and receiving an ITA doesn't guarantee
                  approval. Your application must be complete, accurate, and
                  meet all eligibility requirements. Additionally, you must pass
                  medical, security, and background checks. Our expertise
                  ensures your application is properly prepared to maximize
                  chances of approval once invited.
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
                >What is the typical processing time for Express Entry?</span
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
                (activeFaq() === 4 ? 'max-h-56' : 'max-h-0')
              "
            >
              <div class="p-4 border-t bg-gray-50">
                <p>
                  IRCC aims to process most Express Entry applications within 6
                  months from the date a complete application is submitted after
                  receiving an ITA. However, processing times can vary based on
                  application volume, completeness of your submission,
                  verification requirements, and other factors. Our detailed
                  approach to application preparation helps minimize delays that
                  could extend this timeframe.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Ready to Begin Banner -->
      <section class="bg-fire-600 text-white rounded-lg p-8 my-8">
        <div class="flex flex-col md:flex-row items-center justify-between">
          <div class="mb-6 md:mb-0 md:max-w-xl">
            <h2 class="text-2xl font-bold mb-3">
              Your Path to Canadian Permanent Residency Starts Now
            </h2>
            <p class="text-lg font-light">
              Express Entry is competitive—but with our expertise and
              personalized strategies, we can help make your Canadian dream a
              reality. Take the first step today.
            </p>
            <ul class="mt-4 space-y-2">
              <li class="flex items-center">
                <svg
                  class="w-5 h-5 mr-2 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Expert guidance through every stage
              </li>
              <li class="flex items-center">
                <svg
                  class="w-5 h-5 mr-2 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Personalized immigration strategy
              </li>
              <li class="flex items-center">
                <svg
                  class="w-5 h-5 mr-2 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Maximize your chances of success
              </li>
            </ul>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-lg md:min-w-80">
            <h3 class="text-fire-700 font-bold text-xl mb-3">
              Book Your Consultation
            </h3>
            <p class="text-gray-700 mb-4">
              Get a personalized assessment of your Express Entry eligibility
              and learn how we can help with your journey to Canada.
            </p>
            <button
              routerLink="/book-your-appointment"
              class="w-full bg-fire-600 text-white px-6 py-3 rounded-lg cursor-pointer font-medium hover:bg-fire-700 transition-colors"
            >
              Schedule Your Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  `,
})
export class ExpressEntryComponent {
  activeFaq = signal(-1);

  toggleFaq(index: number) {
    this.activeFaq.update((current) => (current === index ? -1 : index));
  }
}
