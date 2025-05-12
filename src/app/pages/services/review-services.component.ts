import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ServiceHeaderComponent } from '../../components/service-header.component';
import { CtaBannerComponent } from '../../components/cta-banner.component';
import { FaqSectionComponent } from '../../components/faq-section.component';
import { CommonScenariosComponent } from '../../components/common-scenarios.component';
import { HowWeWorkComponent } from '../../components/how-we-work.component';

@Component({
  selector: 'app-review-services',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ServiceHeaderComponent,
    CtaBannerComponent,
    FaqSectionComponent,
    CommonScenariosComponent,
    HowWeWorkComponent,
  ],
  template: `
    <div class="space-y-8">
      <app-service-header
        [title]="content.title"
        [description]="content.subtitle"
        backgroundImage="/assets/images/review-hero.png"
      />

      <!-- Overview Section -->
      <section class="bg-white p-6 rounded-lg">
        <h2 class="text-2xl text-sea-900 mb-4">
          {{ content.intro_title }}
        </h2>
        <p class="text-gray-700">
          {{ content.intro_description }}
        </p>
        <div class="mt-6">
          <button
            [routerLink]="content.intro_cta_link"
            class="bg-fire-600 text-white px-6 py-3 rounded-lg hover:bg-fire-700 transition-colors"
          >
            {{ content.intro_cta_text }}
          </button>
        </div>
      </section>

      <!-- Who This Is For Section -->
      <section class="bg-gray-50 rounded-md p-6">
        <h2 class="text-2xl text-sea-900 mb-4">
          {{ content.who_we_help_title }}
        </h2>
        <p class="text-gray-700">
          {{ content.who_we_help_intro }}
        </p>
        <ul class="py-3 space-y-2 list-disc pl-5 text-gray-700">
          @for (item of content.who_we_help_items; track $index) {
          <li>
            <span class="font-medium">
              {{ item.description }}
            </span>
          </li>
          }
        </ul>
      </section>

      <!-- Our Services Section -->
      <section class="bg-white rounded-md p-6">
        <h2 class="text-2xl text-sea-900 mb-4">What We Offer</h2>
        <p class="text-gray-700 mb-4">
          {{ content.what_we_offer_intro }}
        </p>

        <div class="space-y-6">
          @for (item of content.what_we_offer_items; track $index) {
          <div>
            <h3 class="text-xl font-medium text-fire-600 mb-2">
              {{ item.title }}
            </h3>
            <p class="text-gray-700">
              {{ item.description }}
            </p>
          </div>
          }
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
        <div [innerHTML]="content.what_you_need_to_apply"></div>
      </section>

      <!-- How We Work Section -->
      <app-how-we-work
        [intro]="content.how_we_work_intro"
        [steps]="content.how_we_work_items"
      />

      <!-- Common Scenarios Section -->
      <app-common-scenarios
        [commonScenarios]="content.common_scenarios_items"
      />

      <!-- FAQ Section with Accordion -->
      <app-faq-section [faqs]="content.faq_items" />

      <!-- Ready to Begin Banner -->
      <app-cta-banner
        [title]="content.banner_title"
        [description]="content.banner_description"
        [buttonText]="content.banner_cta_text"
        [buttonLink]="content.banner_cta_link"
      />
    </div>
  `,
})
export class ReviewServicesComponent {
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
