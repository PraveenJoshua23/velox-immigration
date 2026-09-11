import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-service-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Hero Section -->
    <div
      class="fade-up bg-transparent text-white rounded-lg px-8 py-10 relative bg-cover bg-center"
      [style.backgroundImage]="
        backgroundImage ? 'url(' + backgroundImage + ')' : 'none'
      "
      style="min-height: 250px;"
    >
      <!-- <div class="absolute inset-0 bg-sea-900 bg-opacity-70 rounded-lg"></div> -->
      <div class="relative z-10">
        <h1 class="text-3xl md:text-5xl mb-4">
          {{ title }}
        </h1>
        <p class="text-lg">
          {{ description }}
        </p>
      </div>
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
})
export class ServiceHeaderComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() backgroundImage: string | null = null;
}
