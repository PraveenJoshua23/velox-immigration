import { CommonModule } from '@angular/common';
import {
  Component,
  DestroyRef,
  Input,
  NgZone,
  afterNextRender,
  inject,
  signal,
} from '@angular/core';
import { HomePageContent } from '../utils/types/directus';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-8 md:py-16 lg:py-20">
      <!-- Title Section -->
      <div class="container mx-auto px-4 mb-8 md:mb-12">
        <div class="flex items-center gap-2">
          <img src="assets/images/plane.svg" class="w-6 h-6" alt="plane icon" />
          <h2 class="text-2xl md:text-3xl font-medium">
            What our <span class="font-bold">Clients</span> say
          </h2>
        </div>
        <h3 class="text-4xl md:text-5xl text-sea-900 mt-4">
          Testimonial of our Immigration
          <span class="block mt-1">Guidance & Support</span>
        </h3>
      </div>

      <!-- Testimonials Content -->
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <!-- Left Column: Testimonial Text + Navigation (autoplay pauses while hovered or focused) -->
          <div
            class="flex flex-col order-2 lg:order-1"
            (mouseenter)="pause()"
            (mouseleave)="play()"
            (focusin)="pause()"
            (focusout)="play()"
          >
            <div
              class="bg-white p-6 md:p-8 rounded-lg shadow-lg min-h-[280px] mb-4 overflow-hidden"
            >
              <div class="mb-6">
                <svg
                  class="w-8 h-8 md:w-12 md:h-12 text-red-500"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"
                  />
                </svg>
              </div>
              <!-- Tracking the testimonial object re-creates the slide when it changes, replaying its CSS entry animation -->
              @for (testimonial of [testimonials[index()]]; track testimonial) {
              @if (testimonial) {
              <div class="testimonial-slide">
                <p class="text-gray-600 text-base md:text-md mb-6">
                  {{ testimonial.testimony }}
                </p>
                <p class="font-bold text-red-500">
                  - {{ testimonial.name_designation }}
                </p>
              </div>
              } }
            </div>

            <!-- Navigation Buttons -->
            <div class="flex justify-end gap-4 mt-4">
              <button
                (click)="prev()"
                class="p-2 rounded-full bg-red-500 text-white hover:bg-red-600 transition-colors"
                aria-label="Previous testimonial"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                (click)="next()"
                class="p-2 rounded-full bg-red-500 text-white hover:bg-red-600 transition-colors"
                aria-label="Next testimonial"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
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
              </button>
            </div>
          </div>

          <!-- Right Column: Image -->
          <div class="order-1 lg:order-2">
            <div class="relative h-[280px] md:h-[400px] lg:h-[500px] w-full">
              <img
                src="/assets/images/testimonials.jpg"
                alt="Happy family"
                loading="lazy"
                class="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      :host {
        display: block;
      }

      @media (prefers-reduced-motion: no-preference) {
        .testimonial-slide {
          animation: testimonial-in 0.4s ease-out;
        }
      }

      @keyframes testimonial-in {
        from {
          opacity: 0;
          transform: translateX(16px);
        }
      }
    `,
  ],
})
export class TestimonialsComponent {
  @Input() content: { data: HomePageContent | null } = { data: null };

  index = signal(0);
  private autoplay = false;
  private timer?: ReturnType<typeof setInterval>;
  private zone = inject(NgZone);

  constructor() {
    // Browser only; no autoplay for users who ask for reduced motion.
    afterNextRender(() => {
      this.autoplay = !matchMedia('(prefers-reduced-motion: reduce)').matches;
      this.play();
    });
    inject(DestroyRef).onDestroy(() => this.pause());
  }

  get testimonials(): { testimony: string; name_designation: string }[] {
    return this.content.data?.testimonials ?? [];
  }

  play() {
    if (!this.autoplay || this.timer || this.testimonials.length < 2) return;
    // Interval runs outside the zone so it never keeps the app from becoming stable.
    this.zone.runOutsideAngular(() => {
      this.timer = setInterval(() => {
        if (!document.hidden) this.zone.run(() => this.next());
      }, 5000);
    });
  }

  pause() {
    clearInterval(this.timer);
    this.timer = undefined;
  }

  next() {
    const count = this.testimonials.length;
    if (count) this.index.update((i) => (i + 1) % count);
  }

  prev() {
    const count = this.testimonials.length;
    if (count) this.index.update((i) => (i - 1 + count) % count);
  }
}
