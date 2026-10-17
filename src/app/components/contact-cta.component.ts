import { Component } from '@angular/core';
import { BOOKING_URL } from '../utils/booking';

@Component({
  selector: 'app-contact-cta',
  standalone: true,
  template: `
    <section
      class="relative isolate overflow-hidden bg-sea-950 bg-cover bg-center"
      style="background-image: url('assets/images/cta-bg.webp')"
    >
      <div class="absolute inset-0 -z-10 bg-sea-950/80"></div>
      <div
        class="container mx-auto px-4 py-16 md:py-24 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8"
      >
        <h2 class="text-3xl md:text-4xl text-white max-w-xl leading-tight">
          Looking for a licensed Canadian immigration consultant?
        </h2>
        <div class="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
          <a
            [href]="bookingUrl"
            class="bg-fire-600 text-white font-medium text-center px-8 py-3.5 rounded-lg hover:bg-fire-700 transition-colors"
          >
            Book a Consultation
          </a>
          <div class="text-sm text-white/70">
            or call
            @for (office of offices; track office.tel) {
            <a
              [href]="'tel:' + office.tel"
              class="block py-1.5 font-medium text-white hover:text-fire-500"
              >{{ office.phone }}</a
            >
            }
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [':host { display: block; }'],
})
export class ContactCtaComponent {
  bookingUrl = BOOKING_URL;
  offices = [
    { phone: '+1 416-662-0652', tel: '+14166620652' },
    { phone: '+91 77088 52882', tel: '+917708852882' },
  ];
}
