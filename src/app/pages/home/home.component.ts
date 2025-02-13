import { CommonModule, isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  Component,
  Inject,
  OnInit,
  PLATFORM_ID,
  signal,
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { animate, inView, stagger } from 'motion';
import { ServicesComponent } from '../../components/services.component';
import { TestimonialsComponent } from '../../components/testimonials.component';
import { AboutComponent } from '../../components/about.component';
import { ExpressEntrySectionComponent } from '../../components/express-entry.component';
import { PartnerLogosComponent } from '../../components/partner-logo.component';
import { FooterComponent } from '../../components/footer.component';

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
  ],
  template: `
    <header class="bg-white shadow-sm">
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
          class="bg-fire-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Book Your Consultation
        </button>
      </nav>
    </header>

    <main>
      <!-- Hero Section -->
      <section class="h-[80dvh] bg-black pb-20 relative">
        <div
          class="container ml-auto pl-4 flex flex-col md:flex-row items-center justify-between"
        >
          <div
            class="md:w-4/12 mb-10 md:mb-0 flex flex-col gap-4"
            class="hero-content"
          >
            <p class="text-xl text-white mb-8 font-light">
              Your Canadian journey starts here !
            </p>
            <h2 class="text-4xl md:text-7xl font-medium text-white mb-6">
              Professional<br />Immigration<br />Services
            </h2>
            <p class="text-base text-white mb-8 font-spartan font-light">
              Transform your Canadian dreams into reality with expert<br />guidance
              and proven success.
            </p>
            <div class="flex space-x-4">
              <button
                class="bg-fire-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get Started Now
              </button>
            </div>
          </div>
          <div class="md:w-8/12 h-full relative">
            <div
              class="absolute inset-0 bg-gradient-to-r from-black to-transparent "
            ></div>
            <img
              id="hero-image"
              src="/assets/images/immigration-hero.png"
              alt="Immigration Services"
              class="rounded-lg shadow-2xl w-full h-[80dvh] object-cover"
            />
          </div>
        </div>
      </section>

      <!-- About Section  -->
      <app-about />

      <!-- Services Section -->
      <app-services />

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
  styles: ``,
})
export class HomeComponent implements AfterViewInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  navLinks = signal([
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/services', label: 'Our Services' },
    { path: '/contact', label: 'Contact' },
  ]);

  footerLinks = signal([
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact Us' },
    { path: '/faq', label: 'FAQ' },
    { path: '/services', label: 'Services' },
    { path: '/disclaimers', label: 'Disclaimers' },
  ]);

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      // Hero animations
      animate(
        '.hero-content',
        {
          opacity: [0, 1],
          x: [-100, 0],
        },
        { duration: 0.5 }
      );

      // animate(
      //   '#hero-image',
      //   {
      //     opacity: [0, 1],
      //     x: [100, 0],
      //   },
      //   { duration: 0.5 }
      // );

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
}
