import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ServiceHeaderComponent } from '../../components/service-header.component';
import { HowWeWorkComponent } from '../../components/how-we-work.component';
import { CommonScenariosComponent } from '../../components/common-scenarios.component';
import { FaqSectionComponent } from '../../components/faq-section.component';
import { CtaBannerComponent } from '../../components/cta-banner.component';

@Component({
  selector: 'app-work',
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
        backgroundImage="/assets/images/work-extension-hero.png"
      />

      <!-- Overview Section -->
      <section class="bg-white p-6 ">
        <h2 class="text-2xl text-sea-900 mb-4">
          {{ content?.intro_title }}
        </h2>
        <p class="text-gray-700">
          {{ content?.intro_subtitle }}
        </p>
        <div class="mt-6">
          <button
            [routerLink]="content?.intro_cta_link"
            class="bg-fire-600 text-white px-6 py-3 rounded-lg hover:bg-fire-700 transition-colors"
          >
            {{ content?.intro_cta_text }}
          </button>
        </div>
      </section>

      <!-- Work Permit Extensions & Co-op Work Permits Section (Based on the new document) -->
      <section class="bg-white p-6">
        <!-- Who This Is For Section -->
        <div class="bg-gray-50 p-6 rounded-lg mb-6">
          <h2 class="text-2xl  text-sea-900 mb-3">
            {{ content?.who_we_help_title }}
          </h2>
          <p class="mb-2">{{ content?.who_we_help_intro }}</p>
          <ul class="list-disc pl-8 space-y-2 text-gray-700">
            @for (item of content?.who_we_help_items; track $index) {
            <li>{{ item.description }}</li>
            }
          </ul>
        </div>

        <!-- What We Offer Section -->
        <h2 class="text-2xl text-sea-900 mb-4 pt-8">What We Offer</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          @for (item of content?.what_we_offer_items; track $index) {
          <div
            class="bg-white p-6 rounded-lg shadow-md border-l-4 border-fire-600"
          >
            <h2 class="text-2xl text-sea-900 mb-4">{{ item.title }}</h2>

            <p class="text-gray-700">
              {{ item.description }}
            </p>
          </div>
          }
        </div>

        <!-- What You Need to Apply Section -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div class="bg-gray-50 p-6 rounded-lg">
            <h3 class="text-xl text-sea-900 mb-4">
              What You Need for Work Permit Extensions
            </h3>

            <ul class="space-y-2 text-gray-700">
              @for (item of content?.work_permit_extensions; track $index) {
              <li class="flex items-start gap-2">
                <svg
                  class="w-5 h-5 text-fire-600 flex-shrink-0 mt-1"
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
                <span>{{ item.description }}</span>
              </li>
              }
            </ul>
            <p class="mt-4 text-gray-700">
              {{ content?.work_permit_extension_footnote }}
            </p>
          </div>

          <div class="bg-gray-50 p-6 rounded-lg">
            <h3 class="text-xl text-sea-900 mb-4">
              What You Need for Co-op Work Permits
            </h3>

            <ul class="space-y-2 text-gray-700">
              @for (item of content?.co_op_work_permits; track $index) {
              <li class="flex items-start gap-2">
                <svg
                  class="w-5 h-5 text-fire-600 flex-shrink-0 mt-1"
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
                <span>{{ item.description }}</span>
              </li>
              }
            </ul>
            <p class="mt-4 text-gray-700">
              {{ content?.co_op_permit_footnote }}
            </p>
          </div>
        </div>
      </section>

      <!-- How We Work Section -->
      <app-how-we-work [steps]="content?.how_we_work_items" />

      <!-- Common Scenarios Section -->
      <app-common-scenarios
        [commonScenarios]="content?.common_scenarios_items"
      />

      <!-- FAQ Section -->
      <app-faq-section [faqs]="content?.faq_items" />

      <!-- CTA Section -->
      <app-cta-banner
        [title]="content?.banner_title"
        [description]="content?.banner_subtitle"
        [buttonText]="content?.banner_cta_text"
        [buttonLink]="content?.banner_cta_link"
      />
      <!-- <div class="bg-fire-50 p-6 rounded-lg">
        <h3 class="text-xl font-bold text-fire-900 mb-4">
          Don't Let Your Status Expire
        </h3>
        <p class="text-fire-700 mb-4">
          Whether you need a renewal, a change, or a brand-new co-op permit,
          we'll help you stay compliant and employed.
        </p>
        <button
          routerLink="/contact"
          class="bg-fire-600 text-white px-6 py-3 rounded-lg hover:bg-fire-700 transition-colors w-full md:w-auto"
        >
          Book a Consultation
        </button>
      </div> -->
    </div>
  `,
})
export class WorkComponent {
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
