import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { localServices, nav } from '../utils/constants/navigation';
// import { NavigationService } from '../services/navigation.service';
// import { TopNavigation } from '../utils/types/navigation.types';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <header class="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <nav
        class="container mx-auto px-4 py-4 flex justify-between items-center"
      >
        <!-- Logo -->
        <div class="flex items-center cursor-pointer">
          <img
            [routerLink]="nav().logoTitle.href"
            src="/assets/images/logo.svg"
            [alt]="nav().logoTitle.label"
            class="h-8"
          />
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden lg:flex justify-center items-center space-x-6">
          @for(item of nav().navItem; track item.id) { @if(!item.hasDropdown) {
          <a
            [routerLink]="item.href"
            [href]="item.isExternal ? item.href : null"
            [target]="item.isExternal ? '_blank' : undefined"
            routerLinkActive="text-fire-600"
            class="text-gray-600 font-spartan hover:text-fire-600 transition-colors"
          >
            {{ item.label }}
          </a>
          } @else {
          <div class="relative group">
            <a
              class="text-gray-600 font-spartan hover:text-fire-600 transition-colors cursor-pointer flex items-center gap-1"
            >
              Our Services
              <svg
                class="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </a>

            <div
              class="absolute left-1/2 -translate-x-1/2 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 w-[800px] bg-white shadow-lg rounded-lg mt-2 p-6"
            >
              <div class="grid grid-cols-3 gap-6">
                <!-- Service Categories -->
                @for(category of localServices(); track category.id) {
                <div>
                  <h3 class="font-semibold text-fire-600 mb-3">
                    {{ category.title }}
                  </h3>
                  <div class="flex flex-col font-light gap-2">
                    @for(service of category.items; track service.id) {
                    <a
                      [routerLink]="service.path"
                      class="text-sm text-gray-600 hover:text-fire-600"
                      >{{ service.label }}</a
                    >
                    }
                  </div>
                </div>
                }
              </div>
            </div>
          </div>
          } }
          <!-- Desktop CTA -->
          <button
            [routerLink]="nav().ctaButton.href"
            class="hidden lg:block bg-fire-600 text-white text-sm px-6 py-3 ml-2 rounded-lg transition-colors hover:bg-fire-700"
          >
            {{ nav().ctaButton.label }}
          </button>
        </div>

        <!-- Mobile Menu Button -->
        <div class="lg:hidden">
          <button
            (click)="toggleMenu()"
            class="text-gray-600 hover:text-fire-600 focus:outline-none"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                *ngIf="!isMenuOpen()"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-16 6h16"
              />
              <path
                *ngIf="isMenuOpen()"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </nav>

      <!-- Mobile Menu -->
      <div
        *ngIf="isMenuOpen()"
        class="lg:hidden fixed inset-0 bg-white z-50 overflow-y-auto"
        style="top: 65px;"
      >
        <div class="container mx-auto px-4 py-6">
          <!-- Main Navigation Links -->
          <div class="flex flex-col gap-6">
            @for(item of nav().navItem; track item.id) { @if(!item.hasDropdown)
            {
            <a
              [routerLink]="item.href"
              [href]="item.isExternal ? item.href : null"
              [target]="item.isExternal ? '_blank' : undefined"
              (click)="closeMenu()"
              class="text-xl font-medium text-gray-800 hover:text-fire-600"
            >
              {{ item.label }}
            </a>
            } @else {
            <!-- Services Sections -->
            <div class="space-y-6">
              @for(category of localServices(); track category.id){
              <div>
                <h3 class="text-xl font-bold text-fire-600 mb-3">
                  {{ category.title }}
                </h3>
                <div class="flex flex-col gap-3 pl-4">
                  @for(service of category.items; track service.id){
                  <a
                    [routerLink]="service.path"
                    (click)="closeMenu()"
                    class="text-gray-600 hover:text-fire-600"
                  >
                    {{ service.label }}
                  </a>
                  }
                </div>
              </div>
              }
            </div>
            }}

            <!-- Mobile CTA -->
            <button
              [routerLink]="nav().ctaButton.href"
              (click)="closeMenu()"
              class="mt-6 w-full bg-fire-600 text-white px-6 py-3 rounded-lg transition-colors hover:bg-fire-700 text-center"
            >
              {{ nav().ctaButton.label }}
            </button>
          </div>
        </div>
      </div>
    </header>
    <div class="h-16"></div>
  `,
  styles: [
    `
      :host {
        display: block;
      }

      .group:hover .group-hover\\:visible {
        visibility: visible;
        pointer-events: auto;
      }

      /* Prevent body scroll when menu is open */
      :host-context(body.menu-open) {
        overflow: hidden;
      }
    `,
  ],
})
export class HeaderComponent implements OnInit {
  isMenuOpen = signal(false);
  nav = signal(nav);
  localServices = signal(localServices);
  // navigationService = inject(NavigationService);
  // navigation = signal<TopNavigation | null>(null);
  // services = signal<any>(null);

  // temporaryServices = [
  //   { name: 'Study in Canada', route: '/services/temporary-services/study' },
  //   { name: 'Work in Canada', route: '/services/temporary-services/work' },
  //   {
  //     name: 'Visitor Visa',
  //     route: '/services/temporary-services/visitor-visa',
  //   },
  //   {
  //     name: 'Parent/Grandparent Super Visa',
  //     route: '/services/temporary-services/super-visa',
  //   },
  //   {
  //     name: 'Labour Market Impact Assessment',
  //     route: '/services/temporary-services/lmia',
  //   },
  // ];

  // permanentServices = [
  //   {
  //     name: 'Express Entry',
  //     route: '/services/permanent-residency/express-entry',
  //   },
  //   {
  //     name: 'Provincial Nominee Program',
  //     route: '/services/permanent-residency/provincial-nominee',
  //   },
  //   {
  //     name: 'Atlantic Immigration Program',
  //     route: '/services/permanent-residency/atlantic-immigration',
  //   },
  //   {
  //     name: 'Family Immigration',
  //     route: '/services/permanent-residency/family-immigration',
  //   },
  //   {
  //     name: 'Business Immigration',
  //     route: '/services/permanent-residency/business-immigration',
  //   },
  // ];

  // additionalServices = [
  //   {
  //     name: 'PR Card Renewal',
  //     route: '/services/additional-services/pr-card-renewal',
  //   },
  //   {
  //     name: 'Citizenship Applications',
  //     route: '/services/additional-services/citizenship',
  //   },
  //   {
  //     name: 'Application Review',
  //     route: '/services/additional-services/application-review',
  //   },
  //   {
  //     name: 'Family Sponsorship',
  //     route: '/services/additional-services/family-sponsorship',
  //   },
  //   {
  //     name: 'Appeals & Humanitarian',
  //     route: '/services/additional-services/appeals',
  //   },
  // ];

  ngOnInit() {
    // this.navigationService.getNavigation().subscribe({
    //   next: (data) => {
    //     this.navigation.set(data);
    //   },
    //   error: (error) => {
    //     console.error('Error fetching navigation:', error);
    //   },
    // });
    // this.navigationService.getServiceCategories().subscribe({
    //   next: (data) => {
    //     this.services.set(data);
    //   },
    //   error: (error) => {
    //     console.error('Error fetching services:', error);
    //   },
    // });
  }

  toggleMenu() {
    this.isMenuOpen.update((value) => !value);
    document.body.classList.toggle('menu-open');
  }

  closeMenu() {
    this.isMenuOpen.set(false);
    document.body.classList.remove('menu-open');
  }
}
