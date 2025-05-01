import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ServiceHeaderComponent } from '../../components/service-header.component';
import { HowWeWorkComponent } from '../../components/how-we-work.component';
import { CommonScenariosComponent } from '../../components/common-scenarios.component';
import { FaqSectionComponent } from '../../components/faq-section.component';
import { CtaBannerComponent } from '../../components/cta-banner.component';

@Component({
  selector: 'app-visitor-visa',
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
        backgroundImage="/assets/images/visitor-hero.png"
      />

      <!-- Overview Section -->
      <section class="bg-white p-6">
        <h2 class="text-2xl text-sea-900 mb-4">
          {{ content?.intro_title }}
        </h2>
        <p class="text-gray-700">
          {{ content?.intro_description }}
        </p>
        <button
          [routerLink]="content?.intro_cta_link"
          class="mt-4 bg-fire-600 text-white px-6 py-3 rounded-lg hover:bg-fire-700 transition-colors"
        >
          {{ content?.intro_cta_text }}
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
          {{ content?.who_we_help_title }}
        </h2>
        <p class="text-gray-700">{{ content?.who_we_help_intro }}</p>
        <ul class="py-3 space-y-2 list-disc pl-5 text-gray-700">
          @for (item of content?.who_we_help_list; track $index) {
          <li>
            <span class="font-medium">{{ item.item }}</span>
          </li>
          }
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
          {{ content?.what_we_offer_intro }}
        </p>

        <div class="space-y-6">
          @for (item of content?.what_we_offer_items; track $index) {
          <div class="bg-gray-50 p-5 rounded-lg">
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
        <div [innerHTML]="content?.what_you_need_to_apply"></div>
      </section>

      <!-- How We Work Section -->
      <app-how-we-work
        [intro]="content?.how_we_work_intro"
        [steps]="content?.how_we_work_items"
      />

      <!-- Common Scenarios Section -->
      <app-common-scenarios
        [commonScenarios]="content?.common_scenarios_items"
      />

      <!-- FAQ Section with Accordion -->
      <app-faq-section [faqs]="content?.faq_items" />

      <!-- Ready to Begin Banner -->
      <app-cta-banner
        [title]="content?.banner_title"
        [description]="content?.banner_description"
        [buttonText]="content?.banner_cta_text"
        [buttonLink]="content?.banner_cta_link"
      />
    </div>
  `,
})
export class VisitorVisaComponent {
  activeFaq = signal(-1);
  content: any;

  constructor(private activatedRoute: ActivatedRoute, private route: Router) {
    this.activatedRoute.data.subscribe((response: any) => {
      this.content = response.data.data[0];

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
