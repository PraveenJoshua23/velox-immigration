import { Component, NgZone, PLATFORM_ID, afterNextRender, inject } from '@angular/core';
import { DOCUMENT, ViewportScroller, isPlatformBrowser } from '@angular/common';
import { NavigationEnd, NavigationStart, Router, RouterOutlet, Scroll } from '@angular/router';
import { filter } from 'rxjs';
import { SeoService } from './services/seo.service';
import { revealOnScroll } from './utils/reveal';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `<router-outlet></router-outlet>`,
  styles: [``],
})
export class AppComponent {
  title = 'Velox Immigration';

  constructor() {
    // Every page gets its own canonical + og:url, including in the server-rendered HTML
    // Keep in-page anchors clear of the fixed 72px header
    inject(ViewportScroller).setOffset([0, 96]);

    const seo = inject(SeoService);
    const router = inject(Router);
    router.events
      .pipe(filter((e) => e instanceof NavigationEnd))
      .subscribe(() => {
        const path = router.url.split(/[?#]/)[0];
        seo.setUrl(`https://veloximmigration.com${path === '/' ? '/' : path}`);
      });

    if (!isPlatformBrowser(inject(PLATFORM_ID))) return;

    // html has scroll-behavior: smooth for anchors; a new page should jump to the top instantly
    const html = inject(DOCUMENT).documentElement;
    router.events.subscribe((e) => {
      if (e instanceof NavigationStart && e.url.split(/[?#]/)[0] !== router.url.split(/[?#]/)[0]) {
        html.style.scrollBehavior = 'auto';
      } else if (e instanceof Scroll) {
        // Runs after the router has scrolled
        setTimeout(() => html.style.removeProperty('scroll-behavior'));
      }
    });

    const zone = inject(NgZone);
    afterNextRender(() => zone.runOutsideAngular(revealOnScroll));
  }
}
