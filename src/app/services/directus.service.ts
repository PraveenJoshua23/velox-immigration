import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  AboutPageContent,
  HomePageContent,
  MenuContent,
  Schema,
} from '../utils/types/directus';
import { environments } from '../environments/environments';
import { createDirectus, readItems, readItem, rest } from '@directus/sdk';

@Injectable({
  providedIn: 'root',
})
export class DirectusService {
  private baseUrl = environments.baseUrl; // or your Directus Cloud URL
  directus: any;

  constructor(private http: HttpClient) {
    this.directus = createDirectus<Schema>(this.baseUrl).with(rest());
  }

  getHomePageContent(
    collection: string
  ): Observable<{ data: HomePageContent }> {
    return this.http.get<{ data: HomePageContent }>(
      `${this.baseUrl}/items/${collection}`
    );
  }

  getCollection<T>(
    collection: string,
    query?: string
  ): Observable<{ data: T }> {
    if (query) {
      return this.http.get<{ data: T }>(
        `${this.baseUrl}/items/${collection}?${query}`
      );
    }
    return this.http.get<{ data: T }>(`${this.baseUrl}/items/${collection}`);
  }

  getMenu(collection: string): Observable<{ data: MenuContent[] }> {
    return this.http.get<{ data: MenuContent[] }>(
      `${this.baseUrl}/items/${collection}`
    );
  }

  //@ts-ignore
  // getAboutPageContent(collection: string): Promise<AboutPageContent[]> {
  //   try {
  //     //@ts-ignore
  //     return this.directus.request(() => ({
  //       path: `/items/about_page`,
  //       method: 'GET',
  //     }));
  //   } catch (error) {
  //     if (isDirectusError(error)) {
  //       console.log(error);
  //     }
  //   }
  // }
}
