import { Component, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Route, RouterModule } from '@angular/router';
import { forkJoin, map } from 'rxjs';
import { DirectusService } from '../../services/directus.service';
import { SeoService } from '../../services/seo.service';
import { toServicePage } from '../../utils/types/service-page';

interface ServiceCard {
  url: string;
  title: string;
  subtitle: string;
  image?: string;
}

/**
 * Lists the services under the current route: one category (/services/work)
 * or every category (/services). Built from the route config + service content,
 * so a new service route shows up here without touching this file.
 */
@Component({
  selector: 'app-service-category',
  standalone: true,
  imports: [RouterModule],
  template: `
    <section class="bg-sea-950 text-white py-20 md:py-28">
      <div class="container mx-auto px-4">
        <nav aria-label="Breadcrumb" class="mb-6 text-sm text-white/60">
          <ol class="flex flex-wrap items-center gap-2">
            <li><a routerLink="/" class="hover:text-white">Home</a></li>
            @if (!isRoot) {
            <li aria-hidden="true">/</li>
            <li><a routerLink="/services" class="hover:text-white">Services</a></li>
            }
            <li aria-hidden="true">/</li>
            <li class="text-white" aria-current="page">{{ heading }}</li>
          </ol>
        </nav>
        <h1 class="text-4xl md:text-6xl font-medium leading-[1.05] mb-6">{{ heading }}</h1>
        <p class="text-lg md:text-xl text-white/80 max-w-2xl">
          Licensed RCIC guidance for every step. Choose a service to see who it's
          for, what you'll need, and how we work.
        </p>
      </div>
    </section>

    @for (group of groups(); track group.label) {
    <section class="py-16 md:py-20" [class.bg-gray-100]="$odd">
      <div class="container mx-auto px-4">
        @if (isRoot) {
        <h2 class="text-3xl md:text-4xl text-sea-900 mb-10">{{ group.label }}</h2>
        }
        <ul class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          @for (card of group.cards; track card.url) {
          <li>
            <a
              [routerLink]="card.url"
              class="group flex h-full flex-col rounded-2xl border border-gray-200 bg-white overflow-hidden transition hover:-translate-y-1 hover:shadow-lg"
            >
              @if (card.image) {
              <img
                [src]="card.image"
                alt=""
                loading="lazy"
                class="aspect-[5/2] w-full object-cover"
              />
              }
              <div class="flex flex-1 flex-col p-6">
                <h3 class="text-xl font-medium text-sea-900 mb-2">{{ card.title }}</h3>
                <p class="text-gray-700 leading-relaxed mb-6">{{ card.subtitle }}</p>
                <span class="mt-auto font-medium text-fire-600 group-hover:underline underline-offset-4">
                  Learn more <span aria-hidden="true">&rarr;</span>
                </span>
              </div>
            </a>
          </li>
          }
        </ul>
      </div>
    </section>
    }

    <section class="bg-fire-600 text-white py-16">
      <div
        class="container mx-auto px-4 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8"
      >
        <h2 class="text-3xl md:text-4xl leading-tight max-w-2xl">
          Not sure which service fits your situation?
        </h2>
        <a
          routerLink="/consultation-agreement"
          class="shrink-0 bg-white text-fire-700 font-medium text-center px-8 py-3.5 rounded-lg hover:bg-gray-100 transition-colors"
        >
          Book a Consultation
        </a>
      </div>
    </section>
  `,
})
export class ServiceCategoryComponent {
  private route = inject(ActivatedRoute);
  private directus = inject(DirectusService);

  groups = signal<{ label: string; cards: ServiceCard[] }[]>([]);
  isRoot: boolean;
  heading: string;

  constructor() {
    // This page is the '' child; its parent route is the scope being listed
    const scope = this.route.parent!;
    const base =
      '/' + scope.snapshot.pathFromRoot.flatMap((r) => r.url.map((s) => s.path)).join('/');
    const menu = this.directus.getServicesMenu();
    const has = (item: any, url: string): boolean =>
      item.url === url || (item.sub_menu ?? []).some((s: any) => has(s, url));
    const labelFor = (url: string) => menu.find((g) => has(g, url))?.label ?? 'Services';

    const leaves = serviceRoutes(scope.routeConfig?.children ?? [], base);
    this.isRoot = scope.routeConfig?.path === 'services';
    this.heading = this.isRoot ? 'Our Services' : labelFor(leaves[0]?.url ?? '');

    forkJoin(
      leaves.map((leaf) =>
        this.directus.getCollection<any>(leaf.collection).pipe(
          map(({ data }) => {
            const page = toServicePage(Array.isArray(data) ? data[0] : data);
            return { url: leaf.url, title: page.title, subtitle: page.subtitle, image: page.heroImage };
          })
        )
      )
    )
      .pipe(takeUntilDestroyed())
      .subscribe((cards) => {
        const groups = new Map<string, ServiceCard[]>();
        for (const card of cards) {
          const label = labelFor(card.url);
          groups.set(label, [...(groups.get(label) ?? []), card]);
        }
        this.groups.set([...groups].map(([label, cards]) => ({ label, cards })));
      });

    inject(SeoService).setAllSeoData({
      title: `${this.heading} | Velox Immigration`,
      description: `${this.heading}: licensed RCIC guidance from Velox Immigration in Toronto and Chennai. Compare services and book a consultation.`,
    });
  }
}

/** Service routes under `routes`, with their full URL and content collection (inherited from a parent if needed). */
function serviceRoutes(
  routes: Route[],
  base: string,
  inherited?: string
): { url: string; collection: string }[] {
  return routes.flatMap((r) => {
    if (!r.path || r.redirectTo) return [];
    const url = `${base}/${r.path}`;
    const collection = r.data?.['collection'] ?? inherited;
    if (r.children) return serviceRoutes(r.children, url, collection);
    return collection ? [{ url, collection }] : [];
  });
}
