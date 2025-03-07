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
}

@Component({
  selector: 'app-express-entry-section',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section class="w-full bg-white">
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
      <div class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <ng-container *ngFor="let item of programs()">
          <div class="relative h-96">
            <!-- Background Color -->
            <div [class]="'absolute inset-0 ' + item.bgColor">
              <!-- Content -->
              <div
                class="relative h-full flex flex-col justify-center px-8 text-white z-10"
              >
                <img
                  [src]="'/assets/icons/' + item.icon + '.svg'"
                  [alt]="item.icon"
                  class="size-6 mb-1 invert"
                />
                <h3 class="text-2xl font-bold mb-4">{{ item.title }}</h3>
                <p class="text-sm mb-6">{{ item.description }}</p>
                <button
                  [routerLink]="item.routePath"
                  class="text-white border border-white rounded px-6 py-2 w-40 hover:bg-white hover:text-black transition-colors duration-300"
                >
                  Read More
                </button>

                <!-- Overlay Text -->
                <div
                  class="absolute top-0 right-0 text-8xl font-bold opacity-20 text-white"
                >
                  {{ item.overlayText }}
                </div>
              </div>
            </div>
          </div>
        </ng-container>
      </div>
    </section>
  `,
  styles: [],
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
    },
    {
      id: 'visitor',
      icon: 'service-visa',
      title: 'Visitor Visa and Family Reunification',
      description:
        'Learn about visitor visas, super visas, and family reunification programs to bring your loved ones to Canada.',
      overlayText: 'VISA',
      routePath: '/services/temporary-services/visitor-visa',
      bgColor: 'bg-red-600',
    },
    {
      id: 'express',
      icon: 'service-express',
      title: 'Express Entry (PR Pathway)',
      description:
        "Canada's primary immigration system for skilled workers looking for permanent residency through FSW, CEC, and FST programs.",
      overlayText: 'EE',
      routePath: '/services/permanent-residency/express-entry',
      bgColor: 'bg-sea-900',
    },
    {
      id: 'pnp',
      icon: 'service-pnp',
      title: 'Provincial Nominee Program (PNP)',
      description:
        'Explore province-specific immigration pathways designed to address regional economic and demographic needs.',
      overlayText: 'PNP',
      routePath: '/services/permanent-residency/provincial-nominee',
      bgColor: 'bg-sea-900',
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
    },
    {
      id: 'pr-citizenship',
      icon: 'service-citizen',
      title: 'PR Card & Citizenship Services',
      description:
        'Services for permanent resident card renewal and applications for Canadian citizenship.',
      overlayText: 'PR&C',
      routePath: '/services/additional-services/citizenship',
      bgColor: 'bg-sea-900',
    },
    {
      id: 'more',
      icon: 'service-more',
      title: 'Click here to know more...',
      description:
        'Discover additional immigration services and specialized programs to meet your specific needs and situation.',
      overlayText: 'MORE',
      routePath: '/services',
      bgColor: 'bg-red-600',
    },
  ]);
}
