import {
  CommonModule,
  isPlatformBrowser,
  NgOptimizedImage,
} from '@angular/common';
import {
  Component,
  inject,
  Inject,
  OnInit,
  PLATFORM_ID,
  signal,
} from '@angular/core';
import { RouterModule } from '@angular/router';
// import { ServicesComponent } from '../../components/services.component';
import { TestimonialsComponent } from '../../components/testimonials.component';
import { AboutComponent } from '../../components/about.component';
import { PartnerLogosComponent } from '../../components/partner-logo.component';
import { FooterComponent } from '../../components/footer.component';
import { ContactCtaComponent } from '../../components/contact-cta.component';
import { HeaderComponent } from '../../components/header.component';
import { WhyChooseUsComponent } from '../../components/why-choose-us.component';
import { ProcessStepsComponent } from '../../components/process-steps.component';
import { ContactFormData } from '../../services/sheets.service';
import { SeoService } from '../../services/seo.service';
import { DirectusService } from '../../services/directus.service';
import { HomePageContent } from '../../utils/types/directus';
import { BOOKING_URL } from '../../utils/booking';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ContactCtaComponent, 
    CommonModule,
    RouterModule,
    TestimonialsComponent,
    AboutComponent,
    PartnerLogosComponent,
    FooterComponent,
    HeaderComponent,
    WhyChooseUsComponent,
    ProcessStepsComponent,
    NgOptimizedImage,
  ],
  template: `
    <app-header [overlay]="true" />

    <main>
      <!-- Hero Section -->
      <!-- Full screen; the header floats over it (overlay) -->
      <section class="relative h-svh min-h-[640px] bg-black overflow-hidden">
        <img
          ngSrc="/assets/images/new-hero.webp"
          alt="Couple with a suitcase walking along the Toronto waterfront at sunset"
          class="object-cover object-[80%_center] lg:object-[70%_center]"
          priority
          fill
        />
        <!-- Darkens the left for text; below lg the text sits at the bottom, so darken from below -->
        <div
          class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/10 lg:bg-gradient-to-r lg:from-black/90 lg:via-black/55 lg:to-transparent"
        ></div>

        <div
          class="relative z-10 container mx-auto h-full px-4 pt-24 pb-8 md:pb-12 flex flex-col justify-end lg:justify-center"
        >
          <div class="hero-content max-w-xl text-white">
            <p
              class="text-base md:text-lg font-bold uppercase tracking-widest text-fire-500 mb-4 [text-shadow:0_1px_12px_rgb(0_0_0/0.8)]"
            >
              {{
                homecontent().data?.hero_subtitle ||
                  'Your Canadian journey starts here!'
              }}
            </p>
            <h1
              class="text-4xl sm:text-5xl lg:text-6xl font-medium leading-[1.05] mb-4 md:mb-6"
            >
              {{
                homecontent().data?.hero_title ||
                  'Canadian Immigration Advice for Your Next Step'
              }}
            </h1>
            <p class="text-base md:text-lg text-white mb-6 [text-shadow:0_1px_10px_rgb(0_0_0/0.7)] md:mb-8 max-w-md">
              {{
                homecontent().data?.hero_description ||
                  'Trusted guidance for your Canadian dreams with expert advice, seamless processing, and personalized solutions.'
              }}
            </p>

            <div class="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-6 md:mb-10">
              <a
                [href]="homecontent().data?.hero_cta_link || bookingUrl"
                class="bg-fire-600 text-white font-medium text-center px-8 py-3.5 rounded-lg transition-colors hover:bg-fire-700"
              >
                {{ homecontent().data?.hero_cta_title || 'Book a Consultation' }}
              </a>
              <button
                type="button"
                (click)="scrollToServices()"
                class="text-white font-medium px-2 py-3 underline-offset-4 hover:underline"
              >
                Explore services &darr;
              </button>
            </div>

            <ul
              class="flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/80 border-t border-white/20 pt-4 md:pt-6"
            >
              <li>Licensed RCIC · CICC regulated</li>
              <li>English &amp; Tamil support</li>
              <li>Toronto &amp; Chennai offices</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- About Section  -->
      <app-about [content]="homecontent()" />

      <!-- Why choose us Section -->
      <app-why-choose-us [content]="homecontent()" />

      <!-- Services -->
      <section id="services" class="scroll-mt-24 bg-gray-50 py-20 md:py-24">
        <div class="container mx-auto px-4 max-w-6xl">
          <p class="text-center text-sm font-semibold uppercase tracking-widest text-fire-600 mb-3">
            Our Services
          </p>
          <h2 class="text-center text-4xl md:text-5xl font-semibold text-sea-900 mb-12">
            How We Can Help
          </h2>

          <ul class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            @for (service of services; track service.title) {
            <li>
              <a
                [routerLink]="service.url"
                class="group block h-full rounded-2xl bg-white overflow-hidden shadow-sm transition-shadow hover:shadow-lg"
              >
                <div class="aspect-[16/10] overflow-hidden">
                  <img
                    [src]="'/assets/images/services/' + service.image"
                    alt=""
                    loading="lazy"
                    decoding="async"
                    class="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div class="flex items-center justify-between gap-4 px-5 py-4">
                  <h3 class="font-heading text-lg md:text-xl font-semibold text-sea-900">
                    {{ service.title }}
                  </h3>
                  <span
                    class="size-9 shrink-0 rounded-full bg-fire-600 text-white flex items-center justify-center transition-colors group-hover:bg-fire-700"
                    aria-hidden="true"
                  >
                    <svg class="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </span>
                </div>
              </a>
            </li>
            }
          </ul>
        </div>
      </section>

      <!-- Process Section -->
      <app-process-steps [content]="homecontent()" />

      <!-- Contact Form -->
      <!-- <div
        class="flex flex-col justify-center md:w-1/2 gap-8 max-w-6xl mx-auto"
      >
        <div class=" bg-white rounded-lg shadow-lg p-6">
          <app-contact-form
            submitButtonText="Get Started"
            (formSubmitted)="handleFormSubmission($event)"
          >
          </app-contact-form>
        </div>
      </div> -->

      <!-- Testimonial Section -->
      <app-testimonials [content]="homecontent()" />

      <!-- Partner logos -->
      <app-partner-logos [content]="homecontent()" />
    </main>

    <!-- Footer -->
    <app-contact-cta />
    <app-footer />
  `,
  styles: `
    :host {
      display: block;
    }

    /* Hero copy slides in on first paint. Pure CSS, so hydration can't restart or flash it. */
    @media (prefers-reduced-motion: no-preference) {
      .hero-content {
        animation: hero-in 0.8s ease-out both;
      }
    }

    @keyframes hero-in {
      from {
        opacity: 0;
        transform: translateX(-40px);
      }
    }
  `,
})
export class HomeComponent implements OnInit {
  bookingUrl = BOOKING_URL;
  seoService = inject(SeoService);
  directusService = inject(DirectusService);
  homecontent = signal<{ data: HomePageContent | null }>({ data: null });

