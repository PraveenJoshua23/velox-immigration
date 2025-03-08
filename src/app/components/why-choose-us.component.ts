import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Reason {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-why-choose-us',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section class="bg-white py-16">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <div class="flex items-center justify-center gap-2 mb-4">
            <img src="assets/images/plane.svg" class="pb-1" />
            <h2 class="text-3xl font-medium">
              Why Choose <span class="font-bold">Velox Immigration?</span>
            </h2>
          </div>
          <p class="text-gray-600 mt-2">
            Trusted expertise for your Canadian immigration journey
          </p>
        </div>

        <!-- Grid Layout -->
        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-12"
        >
          @for (reason of reasons(); track reason.title) {
          <div
            class="bg-gray-50 space-y-3 border border-[#D7D7D7] rounded-lg px-6 py-12 flex flex-col items-center text-center hover:shadow-lg transition-all"
          >
            <img src="assets/icons/tick-circle.svg" class="pb-1 size-10" />
            <h3 class="text-xl font-semibold text-sea-900 mb-3">
              {{ reason.title }}
            </h3>
            <p
              class="text-gray-600 font-light text-sm"
              [innerHTML]="reason.description"
            ></p>
          </div>
          }
        </div>

        <!-- CTA Button -->
        <div class="text-center">
          <button
            routerLink="/contact"
            class="bg-fire-600 text-white px-8 py-3 rounded-lg hover:bg-fire-700 transition-colors inline-flex items-center gap-2"
          >
            Schedule a Free Consultation
          </button>
        </div>
      </div>
    </section>
  `,
  styles: `
    :host {
      display: block;
    }
  `,
})
export class WhyChooseUsComponent {
  reasons = signal<Reason[]>([
    {
      icon: '✔️',
      title: 'Expertise & Experience',
      description:
        'Years of immigration expertise and <strong>licensed RCIC-IRB guidance</strong>.',
    },
    {
      icon: '✔️',
      title: 'Personalized Service',
      description:
        'Every case is <strong>tailored to fit your specific needs</strong>.',
    },
    {
      icon: '✔️',
      title: 'Honesty & Transparency',
      description:
        'No false promises, just <strong>clear and realistic advice</strong>.',
    },
    {
      icon: '✔️',
      title: 'Bilingual Support',
      description:
        'We assist clients in <strong>English & Tamil</strong> for seamless communication.',
    },
  ]);
}
