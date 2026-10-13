import { Component, DestroyRef, inject } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../../components/header.component';
import { FooterComponent } from '../../components/footer.component';
import { SeoService } from '../../services/seo.service';

/** Setmore redirects here after a booking. */
@Component({
  selector: 'app-booking-confirmed',
  standalone: true,
  imports: [RouterModule, HeaderComponent, FooterComponent],
  template: `
    <app-header />

    <main class="bg-gray-100">
      <section class="container mx-auto px-4 py-24 md:py-32 grid lg:grid-cols-12 gap-12 items-start">
        <div class="lg:col-span-7">
          <p class="text-sm font-medium uppercase tracking-wider text-fire-600 mb-4">Booking received</p>
          <h1 class="text-4xl md:text-5xl font-medium text-sea-900 leading-tight mb-5">
            Thank you, you're booked in
          </h1>
          <p class="text-lg text-gray-700 leading-relaxed max-w-xl mb-10">
            We've received your consultation booking. Setmore will email you a
            confirmation with your date, time and meeting details.
          </p>

          <h2 class="text-2xl font-medium text-sea-900 mb-6">What happens next</h2>
          <ol class="space-y-5 mb-10 max-w-xl">
            @for (step of steps; track step; let i = $index) {
            <li class="flex gap-4">
              <span class="font-heading text-lg font-medium text-fire-600 w-6 shrink-0">{{ i + 1 }}</span>
              <span class="text-gray-700">{{ step }}</span>
            </li>
            }
          </ol>

          <div class="flex flex-col sm:flex-row gap-4">
            <a
              routerLink="/"
              class="text-center bg-fire-600 text-white font-medium px-8 py-3.5 rounded-lg hover:bg-fire-700 transition-colors"
            >
              Back to home page
            </a>
            <a
              routerLink="/services"
              class="text-center border-2 border-sea-900 text-sea-900 font-medium px-8 py-3 rounded-lg hover:bg-sea-900 hover:text-white transition-colors"
            >
              Browse services
            </a>
          </div>
        </div>

        <aside class="lg:col-span-5 space-y-6">
          <div class="bg-white rounded-3xl border border-gray-200 p-6 sm:p-8">
            <h2 class="text-xl font-medium text-sea-900 mb-4">Have these ready</h2>
            <ul class="space-y-2.5 text-gray-700 list-disc pl-5">
              @for (item of prepare; track item) {
              <li>{{ item }}</li>
              }
            </ul>
          </div>

          <div class="bg-sea-950 text-white rounded-3xl p-6 sm:p-8">
            <h2 class="text-xl mb-3">Need to change your booking?</h2>
            <p class="text-white/80 mb-5">
              Use the link in your confirmation email, or call us and we'll help.
            </p>
            <ul class="space-y-2">
              @for (office of offices; track office.tel) {
              <li class="flex justify-between gap-4">
                <span class="text-white/80">{{ office.city }}</span>
                <a [href]="'tel:' + office.tel" class="py-1 font-medium hover:text-fire-500">{{ office.phone }}</a>
              </li>
              }
            </ul>
          </div>
        </aside>
      </section>
    </main>

    <app-footer [hideContactBanner]="true" />
  `,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
})
export class BookingConfirmedComponent {
  steps = [
    'Look out for your Setmore confirmation email. Check your spam folder if it hasn’t arrived within a few minutes.',
    'Meet Anitha online at your booked time and get advice on your options.',
  ];

  prepare = [
    'Your passport',
    'Any past Canadian applications, approvals or refusal letters',
    'Your education and work history',
    'Language test results, if you have them',
    'A list of questions you want answered',
  ];

  offices = [
    { city: 'Toronto, Canada', phone: '+1 416-662-0652', tel: '+14166620652' },
    { city: 'Chennai, India', phone: '+91 77088 52882', tel: '+917708852882' },
  ];

  constructor() {
    inject(SeoService).setAllSeoData({
      title: 'Booking confirmed | Velox Immigration',
      description: 'Your consultation with Velox Immigration is booked.',
    });
    // Only reached after a booking; keep it out of search results
    const meta = inject(Meta);
    meta.updateTag({ name: 'robots', content: 'noindex' });
    inject(DestroyRef).onDestroy(() => meta.removeTag('name="robots"'));
  }
}
