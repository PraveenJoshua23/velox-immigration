import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../components/header.component';
import { FooterComponent } from '../components/footer.component';
import { localServices } from '../utils/constants/navigation';
import { ElementRef, ViewChild } from '@angular/core';
import { SeoService } from '../services/seo.service';

@Component({
  selector: 'app-services-layout',
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderComponent, FooterComponent],
  template: `
    <app-header />
    <div
      class="container mx-auto px-4 py-8 mt-4 flex flex-col md:flex-row gap-8"
    >
      <!-- Content Area -->
      <main class="flex-grow min-h-[calc(100vh-400px)]">
        <router-outlet></router-outlet>
      </main>

      <!-- Sidebar - Hidden on mobile (< 768px), visible from md (tablet) breakpoint -->
      <aside
        class="hidden md:block w-64 flex-shrink-0 sticky top-4 self-start "
        #sidebarRef
        [class.mt-20]="isScrolled()"
      >
        <div class="max-h-[70vh] overflow-auto">
          <h2 class="text-2xl pb-5 pt-4 text-sea-800">Our Services</h2>
          @for(category of localServices(); track category.title) {
          <div class="mb-6 scrollbar-thin overflow-auto max-h-[50dvh]">
            <h3 class="text-lg font-medium text-sea-900 mb-2">
              {{ category.title }}
            </h3>
            <ul class="space-y-2">
              @for(service of category.items; track service.label) {
              <li>
                <a
                  [routerLink]="service.path"
                  routerLinkActive="text-red-600"
                  class="text-gray-600 hover:text-fire-600 transition-colors text-sm"
                >
                  {{ service.label }}
                </a>
              </li>
              }
            </ul>
          </div>
          }
        </div>
        <!-- Need help callout -->
        <div class="mt-8 bg-sea-50 p-4 rounded-lg border border-sea-200">
          <h3 class="text-lg font-medium text-sea-800 mb-2">
            Not sure where to start?
          </h3>
          <p class="text-sm text-gray-600 mb-3">
            We can help determine the best path for your situation.
          </p>
          <a
            routerLink="/contact"
            class="inline-block px-4 py-2 bg-fire-600 text-white rounded hover:bg-fire-700 transition-colors text-sm font-medium"
          >
            Get in touch
          </a>
        </div>
      </aside>
    </div>
    <app-footer [hideContactBanner]="true" />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServicesLayoutComponent implements OnInit {
  localServices = signal([...localServices]);
  @ViewChild('sidebarRef') sidebarRef!: ElementRef;
  isScrolled = signal<boolean>(false);

  ngOnInit(): void {
    // this.seoService.setAllSeoData({
    //   title:
    //     'Velox Immigration | Trusted RCIC-Led Canadian Immigration Services',
    //   description:
    //     'Navigate your Canadian immigration journey with confidence. Velox Immigration offers expert, ethical, and client-focused solutions for study, work, PR, and family sponsorship. Results that move you forward.',
    //   keywords:
    //     'Canadian immigration, RCIC, study permit, work permit, permanent residency, express entry, family sponsorship, immigration consultant, Canada visa',
    //   ogType: 'website',
    //   ogImage: '/assets/images/logo.png',
    //   twitterCard: 'summary_large_image',
    //   canonicalUrl: 'https://veloximmigration.com',
    // });
  }
}
