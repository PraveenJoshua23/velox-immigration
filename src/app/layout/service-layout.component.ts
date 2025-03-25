// services-layout.component.ts
import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../components/header.component';
import { FooterComponent } from '../components/footer.component';

interface ServiceCategory {
  title: string;
  path: string;
  services: {
    name: string;
    path: string;
  }[];
}

@Component({
  selector: 'app-services-layout',
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderComponent, FooterComponent],
  template: `
    <app-header />
    <div
      class="container mx-auto px-4 py-8 mt-4 flex flex-col md:flex-row gap-8"
    >
      <!-- Content Area -->
      <main class="flex-grow min-h-[calc(100vh-400px)]">
        <router-outlet></router-outlet>
      </main>

      <!-- Sidebar - Hidden on mobile (< 768px), visible from md (tablet) breakpoint -->
      <aside class="hidden md:block w-64 flex-shrink-0">
        @for(category of serviceCategories(); track category.title) {
        <div class="mb-6">
          <h3 class="text-lg font-medium text-sea-900 mb-2">
            {{ category.title }}
          </h3>
          <ul class="space-y-2">
            @for(service of category.services; track service.name) {
            <li>
              <a
                [routerLink]="['/services', category.path, service.path]"
                routerLinkActive="text-red-600"
                class="text-gray-600 hover:text-fire-600 transition-colors text-sm"
              >
                {{ service.name }}
              </a>
            </li>
            }
          </ul>
        </div>
        }
      </aside>
    </div>
    <app-footer [hideContactBanner]="true" />
  `,
})
export class ServicesLayoutComponent {
  serviceCategories = signal<ServiceCategory[]>([
    {
      title: 'Temporary Resident Services',
      path: 'temporary-services',
      services: [
        { name: 'Study in Canada', path: 'study' },
        { name: 'Work in Canada', path: 'work' },
        { name: 'Visitor Visa', path: 'visitor-visa' },
        { name: 'Parent/Grandparent Super Visa', path: 'super-visa' },
        { name: 'Labour Market Impact Assessment', path: 'lmia' },
      ],
    },
    {
      title: 'Permanent Residency',
      path: 'permanent-residency',
      services: [
        { name: 'Express Entry', path: 'express-entry' },
        { name: 'Provincial Nominee Program', path: 'provincial-nominee' },
        { name: 'Atlantic Immigration Program', path: 'atlantic-immigration' },
        { name: 'Family Immigration', path: 'family-immigration' },
        { name: 'Business Immigration', path: 'business-immigration' },
      ],
    },
    {
      title: 'Additional Services',
      path: 'additional-services',
      services: [
        { name: 'PR Card Renewal', path: 'pr-card-renewal' },
        { name: 'Citizenship Applications', path: 'citizenship' },
        { name: 'Application Review', path: 'application-review' },
        { name: 'Family Sponsorship', path: 'family-sponsorship' },
        { name: 'Appeals & Humanitarian', path: 'appeals-humanitarian' },
      ],
    },
  ]);
}
