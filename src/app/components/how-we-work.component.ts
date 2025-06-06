import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface WorkStep {
  number: number;
  title: string;
  description: string;
}

@Component({
  selector: 'app-how-we-work',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="bg-white rounded-md p-6">
      <h2 class="text-2xl text-sea-900 mb-4 flex items-center">
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
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          ></path>
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          ></path>
        </svg>
        <span>{{ title }}</span>
      </h2>
      @if (intro) {
      <p class="text-gray-700 mb-4">{{ intro }}</p>
      }

      <div class="space-y-4">
        @for (step of steps; track i; let i = $index) {
        <div class="flex gap-3">
          <div
            class="bg-fire-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0"
          >
            {{ i + 1 }}
          </div>
          <div>
            <p class="font-medium">
              {{ step.title }}
            </p>
            <p class="text-gray-600">
              {{ step.description }}
            </p>
          </div>
        </div>
        }
      </div>
    </section>
  `,
})
export class HowWeWorkComponent {
  @Input() title: string = 'How We Work';
  @Input() intro: string = '';
  @Input() steps: WorkStep[] = [];
}
