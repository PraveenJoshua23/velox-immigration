import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-coming-soon',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      class="h-screen w-screen flex flex-col items-center justify-center bg-gray-50"
    >
      <div class="text-center max-w-md px-4">
        <!-- Logo -->
        <div class="mb-10">
          <img
            src="/assets/images/logo.svg"
            alt="Velox Immigration"
            class="h-16 mx-auto"
          />
        </div>

        <!-- Coming Soon Text -->
        <h1 class="text-4xl md:text-5xl font-bold text-sea-900 mb-4">
          Coming Soon
        </h1>

        <p class="text-gray-600 text-lg mb-8">
          We're working hard to bring you a new and improved immigration
          experience. Our website is currently under construction.
        </p>

        <!-- Launch Notification -->
        <div class="bg-white p-6 rounded-lg shadow-md">
          <h3 class="text-xl font-medium text-gray-800 mb-3">
            Get notified when we launch
          </h3>

          <div class="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Your email address"
              class="flex-grow p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <button
              class="bg-red-600 text-white py-3 px-6 rounded-lg hover:bg-red-700 transition-colors"
            >
              Notify Me
            </button>
          </div>
        </div>

        <!-- Footer -->
        <div class="mt-12 text-gray-500">
          <p>&copy; 2025 Velox Immigration. All rights reserved.</p>
        </div>
      </div>
    </div>
  `,
  styles: `
    :host {
      display: block;
    }
  `,
})
export class ComingSoonComponent {}
