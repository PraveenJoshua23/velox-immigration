import { Component, Input } from '@angular/core';
import { HomePageContent } from '../utils/types/directus';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  template: `
    <section class="py-16 md:py-20">
      <div class="container mx-auto px-4">
        <!-- Title -->
        <div class="mb-10 md:mb-12">
          <div class="flex items-center gap-2">
            <img src="assets/images/plane.svg" class="w-6 h-6" alt="" />
            <p class="text-xl md:text-2xl font-medium font-spartan">
              {{ content.data?.testimonial_subtitle || 'What our Clients say' }}
            </p>
          </div>
          <h2 class="text-4xl md:text-5xl text-sea-900 mt-4 max-w-2xl">
            {{
              content.data?.testimonial_title ||
                'Testimonial of our Immigration Guidance & Support'
            }}
          </h2>
        </div>

        <!-- Photo tile + one card per testimonial; new testimonials flow into the grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <img
            src="/assets/images/testimonials.jpg"
            alt="A family sitting together on the grass, smiling"
            loading="lazy"
            class="w-full h-64 md:h-full min-h-64 object-cover rounded-2xl md:col-span-2 lg:col-span-1"
          />

          @for (testimonial of testimonials; track testimonial.name_designation) {
          <figure
            class="reveal bg-white rounded-2xl border border-gray-200 p-8 flex flex-col"
          >
            <svg
              class="w-10 h-10 text-fire-600 mb-6"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"
              />
            </svg>
            <blockquote class="text-lg md:text-xl text-gray-800 leading-relaxed mb-8">
              {{ testimonial.testimony }}
            </blockquote>
            <figcaption
              class="mt-auto flex items-center gap-4 pt-6 border-t border-gray-100"
            >
              <span
                class="size-11 shrink-0 rounded-full bg-sea-50 text-sea-700 font-medium flex items-center justify-center"
                aria-hidden="true"
              >
                {{ testimonial.name_designation.charAt(0) }}
              </span>
              <span>
                <span class="block font-medium text-sea-900">
                  {{ name(testimonial.name_designation) }}
                </span>
                <span class="block text-sm text-gray-600">
                  {{ role(testimonial.name_designation) }}
                </span>
              </span>
            </figcaption>
          </figure>
          }
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
export class TestimonialsComponent {
  @Input() content: { data: HomePageContent | null } = { data: null };

  get testimonials(): { testimony: string; name_designation: string }[] {
    return this.content.data?.testimonials ?? [];
  }

  // Content stores "Name, Role" as one string.
  name(nameDesignation: string) {
    return nameDesignation.split(',')[0].trim();
  }

  role(nameDesignation: string) {
    return nameDesignation.split(',').slice(1).join(',').trim();
  }
}
