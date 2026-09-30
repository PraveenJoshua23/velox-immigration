import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomePageContent } from '../utils/types/directus';

@Component({
  selector: 'app-why-choose-us',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section class="bg-white py-20">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <div class="flex items-center justify-center gap-2 mb-4">
            <img src="assets/images/plane.svg" class="pb-1 hidden md:block" alt="" />
            <h2 class="text-3xl md:text-4xl font-medium text-sea-900">
              {{ content.data?.why_choose_subtitle }}
            </h2>
          </div>
          <p class="text-gray-700 mt-2">
            {{ content.data?.why_choose_title }}
          </p>
        </div>

        <!-- Grid Layout -->
        <div
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12"
        >
          @for(reason of content.data?.why_choose_features || []; track
          reason.title){
          <div
            class="reveal group bg-white rounded-2xl p-7 border border-gray-200 transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-sea-200"
          >
            <div
              class="size-12 rounded-xl bg-sea-50 text-sea-700 flex items-center justify-center mb-6 transition-colors group-hover:bg-fire-600 group-hover:text-white"
            >
              <!-- One icon per reason, in content order (Lucide, stroke 1.75) -->
              <svg
                class="size-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.75"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
              >
                @switch ($index % 4) { @case (0) {
                <circle cx="12" cy="8" r="6" />
                <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
                } @case (1) {
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <polyline points="16 11 18 13 22 9" />
                } @case (2) {
                <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
                <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
                <path d="M7 21h10" />
                <path d="M12 3v18" />
                <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
                } @case (3) {
                <path d="m5 8 6 6" />
                <path d="m4 14 6-6 2-3" />
                <path d="M2 5h12" />
                <path d="M7 2h1" />
                <path d="m22 22-5-10-5 10" />
                <path d="M14 18h6" />
                } }
              </svg>
            </div>
            <h3 class="text-xl font-medium text-sea-900 mb-2">
              {{ reason.title }}
            </h3>
            <p
              class="text-gray-700 leading-relaxed"
              [innerHTML]="reason.description"
            ></p>
          </div>
          }
        </div>

        <!-- CTA Button -->
        <div class="text-center">
          <a
            [routerLink]="content.data?.why_choose_cta_link || '/book-your-appointment'"
            class="bg-fire-600 text-white font-medium px-8 py-3.5 rounded-lg hover:bg-fire-700 transition-colors inline-flex items-center gap-2"
          >
            {{ content.data?.why_choose_cta_text || 'Book a Consultation' }}
          </a>
        </div>
      </div>
    </section>
  `,
  styles: `
    :host {
      display: block;
    }
  `,
})
export class WhyChooseUsComponent {
  @Input() content: { data: HomePageContent | null } = { data: null };
}
