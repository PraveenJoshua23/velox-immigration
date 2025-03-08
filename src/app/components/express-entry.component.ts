import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
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
  selector: 'app-express-entry-section',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section class="w-full bg-white py-12">
      <!-- Header -->
      <div class="text-center mb-12">
        <div
          class="text-black flex font-medium mb-3 items-center justify-center space-x-1.5"
        >
          <img src="assets/images/plane.svg" class="pb-1" />
          <h2 class="text-3xl font-medium">
            Our <span class="font-bold">Immigration </span>Services
          </h2>
        </div>

        <h2 class="text-5xl pb-2 text-sea-900">
          Outstanding Immigration Services
        </h2>
      </div>

      <!-- Programs Grid -->
      <div class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
        @for(item of programs(); track item){
        <a [routerLink]="item.routePath" class="block">
          <div class="relative h-96 overflow-hidden group cursor-pointer">
            <!-- Background Image -->
            <img
              [src]="'/assets/images/' + item.bgImage"
              [alt]="item.title"
              class="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-in-out group-hover:scale-110"
            />

            <!-- Colored Overlay with 50% opacity -->
            <div
              [class]="
                'absolute inset-0 opacity-50 transition-opacity duration-300 ' +
                item.bgColor
              "
            ></div>

            <!-- Dark Gradient Overlay (Bottom to Top) -->
            <div
              class="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"
            ></div>

            <!-- Content -->
            <div class="relative h-full flex flex-col z-10 pt-6 pb-2 px-6">
              <!-- Title at bottom with transition to center on hover -->
              <div
                class="mt-auto transition-all duration-500 transform group-hover:translate-y-[-30%]"
              >
                <h3
                  class="text-3xl font-bold text-white mb-3 transition-all duration-500"
                >
                  {{ item.title }}
                </h3>

                <!-- Description (hidden by default, visible on hover) -->
                <p
                  class="text-white text-sm mb-4 opacity-0 h-0 overflow-hidden transition-all duration-500 group-hover:opacity-100 group-hover:h-32"
                >
                  {{ item.description }}
                </p>

                <!-- Button (hidden by default, visible on hover) -->
                <!-- <button
                  class="text-white border border-white rounded px-6 py-2 w-40 hover:bg-white hover:text-black  opacity-0 transform translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0"
                >
                  Read More
                </button> -->
                <div class="flex items-center justify-end">
                  <span
                    class="text-white px-6 py-2 opacity-0 transform translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0"
                    >Read More</span
                  >
                  <svg
                    class="px-1 py-2  opacity-0 transform translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0"
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

      /* Additional styles if needed */
    `,
  ],
})
export class ExpressEntrySectionComponent {
  programs = signal<Program[]>([
    {
      id: 'study',
      icon: 'service-study',
      title: 'Study in Canada',
      description:
        'Explore options for international students to study at Canadian institutions with student permits and post-graduation work opportunities.',
      overlayText: 'STUDY',
      routePath: '/services/temporary-services/study',
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
      routePath: '/services/temporary-services/work',
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
      routePath: '/services/temporary-services/visitor-visa',
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
      routePath: '/services/permanent-residency/express-entry',
      bgColor: 'bg-sea-900',
      bgImage: 'service-express.jpg',
    },
    {
      id: 'pnp',
      icon: 'service-pnp',
      title: 'Provincial Nominee',
      description:
        'Explore province-specific immigration pathways designed to address regional economic and demographic needs.',
      overlayText: 'PNP',
      routePath: '/services/permanent-residency/provincial-nominee',
      bgColor: 'bg-sea-900',
      bgImage: 'pnp-program.jpg',
    },
    {
      id: 'business',
      icon: 'service-business',
      title: 'Business Immigration',
      description:
        'Immigration options for entrepreneurs, investors, and self-employed individuals looking to establish businesses in Canada.',
      overlayText: 'BIZ',
      routePath: '/services/permanent-residency/business-immigration',
      bgColor: 'bg-red-600',
      bgImage: 'service-business.jpg',
    },
    {
      id: 'pr-citizenship',
      icon: 'service-citizen',
      title: 'PR Card & Citizenship',
      description:
        'Services for permanent resident card renewal and applications for Canadian citizenship.',
      overlayText: 'PR&C',
      routePath: '/services/additional-services/citizenship',
      bgColor: 'bg-sea-900',
      bgImage: 'service-passport.jpg',
    },
    {
      id: 'more',
      icon: 'service-more',
      title: 'More Services',
      description:
        'Discover additional immigration services and specialized programs to meet your specific needs and situation.',
      overlayText: 'MORE',
      routePath: '/services',
      bgColor: 'bg-red-600',
      bgImage: 'skilled-worker.jpg',
    },
  ]);
}
