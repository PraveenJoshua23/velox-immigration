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
import { ServiceSectionComponent } from '../../components/service-section.component';
import { PartnerLogosComponent } from '../../components/partner-logo.component';
import { FooterComponent } from '../../components/footer.component';
import { HeaderComponent } from '../../components/header.component';
import { WhyChooseUsComponent } from '../../components/why-choose-us.component';
import { ProcessStepsComponent } from '../../components/process-steps.component';
import { ContactFormData } from '../../services/sheets.service';
import { SeoService } from '../../services/seo.service';
import { DirectusService } from '../../services/directus.service';
import { HomePageContent } from '../../utils/types/directus';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    TestimonialsComponent,
    AboutComponent,
    PartnerLogosComponent,
    FooterComponent,
    HeaderComponent,
    WhyChooseUsComponent,
    ProcessStepsComponent,
    ServiceSectionComponent,
    NgOptimizedImage,
  ],
  template: `
    <app-header />

    <main>
      <!-- Hero Section -->
      <!-- Fills the screen below the header (its spacer is h-16) -->
      <section class="relative h-[calc(100svh-4rem)] min-h-[600px] bg-black overflow-hidden">
        <img
          ngSrc="/assets/images/new-hero.webp"
          alt="Couple with a suitcase walking along the Toronto waterfront at sunset"
          class="object-cover object-[80%_center] lg:object-[70%_center]"
          priority
          fill
        />
        <!-- Darkens the left for text; below lg the text sits at the bottom, so darken from below -->
        <div
          class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/10 lg:bg-gradient-to-r lg:from-black/80 lg:via-black/40 lg:to-transparent"
        ></div>

        <div
          class="relative z-10 container mx-auto h-full px-6 md:px-10 pt-12 pb-8 md:pb-12 flex flex-col justify-end lg:justify-center"
        >
          <div class="hero-content max-w-xl text-white">
            <p
              class="text-sm md:text-base font-medium uppercase tracking-widest text-fire-300 mb-4"
            >
              {{
                homecontent().data?.hero_subtitle ||
                  'Your Canadian journey starts here!'
              }}
            </p>
            <h1
              class="text-4xl sm:text-5xl lg:text-7xl font-medium leading-[1.05] mb-4 md:mb-6"
            >
              {{
                homecontent().data?.hero_title ||
                  'Professional Immigration Services'
              }}
            </h1>
            <p class="text-base md:text-lg text-white/85 mb-6 md:mb-8 max-w-md">
              {{
                homecontent().data?.hero_description ||
                  'Trusted guidance for your Canadian dreams with expert advice, seamless processing, and personalized solutions.'
              }}
            </p>

            <div class="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-6 md:mb-10">
              <a
                [routerLink]="
                  homecontent().data?.hero_cta_link || '/book-your-appointment'
                "
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

      <!-- Express Entry -->
      <app-service-section id="services" class="block scroll-mt-24" [content]="homecontent()" />

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
  seoService = inject(SeoService);
  directusService = inject(DirectusService);
  homecontent = signal<{ data: HomePageContent | null }>({ data: null });

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    this.directusService.getHomePageContent('home_page').subscribe((data) => {
      // console.log(data);
      this.homecontent.set(data);
    });
    this.seoService.setAllSeoData({
      title:
        'Velox Immigration | Trusted RCIC-Led Canadian Immigration Services',
      description:
        'Navigate your Canadian immigration journey with confidence. Velox Immigration offers expert, ethical, and client-focused solutions for study, work, PR, and family sponsorship. Results that move you forward.',
      keywords:
        'Canadian immigration, RCIC, study permit, work permit, permanent residency, express entry, family sponsorship, immigration consultant, Canada visa, Toronto immigration, Indian students Canada',
      ogTitle: 'Velox Immigration | Professional Canadian Immigration Services',
      ogDescription:
        'Navigate your Canadian immigration journey with confidence. Expert guidance for study, work, PR, and family sponsorship.',
      canonicalUrl: 'https://veloximmigration.com/',
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