  services = [
    { title: 'Study Permits', url: '/services/study/study-in-canada', image: 'service-study.webp' },
    { title: 'Work Permits', url: '/services/work', image: 'service-work.webp' },
    { title: 'Visitor Visas & Super Visas', url: '/services/visit/visitor-visas', image: 'service-visitor.webp' },
    { title: 'Express Entry & PNP', url: '/services/immigrate/express-entry', image: 'express-entry-cover.webp' },
    { title: 'Family Sponsorship', url: '/services/immigrate/family-sponsorship', image: 'family-cover.webp' },
    { title: 'Canadian Citizenship', url: '/services/other/pr-citizenship', image: 'service-passport.webp' },
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    // The hero has its own "Book a Consultation" button; hide the header's copy of it.
  }

  ngOnInit(): void {
    this.directusService.getHomePageContent('home_page').subscribe((data) => {
      // console.log(data);
      this.homecontent.set(data);
    });
    // Canonical/og:url are set per route in AppComponent
    this.seoService.setAllSeoData({
      title: 'RCIC Immigration Consultant Toronto | Velox Immigration',
      description:
        'Licensed RCIC for Express Entry, study and work permits, PR and family sponsorship. Offices in Toronto and Chennai, with support in English and Tamil.',
    });
  }

  scrollToServices() {
    if (isPlatformBrowser(this.platformId)) {
      const servicesSection = document.getElementById('services');
      if (servicesSection) {
        servicesSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }
  }

  handleFormSubmission(formData: ContactFormData) {
    console.log('Form submitted in home page section:', formData);
    // You can add additional section-specific handling here if needed
  }
}
