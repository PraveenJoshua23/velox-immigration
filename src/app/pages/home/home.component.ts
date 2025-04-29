import {
  CommonModule,
  isPlatformBrowser,
  NgOptimizedImage,
} from '@angular/common';
import {
  AfterViewInit,
  Component,
  inject,
  Inject,
  OnInit,
  PLATFORM_ID,
  signal,
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { animate, inView } from 'motion';
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
      <section class="h-[80vh] bg-black relative overflow-hidden">
        <div class=" h-full relative z-10">
          <div class="flex flex-col md:flex-row items-center h-full">
            <div
              class="w-full md:w-5/12 lg:w-4/12 px-10 md:pl-[90px] pt-[100px] md:pt-0 hero-content z-20"
            >
              <p class="text-lg md:text-xl text-white mb-4 md:mb-8 font-light">
                {{
                  homecontent().data?.hero_subtitle ||
                    'Your Canadian journey starts here!'
                }}
              </p>
              <h2
                class="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-medium text-white mb-4 md:mb-6"
              >
                {{
                  homecontent().data?.hero_title ||
                    'Professional Immigration Services'
                }}
              </h2>
              <p
                class="text-sm md:text-base text-white mb-6 md:mb-8 font-spartan font-light"
              >
                {{
                  homecontent().data?.hero_description ||
                    'Trusted guidance for your Canadian dreams with expert advice, seamless processing, and personalized solutions.'
                }}
              </p>
              <p
                class="text-sm md:text-base text-white italic mb-6 md:mb-8 font-spartan font-light"
              >
                {{
                  homecontent().data?.hero_caption ||
                    'Move to Canada with Confidence!'
                }}
              </p>
              <div class="flex">
                <button
                  [routerLink]="homecontent().data?.hero_cta_link || '/contact'"
                  class="bg-fire-600 text-white px-6 md:px-8 py-2 md:py-3 rounded-lg transition-colors hover:bg-fire-700 w-full sm:w-auto"
                >
                  {{
                    homecontent().data?.hero_cta_title || 'Request a Callback'
                  }}
                </button>
              </div>
            </div>

            <div
              class="w-full md:w-7/12 lg:w-8/12 h-full absolute md:relative right-0 top-0"
            >
              <div
                class="absolute inset-0 bg-gradient-to-r from-black via-black md:via-transparent to-transparent z-10 md:block hidden"
              ></div>
              <img
                id="hero-image"
                ngSrc="/assets/images/immigration-hero.png"
                alt="Immigration Services"
                class="w-full h-full object-cover"
                priority
                fill
              />
            </div>
          </div>
        </div>
      </section>

      <!-- About Section  -->
      <app-about [content]="homecontent()" />

      <!-- Why choose us Section -->
      <app-why-choose-us [content]="homecontent()" />

      <!-- Express Entry -->
      <app-service-section [content]="homecontent()" />

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
  styles: ` :host {
    display: block;
  }`,
})
export class HomeComponent implements AfterViewInit, OnInit {
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

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      // Hero animations
      animate(
        '.hero-content',
        {
          opacity: [0, 1],
          x: [-250, 0],
        },
        { duration: 1 }
      );

      // Services animations
      const serviceCards = document.querySelectorAll('.service-card');
      serviceCards.forEach((card) => {
        inView(card, () => {
          animate(
            card,
            {
              opacity: [0, 1],
              y: [50, 0],
            },
            { duration: 0.5 }
          );
        });
      });

      // Testimonials animations
      const testimonialCards = document.querySelectorAll('.testimonial-card');
      testimonialCards.forEach((card) => {
        inView(card, () => {
          animate(
            card,
            {
              opacity: [0, 1],
            },
            { duration: 0.5 }
          );
        });
      });
    }
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
