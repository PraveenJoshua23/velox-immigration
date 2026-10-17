import { afterNextRender, Component, DestroyRef, ElementRef, inject, Input, viewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomePageContent } from '../utils/types/directus';
import { BOOKING_URL } from '../utils/booking';

@Component({
  selector: 'app-process-steps',
  standalone: true,
  imports: [RouterModule],
  template: `
    <section class="relative isolate overflow-hidden py-20 md:py-28 bg-sea-950 text-white">
      <!-- Parallax background: taller than the section, shifted on scroll -->
      <img
        #bg
        src="assets/images/process-bg.webp"
        alt=""
        loading="lazy"
        class="absolute inset-x-0 -top-[15%] -z-20 h-[130%] w-full object-cover will-change-transform"
      />
      <div class="absolute inset-0 -z-10 bg-sea-950/80"></div>
      <div class="container mx-auto px-4">
        <!-- Section Title -->
        <div class="flex items-center gap-2 mb-14 md:mb-20">
          <img src="assets/images/plane.svg" class="w-6 h-6" alt="" />
          <h2 class="text-3xl md:text-5xl font-medium">
            {{ content.data?.our_process_title || 'Our Process in 3 Simple Steps' }}
          </h2>
        </div>

        <!-- Timeline: vertical line on the left on mobile, horizontal across the top from md -->
        <ol
          class="relative ml-2 border-l border-white/15 space-y-12 md:ml-0 md:border-l-0 md:space-y-0 md:grid md:grid-cols-3 md:gap-10"
        >
          @for (step of content.data?.our_process_steps || []; track step.title;
          let i = $index, last = $last) {
          <li class="reveal relative pl-8 md:pl-0">
            <!-- Dot; on md+ the line to the next step runs through the column gap -->
            <div
              class="absolute -left-[9px] top-1 md:static md:flex md:items-center md:mb-10"
              [class.md:-mr-10]="!last"
            >
              <span
                class="block size-4 shrink-0 rounded-full bg-fire-500 ring-4 ring-fire-500/25"
              ></span>
              @if (!last) {
              <span class="hidden md:block flex-1 h-px bg-white/20 ml-4"></span>
              }
            </div>

            <span
              class="block font-heading text-6xl md:text-7xl font-medium leading-none text-white/15 mb-4"
              aria-hidden="true"
            >
              {{ (i + 1).toString().padStart(2, '0') }}
            </span>
            <h3 class="text-2xl font-medium mb-3">{{ step.title }}</h3>
            <p class="text-white/75 leading-relaxed">{{ step.description }}</p>
          </li>
          }
        </ol>

        <!-- Closing CTA -->
        <div
          class="mt-16 md:mt-20 pt-10 border-t border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-end gap-4 sm:gap-8"
        >
          <p class="font-heading text-xl md:text-2xl font-semibold">
            Ready to take the first step?
          </p>
          <a
            [href]="bookingUrl"
            class="bg-fire-600 text-white font-medium text-center px-8 py-3.5 rounded-lg hover:bg-fire-700 transition-colors"
          >
            Book a Consultation
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
export class ProcessStepsComponent {
  bookingUrl = BOOKING_URL;
  @Input() content: { data: HomePageContent | null } = { data: null };

  private bg = viewChild.required<ElementRef<HTMLImageElement>>('bg');

  constructor() {
    const destroyRef = inject(DestroyRef);
    afterNextRender(() => {
      if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      const img = this.bg().nativeElement;
      const section = img.parentElement!;
      let frame = 0;
      const update = () => {
        frame = 0;
        const rect = section.getBoundingClientRect();
        if (rect.bottom < 0 || rect.top > innerHeight) return;
        // -1 when the section enters at the bottom, 1 when it leaves at the top
        const progress = (innerHeight / 2 - (rect.top + rect.height / 2)) / ((innerHeight + rect.height) / 2);
        img.style.transform = `translate3d(0, ${progress * rect.height * 0.12}px, 0)`;
      };
      const onScroll = () => (frame ||= requestAnimationFrame(update));
      addEventListener('scroll', onScroll, { passive: true });
      addEventListener('resize', onScroll);
      update();
      destroyRef.onDestroy(() => {
        removeEventListener('scroll', onScroll);
        removeEventListener('resize', onScroll);
        cancelAnimationFrame(frame);
      });
    });
  }
}
