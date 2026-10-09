import { Component, DestroyRef, inject } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../../components/header.component';
import { FooterComponent } from '../../components/footer.component';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterModule, HeaderComponent, FooterComponent],
  template: `
    <app-header />

    <main class="bg-gray-100">
      <section class="container mx-auto px-4 py-24 md:py-32 grid lg:grid-cols-12 gap-12 items-center">
        <div class="lg:col-span-7">
          <p class="font-spartan text-8xl md:text-9xl font-medium leading-none text-sea-900/15 mb-6" aria-hidden="true">
            404
          </p>
          <h1 class="text-4xl md:text-5xl font-medium text-sea-900 leading-tight mb-5">
            We couldn't find that page
          </h1>
          <p class="text-lg text-gray-700 leading-relaxed max-w-xl mb-10">
            The link may be old or the page may have moved. Try one of these pages,
            or head back home.
          </p>
          <div class="flex flex-col sm:flex-row gap-4">
            <a
              routerLink="/"
              class="text-center bg-fire-600 text-white font-medium px-8 py-3.5 rounded-lg hover:bg-fire-700 transition-colors"
            >
              Go to home page
            </a>
            <a
              routerLink="/services"
              class="text-center border-2 border-sea-900 text-sea-900 font-medium px-8 py-3 rounded-lg hover:bg-sea-900 hover:text-white transition-colors"
            >
              Browse services
            </a>
          </div>
        </div>

        <nav aria-label="Popular pages" class="lg:col-span-5 bg-white rounded-3xl border border-gray-200 p-6 sm:p-8">
          <h2 class="text-xl font-medium text-sea-900 mb-4">Popular pages</h2>
          <ul class="divide-y divide-gray-100">
            @for (link of links; track link.url) {
            <li>
              <a
                [routerLink]="link.url"
                class="flex items-center justify-between py-3.5 text-gray-800 hover:text-fire-600"
              >
                {{ link.label }}
                <span aria-hidden="true">&rarr;</span>
              </a>
            </li>
            }
          </ul>
        </nav>
      </section>
    </main>

    <app-footer />
  `,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
})
export class NotFoundComponent {
  links = [
    { label: 'Express Entry', url: '/services/immigrate/express-entry' },
    { label: 'Study in Canada', url: '/services/study/study-in-canada' },
    { label: 'Work in Canada', url: '/services/work' },
    { label: 'Family Sponsorship', url: '/services/immigrate/family-sponsorship' },
    { label: 'About us', url: '/about' },
    { label: 'Contact us', url: '/contact' },
  ];

  constructor() {
    inject(SeoService).setAllSeoData({
      title: 'Page not found | Velox Immigration',
      description: 'The page you were looking for could not be found.',
    });
    // Keep the 404 out of search results; remove the tag again when leaving the page
    const meta = inject(Meta);
    meta.updateTag({ name: 'robots', content: 'noindex' });
    inject(DestroyRef).onDestroy(() => meta.removeTag('name="robots"'));
  }
}
