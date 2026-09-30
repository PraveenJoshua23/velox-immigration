import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomePageContent } from '../utils/types/directus';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterModule],
  template: `
    <section class="bg-gray-100 py-20 md:py-24">
      <div class="container max-w-6xl mx-auto px-4">
        <div
          class="grid md:grid-cols-2 items-center gap-12 lg:gap-20"
        >
          <!-- Founder portrait with credential card -->
          <div class="relative max-w-sm md:max-w-none mx-auto w-full">
            <img
              src="/assets/images/founder.webp"
              alt="Anitha Gabriel, licensed RCIC and founder of Velox Immigration"
              width="900"
              height="1273"
              loading="lazy"
              decoding="async"
              class="w-full aspect-[4/5] object-cover object-top rounded-3xl bg-sea-100"
            />
            <div
              class="absolute left-4 right-4 bottom-4 md:left-6 md:right-auto md:-bottom-6 bg-white rounded-2xl shadow-lg p-5 flex items-center gap-4"
            >
              <img
                src="/assets/images/rcic-logo.webp"
                alt=""
                class="h-10 w-auto shrink-0"
              />
              <div>
                <p class="font-medium text-sea-900">Anitha Gabriel</p>
                <p class="text-sm text-gray-600">
                  Licensed RCIC-IRB · R1034239
                </p>
              </div>
            </div>
          </div>

          <!-- Copy -->
          <div>
            <div class="flex items-center gap-2 mb-4">
              <img src="assets/images/plane.svg" class="w-6 h-6" alt="" />
              <p class="text-xl md:text-2xl font-medium font-spartan">
                {{ content.data?.about_subtitle }}
              </p>
            </div>

            <h2 class="text-4xl md:text-5xl text-sea-900 leading-tight mb-6">
              {{ content.data?.about_title }}
            </h2>

            <p class="text-lg text-gray-700 leading-relaxed mb-8">
              {{ content.data?.about_description }}
            </p>

            <a
              [routerLink]="content.data?.about_ctaLink || '/about'"
              class="inline-flex items-center gap-2 font-medium text-sea-900 border-2 border-sea-900 px-7 py-3 rounded-lg hover:bg-sea-900 hover:text-white transition-colors"
            >
              {{ content.data?.about_ctaTitle || 'Learn More About Us' }}
              <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class AboutComponent {
  @Input() content: { data: HomePageContent | null } = { data: null };
}
