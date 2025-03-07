import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../../components/header.component';
import { FooterComponent } from '../../components/footer.component';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderComponent, FooterComponent],
  template: `
    <!-- Header -->
    <app-header />

    <main
      class="min-h-screen bg-gray-50 flex items-center justify-center py-20"
    >
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center">
          <!-- 404 Icon/Image -->
          <div class="mb-8">
            <div class="text-fire-600 text-9xl font-bold">404</div>
          </div>

          <!-- Error Message -->
          <h1 class="text-4xl font-bold text-sea-900 mb-4">Page Not Found</h1>
          <p class="text-lg text-gray-600 mb-10">
            The page you are looking for doesn't exist or has been moved.
          </p>

          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              routerLink="/"
              class="px-8 py-3 bg-fire-600 text-white font-medium rounded-lg hover:bg-fire-700 transition-colors"
            >
              Return Home
            </button>
            <button
              routerLink="/contact"
              class="px-8 py-3 bg-white border border-fire-600 text-fire-600 font-medium rounded-lg hover:bg-fire-50 transition-colors"
            >
              Contact Us
            </button>
          </div>

          <!-- Quick Links Section -->
          <div class="mt-16">
            <h2 class="text-xl font-semibold mb-6 text-sea-900">
              Popular Pages
            </h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <a
                routerLink="/services/permanent-residency/express-entry"
                class="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                Express Entry
              </a>
              <a
                routerLink="/services/temporary-services/study"
                class="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                Study Permits
              </a>
              <a
                routerLink="/services/temporary-services/work"
                class="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                Work Permits
              </a>
              <a
                routerLink="/about"
                class="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                About Us
              </a>
              <a
                routerLink="/services/permanent-residency/provincial-nominee"
                class="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                Provincial Nominee
              </a>
              <a
                routerLink="/contact"
                class="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>

    <!-- Footer -->
    <app-footer [hideContactBanner]="true" />
  `,
  styles: [
    `
      :host {
        display: block;
      }

      .text-9xl {
        font-size: 9rem;
        line-height: 1;
      }
    `,
  ],
})
export class NotFoundComponent {}
