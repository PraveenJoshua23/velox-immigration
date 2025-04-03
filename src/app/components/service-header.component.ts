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
      loading="lazy"
      [attr.fetchpriority]="'high'"
    >
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
          '800ms ease-out',
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
  private _backgroundImage: string | null = null;

  @Input() title: string = '';
  @Input() description: string = '';
  @Input()
  set backgroundImage(value: string | null) {
    if (value) {
      const img = new Image();
      img.src = value;
    }
    this._backgroundImage = value;
  }
  get backgroundImage(): string | null {
    return this._backgroundImage;
  }
}
