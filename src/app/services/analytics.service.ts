import { Injectable, inject } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { inject as injectVercel } from '@vercel/analytics';

@Injectable({
  providedIn: 'root',
})
export class AnalyticsService {
  private document = inject(DOCUMENT);
  private platformId = inject(PLATFORM_ID);
  private router = inject(Router);

  initialize(): void {
    if (isPlatformBrowser(this.platformId)) {
      // Initialize Vercel Analytics
      injectVercel();

      // Track route changes
      this.router.events
        .pipe(filter((event) => event instanceof NavigationEnd))
        .subscribe(() => {
          // This will track page views automatically as the user navigates
        });
    }
  }
}
