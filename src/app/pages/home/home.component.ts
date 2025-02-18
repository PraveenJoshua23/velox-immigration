import { CommonModule, isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, Inject, PLATFORM_ID } from '@angular/core';
import { RouterModule } from '@angular/router';
import { animate, inView } from 'motion';
import { ServicesComponent } from '../../components/services.component';
import { TestimonialsComponent } from '../../components/testimonials.component';
import { AboutComponent } from '../../components/about.component';
import { ExpressEntrySectionComponent } from '../../components/express-entry.component';
import { PartnerLogosComponent } from '../../components/partner-logo.component';
import { FooterComponent } from '../../components/footer.component';
import { HeaderComponent } from '../../components/header.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ServicesComponent,
    TestimonialsComponent,
    AboutComponent,
    ExpressEntrySectionComponent,
    PartnerLogosComponent,
    FooterComponent,
    HeaderComponent,
  ],
  template: `
    <!-- <header class="bg-white shadow-sm">
      <nav
        class="container mx-auto px-4 py-4 flex justify-between items-center"
      >
        <div class="flex items-center">
          <img
            src="/assets/images/logo.svg"
            alt="Velox Immigration"
            srcset=""
          />
        </div>
        <div class="hidden md:flex space-x-6">
          <a
            *ngFor="let link of navLinks()"
            class="text-gray-600 font-spartan hover:text-fire-600 transition-colors"
            [routerLink]="link.path"
          >
            {{ link.label }}
          </a>
        </div>
        <button
          class="bg-fire-600 text-white px-6 py-2 rounded-lg  transition-colors"
        >
          Book Your Consultation
        </button>
      </nav>
    </header> -->
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
                Your Canadian journey starts here!
              </p>
              <h2
                class="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-medium text-white mb-4 md:mb-6"
              >
                Professional Immigration Services
              </h2>
              <p
                class="text-sm md:text-base text-white mb-6 md:mb-8 font-spartan font-light"
              >
                Transform your Canadian dreams into reality with expert guidance
                and proven success.
              </p>
              <div class="flex">
                <button
                  (click)="scrollToServices()"
                  class="bg-fire-600 text-white px-6 md:px-8 py-2 md:py-3 rounded-lg transition-colors hover:bg-fire-700 w-full sm:w-auto"
                >
                  Get Started Now
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
                src="/assets/images/immigration-hero.png"
                alt="Immigration Services"
                class="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <!-- About Section  -->
      <app-about />

      <!-- Services Section -->
      <div id="services">
        <app-services />
      </div>

      <!-- Express Entry -->
      <app-express-entry-section />

      <!-- Testimonial Section -->
      <app-testimonials />

      <!-- Partner logos -->
      <app-partner-logos />
    </main>

    <!-- Footer -->
    <app-footer />
  `,
  styles: ` :host {
    display: block;
  }`,
})
export class HomeComponent implements AfterViewInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

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
}
