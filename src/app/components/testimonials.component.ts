import { CommonModule, isPlatformBrowser } from '@angular/common';
import { animate } from 'motion';
import {
  Component,
  signal,
  ViewChild,
  ElementRef,
  Inject,
  PLATFORM_ID,
  OnDestroy,
  NgZone,
  AfterViewInit,
} from '@angular/core';

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
            What our <span class="font-bold">Customers</span> say
          </h2>
        </div>
        <h3 class="text-2xl md:text-4xl lg:text-5xl text-sea-900 mt-4">
          Testimonial of our Immigration
          <span class="block mt-1">Guidance & Support</span>
        </h3>
      </div>

      <!-- Testimonials Content -->
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <!-- Left Column: Testimonial Text + Navigation -->
          <div class="flex flex-col order-2 lg:order-1">
            <div
              #testimonialContent
              class="bg-white p-6 md:p-8 rounded-lg shadow-lg min-h-[280px] mb-4"
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
              <p class="text-gray-600 text-base md:text-lg mb-6">
                {{ testimonials()[currentTestimonial()].content }}
              </p>
              <div class="flex items-center">
                <div>
                  <p class="font-bold text-red-500">
                    {{ testimonials()[currentTestimonial()].name }}
                  </p>
                  <p class="text-gray-500 text-sm">
                    {{ testimonials()[currentTestimonial()].status }}
                  </p>
                </div>
              </div>
            </div>

            <!-- Navigation Buttons -->
            <div
              class="flex justify-end gap-4 mt-4"
              (mouseenter)="pauseAutoPlay()"
              (mouseleave)="resumeAutoPlay()"
            >
              <button
                (click)="prevTestimonial()"
                [disabled]="isAnimating()"
                class="p-2 rounded-full bg-red-500 text-white hover:bg-red-600 transition-colors disabled:opacity-50"
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
                (click)="nextTestimonial()"
                [disabled]="isAnimating()"
                class="p-2 rounded-full bg-red-500 text-white hover:bg-red-600 transition-colors disabled:opacity-50"
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
    `,
  ],
})
export class TestimonialsComponent implements AfterViewInit, OnDestroy {
  @ViewChild('testimonialContent') content!: ElementRef;

  currentTestimonial = signal(0);
  isAnimating = signal(false);
  private autoPlayInterval: any;
  private readonly INTERVAL_DURATION = 5000;
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) platformId: Object, private ngZone: NgZone) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  testimonials = signal([
    {
      content:
        'Borem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.',
      name: 'KATE JOHNSON',
      status: 'Moved to Canada',
      image: '/assets/images/testimonials.jpg',
    },
    {
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      name: 'JOHN DOE',
      status: 'Permanent Resident',
      image: '/assets/images/testimonials.jpg',
    },
  ]);

  ngAfterViewInit() {
    if (this.isBrowser) {
      setTimeout(() => {
        this.ngZone.runOutsideAngular(() => {
          this.startAutoPlay();
        });
      }, 0);
    }
  }

  ngOnDestroy() {
    if (this.isBrowser) {
      this.stopAutoPlay();
    }
  }

  startAutoPlay() {
    if (this.isBrowser && !this.autoPlayInterval) {
      this.autoPlayInterval = setInterval(() => {
        this.ngZone.run(() => {
          if (!this.isAnimating()) {
            this.nextTestimonial();
          }
        });
      }, this.INTERVAL_DURATION);
    }
  }

  stopAutoPlay() {
    if (this.isBrowser && this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
      this.autoPlayInterval = null;
    }
  }

  pauseAutoPlay() {
    if (this.isBrowser) {
      this.stopAutoPlay();
    }
  }

  resumeAutoPlay() {
    if (this.isBrowser) {
      this.startAutoPlay();
    }
  }

  nextTestimonial() {
    if (!this.isBrowser || this.isAnimating()) return;
    this.isAnimating.set(true);

    this.ngZone.runOutsideAngular(() => {
      animate(
        this.content.nativeElement,
        {
          opacity: [1, 0],
          transform: ['translateX(0)', 'translateX(-30px)'],
        },
        {
          duration: 0.3,
        }
      ).then(() => {
        this.ngZone.run(() => {
          this.currentTestimonial.update(
            (current) => (current + 1) % this.testimonials().length
          );

          animate(
            this.content.nativeElement,
            {
              opacity: [0, 1],
              transform: ['translateX(30px)', 'translateX(0)'],
            },
            {
              duration: 0.3,
            }
          ).then(() => {
            this.isAnimating.set(false);
          });
        });
      });
    });
  }

  prevTestimonial() {
    if (!this.isBrowser || this.isAnimating()) return;
    this.isAnimating.set(true);

    this.ngZone.runOutsideAngular(() => {
      animate(
        this.content.nativeElement,
        {
          opacity: [1, 0],
          transform: ['translateX(0)', 'translateX(30px)'],
        },
        {
          duration: 0.3,
        }
      ).then(() => {
        this.ngZone.run(() => {
          this.currentTestimonial.update((current) =>
            current === 0 ? this.testimonials().length - 1 : current - 1
          );

          animate(
            this.content.nativeElement,
            {
              opacity: [0, 1],
              transform: ['translateX(-30px)', 'translateX(0)'],
            },
            {
              duration: 0.3,
            }
          ).then(() => {
            this.isAnimating.set(false);
          });
        });
      });
    });
  }
}
