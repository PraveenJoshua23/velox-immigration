import { Component, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NgTemplateOutlet } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { SafeHtmlComponent } from '../../components/safe-html.component';
import { FaqListComponent } from '../../components/faq-list.component';
import { ServiceSectionComponent } from '../../components/service-section.component';
import { DirectusService } from '../../services/directus.service';
import { SeoService } from '../../services/seo.service';
import { ServicePage, toServicePage } from '../../utils/types/service-page';
import { HomePageContent } from '../../utils/types/directus';

/** Renders any service from a `ServicePage`; sections without content are skipped. */
@Component({
  selector: 'app-service-page',
  standalone: true,
  imports: [
    NgTemplateOutlet,
    RouterModule,
    SafeHtmlComponent,
    FaqListComponent,
    ServiceSectionComponent,
  ],
  template: `
    <!-- Hero -->
    <section class="relative overflow-hidden bg-sea-950 text-white py-20 md:py-28">
      @if (page.heroImage) {
      <img
        [src]="page.heroImage"
        alt=""
        fetchpriority="high"
        class="absolute inset-0 size-full object-cover"
      />
      }
      <div
        class="absolute inset-0 bg-gradient-to-r from-sea-950/95 via-sea-950/85 to-sea-950/60"
      ></div>

      <div class="relative container mx-auto px-4">
        <nav aria-label="Breadcrumb" class="mb-6 text-sm text-white/60">
          <ol class="flex flex-wrap items-center gap-2">
            <li><a routerLink="/" class="hover:text-white">Home</a></li>
            @if (category) {
            <li aria-hidden="true">/</li>
            <li>{{ category }}</li>
            }
            <li aria-hidden="true">/</li>
            <li class="text-white" aria-current="page">{{ page.title }}</li>
          </ol>
        </nav>
        <h1 class="text-4xl md:text-6xl font-medium leading-[1.05] max-w-3xl mb-6">
          {{ page.title }}
        </h1>
        <p class="text-lg md:text-xl text-white/80 max-w-2xl mb-10">
          {{ page.subtitle }}
        </p>
        <a
          [routerLink]="(page.intro.cta ?? page.cta.link).url"
          class="inline-flex bg-fire-600 text-white font-medium px-8 py-3.5 rounded-lg hover:bg-fire-700 transition-colors"
        >
          {{ (page.intro.cta ?? page.cta.link).text }}
        </a>
      </div>
    </section>

    <!-- Overview -->
    <section class="py-20 md:py-28 bg-white">
      <div class="container mx-auto px-4 grid lg:grid-cols-12 gap-8 lg:gap-16">
        <div class="lg:col-span-5">
          <ng-container
            *ngTemplateOutlet="eyebrow; context: { $implicit: 'Overview' }"
          />
          <h2 class="text-3xl md:text-5xl text-sea-900 leading-tight">
            {{ page.intro.title }}
          </h2>
        </div>
        <div class="lg:col-span-7 space-y-5 text-lg text-gray-700 leading-relaxed">
          @if (page.intro.body) {
          <p>{{ page.intro.body }}</p>
          } @if (page.intro.note) {
          <p>{{ page.intro.note }}</p>
          }
        </div>
      </div>
    </section>

    <!-- Who we help -->
    @if (page.audience; as audience) {
    <section class="py-20 md:py-28 bg-gray-100">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mb-12">
          <ng-container
            *ngTemplateOutlet="eyebrow; context: { $implicit: 'Who we help' }"
          />
          <h2 class="text-3xl md:text-5xl text-sea-900 leading-tight mb-5">
            {{ audience.title }}
          </h2>
          @if (audience.intro) {
          <p class="text-lg text-gray-700 leading-relaxed">{{ audience.intro }}</p>
          }
        </div>

        <ul class="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          @for (item of audience.items; track $index) {
          <li class="bg-white rounded-2xl border border-gray-200 p-6">
            @if (item.title) {
            <h3 class="text-xl font-medium text-sea-900 mb-2">{{ item.title }}</h3>
            } @else {
            <div class="mb-3"><ng-container *ngTemplateOutlet="check" /></div>
            } @if (item.html) {
            <app-safe-html
              [htmlContent]="item.html"
              containerClass="prose prose-sm max-w-none text-gray-700 prose-li:marker:text-fire-600"
            />
            } @else {
            <p class="text-gray-700 leading-relaxed">{{ item.text }}</p>
            }
          </li>
          }
        </ul>

        @if (audience.extra.length) {
        <ul class="mt-8 grid md:grid-cols-2 gap-4">
          @for (line of audience.extra; track $index) {
          <li class="flex gap-3 text-gray-700">
            <ng-container *ngTemplateOutlet="check" />{{ line }}
          </li>
          }
        </ul>
        }
      </div>
    </section>
    }

    <!-- What we offer -->
    @if (page.offerings; as offerings) {
    <section class="py-20 md:py-28 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mb-12">
          <ng-container
            *ngTemplateOutlet="eyebrow; context: { $implicit: 'Our services' }"
          />
          <h2 class="text-3xl md:text-5xl text-sea-900 leading-tight mb-5">
            What we offer
          </h2>
          @if (offerings.intro) {
          <p class="text-lg text-gray-700 leading-relaxed">{{ offerings.intro }}</p>
          }
        </div>

        <div class="grid md:grid-cols-2 gap-5">
          @for (item of offerings.items; track $index) {
          <article class="rounded-2xl border border-gray-200 p-7 md:p-8">
            <span class="block font-spartan text-4xl font-medium text-fire-600/80 mb-4">
              {{ pad($index + 1) }}
            </span>
            <h3 class="text-xl md:text-2xl font-medium text-sea-900 mb-3">
              {{ item.title }}
            </h3>
            <p class="text-gray-700 leading-relaxed">{{ item.description }}</p>
            @if (item.table?.length) {
            <dl class="mt-6 divide-y divide-gray-200 rounded-xl bg-gray-50 px-5">
              @for (row of item.table; track row.label) {
              <div class="flex justify-between gap-4 py-3">
                <dt class="text-gray-700">{{ row.label }}</dt>
                <dd class="font-medium text-sea-900 text-right">{{ row.value }}</dd>
              </div>
              }
            </dl>
            }
          </article>
          }
        </div>
      </div>
    </section>
    }

    <!-- What you need -->
    @if (page.requirements; as req) {
    <section class="py-20 md:py-28 bg-gray-100">
      <div class="container mx-auto px-4 grid lg:grid-cols-12 gap-10 lg:gap-16">
        <div class="lg:col-span-5">
          <ng-container
            *ngTemplateOutlet="eyebrow; context: { $implicit: 'Checklist' }"
          />
          <h2 class="text-3xl md:text-5xl text-sea-900 leading-tight mb-5">
            What you need to apply
          </h2>
          @if (req.intro) {
          <p class="text-lg text-gray-700 leading-relaxed mb-4">{{ req.intro }}</p>
          } @if (req.note) {
          <p class="text-gray-700 leading-relaxed">{{ req.note }}</p>
          }
        </div>

        <div class="lg:col-span-7 bg-white rounded-3xl border border-gray-200 p-7 md:p-10 space-y-8">
          @if (req.html) {
          <app-safe-html
            [htmlContent]="req.html"
            containerClass="prose max-w-none text-gray-700 prose-strong:text-sea-900 prose-strong:font-medium prose-li:marker:text-fire-600"
          />
          } @for (group of req.groups; track group.title) {
          <div>
            @if (group.title) {
            <h3 class="text-lg font-medium text-sea-900 mb-4">{{ group.title }}</h3>
            }
            <ul class="space-y-3">
              @for (line of group.items; track $index) {
              <li class="flex gap-3 text-gray-700">
                <ng-container *ngTemplateOutlet="check" />{{ line }}
              </li>
              }
            </ul>
            @if (group.note) {
            <p class="mt-4 text-sm text-gray-600">{{ group.note }}</p>
            }
          </div>
          }
        </div>
      </div>
    </section>
    }

    <!-- How we work -->
    @if (page.process; as process) {
    <section class="py-20 md:py-28 bg-sea-950 text-white">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mb-14">
          <ng-container
            *ngTemplateOutlet="eyebrow; context: { $implicit: 'Our process', $dark: true }"
          />
          <h2 class="text-3xl md:text-5xl leading-tight mb-5">How we work</h2>
          @if (process.intro) {
          <p class="text-lg text-white/75 leading-relaxed">{{ process.intro }}</p>
          }
        </div>

        <ol class="grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
          @for (step of process.steps; track $index) {
          <li class="border-t border-white/15 pt-6">
            <span
              class="block font-spartan text-5xl font-medium leading-none text-white/20 mb-4"
              aria-hidden="true"
              >{{ pad($index + 1) }}</span
            >
            <h3 class="text-xl font-medium mb-2">{{ step.title }}</h3>
            <p class="text-white/75 leading-relaxed">{{ step.description }}</p>
          </li>
          }
        </ol>
      </div>
    </section>
    }

    <!-- Common scenarios / why Velox -->
    @if (page.scenarios || page.whyUs) {
    <section class="py-20 md:py-28 bg-white">
      <div class="container mx-auto px-4">
        @if (page.scenarios; as scenarios) {
        <div class="max-w-3xl mb-12">
          <ng-container
            *ngTemplateOutlet="eyebrow; context: { $implicit: 'Real situations' }"
          />
          <h2 class="text-3xl md:text-5xl text-sea-900 leading-tight">
            {{ scenarios.title }}
          </h2>
        </div>
        <!-- Editorial list: a rule above each item, no boxes -->
        <ol class="grid md:grid-cols-2 gap-x-12">
          @for (item of scenarios.items; track $index) {
          <li class="flex gap-5 border-t border-gray-200 py-6">
            <span class="w-7 shrink-0 font-spartan text-lg font-medium text-fire-600 leading-7">
              {{ pad($index + 1) }}
            </span>
            <div>
              @if (item.title) {
              <h3 class="text-lg font-medium text-sea-900 mb-1">{{ item.title }}</h3>
              } @if (item.html) {
              <app-safe-html [htmlContent]="item.html" containerClass="text-gray-700 leading-7" />
              } @else {
              <p class="text-gray-700 leading-7" [class.text-lg]="!item.title">{{ item.text }}</p>
              }
            </div>
          </li>
          }
        </ol>
        } @else {
        <div class="max-w-3xl">
          <ng-container
            *ngTemplateOutlet="eyebrow; context: { $implicit: 'Why Velox' }"
          />
          <h2 class="text-3xl md:text-5xl text-sea-900 leading-tight mb-6">
            Why choose Velox?
          </h2>
          <p class="text-lg text-gray-700 leading-relaxed">{{ page.whyUs }}</p>
        </div>
        }
      </div>
    </section>
    }

    <!-- FAQs -->
    @if (page.faqs.length) {
    <section class="py-20 md:py-28 bg-gray-100">
      <div class="container mx-auto px-4 grid lg:grid-cols-12 gap-10 lg:gap-16">
        <div class="lg:col-span-4">
          <h2 class="text-3xl md:text-5xl text-sea-900 leading-tight">
            Frequently asked questions
          </h2>
        </div>
        <app-faq-list class="lg:col-span-8" [items]="page.faqs" />
      </div>
    </section>
    }

    <!-- CTA -->
    <section class="bg-fire-600 text-white py-16 md:py-20">
      <div
        class="container mx-auto px-4 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8"
      >
        <div class="max-w-2xl">
          <h2 class="text-3xl md:text-4xl leading-tight mb-3">{{ page.cta.title }}</h2>
          @if (page.cta.body) {
          <p class="text-lg text-white/85">{{ page.cta.body }}</p>
          }
        </div>
        <a
          [routerLink]="page.cta.link.url"
          class="shrink-0 bg-white text-fire-700 font-medium text-center px-8 py-3.5 rounded-lg hover:bg-gray-100 transition-colors"
        >
          {{ page.cta.link.text }}
        </a>
      </div>
    </section>

    <!-- Other services -->
    <app-service-section [content]="home()" />

    <ng-template #eyebrow let-label let-dark="$dark">
      <div class="flex items-center gap-2 mb-4">
        <img src="assets/images/plane.svg" class="w-6 h-6" alt="" />
        <p class="text-lg md:text-xl font-medium font-spartan" [class.text-white]="dark">
          {{ label }}
        </p>
      </div>
    </ng-template>

    <ng-template #check>
      <svg
        class="size-6 shrink-0 text-fire-600"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    </ng-template>
  `,
})
export class ServicePageComponent {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private directus = inject(DirectusService);

