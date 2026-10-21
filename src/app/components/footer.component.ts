import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule],
  template: `
    <footer class="bg-sea-950 text-white/70">
      <div class="container mx-auto px-4">
        <!-- Main -->
        <div class="py-14 grid md:grid-cols-3 gap-12 text-sm leading-relaxed">
          <!-- Company Info -->
          <div class="space-y-4">
            <img src="assets/images/logo-white.svg" alt="Velox Immigration" class="h-12" />
            <div>
              <p class="text-white font-medium">Anitha Gabriel</p>
              <p>Regulated Canadian Immigration Consultant<br />RCIC IRB • R1034239</p>
            </div>
            <a href="mailto:info@veloximmigration.com" class="flex items-center gap-3 hover:text-white">
              <svg class="size-5 text-fire-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5z" />
              </svg>
              info&#64;veloximmigration.com
            </a>
          </div>

          <!-- Services -->
          <nav aria-label="Services">
            <h3 class="text-white font-medium mb-4">Our Services</h3>
            <ul class="space-y-2.5">
              @for (link of serviceLinks; track link.label) {
              <li><a [routerLink]="link.url" class="hover:text-white">{{ link.label }}</a></li>
              }
            </ul>
          </nav>

          <!-- Locations -->
          <div>
            <h3 class="text-white font-medium mb-4">Our Locations</h3>
            <ul class="space-y-5">
              @for (office of offices; track office.tel) {
              <li class="[&:not(:first-child)]:border-t border-white/10 [&:not(:first-child)]:pt-5">
                <p class="text-white font-medium">{{ office.name }}</p>
                <div class="flex items-start gap-3">
                  @if (office.country === 'CA') {
                  <svg class="size-4 mt-0.5 shrink-0 text-fire-600" fill="currentColor" viewBox="-2015 -2000 4030 4030" aria-hidden="true">
                    <path d="m-90 2030 45-863a95 95 0 0 0-111-98l-859 151 116-320a65 65 0 0 0-20-73l-941-762 212-99a65 65 0 0 0 34-79l-186-572 542 115a65 65 0 0 0 73-38l105-247 423 454a65 65 0 0 0 111-57l-204-1052 327 189a65 65 0 0 0 91-27l332-652 332 652a65 65 0 0 0 91 27l327-189-204 1052a65 65 0 0 0 111 57l423-454 105 247a65 65 0 0 0 73 38l542-115-186 572a65 65 0 0 0 34 79l212 99-941 762a65 65 0 0 0-20 73l116 320-859-151a95 95 0 0 0-111 98l45 863z" />
                  </svg>
                  } @else {
                  <svg class="w-4 h-[11px] mt-1 shrink-0 rounded-[1px]" viewBox="0 0 9 6" aria-hidden="true">
                    <path fill="#FF9933" d="M0 0h9v2H0z" />
                    <path fill="#fff" d="M0 2h9v2H0z" />
                    <path fill="#138808" d="M0 4h9v2H0z" />
                    <circle cx="4.5" cy="3" r=".8" fill="none" stroke="#000080" stroke-width=".2" />
                  </svg>
                  }
                  <address class="not-italic">
                    @for (line of office.address; track line) {<span class="block">{{ line }}</span>}
                  </address>
                </div>
                <a [href]="'tel:' + office.tel" class="mt-2 inline-flex items-center gap-3 text-white hover:text-fire-500">
                  <svg class="size-4 text-fire-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1z" />
                  </svg>
                  {{ office.phone }}
                </a>
              </li>
              }
            </ul>
          </div>
        </div>

        <!-- Bottom bar -->
        <div
          class="border-t border-white/10 py-8 flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-6 text-xs"
        >
          <div class="flex flex-wrap items-center gap-x-4 gap-y-2">
            <p>© {{ year }} Velox Immigration. All rights reserved.</p>
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
  serviceLinks = [
    { label: 'Study permits', url: '/services/study' },
    { label: 'Work permits', url: '/services/work' },
    { label: 'Visitor visas and super visas', url: '/services/visit' },
    { label: 'Express Entry and PNP', url: '/services/immigrate' },
    { label: 'Family sponsorship', url: '/services/immigrate/family-sponsorship' },
    { label: 'Citizenship', url: '/services/other/pr-citizenship' },
  ];
  year = new Date().getFullYear();

  offices = [
    {
      name: 'Velox Immigration Services Inc.',
      country: 'CA',
      address: ['Oshawa, Ontario, Canada', 'Online appointments only'],
      phone: '+1 416-662-0652',
      tel: '+14166620652',
    },
    {
      name: 'Velox Immigration Services Private Limited',
      country: 'IN',
      address: [
        'W-32/117, Plot No. C-10, 2nd Floor',
        '3rd Avenue, Anna Nagar',
        'Chennai 600040, Tamil Nadu, India',
      ],
      phone: '+91 77088 52882',
      tel: '+917708852882',
    },
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
