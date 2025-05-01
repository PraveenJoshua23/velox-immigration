import { CommonModule } from '@angular/common';
import { Component, Input, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomePageContent } from '../utils/types/directus';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section class="bg-[#F5F5F6] py-16">
      <div class="container max-w-6xl mx-auto px-4">
        <div class="flex flex-col md:flex-row items-center gap-12">
          <!-- Left Side Images -->
          <div class="md:w-1/2 relative">
            <img
              src="assets/images/about-us.svg"
              class="w-3/4 md:w-full mx-auto"
            />
          </div>

          <!-- Right Side Content -->
          <div class="md:w-1/2">
            <div class="flex items-center gap-2 mb-4">
              <img src="assets/images/plane.svg" class="pb-1" />
              <h2 class="text-3xl font-medium">
                {{ content.data?.about_subtitle }}
              </h2>
            </div>

            <h2
              class="text-4xl md:text-5xl pb-2 border-b border-fire-500 text-sea-900"
            >
              {{ content.data?.about_title }}
            </h2>

            <p class="text-gray-600 font-light mb-6 py-5">
              {{ content.data?.about_description }}
            </p>

            <button
              [routerLink]="content.data?.about_ctaLink || '/about'"
              class="px-6 py-2 border-2 border-red-500 text-red-500 rounded-lg hover:bg-red-500 hover:text-white transition-colors"
            >
              {{ content.data?.about_ctaTitle }}
            </button>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: ``,
})
export class AboutComponent {
  @Input() content: { data: HomePageContent | null } = { data: null };
}
