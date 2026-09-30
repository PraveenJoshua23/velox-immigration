import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeaderComponent } from '../../components/header.component';
import { FooterComponent } from '../../components/footer.component';
import { SafeHtmlComponent } from '../../components/safe-html.component';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-book-appointment',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, SafeHtmlComponent],
  template: `
    <app-header />

    <main>
      <!-- Hero -->
      <section class="relative overflow-hidden bg-sea-950 text-white py-20 md:py-28">
        <img
          src="/assets/images/about-cover.webp"
          alt=""
          fetchpriority="high"
          class="absolute inset-0 size-full object-cover"
        />
        <div class="absolute inset-0 bg-gradient-to-r from-sea-950/95 via-sea-950/85 to-sea-950/60"></div>
        <div class="relative container mx-auto px-4">
          <h1 class="text-4xl md:text-6xl font-medium leading-[1.05] mb-6">Book a consultation</h1>
          <p class="text-lg md:text-xl text-white/80 max-w-2xl">{{ content?.page_subtitle }}</p>
        </div>
      </section>

      <section class="bg-gray-100 py-16 md:py-24">
        <div class="container mx-auto px-4 grid lg:grid-cols-12 gap-8 lg:gap-12">
          <div class="lg:col-span-8 space-y-8">
            <!-- Step 1: agreement -->
            <div class="bg-white rounded-3xl border border-gray-200 p-6 sm:p-8 md:p-10">
              <p class="font-spartan text-lg font-medium text-fire-600 mb-2">Step 1</p>
              <h2 class="text-2xl md:text-3xl text-sea-900 mb-2">Review the consultation agreement</h2>
              <p class="text-gray-700 mb-6">Please read this before booking. Booking and paying the fee confirms your agreement.</p>

              <div
                class="max-h-80 overflow-y-auto rounded-2xl border border-gray-200 bg-gray-50 p-5 md:p-6"
                tabindex="0"
                aria-label="Initial consultation agreement"
              >
                <app-safe-html
                  [htmlContent]="content?.disclaimer_content"
                  containerClass="prose prose-sm md:prose-base max-w-none text-gray-700 prose-strong:text-sea-900 prose-strong:font-medium"
                />
              </div>

              <label class="mt-6 flex items-start gap-3 cursor-pointer select-none">
                <input
                  type="checkbox"
                  class="mt-0.5 size-5 shrink-0 rounded border-gray-300 accent-fire-600"
                  [checked]="agreed()"
                  (change)="agreed.set($any($event.target).checked)"
                />
                <span class="text-gray-800">
                  I have read and agree to the Initial Consultation Agreement.
                </span>
              </label>
            </div>

            <!-- Step 2: choose a consultation -->
            <div class="bg-white rounded-3xl border border-gray-200 p-6 sm:p-8 md:p-10">
              <p class="font-spartan text-lg font-medium text-fire-600 mb-2">Step 2</p>
              <h2 class="text-2xl md:text-3xl text-sea-900 mb-6">Choose your consultation</h2>

              <ul class="space-y-4">
                @for (option of content?.booking_links; track option.booking_calendly_link) {
                <li class="rounded-2xl border border-gray-200 p-6 flex flex-col md:flex-row md:items-center gap-6">
                  <div class="flex-1">
                    <h3 class="text-xl font-medium text-sea-900 mb-3">{{ option.booking_title }}</h3>
                    <div class="flex flex-wrap gap-2 mb-3">
                      @if (option.booking_duration) {
                      <span class="rounded-full bg-sea-50 text-sea-800 text-sm font-medium px-3 py-1">{{ option.booking_duration }}</span>
                      } @if (option.booking_price) {
                      <span class="rounded-full bg-sea-50 text-sea-800 text-sm font-medium px-3 py-1">{{ option.booking_price }}</span>
                      }
                      <span class="rounded-full bg-sea-50 text-sea-800 text-sm font-medium px-3 py-1">Online</span>
                    </div>
                    @if (option.booking_description) {
                    <p class="text-gray-700 leading-relaxed">{{ option.booking_description }}</p>
                    }
                  </div>

                  @if (agreed()) {
                  <a
                    [href]="option.booking_calendly_link"
                    class="shrink-0 text-center bg-fire-600 text-white font-medium px-8 py-3.5 rounded-lg hover:bg-fire-700 transition-colors"
                  >
                    Book on Calendly <span aria-hidden="true">&rarr;</span>
                  </a>
                  } @else {
                  <button
                    type="button"
                    disabled
                    aria-describedby="agree-hint"
                    class="shrink-0 bg-gray-200 text-gray-500 font-medium px-8 py-3.5 rounded-lg cursor-not-allowed"
                  >
                    Book on Calendly
                  </button>
                  }
                </li>
                }
              </ul>
              @if (!agreed()) {
              <p id="agree-hint" class="mt-4 text-sm text-gray-600">
                Agree to the consultation agreement in step 1 to continue.
              </p>
              }
            </div>
          </div>

          <!-- Sidebar -->
          <aside class="lg:col-span-4 space-y-6">
            <div class="bg-white rounded-3xl border border-gray-200 p-6 sm:p-8">
              <div class="flex items-center gap-4 mb-5">
                <img src="/assets/images/rcic-logo.webp" alt="" class="h-10 w-auto" />
                <div>
                  <p class="font-medium text-sea-900">Anitha Gabriel</p>
                  <p class="text-sm text-gray-600">Licensed RCIC-IRB</p>
                  <p class="text-sm text-gray-600">Membership ID R1034239</p>
                </div>
              </div>
              <p class="text-gray-700 leading-relaxed">
                Your consultation is with a licensed Regulated Canadian Immigration
                Consultant, regulated by the College of Immigration and Citizenship
                Consultants (CICC).
              </p>
            </div>

            <div class="bg-sea-950 text-white rounded-3xl p-6 sm:p-8">
              <h2 class="text-2xl mb-6">How it works</h2>
              <ol class="space-y-5">
                @for (step of steps; track step; let i = $index) {
                <li class="flex gap-4">
                  <span class="font-spartan text-lg font-medium text-fire-300 w-6 shrink-0">{{ i + 1 }}</span>
                  <span class="text-white/85">{{ step }}</span>
                </li>
                }
              </ol>
            </div>
          </aside>
        </div>
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
export class BookYourAppointmentComponent {
  content: any;
  agreed = signal(false);

  steps = [
    'Pick a time that suits you in Calendly.',
    'Pay the consultation fee to confirm your booking.',
    'Meet Anitha online and get advice on your options.',
  ];

  constructor() {
    inject(ActivatedRoute).data.subscribe((response: any) => {
      const data = response.data.data;
      this.content = Array.isArray(data) ? data[0] : data;
    });
    inject(SeoService).setAllSeoData({
      title: 'Book a Consultation | Velox Immigration',
      description:
        'Book an online consultation with Anitha Gabriel, licensed RCIC (R1034239). Choose a time on Calendly and get advice on your Canadian immigration options.',
    });
  }
}
