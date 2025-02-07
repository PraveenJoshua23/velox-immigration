import { Component, ElementRef, signal, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { animate, inView } from 'motion';

@Component({
  selector: 'app-partner-logos',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="relative w-full overflow-hidden bg-gray-50 py-12">
      <div class="container mx-auto">
        <h3 class="text-center text-2xl font-semibold mb-8">Our Partners</h3>

        <div #container class="relative flex overflow-hidden">
          <!-- First set of logos -->
          <div #firstTrack class="flex animate-scroll gap-8 min-w-full">
            @for (logo of logos(); track logo.id) {
            <div class="flex items-center justify-center w-48">
              <img
                [src]="logo.src"
                [alt]="logo.alt"
                class="h-16 object-contain grayscale hover:grayscale-0 transition-all"
              />
            </div>
            }
          </div>

          <!-- Duplicated set for seamless loop -->
          <div
            #secondTrack
            class="flex animate-scroll gap-8 min-w-full absolute left-full"
          >
            @for (logo of logos(); track logo.id) {
            <div class="flex items-center justify-center w-48">
              <img
                [src]="logo.src"
                [alt]="logo.alt"
                class="h-16 object-contain grayscale hover:grayscale-0 transition-all"
              />
            </div>
            }
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      @keyframes scroll {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(-100%);
        }
      }

      .animate-scroll {
        animation: scroll 20s linear infinite;
      }
    `,
  ],
})
export class PartnerLogosComponent {
  @ViewChild('firstTrack') firstTrack!: ElementRef;
  @ViewChild('secondTrack') secondTrack!: ElementRef;
  @ViewChild('container') container!: ElementRef;
  logos = signal([
    {
      id: 1,
      src: '/assets/images/CICC-logo.png',
      alt: 'CICC Logo',
    },
    {
      id: 2,
      src: '/assets/images/CAPIC-logo.png',
      alt: 'CAPIC Logo',
    },
  ]);

  ngAfterViewInit() {
    // Pause animation on hover
    const tracks = [
      this.firstTrack.nativeElement,
      this.secondTrack.nativeElement,
    ];

    this.container.nativeElement.addEventListener('mouseenter', () => {
      tracks.forEach((track) => {
        track.style.animationPlayState = 'paused';
      });
    });

    this.container.nativeElement.addEventListener('mouseleave', () => {
      tracks.forEach((track) => {
        track.style.animationPlayState = 'running';
      });
    });
  }
}
