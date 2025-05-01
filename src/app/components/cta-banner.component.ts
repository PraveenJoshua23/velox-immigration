import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cta-banner',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section class="bg-fire-600 text-white rounded-lg p-8 my-8">
      <div class="flex flex-col md:flex-row items-center justify-between">
        <div class="mb-6 md:mb-0">
          <h2 class="text-2xl font-bold mb-2">{{ title }}</h2>
          <p class="text-lg font-light pr-4">
            {{ description }}
          </p>
        </div>
        <div>
          <button
            [routerLink]="buttonLink"
            class="bg-white text-fire-600 px-8 py-3 rounded-lg cursor-pointer font-medium hover:bg-gray-100 transition-colors shadow-lg"
          >
            {{ buttonText }}
          </button>
        </div>
      </div>
    </section>
  `,
})
export class CtaBannerComponent {
  @Input() title: string = 'Ready to get started?';
  @Input() description: string =
    'Contact our team of immigration experts today.';
  @Input() buttonText: string = 'Contact Us';
  @Input() buttonLink: string = '/contact';
}
