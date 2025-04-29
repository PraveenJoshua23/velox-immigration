import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HomePageContent, MenuContent } from '../utils/types/directus';

@Injectable({
  providedIn: 'root',
})
export class DirectusService {
  private baseUrl = 'http://localhost:8055'; // or your Directus Cloud URL

  constructor(private http: HttpClient) {}

  getHomePageContent(
    collection: string
  ): Observable<{ data: HomePageContent }> {
    return this.http.get<{ data: HomePageContent }>(
      `${this.baseUrl}/items/${collection}`
    );
  }

  getCollection<T>(collection: string): Observable<{ data: T }> {
    return this.http.get<{ data: T }>(`${this.baseUrl}/items/${collection}`);
  }

  getMenu(collection: string): Observable<{ data: MenuContent[] }> {
    return this.http.get<{ data: MenuContent[] }>(
      `${this.baseUrl}/items/${collection}`
    );
  }
}
