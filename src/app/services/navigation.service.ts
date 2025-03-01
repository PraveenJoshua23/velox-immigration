import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import {
  NavigationResponse,
  TopNavigation,
} from '../utils/types/navigation.types';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  getNavigation(): Observable<any> {
    const params = {
      'populate[topNavigation][populate]': '*',
    };

    return this.http
      .get<NavigationResponse>(`${this.apiUrl}/navigation-header`, { params })
      .pipe(map((response) => response.data.topNavigation));
  }

  getServiceCategories(): Observable<any> {
    const params = {
      'populate[services][populate]': '*',
    };

    return this.http
      .get<any>(`${this.apiUrl}/service-category`, { params })
      .pipe(map((response) => response.data.services));
  }
}
