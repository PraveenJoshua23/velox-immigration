import {
  Component,
  signal,
  ChangeDetectionStrategy,
  OnInit,
} from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Program {
  id: string;
  icon: string;
  title: string;
  description: string;
  overlayText: string;
  routePath: string;
  bgColor: string;
  bgImage: string;
}

@Component({
  selector: 'app-service-section',
  standalone: true,
  imports: [CommonModule, RouterModule, NgOptimizedImage],
  changeDetection: ChangeDetectionStrategy.OnPush, // Optimize change detection
  template: `
    <section class="w-full bg-white pt-12">
      <!-- Header -->
      <div class="text-center mb-6">
        <div
          class="text-black flex font-medium mb-3 items-center justify-center space-x-1.5"
        >
          <img src="assets/images/plane.svg" class="pb-1" />
          <h2 class="text-3xl font-medium">
            Our <span class="font-bold">Immigration </span>Services
          </h2>
        </div>

        <h2 class="text-4xl md:text-5xl pb-2 text-sea-900">
          Outstanding Immigration Services
        </h2>
      </div>

      <!-- Programs Grid - Using CSS grid for more predictable layout -->
      <div
        class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 will-change-transform"
      >
        @for(item of programs(); track item.id){
        <a
          [routerLink]="item.routePath"
          class="block service-card"
          [attr.data-bg-color]="item.bgColor"
        >
          <div class="relative h-96 overflow-hidden cursor-pointer">
            <!-- Background Image with will-change-transform for GPU acceleration -->
            <img
              [ngSrc]="'/assets/images/' + item.bgImage"
              [alt]="item.title"
              fill
              loading="eager"
              class="absolute inset-0 w-full h-full object-cover object-center will-change-transform"
            />

            <!-- Simplified Overlay (combines colored overlay and gradient) -->
            <div
              class="absolute inset-0 opacity-80 transition-opacity duration-300"
              [ngClass]="item.bgColor + ' service-overlay'"
            ></div>

            <!-- Content -->
            <div class="relative h-full flex flex-col z-10 pt-6 pb-2 px-6">
              <div class="mt-auto service-content">
                <h3 class="text-3xl font-bold text-white mb-3">
                  {{ item.title }}
                </h3>

                <!-- Description (pre-sized to prevent layout shifts) -->
                <p class="text-white text-sm mb-4 service-description">
                  {{ item.description }}
                </p>

                <!-- Read More Link -->
                <div class="flex items-center justify-end service-link">
                  <span class="text-white px-2 py-2">Read More</span>
                  <svg
                    class="px-1 py-2"
                    width="57"
                    height="57"
                    viewBox="0 0 57 57"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.1189 28.5001C9.1189 17.7841 17.7829 9.12012 28.4989 9.12012C39.2149 9.12012 47.8789 17.7841 47.8789 28.5001C47.8789 39.2161 39.2149 47.8801 28.4989 47.8801C17.7829 47.8801 9.1189 39.2161 9.1189 28.5001ZM45.5989 28.5001C45.5989 19.0381 37.9609 11.4001 28.4989 11.4001C19.0369 11.4001 11.3989 19.0381 11.3989 28.5001C11.3989 37.9621 19.0369 45.6001 28.4989 45.6001C37.9609 45.6001 45.5989 37.9621 45.5989 28.5001Z"
                      fill="white"
                    />
                    <path
                      d="M26.5647 37.9619L36.0268 28.4999L26.5647 19.0379L28.1608 17.4419L39.2188 28.4999L28.1608 39.5579L26.5647 37.9619Z"
                      fill="white"
                    />
                    <path
                      d="M37.6211 27.3599V29.6399H18.2411V27.3599H37.6211Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </a>
        }
      </div>
    </section>
  `,
  styles: [
    `
      :host {
        display: block;
      }

      /* Use hardware acceleration and reduce paint operations */
      .service-card {
        transform: translateZ(0); /* Triggers GPU acceleration */
      }

      .service-card img {
        transition: transform 0.8s ease-out;
        backface-visibility: hidden; /* Reduce paint */
      }

      .service-card:hover img {
        transform: scale(1.05);
      }

      /* Simplify the overlay to reduce layer complexity */
      .service-overlay {
        background-image: linear-gradient(
          to top,
          rgba(0, 0, 0, 0.8),
          transparent
        );
        transform: translateZ(0);
      }

      /* Optimize animations with simple transitions */
      .service-content {
        transition: transform 0.7s ease-out;
      }

      .service-card:hover .service-content {
        transform: translateY(-30px);
      }

      /* Pre-hide elements that will be shown on hover to avoid layout shifts */
      .service-description {
        opacity: 0;
        max-height: 0;
        transition: opacity 0.6s ease-out, max-height 0.7s ease-out;
      }

      .service-card:hover .service-description {
        opacity: 1;
        max-height: 100px;
      }

      .service-link {
        opacity: 0;
        transform: translateY(10px);
        transition: opacity 0.7s ease-out, transform 0.7s ease-out;
        transition-delay: 0.1s; /* Slight delay for sequential animation effect */
      }

      .service-card:hover .service-link {
        opacity: 1;
        transform: translateY(0);
      }
    `,
  ],
})
export class ServiceSectionComponent implements OnInit {
  programs = signal<Program[]>([]);

