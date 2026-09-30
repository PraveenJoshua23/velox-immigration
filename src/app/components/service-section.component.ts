import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  signal,
  viewChild,
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomePageContent } from '../utils/types/directus';

@Component({
  selector: 'app-service-section',
  standalone: true,
  imports: [RouterModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="services w-full bg-gray-100 py-20 md:py-24">
      <!-- Header -->
      <div
        class="container mx-auto px-4 mb-10 md:mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
      >
        <div>
          <div class="flex items-center gap-2 mb-3">
            <img src="assets/images/plane.svg" class="w-6 h-6" alt="" />
            <p class="text-xl md:text-2xl font-medium font-spartan">
              {{ content.data?.services_subtitle }}
            </p>
          </div>
          <h2 class="text-4xl md:text-5xl text-sea-900">
            {{ content.data?.services_title }}
          </h2>
        </div>

        <div class="hidden md:flex gap-3">
          <button
            type="button"
            (click)="scrollBy(-1)"
            aria-label="Previous services"
            class="size-12 rounded-full bg-white text-sea-900 shadow-sm flex items-center justify-center hover:bg-sea-900 hover:text-white transition-colors"
          >
            <svg class="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>
          <button
            type="button"
            (click)="scrollBy(1)"
            aria-label="Next services"
            class="size-12 rounded-full bg-white text-sea-900 shadow-sm flex items-center justify-center hover:bg-sea-900 hover:text-white transition-colors"
          >
            <svg class="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Native horizontal scroller: snap points, no JS on scroll -->
      <ul
        #track
        class="services-track flex gap-5 md:gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth motion-reduce:scroll-auto pb-2"
      >
        @for (item of content.data?.services_features || []; track item.title;
        let i = $index) {
        <li
          class="snap-start shrink-0 w-[78vw] sm:w-[340px] rounded-3xl transition-colors duration-300"
          [class.bg-white]="open() === i"
        >
          <div class="relative aspect-square rounded-3xl overflow-hidden">
            <img
              [src]="'/assets/images/' + item.bgImage"
              alt=""
              width="800"
              height="800"
              loading="lazy"
              decoding="async"
              class="absolute inset-0 size-full object-cover transition-opacity duration-300"
              [class.opacity-0]="open() === i"
            />
            <!-- Details panel; invisible (not just transparent) when closed so its link can't be tabbed to -->
            <div
              [id]="'service-panel-' + i"
              class="absolute inset-0 p-7 flex flex-col transition-opacity duration-300"
              [class.opacity-0]="open() !== i"
              [class.invisible]="open() !== i"
            >
              <p class="text-gray-700 text-lg leading-relaxed">
                {{ item.description }}
              </p>
              <a
                [routerLink]="item.routePath"
                class="mt-auto self-start font-medium text-sea-900 underline underline-offset-4 hover:text-fire-600"
              >
                Learn more &rarr;
              </a>
            </div>
          </div>

          <div class="flex items-center justify-between gap-4 py-4 pl-3 pr-2">
            <h3 class="text-lg md:text-xl font-medium text-sea-900">
              <a [routerLink]="item.routePath" class="hover:text-fire-600">
                {{ item.title }}
              </a>
            </h3>
            <button
              type="button"
              (click)="toggle(i)"
              [attr.aria-expanded]="open() === i"
              [attr.aria-controls]="'service-panel-' + i"
              [attr.aria-label]="
                (open() === i ? 'Hide' : 'Show') + ' details for ' + item.title
              "
              class="size-12 shrink-0 rounded-2xl flex items-center justify-center text-sea-900 transition-colors hover:bg-fire-600 hover:text-white"
              [class]="open() === i ? 'bg-gray-100' : 'bg-white shadow-sm'"
            >
              <svg
                class="size-5 transition-transform duration-300"
                [class.rotate-45]="open() === i"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.5"
                stroke-linecap="round"
                aria-hidden="true"
              >
                <path d="M12 5v14M5 12h14" />
              </svg>
            </button>
          </div>
        </li>
        }
      </ul>

      <!-- Scroll progress, driven by a CSS scroll timeline -->
      <div class="services-progress-wrap container mx-auto px-4 mt-10">
        <div class="h-1 rounded-full bg-gray-300 overflow-hidden">
          <div class="services-progress h-full bg-sea-900 origin-left"></div>
        </div>
      </div>
    </section>
  `,
  styles: `
    :host {
      display: block;
    }

    /* Lets the progress bar (a sibling) see the track's scroll timeline */
    .services {
      timeline-scope: --services;
    }

    /* Line the first card up with the page container; later cards bleed off the right edge */
    .services-track {
      --container: 100vw;
      padding-inline: max(1rem, calc((100% - var(--container)) / 2 + 1rem));
      scroll-padding-inline: max(1rem, calc((100% - var(--container)) / 2 + 1rem));
      scroll-timeline: --services x;
      scrollbar-width: none;
    }
    .services-track::-webkit-scrollbar {
      display: none;
    }
    @media (min-width: 640px) { .services-track { --container: 640px; } }
    @media (min-width: 768px) { .services-track { --container: 768px; } }
    @media (min-width: 1024px) { .services-track { --container: 1024px; } }
    @media (min-width: 1280px) { .services-track { --container: 1280px; } }
    @media (min-width: 1536px) { .services-track { --container: 1536px; } }

    @keyframes services-progress {
      from { transform: scaleX(0.1); }
      to { transform: scaleX(1); }
    }
    .services-progress {
      animation: services-progress linear both;
      animation-timeline: --services;
    }
    @supports not (animation-timeline: scroll()) {
      .services-progress-wrap {
        display: none;
      }
    }
  `,
})
export class ServiceSectionComponent {
  @Input() content: { data: HomePageContent | null } = { data: null };

  /** Index of the card showing its details; one at a time. */
  open = signal<number | null>(null);
  private track = viewChild.required<ElementRef<HTMLElement>>('track');

  toggle(i: number) {
    this.open.update((current) => (current === i ? null : i));
  }

  scrollBy(direction: 1 | -1) {
    const track = this.track().nativeElement;
    track.scrollBy({ left: direction * track.clientWidth * 0.8 });
  }
}
