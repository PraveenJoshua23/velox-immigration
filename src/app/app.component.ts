import { Component, inject } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';
import { SeoService } from './services/seo.service';

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
    const seo = inject(SeoService);
    const router = inject(Router);
    router.events
      .pipe(filter((e) => e instanceof NavigationEnd))
      .subscribe(() => {
        const path = router.url.split(/[?#]/)[0];
        seo.setUrl(`https://veloximmigration.com${path === '/' ? '/' : path}`);
      });
  }
}
