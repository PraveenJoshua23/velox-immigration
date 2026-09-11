import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HomePageContent, MenuContent } from '../utils/types/directus';
// Static content exported from the old Directus CMS (scripts/scrape-cms.mjs).
import about_page from '../../content/about_page.json';
import appeals_refugees_hc_cases from '../../content/appeals_refugees_hc_cases.json';
import application_review from '../../content/application_review.json';
import atlantic_immigration from '../../content/atlantic_immigration.json';
import book_consultation from '../../content/book_consultation.json';
import business_immigration from '../../content/business_immigration.json';
import contact_page from '../../content/contact_page.json';
import express_entry from '../../content/express_entry.json';
import extensions_and_coop_permits from '../../content/extensions_and_coop_permits.json';
import family_sponsorship from '../../content/family_sponsorship.json';
import home_page from '../../content/home_page.json';
import lmia_and_employer_permits from '../../content/lmia_and_employer_permits.json';
import navigation from '../../content/navigation.json';
import open_pgwp_permit from '../../content/open_pgwp_permit.json';
import posts from '../../content/posts.json';
import pr_card_citizenship from '../../content/pr_card_citizenship.json';
import provincial_nominee_program from '../../content/provincial_nominee_program.json';
import sop_dli_opinion from '../../content/sop_dli_opinion.json';
import study_in_canada from '../../content/study_in_canada.json';
import visitor_visa from '../../content/visitor_visa.json';

const content: Record<string, { data: any }> = {
  about_page,
  appeals_refugees_hc_cases,
  application_review,
  atlantic_immigration,
  book_consultation,
  business_immigration,
  contact_page,
  express_entry,
  extensions_and_coop_permits,
  family_sponsorship,
  home_page,
  lmia_and_employer_permits,
  navigation,
  open_pgwp_permit,
  posts,
  pr_card_citizenship,
  provincial_nominee_program,
  sop_dli_opinion,
  study_in_canada,
  visitor_visa,
};

@Injectable({
  providedIn: 'root',
})
export class DirectusService {
  getHomePageContent(
    collection: string
  ): Observable<{ data: HomePageContent }> {
    return this.getCollection<HomePageContent>(collection);
  }

  // Accepts the Directus query params callers already pass, either inline
  // ('posts?limit=5') or as `query`: filter[status][_eq], sort and limit.
  getCollection<T>(
    collection: string,
    query?: string
  ): Observable<{ data: T }> {
    const [name, inlineQuery] = collection.split('?');
    if (!content[name]) {
      return throwError(() => new Error(`Unknown collection: ${name}`));
    }

    let data = content[name].data;
    const params = new URLSearchParams(
      [inlineQuery, query].filter(Boolean).join('&')
    );
    if (Array.isArray(data)) {
      const status = params.get('filter[status][_eq]');
      if (status) data = data.filter((item) => item.status === status);

      const sort = params.get('sort');
      if (sort) {
        const key = sort.replace(/^-/, '');
        const dir = sort.startsWith('-') ? -1 : 1;
        data = [...data].sort(
          (a, b) => String(a[key] ?? '').localeCompare(String(b[key] ?? '')) * dir
        );
      }

      const limit = params.get('limit');
      if (limit) data = data.slice(0, Number(limit));
    }
    return of({ data });
  }

  getMenu(collection: string): Observable<{ data: MenuContent[] }> {
    return this.getCollection<MenuContent[]>(collection);
  }

  // Visible children of the "Services" navigation item (footer + services sidebar).
  getServicesMenu(): any[] {
    const items: any[] = content['navigation'].data[0]?.menu_items ?? [];
    const services = items.find((item) => item.label === 'Services');
    return (services?.sub_menu ?? []).filter((item: any) => item.visible);
  }
}
