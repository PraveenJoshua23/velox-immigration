import { Component, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageContent } from '../utils/types/directus';

@Component({
  selector: 'app-partner-logos',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-16 border-t border-gray-100">
      <div class="container mx-auto px-4 text-center">
        <h3 class="text-2xl md:text-3xl font-medium text-sea-900 mb-2">
          Licensed &amp; Accredited
        </h3>
        <p class="text-gray-700 mb-10">
          Licensed RCIC: Anitha Gabriel · Membership ID R1034239 · Regulated by
          the College of Immigration and Citizenship Consultants (CICC)
        </p>
        <div
          class="flex flex-wrap items-center justify-center gap-x-16 gap-y-8"
        >
          @for (logo of logos(); track logo.id) {
          <img
            [src]="logo.src"
            [alt]="logo.alt"
            loading="lazy"
            class="h-20 md:h-24 w-auto object-contain"
          />
          }
        </div>
      </div>
    </section>
  `,
})
export class PartnerLogosComponent {
  @Input() content: { data: HomePageContent | null } = { data: null };
  logos = signal([
    {
      id: 1,
      src: '/assets/images/cicc-logo.webp',
      alt: 'CICC Logo',
    },
    {
      id: 2,
      src: '/assets/images/rcic-logo.webp',
      alt: 'RCIC Logo',
    },
    // {
    //   id: 3,
    //   src: '/assets/images/CAPIC-logo.png',
    //   alt: 'CAPIC Logo',
    // },
  ]);
}
