import { Component, inject, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DirectusService } from '../services/directus.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule],
  template: `
    <footer class="bg-sea-950 text-white/70">
      <div class="container mx-auto px-4">
        <!-- Contact CTA -->
        @if (!hideContactBanner) {
        <div
          class="py-14 md:py-16 border-b border-white/10 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8"
        >
          <h2 class="text-3xl md:text-4xl text-white max-w-xl leading-tight">
            Looking for a licensed Canadian immigration consultant?
          </h2>
          <div class="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
            <a
              routerLink="/book-your-appointment"
              class="bg-fire-600 text-white font-medium text-center px-8 py-3.5 rounded-lg hover:bg-fire-700 transition-colors"
            >
              Book a Consultation
            </a>
            <div class="text-sm">
              or call
              @for (office of offices; track office.tel) {
              <a
                [href]="'tel:' + office.tel"
                class="block py-1.5 font-medium text-white hover:text-fire-300"
                >{{ office.phone }}</a
              >
              }
            </div>
          </div>
        </div>
        }

        <!-- Main -->
        <div class="py-14 grid lg:grid-cols-12 gap-12">
          <!-- Company Info -->
          <div class="lg:col-span-4 space-y-5 text-sm leading-relaxed">
            <img
              src="assets/images/logo-white.svg"
              alt="Velox Immigration"
              class="h-12"
            />
            <p>
              Regulated Canadian Immigration Consulting Firm, serving clients
              globally.
            </p>
            <p>
              Licensed RCIC: Anitha Gabriel<br />
              Membership ID: R1034239<br />
              Authorized by the College of Immigration and Citizenship
              Consultants (CICC)
            </p>
            <ul class="space-y-2">
              @for (office of offices; track office.tel) {
              <li class="flex justify-between gap-4 max-w-xs">
                <span>{{ office.city }}</span>
                <a
                  [href]="'tel:' + office.tel"
                  class="py-1.5 text-white hover:text-fire-300"
                  >{{ office.phone }}</a
                >
              </li>
              }
            </ul>
          </div>

          <!-- Service links -->
          <nav
            aria-label="Services"
            class="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-10 text-sm"
          >
            @for (item of servicesMenu; track item.label) {
            <div>
              <h3 class="text-white font-medium mb-4">{{ item.label }}</h3>
              <ul class="space-y-2.5">
                @if (item.sub_menu) { @for (sub of item.sub_menu; track sub.label)
                { @if (sub.visible) {
                <li>
                  <a [routerLink]="sub.url" class="hover:text-white">{{
                    sub.label
                  }}</a>
                </li>
                } @for (subsub of sub.sub_menu || []; track subsub.label) { @if
                (subsub.visible) {
                <li>
                  <a [routerLink]="subsub.url" class="hover:text-white">{{
                    subsub.label
                  }}</a>
                </li>
                } } } } @else if (item.visible) {
                <li>
                  <a [routerLink]="item.url" class="hover:text-white">{{
                    item.label
                  }}</a>
                </li>
                }
              </ul>
            </div>
            }
          </nav>
        </div>

        <!-- Bottom bar -->
        <div
          class="border-t border-white/10 py-8 flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-6 text-xs"
        >
          <div class="flex flex-wrap items-center gap-x-4 gap-y-2">
            <p>© {{ year }} Velox Immigration Services Inc. All rights reserved.</p>
            <a routerLink="/privacy-policy" class="hover:text-white"
              >Privacy Policy</a
            >
          </div>
          <div class="flex gap-2 -ml-2 md:ml-0">
            @for (social of socials; track social.label) {
            <a
              [href]="social.href"
              target="_blank"
              rel="noopener noreferrer"
              [attr.aria-label]="social.label"
              class="size-10 rounded-full flex items-center justify-center hover:bg-white/10 hover:text-white transition-colors"
            >
              <svg class="size-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path [attr.d]="social.icon" />
              </svg>
            </a>
            }
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
})
export class FooterComponent {
  @Input() hideContactBanner = false;
  servicesMenu = inject(DirectusService).getServicesMenu();
  year = new Date().getFullYear();

  offices = [
    { city: 'Toronto, Canada', phone: '+1 416-662-0652', tel: '+14166620652' },
    { city: 'Chennai, India', phone: '+91 77088 53882', tel: '+917708853882' },
  ];

  socials = [
    {
      label: 'Velox Immigration on Facebook',
      href: 'https://www.facebook.com/share/18ZQKWcRMx/?mibextid=wwXIfr',
      icon: 'M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z',
    },
    {
      label: 'Velox Immigration on Instagram',
      href: 'https://www.instagram.com/velox_immigration?igsh=MWM0aXhiMm42NjVsMQ%3D%3D&utm_source=qr',
      icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z',
    },
    {
      label: 'Velox Immigration on X',
      href: 'https://x.com/Velox_Immig',
      icon: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z',
    },
  ];
}
