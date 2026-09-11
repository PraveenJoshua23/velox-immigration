import { Component, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageContent } from '../utils/types/directus';

@Component({
  selector: 'app-partner-logos',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="relative w-full overflow-hidden  py-12">
      <div class="container mx-auto">
        <h3 class="text-center text-2xl font-semibold mb-8">
          Our Accreditation
        </h3>

        <div class="marquee relative flex overflow-hidden">
          <!-- First set of logos -->
          <div class="flex animate-scroll gap-8 min-w-full">
            @for (logo of logos(); track logo.id) {
            <div class="flex items-center justify-center w-48">
              <img
                [src]="logo.src"
                [alt]="logo.alt"
                loading="lazy"
                class="h-16 object-contain grayscale hover:grayscale-0 transition-all"
              />
            </div>
            }
          </div>

          <!-- Duplicated set for seamless loop -->
          <div
            class="flex animate-scroll gap-8 min-w-full absolute left-full"
            aria-hidden="true"
          >
            @for (logo of logos(); track logo.id) {
            <div class="flex items-center justify-center w-48">
              <img
                [src]="logo.src"
                alt=""
                loading="lazy"
                class="h-16 object-contain grayscale hover:grayscale-0 transition-all"
              />
            </div>
            }
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      @keyframes scroll {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(-100%);
        }
      }

      .animate-scroll {
        animation: scroll 20s linear infinite;
      }

      .marquee:hover .animate-scroll {
        animation-play-state: paused;
      }

      @media (prefers-reduced-motion: reduce) {
        .animate-scroll {
          animation: none;
        }
      }
    `,
  ],
})
export class PartnerLogosComponent {
  @Input() content: { data: HomePageContent | null } = { data: null };
  logos = signal([
    {
      id: 1,
      src: '/assets/images/CICC-logo.png',
      alt: 'CICC Logo',
    },
    {
      id: 2,
      src: '/assets/images/RCIC-logo.png',
      alt: 'RCIC Logo',
    },
    // {
    //   id: 3,
    //   src: '/assets/images/CAPIC-logo.png',
    //   alt: 'CAPIC Logo',
    // },
  ]);
}
