import { Component, Input } from '@angular/core';
import { HomePageContent } from '../utils/types/directus';

@Component({
  selector: 'app-why-choose-us',
  standalone: true,
  template: `
    <section class="bg-white py-20 md:py-24">
      <div class="container mx-auto px-4 max-w-6xl">
        <p class="text-center text-sm font-semibold uppercase tracking-widest text-fire-600 mb-3">
          {{ content.data?.why_choose_title }}
        </p>
        <h2 class="text-center text-4xl md:text-5xl font-semibold text-sea-900 mb-12">
          {{ content.data?.why_choose_subtitle }}
        </h2>

        <ul class="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          @for (reason of content.data?.why_choose_features || []; track reason.title) {
          <li class="reveal rounded-2xl border border-gray-200 bg-white p-6 md:p-7 shadow-sm">
            <div class="size-14 rounded-full bg-sea-50 text-fire-600 flex items-center justify-center mb-5">
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
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                } @case (1) {
                <rect x="8" y="2" width="8" height="4" rx="1" />
                <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                <path d="M12 11h4M12 16h4M8 11h.01M8 16h.01" />
                } @case (2) {
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                <path d="M8 9h8M8 13h5" />
                } @case (3) {
                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                <path d="m9 12 2 2 4-4" />
                } }
              </svg>
            </div>
            <h3 class="font-heading text-xl font-semibold text-sea-900 mb-2">{{ reason.title }}</h3>
            <p class="text-gray-700 leading-relaxed">{{ reason.description }}</p>
          </li>
          }
        </ul>
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
