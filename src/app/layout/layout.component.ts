import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../components/header.component';
import { FooterComponent } from '../components/footer.component';
import { RouterOutlet } from '@angular/router';
import { SeoService } from '../services/seo.service';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent, RouterOutlet],
  template: `
    <div class="flex flex-col min-h-screen">
      <app-header />
      <main class="flex-grow">
        <router-outlet></router-outlet>
      </main>
      <app-footer />
    </div>
  `,
})
export class LayoutComponent implements OnInit {
  constructor(private seoService: SeoService) {}

  ngOnInit() {
    // Set default SEO data for all pages
    this.seoService.setAllSeoData({
      title:
        'Velox Immigration | Trusted RCIC-Led Canadian Immigration Services',
      description:
        'Navigate your Canadian immigration journey with confidence. Velox Immigration offers expert, ethical, and client-focused solutions for study, work, PR, and family sponsorship. Results that move you forward.',
      keywords:
        'Canadian immigration, RCIC, study permit, work permit, permanent residency, express entry, family sponsorship, immigration consultant, Canada visa',
      ogType: 'website',
      ogImage: '/assets/images/logo.png',
      twitterCard: 'summary_large_image',
      canonicalUrl: 'https://veloximmigration.com',
    });
  }
}
