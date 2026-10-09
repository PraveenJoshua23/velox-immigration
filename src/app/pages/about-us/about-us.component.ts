import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { FooterComponent } from '../../components/footer.component';
import { HeaderComponent } from '../../components/header.component';
import { SafeHtmlComponent } from '../../components/safe-html.component';
import { FaqListComponent } from '../../components/faq-list.component';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [RouterModule, HeaderComponent, FooterComponent, SafeHtmlComponent, FaqListComponent],
  template: `
    <app-header />

    <main>
      <!-- Hero -->
      <section class="relative overflow-hidden bg-sea-950 text-white py-24 md:py-32">
        <img
          src="/assets/images/about-cover.webp"
          alt=""
          width="1536"
          height="1024"
          fetchpriority="high"
          class="absolute inset-0 size-full object-cover"
        />
        <!-- Navy tint: darkest behind the title, lighter on the right -->
        <div
          class="absolute inset-0 bg-gradient-to-r from-sea-950/95 via-sea-950/80 to-sea-950/55"
        ></div>

        <div class="relative container mx-auto px-4 grid lg:grid-cols-12 gap-12 items-center">
          <div class="lg:col-span-7">
            <h1 class="text-4xl md:text-6xl font-medium leading-[1.05] mb-6">
              {{ content.page_title }}
            </h1>
            <p class="text-lg md:text-xl text-white/80 max-w-xl">
              {{ content.page_subtitle }}
            </p>
          </div>

          <!-- Trust facts on frosted glass so the city shows through -->
          <dl
            class="lg:col-span-5 grid grid-cols-2 rounded-2xl border border-white/15 bg-white/5 backdrop-blur-md overflow-hidden"
          >
            @for (fact of facts; track fact.label; let i = $index) {
            <div
              class="p-6 border-white/15"
              [class.border-l]="i % 2 === 1"
              [class.border-t]="i >= 2"
            >
              <dt class="text-sm text-white/60 mb-1">{{ fact.label }}</dt>
              <dd class="text-lg font-medium">{{ fact.value }}</dd>
            </div>
            }
          </dl>
        </div>
      </section>

      <!-- Story -->
      <section class="py-20 md:py-28 bg-white">
        <div class="container mx-auto px-4 grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div class="lg:col-span-4">
            <div class="flex items-center gap-2 mb-4">
              <img src="assets/images/plane.svg" class="w-6 h-6" alt="" />
              <p class="text-xl md:text-2xl font-medium font-spartan">Our story</p>
            </div>
            <h2 class="text-4xl md:text-5xl text-sea-900 leading-tight">
              {{ content.story_header }}
            </h2>
          </div>
          <app-safe-html
            class="lg:col-span-8"
            [htmlContent]="content.story_content"
            containerClass="prose prose-lg max-w-none text-gray-700 prose-strong:text-sea-900 prose-strong:font-medium"
          />
        </div>
      </section>

      <!-- Founder -->
      <section class="bg-gray-100 py-20 md:py-28">
        <div class="container mx-auto px-4 grid md:grid-cols-2 items-center gap-12 lg:gap-20">
          <div class="relative max-w-sm md:max-w-none mx-auto w-full">
            <img
              src="/assets/images/founder.webp"
              alt="Anitha Gabriel, licensed RCIC and founder of Velox Immigration"
              width="900"
              height="1273"
              decoding="async"
              class="w-full aspect-[4/5] object-cover object-top rounded-3xl bg-sea-100"
            />
            <div
              class="absolute left-4 right-4 bottom-4 md:left-6 md:right-auto md:-bottom-6 bg-white rounded-2xl shadow-lg p-5 flex items-center gap-4"
            >
              <img src="/assets/images/rcic-logo.webp" alt="" class="h-8 md:h-10 w-auto shrink-0" />
              <div>
                <p class="font-medium text-sea-900">Anitha Gabriel</p>
                <p class="text-sm text-gray-600">Licensed RCIC-IRB</p>
                <p class="text-sm text-gray-600">Membership ID R1034239</p>
              </div>
            </div>
          </div>

          <div>
            <h2 class="text-4xl md:text-5xl text-sea-900 leading-tight mb-6">
              {{ content.founder_title }}
            </h2>
            <app-safe-html
              [htmlContent]="content.founder_content"
              containerClass="prose prose-lg max-w-none text-gray-700 prose-strong:text-sea-900 prose-strong:font-medium"
            />
            <a
              [routerLink]="content.founder_ctaLink || '/consultation-agreement'"
              class="inline-flex mt-8 bg-fire-600 text-white font-medium px-8 py-3.5 rounded-lg hover:bg-fire-700 transition-colors"
            >
              {{ content.founder_ctaText || 'Book a Consultation' }}
            </a>
          </div>
        </div>
      </section>

      <!-- Core values: the letters spell V.E.L.O.X -->
      <section class="py-20 md:py-28 bg-white">
        <div class="container mx-auto px-4">
          <div class="flex items-center gap-2 mb-4">
            <img src="assets/images/plane.svg" class="w-6 h-6" alt="" />
            <p class="text-xl md:text-2xl font-medium font-spartan">What we stand for</p>
          </div>
          <h2 class="text-4xl md:text-5xl text-sea-900 leading-tight mb-14">
            {{ content.corevalues_title }}
          </h2>

          <ol class="grid sm:grid-cols-2 xl:grid-cols-5 gap-10 xl:gap-8">
            @for (value of content.corevalue_content; track value.title; let i = $index) {
            <li class="reveal xl:border-l xl:border-gray-200 xl:pl-6">
              <span
                class="block font-spartan text-7xl font-medium leading-none text-fire-600 mb-5"
                aria-hidden="true"
                >{{ 'VELOX'[i] }}</span
              >
              <h3 class="text-xl font-medium text-sea-900 mb-2">{{ value.title }}</h3>
              <p class="text-gray-700 leading-relaxed">{{ value.description }}</p>
            </li>
            }
          </ol>
        </div>
      </section>

      <!-- FAQs -->
      <section class="bg-gray-100 py-20 md:py-28">
        <div class="container mx-auto px-4 grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div class="lg:col-span-4">
            <h2 class="text-4xl md:text-5xl text-sea-900 leading-tight mb-4">
              Frequently asked questions
            </h2>
            <p class="text-lg text-gray-700">
              Have questions? Find answers to common immigration concerns.
            </p>
          </div>

          <app-faq-list class="lg:col-span-8" [items]="content.faq_items" />
        </div>
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
export class AboutPageComponent {
  content: any;

  facts = [
    { label: 'Licence', value: 'RCIC-IRB' },
    { label: 'Regulated by', value: 'CICC' },
    { label: 'Offices', value: 'Toronto & Chennai' },
    { label: 'Languages', value: 'English & Tamil' },
  ];

  constructor() {
    inject(ActivatedRoute).data.subscribe((response: any) => {
      this.content = response.data.data[0];
    });
    inject(SeoService).setAllSeoData({
      title: 'About Us | Velox Immigration',
      description:
        'Meet Anitha Gabriel, the licensed RCIC behind Velox Immigration. Learn our story, our V.E.L.O.X values, and how we guide clients from Toronto and Chennai.',
    });
  }
}
