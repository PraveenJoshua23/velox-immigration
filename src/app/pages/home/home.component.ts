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

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
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
      <section class="h-[80dvh] bg-black py-20">
        <div
          class="container mx-auto px-4 flex flex-col md:flex-row items-center"
        >
          <div class="md:w-1/2 mb-10 md:mb-0" class="hero-content">
            <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">
              Professional Immigration Services
            </h2>
            <p class="text-xl text-white mb-8">
              Transform your Canadian dreams into reality with expert guidance
              and proven success.
            </p>
            <div class="flex space-x-4">
              <button
                class="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get Started Now
              </button>
              <a
                href="tel:+416-589-0123"
                class="flex items-center text-blue-600 hover:text-blue-700"
              >
                <span class="mr-2">+416-589-0123</span>
              </a>
            </div>
          </div>
          <div class="md:w-1/2" class="hero-image">
            <img
              src="/assets/immigration-hero.jpg"
              alt="Immigration Services"
              class="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section>

      <!-- Services Section -->
      <section class="py-20">
        <div class="container mx-auto px-4">
          <h3 class="text-3xl font-bold text-center mb-12">Our Services</h3>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div
              *ngFor="let service of services()"
              class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              class="service-card"
            >
              <h4 class="text-xl font-semibold mb-4">{{ service.title }}</h4>
              <p class="text-gray-600">{{ service.description }}</p>
              <a class="text-blue-600 hover:text-blue-700 mt-4 inline-block"
                >Read More</a
              >
            </div>
          </div>
        </div>
      </section>

      <!-- Testimonial Section -->
      <section class="bg-gray-50 py-20">
        <div class="container mx-auto px-4">
          <h3 class="text-3xl font-bold text-center mb-12">
            What Our Customers Say
          </h3>
          <div
            class="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8"
          >
            <div
              *ngFor="let testimonial of testimonials()"
              class="bg-white p-8 rounded-lg shadow-md"
              class="testimonial-card"
            >
              <p class="text-gray-600 mb-4">{{ testimonial.content }}</p>
              <div class="flex items-center">
                <div class="ml-4">
                  <p class="font-semibold">{{ testimonial.name }}</p>
                  <p class="text-gray-500">{{ testimonial.status }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer class="bg-gray-900 text-white py-12">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h4 class="text-xl font-bold mb-4">Quick Links</h4>
            <ul class="space-y-2">
              <li *ngFor="let link of footerLinks()">
                <a
                  [routerLink]="link.path"
                  class="text-gray-400 hover:text-white transition-colors"
                >
                  {{ link.label }}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="border-t border-gray-800 mt-8 pt-8 text-center">
          <p class="text-gray-400">Copyright © 2025. All rights reserved.</p>
        </div>
      </div>
    </footer>
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

  services = signal([
    {
      title: 'Express Entry',
      description:
        'Federal Skilled Worker Program for qualified professionals seeking Canadian permanent residence.',
    },
    {
      title: 'Family Sponsorship',
      description:
        'Reunite with your family through spouse, parent, and child sponsorship programs.',
    },
    {
      title: 'Study Permits',
      description:
        'Obtain student visas and permits for international education in Canada.',
    },
  ]);

  testimonials = signal([
    {
      content:
        'Worem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.',
      name: 'Kate Johnson',
      status: 'Moved to Canada',
    },
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

      animate(
        '.hero-image',
        {
          opacity: [0, 1],
          x: [100, 0],
        },
        { duration: 0.5 }
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
}
