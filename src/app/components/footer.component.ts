import { Component, Inject, Input, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div
      class="relative"
      [classList]="hideContactBanner ? 'mt-0' : 'mt-[100px] md:mt-[100px]'"
    >
      <!-- Floating Contact Banner -->
      @if (!hideContactBanner) {
      <div class="absolute top-[-8.5rem] md:-top-20 left-0 right-0">
        <div class="container mx-auto px-4">
          <div
            class="bg-red-600 rounded-lg py-4 px-8 sm:p-8 flex flex-col md:flex-row justify-between items-center"
          >
            <div
              class="flex flex-col md:flex-row items-center gap-4 mb-4 md:mb-0"
            >
              <h3
                class="text-xl md:text-2xl text-center md:text-left text-white font-light"
              >
                Are you looking for a
                <div class="font-medium">
                  Licensed Canadian Immigration Consultant?
                </div>
              </h3>
            </div>
            <div class="flex flex-col items-center gap-4 text-white">
              <span class="text-sm">Feel free to call us</span>
              <div class="flex flex-col gap-2">
                <div class="flex items-center gap-2">
                  <span class="text-lg font-medium">+1 416-662-0652</span>
                </div>
                <div class="flex items-center gap-2">
                  <span class="text-lg font-medium">+91 77088 53882</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      }

      <!-- Footer -->
      <footer class="bg-[#1B2534] pt-32 pb-8">
        <div class="container mx-auto px-4">
          <div
            class="grid grid-cols-1 md:grid-cols-7 gap-8 mb-12 text-center md:text-left"
          >
            <!-- Company Info -->
            <div class="col-span-2">
              <img
                src="assets/images/logo-white.svg"
                alt="Velox Immigration"
                class="h-14 mb-4 mx-auto md:mx-0"
              />

              <p class="text-gray-400 font-light text-sm mb-4">
                Regulated Canadian Immigration Consulting Firm - Serving Clients
                Globally.
              </p>

              <p class="text-gray-400 font-light text-sm mb-4">
                Licensed RCIC: Anitha Gabriel | Membership ID: R1034239<br />
                Authorized by the College of Immigration and Citizenship
                Consultants (CICC)
              </p>

              <div class="flex flex-col items-center md:items-start gap-4">
                <div class="flex justify-between gap-2 w-full">
                  <p class="text-gray-400 font-light">Toronto, Canada</p>
                  <p class="text-gray-400 font-light">
                    <span class="mr-1">🇨🇦</span> +1 416-662-0652
                  </p>
                </div>
                <div class="flex justify-between gap-2 w-full">
                  <p class="text-gray-400 font-light">Chennai, India</p>
                  <p class="text-gray-400 font-light">
                    <span class="mr-1">🇮🇳</span> +91 77088 53882
                  </p>
                </div>
              </div>
            </div>
            @for(item of servicesMenu; track $index) {
            <div>
              <h4 class="text-white font-medium mb-4">{{ item.label }}</h4>
              <ul class="space-y-2 text-sm">
                <ng-container *ngIf="item.sub_menu; else singleFooterLink">
                  <li *ngFor="let sub of item.sub_menu">
                    <a
                      [routerLink]="sub.url"
                      class="text-gray-400 font-light hover:text-white"
                      *ngIf="sub.visible"
                    >
                      {{ sub.label }}
                    </a>
                    <!-- Handle deeper nesting if needed -->
                    <ul *ngIf="sub.sub_menu">
                      <li *ngFor="let subsub of sub.sub_menu">
                        <a
                          [routerLink]="subsub.url"
                          class="text-gray-400 font-light hover:text-white"
                          *ngIf="subsub.visible"
                        >
                          {{ subsub.label }}
                        </a>
                      </li>
                    </ul>
                  </li>
                </ng-container>
                <ng-template #singleFooterLink>
                  <li>
                    <a
                      [routerLink]="item.url"
                      class="text-gray-400 font-light hover:text-white"
                      *ngIf="item.visible"
                    >
                      {{ item.label }}
                    </a>
                  </li>
                </ng-template>
              </ul>
            </div>
            }
          </div>

          <!-- Copyright and Social Links -->
          <div
            class="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center"
          >
            <div
              class="text-gray-400 text-xs font-light mb-4 md:mb-0 flex flex-wrap items-center gap-2"
            >
              <p>Copyright 2025. All rights reserved.</p>
              <span class="hidden md:inline">|</span>
              <a routerLink="/privacy-policy" class="hover:text-white"
                >Privacy Policy</a
              >
            </div>
            <div class="flex space-x-4">
              <a
                href="https://www.facebook.com/share/18ZQKWcRMx/?mibextid=wwXIfr"
                class="text-gray-400 hover:text-white"
              >
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"
                  />
                </svg>
              </a>

              <a
                href="https://www.instagram.com/velox_immigration?igsh=MWM0aXhiMm42NjVsMQ%3D%3D&utm_source=qr"
                class="text-gray-400 hover:text-white"
              >
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                  />
                </svg>
              </a>
              <a
                href="https://x.com/Velox_Immig"
                class="text-gray-400 hover:text-white"
              >
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
        position: relative;
      }
    `,
  ],
})
export class FooterComponent {
  @Input() hideContactBanner = false;
  servicesMenu: any[] = [];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const menuString = localStorage.getItem('velox_navigation_menu');
      if (menuString) {
        try {
          const menuObj = JSON.parse(menuString);
          const menuData = menuObj?.data?.[0]?.menu_items || [];
          const services = menuData.find(
            (item: any) => item.label === 'Services'
          );
          if (services && services.sub_menu) {
            this.servicesMenu = services.sub_menu.filter(
              (item: any) => item.visible
            );
          }
        } catch (e) {
          this.servicesMenu = [];
        }
      }
    }
  }
}
