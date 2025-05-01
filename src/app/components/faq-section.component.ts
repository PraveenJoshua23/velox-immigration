import { Component, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface FaqItem {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-faq-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="bg-gray-50 rounded-md p-6">
      <h2 class="flex items-center text-2xl text-sea-900 mb-6">
        <svg
          class="w-6 h-6 inline-block mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
        {{ title }}
      </h2>

      <div class="space-y-4">
        @for (faq of faqs; track $index) {
        <div class="border rounded-lg overflow-hidden">
          <button
            (click)="toggleFaq($index)"
            class="w-full flex justify-between items-center p-4 text-left bg-white hover:bg-gray-50 transition-colors"
          >
            <span class="font-medium">{{ faq.question }}</span>
            <svg
              [class]="
                'w-5 h-5 transition-transform ' +
                (activeFaq() === $index ? 'transform rotate-180' : '')
              "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          <div
            [class]="
              'overflow-hidden transition-all duration-300 ' +
              (activeFaq() === $index ? 'max-h-40' : 'max-h-0')
            "
          >
            <div class="p-4 border-t bg-gray-50">
              <p>{{ faq.answer }}</p>
            </div>
          </div>
        </div>
        }
      </div>
    </section>
  `,
})
export class FaqSectionComponent {
  @Input() title: string = 'Frequently Asked Questions';
  @Input() faqs: FaqItem[] = [];

  activeFaq = signal(-1);

  toggleFaq(index: number) {
    this.activeFaq.update((current) => (current === index ? -1 : index));
  }
}
