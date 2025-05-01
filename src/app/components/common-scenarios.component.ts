import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-common-scenarios',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section class="bg-gray-50 rounded-md p-6">
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
            d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
          ></path>
        </svg>
        Common Scenarios We Handle
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
        @for (scenario of commonScenarios; track $index) {
        <div class="bg-white p-5 rounded border-l-4 border-fire-500">
          @if(scenario.title){
          <h3 class="font-medium text-sea-900 mb-2">{{ scenario.title }}</h3>
          }
          <p class="text-gray-700">
            {{ scenario.description }}
          </p>
        </div>

        }
      </div>
    </section>
  `,
})
export class CommonScenariosComponent {
  @Input() commonScenarios: {
    title: string;
    description: string;
  }[] = [];
}
