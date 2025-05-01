import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { DirectusService } from '../services/directus.service';

@Injectable({
  providedIn: 'root',
})
export class AboutResolverService implements Resolve<any> {
  constructor(private directusService: DirectusService) {}

  resolve(): Observable<any> {
    // Resolve logic goes here
    return this.directusService.getCollection('about_page').pipe(
      catchError((error) => {
        return of('No data');
      })
    );
  }
}
