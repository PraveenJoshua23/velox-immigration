import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-service-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Hero Section -->
    <div
      class="bg-transparent text-white rounded-lg px-8 py-10 relative bg-cover bg-center"
      [style.backgroundImage]="
        backgroundImage ? 'url(' + backgroundImage + ')' : 'none'
      "
      style="min-height: 250px;"
      [@fadeIn]
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
  animations: [
    trigger('fadeIn', [
      state(
        'void',
        style({
          opacity: 0,
          transform: 'translateY(20px)',
        })
      ),
      transition(':enter', [
        animate(
          '600ms ease-out',
          style({
            opacity: 1,
            transform: 'translateY(0)',
          })
        ),
      ]),
    ]),
  ],
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