  page!: ServicePage;
  category = '';
  /** Feeds the "other services" strip, which reads the home page's service list. */
  home = signal<{ data: HomePageContent | null }>({ data: null });

  constructor() {
    const seo = inject(SeoService);
    this.directus
      .getHomePageContent('home_page')
      .pipe(takeUntilDestroyed())
      .subscribe((home) => this.home.set(home));
    this.route.data.pipe(takeUntilDestroyed()).subscribe(({ data }) => {
      // Collections come back as a single record or a one-item list
      const record = Array.isArray(data.data) ? data.data[0] : data.data;
      this.page = toServicePage(record);
      if (this.page.status === 'draft' || this.page.status === 'archived') {
        this.router.navigate(['/']);
        return;
      }
      this.category = this.findCategory();
      seo.setAllSeoData({
        title: `${this.page.title} | Velox Immigration`,
        description: summary(this.page.subtitle),
      });
    });
  }

  pad(n: number) {
    return String(n).padStart(2, '0');
  }

  /** Menu group containing this page's URL, e.g. "Work in Canada". */
  private findCategory(): string {
    const path =
      '/' +
      this.route.snapshot.pathFromRoot
        .flatMap((r) => r.url.map((s) => s.path))
        .join('/');
    const has = (item: any): boolean =>
      item.url === path || (item.sub_menu ?? []).some(has);
    return this.directus.getServicesMenu().find(has)?.label ?? '';
  }
}

/** Meta descriptions get cut around 160 characters; end on a word. */
function summary(s: string, max = 160) {
  return s.length <= max ? s : s.slice(0, s.lastIndexOf(' ', max - 1)) + '…';
}
