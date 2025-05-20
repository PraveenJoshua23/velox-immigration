import {
  Component,
  Input,
  inject,
  output,
  signal,
  PLATFORM_ID,
  Inject,
  computed,
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { AnalyticsService } from '../services/analytics.service';

@Component({
  selector: 'app-share-dialog',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      (click)="close.emit()"
    >
      <div
        class="bg-white rounded-lg shadow-xl p-6 w-full max-w-md mx-4"
        (click)="$event.stopPropagation()"
      >
        <div class="flex justify-between items-center mb-4">
          <h3 class="text-xl font-semibold text-sea-800">Share this post</h3>
          <button
            class="text-gray-500 hover:text-gray-700"
            (click)="close.emit()"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div class="grid grid-cols-3 gap-4 mb-6">
          <!-- Instagram -->
          <button
            class="flex flex-col items-center justify-center p-3 rounded-lg hover:bg-gray-100 transition-colors"
            (click)="shareOnInstagram()"
          >
            <div
              class="bg-gradient-to-tr from-purple-500 via-pink-500 to-yellow-500 text-white p-2 rounded-full mb-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                />
              </svg>
            </div>
            <span class="text-sm font-medium">Instagram</span>
          </button>

          <!-- X (Twitter) -->
          <button
            class="flex flex-col items-center justify-center p-3 rounded-lg hover:bg-gray-100 transition-colors"
            (click)="shareOnX()"
          >
            <div class="bg-black text-white p-2 rounded-full mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                />
              </svg>
            </div>
            <span class="text-sm font-medium">X</span>
          </button>

          <!-- Copy Link -->
          <button
            class="flex flex-col items-center justify-center p-3 rounded-lg hover:bg-gray-100 transition-colors"
            (click)="copyLink()"
          >
            <div class="bg-sea-600 text-white p-2 rounded-full mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
            </div>
            <span class="text-sm font-medium">Copy Link</span>
          </button>
        </div>

        @if (copySuccess()) {
        <div
          class="bg-green-50 border border-green-200 text-green-800 rounded-md p-3 text-center"
        >
          Link copied to clipboard!
        </div>
        }
      </div>
    </div>
  `,
})
export class ShareDialogComponent {
  @Input() postUrl!: string;
  @Input() postTitle!: string;

  close = output<void>();
  copySuccess = signal<boolean>(false);
  private analyticsService = inject(AnalyticsService);

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  shareOnInstagram(): void {
    if (isPlatformBrowser(this.platformId)) {
      // Instagram doesn't have a direct web sharing API, so we'll open Instagram app
      // Users will need to manually copy/paste the link
      window.open('https://instagram.com', '_blank');
      //   this.trackShare('instagram');
      this.close.emit();
    }
  }

  shareOnX(): void {
    if (isPlatformBrowser(this.platformId)) {
      const text = encodeURIComponent(`${this.postTitle}`);
      const url = encodeURIComponent(this.postUrl);
      window.open(
        `https://x.com/intent/tweet?text=${text}&url=${url}`,
        '_blank'
      );
      //   this.trackShare('x');
      this.close.emit();
    }
  }

  copyLink(): void {
    if (isPlatformBrowser(this.platformId)) {
      navigator.clipboard
        .writeText(this.postUrl)
        .then(() => {
          this.copySuccess.set(true);
          //   this.trackShare('copy_link');

          // Reset the success message after 3 seconds
          setTimeout(() => {
            this.copySuccess.set(false);
          }, 3000);
        })
        .catch((err) => {
          console.error('Could not copy text: ', err);
        });
    }
  }

  //   private trackShare(platform: string): void {
  //     this.analyticsService.trackEvent('share_post', {
  //       platform,
  //       post_title: this.postTitle,
  //       post_url: this.postUrl,
  //     });
  //   }
}
