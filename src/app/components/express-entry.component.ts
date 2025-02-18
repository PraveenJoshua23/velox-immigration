import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Program {
  id: string;
  title: string;
  description: string;
  overlayText: string;
  type: 'program' | 'image';
  bgColor?: string;
}

@Component({
  selector: 'app-express-entry-section',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section class="w-full bg-white">
      <!-- Header -->
      <div class="container mx-auto px-4 py-8">
        <div class="flex items-center justify-center gap-x-4 ">
          <img src="assets/icons/express.svg" class="pb-1" />
          <h2 class="text-5xl text-sea-900">Express Entry</h2>
        </div>
      </div>

      <!-- Programs Grid -->
      <div class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <ng-container *ngFor="let item of tiles()">
          <!-- Program Tile -->
          <div *ngIf="item.type === 'program'" class="relative h-96">
            <!-- Background Color -->
            <div [class]="'absolute inset-0 ' + item.bgColor">
              <!-- Content -->
              <div
                class="relative h-full flex flex-col justify-center px-12 text-white z-10"
              >
                <div class="mb-4">
                  <svg class="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path
                      d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
                    />
                  </svg>
                </div>
                <h3 class="text-2xl font-bold mb-4">{{ item.title }}</h3>
                <p class="text-sm mb-6">{{ item.description }}</p>
                <button
                  routerLink="/services/permanent-residency/express-entry"
                  class="text-white border border-white rounded px-6 py-2 w-40 hover:bg-white hover:text-black transition-colors duration-300"
                >
                  Read More
                </button>

                <!-- Overlay Text -->
                <div
                  class="absolute top-0 right-0 text-8xl font-bold opacity-20 text-white"
                >
                  {{ item.overlayText }}
                </div>
              </div>
            </div>
          </div>

          <!-- Image Placeholder Tile -->
          <div
            *ngIf="item.type === 'image'"
            class="hidden md:block h-96 relative"
          >
            <img
              [src]="'/assets/images/' + item.title + '.jpg'"
              alt="item.title"
              class="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </ng-container>
      </div>
    </section>
  `,
  styles: [],
})
export class ExpressEntrySectionComponent {
  tiles = signal<Program[]>([
    // Row 1
    {
      id: 'fsw',
      title: 'Federal Skilled Worker',
      description:
        'The Federal Skilled Worker Program is one of the three programs under the Express Entry system.',
      overlayText: 'FSW',
      type: 'program',
      bgColor: 'bg-red-600',
    },
    {
      id: 'image2',
      title: 'cec-program',
      description: '',
      overlayText: '',
      type: 'image',
    },
    {
      id: 'fst',
      title: 'Federal Skilled Trades',
      description:
        'The Federal Skilled Trades Program is the only program available under federal economic immigration for tradespersons.',
      overlayText: 'FST',
      type: 'program',
      bgColor: 'bg-red-600',
    },
    {
      id: 'image4',
      title: 'pnp-program',
      description: '',
      overlayText: '',
      type: 'image',
    },
    // Row 2
    {
      id: 'image1',
      title: 'skilled-worker',
      description: '',
      overlayText: '',
      type: 'image',
    },
    {
      id: 'cec',
      title: 'Canadian Experience Class',
      description:
        'The Canadian Experience Class Program is for permanent residency for temporary foreign workers and foreign graduates.',
      overlayText: 'CEC',
      type: 'program',
      bgColor: 'bg-sea-900',
    },
    {
      id: 'image3',
      title: 'fst-program',
      description: '',
      overlayText: '',
      type: 'image',
    },
    {
      id: 'pnp',
      title: 'Provincial Nomination Program',
      description:
        'Provincial Nomination Programs, as the name suggests, are immigration programs by the provinces of Canada.',
      overlayText: 'PNP',
      type: 'program',
      bgColor: 'bg-sea-900',
    },
  ]);
}
