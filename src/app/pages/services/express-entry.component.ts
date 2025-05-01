import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ServiceHeaderComponent } from '../../components/service-header.component';
import { HowWeWorkComponent } from '../../components/how-we-work.component';
import { CommonScenariosComponent } from '../../components/common-scenarios.component';
import { FaqSectionComponent } from '../../components/faq-section.component';
import { CtaBannerComponent } from '../../components/cta-banner.component';

@Component({
  selector: 'app-express-entry',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ServiceHeaderComponent,
    HowWeWorkComponent,
    CommonScenariosComponent,
    FaqSectionComponent,
    CtaBannerComponent,
  ],
  template: `
    <div class="space-y-8">
      <app-service-header
        [title]="content?.title"
        [description]="content?.subtitle"
        backgroundImage="/assets/images/express-entry-hero.png"
      />

      <!-- Overview Section -->
      <section class="bg-white p-6 ">
        <h2 class="text-2xl text-sea-900 mb-4">
          {{ content?.intro_title }}
        </h2>
        <p class="text-gray-700">
          {{ content?.intro_description }}
        </p>
        <button
          [routerLink]="content?.intro_cta_link"
          class="mt-4 bg-fire-600 text-white px-6 py-3 rounded-lg hover:bg-fire-700 transition-colors shadow-md"
        >
          {{ content?.intro_cta_text }}
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
          {{ content?.who_we_help_title }}
        </h2>
        <p class="text-gray-700 mb-4">
          {{ content?.who_we_help_intro }}
        </p>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          @for (item of content?.who_we_help_items; track $index) {
          <div
            class="bg-white p-6 rounded-lg shadow-sm border-l-4 border-fire-600"
          >
            <h3 class="font-semibold">{{ item.title }}</h3>
            <div class="list-inside" [innerHTML]="item.description"></div>
          </div>
          }
        </div>

        @if (content?.who_we_help_subitems) {
        <div class="mt-6 space-y-3">
          @for (item of content?.who_we_help_subitems; track $index) {
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
            <span>{{ item.item }}</span>
          </div>
          }
        </div>
        }
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
          {{ content?.what_we_offer_intro }}
        </p>

        <div class="space-y-6">
          @for (item of content?.what_we_offer_items; track $index) {
          <div
            class="bg-white p-6 rounded-lg shadow-sm border-l-4 border-sea-600"
          >
            <h3 class="text-xl font-medium text-sea-900 mb-2">
              {{ item.title }}
            </h3>
            <p class="text-gray-700">
              {{ item.description }}
            </p>
            @if (item.table) {
            <div class="bg-gray-50 p-4 rounded-lg mt-4">
              <div class="space-y-4">
                @for (row of item.table; track $index) {
                <div class="flex justify-between items-center border-b pb-2">
                  <span class="font-medium">{{ row.table_item }}</span>
                  <span class="text-fire-600">{{ row.table_value }}</span>
                </div>
                }
              </div>
            </div>
            }
          </div>
          }
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
          {{ content?.what_you_need_intro }}
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          @for (item of content?.what_you_need_items; track $index) {
          <div>
            <h3 class="font-medium text-sea-900 mb-3">
              {{ item.title }}
            </h3>
            <ul class="space-y-3">
              @for (li of item.description_items; track $index) {
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
                <span>{{ li.description }}</span>
              </li>
              }
            </ul>
          </div>
          }
        </div>

        <p class="text-gray-700 mt-4">
          {{ content?.what_you_need_footnote }}
        </p>
      </section>

      <!-- How We Work Section -->
      <app-how-we-work [steps]="content?.how_we_work_items" />

      <!-- Common Scenarios Section -->
      <app-common-scenarios
        [commonScenarios]="content?.common_scenarios_items"
      />

      <!-- FAQ Section -->
      <app-faq-section [faqs]="content?.faq_items" />

      <!-- Ready to Begin Banner -->
      <app-cta-banner
        [title]="content?.banner_title"
        [description]="content?.banner_subtitle"
        [buttonText]="content?.banner_cta_text"
        [buttonLink]="content?.banner_cta_link"
      />
      <!-- <section class="bg-fire-600 text-white rounded-lg p-8 my-8">
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
      </section> -->
    </div>
  `,
})
export class ExpressEntryComponent {
  activeFaq = signal(-1);
  content: any;

  constructor(private activatedRoute: ActivatedRoute, private route: Router) {
    this.activatedRoute.data.subscribe((response: any) => {
      this.content = response.data.data;

      if (
        this.content.status === 'draft' ||
        this.content.status === 'archived'
      ) {
        this.route.navigate(['/']);
      }
    });
  }

  toggleFaq(index: number) {
    this.activeFaq.update((current) => (current === index ? -1 : index));
  }
}