  ngOnInit() {
    // Initialize data outside the constructor for better performance
    this.programs.set([
      {
        id: 'study',
        icon: 'service-study',
        title: 'Study in Canada',
        description:
          'Explore options for international students to study at Canadian institutions with student permits and post-graduation work opportunities.',
        overlayText: 'STUDY',
        routePath: '/services/study/study-in-canada',
        bgColor: 'bg-red-600',
        bgImage: 'service-study.jpg',
      },
      {
        id: 'work',
        icon: 'service-work',
        title: 'Work in Canada',
        description:
          'Discover pathways to obtain Canadian work permits, including LMIA-based work permits and employer-specific opportunities.',
        overlayText: 'WORK',
        routePath: '/services/work/open-pgwp-permits',
        bgColor: 'bg-sea-900',
        bgImage: 'service-work.jpg',
      },
      {
        id: 'visitor',
        icon: 'service-visa',
        title: 'Visitor Visa',
        description:
          'Learn about visitor visas, super visas, and family reunification programs to bring your loved ones to Canada.',
        overlayText: 'VISA',
        routePath: '/services/visit/visitor-visas',
        bgColor: 'bg-red-600',
        bgImage: 'service-visitor.jpg',
      },
      {
        id: 'express',
        icon: 'service-express',
        title: 'Express Entry',
        description:
          "Canada's primary immigration system for skilled workers looking for permanent residency through FSW, CEC, and FST programs.",
        overlayText: 'EE',
        routePath: '/services/immigrate/express-entry',
        bgColor: 'bg-sea-900',
        bgImage: 'service-express.jpg',
      },
      {
        id: 'pnp',
        icon: 'service-pnp',
        title: 'Provincial Nominee Program',
        description:
          'Explore province-specific immigration pathways designed to address regional economic and demographic needs.',
        overlayText: 'PNP',
        routePath: '/services/immigrate/provincial-nominee',
        bgColor: 'bg-sea-900',
        bgImage: 'pnp-program.jpg',
      },
      {
        id: 'lmia',
        icon: 'service-more',
        title: 'Labour Market Impact Assessment (LMIA)',
        description:
          'Hire foreign workers to meet labour shortages in Canada. LMIA is a key step for employers to demonstrate the need for a foreign worker when no Canadians or permanent residents are available.',
        overlayText: 'LMIA',
        routePath: '/services/work/lmia-employer-permits',
        bgColor: 'bg-red-600',
        bgImage: 'skilled-worker.jpg',
      },
      {
        id: 'business',
        icon: 'service-business',
        title: 'Business Immigration',
        description:
          'Immigration options for entrepreneurs, investors, and self-employed individuals looking to establish businesses in Canada.',
        overlayText: 'BIZ',
        routePath: '/services/immigrate/business-immigration',
        bgColor: 'bg-sea-900',
        bgImage: 'service-business.jpg',
      },
      {
        id: 'pr-citizenship',
        icon: 'service-citizen',
        title: 'PR Card & Citizenship',
        description:
          'Services for permanent resident card renewal and applications for Canadian citizenship.',
        overlayText: 'PR&C',
        routePath: '/services/other/pr-citizenship',
        bgColor: 'bg-red-600',
        bgImage: 'service-passport.jpg',
      },
    ]);
  }
}
