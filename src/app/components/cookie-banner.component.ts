import { Component, PLATFORM_ID, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';

const KEY = 'cookie-consent';

declare function gtag(...args: unknown[]): void;

@Component({
  selector: 'app-cookie-banner',
  standalone: true,
  imports: [RouterLink],
  template: `
    @if (open()) {
      <div
        role="dialog"
        aria-label="Cookie consent"
        class="fixed inset-x-0 bottom-0 z-[100] bg-white text-sea-950 shadow-[0_-2px_12px_rgba(0,0,0,0.25)]"
      >
        <div class="flex flex-wrap items-center gap-x-4 gap-y-3 px-4 py-3 sm:px-6">
          <p class="min-w-[16rem] flex-1 text-sm">
            We use cookies on our website to see how you interact with it. By
            accepting, you agree to our use of such cookies.
            <a routerLink="/privacy-policy" class="underline">Privacy Policy</a>
          </p>
          @if (settings()) {
            <label class="flex items-center gap-2 text-sm">
              <input type="checkbox" [checked]="analytics()" (change)="analytics.set(!analytics())" />
              Analytics cookies
            </label>
            <button type="button" class="btn" (click)="save(analytics())">Save</button>
          } @else {
            <button type="button" class="text-sm underline" (click)="settings.set(true)">Settings</button>
            <button type="button" class="btn" (click)="save(false)">Decline All</button>
            <button type="button" class="btn bg-sea-700 text-white" (click)="save(true)">Accept</button>
          }
          <button type="button" aria-label="Close" class="text-xl leading-none" (click)="save(false)">×</button>
        </div>
      </div>
    }
  `,
  styles: [
    `
      .btn {
        border: 1px solid currentColor;
        padding: 0.4rem 1rem;
        font-size: 0.875rem;
      }
    `,
  ],
})
export class CookieBannerComponent {
  open = signal(false);
  settings = signal(false);
  analytics = signal(true);

  constructor() {
    if (!isPlatformBrowser(inject(PLATFORM_ID))) return;
    try {
      const saved = localStorage.getItem(KEY);
      if (saved === null) this.open.set(true);
      else this.apply(saved === 'granted');
    } catch {
      this.open.set(true);
    }
  }

  save(granted: boolean) {
    try {
      localStorage.setItem(KEY, granted ? 'granted' : 'denied');
    } catch {}
    this.apply(granted);
    this.open.set(false);
  }

  private apply(granted: boolean) {
    if (typeof gtag === 'function') gtag('consent', 'update', { analytics_storage: granted ? 'granted' : 'denied' });
  }
}
