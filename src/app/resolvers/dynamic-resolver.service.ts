import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { DirectusService } from '../services/directus.service';

@Injectable({
  providedIn: 'root',
})
export class DynamicResolverService implements Resolve<any> {
  constructor(private directusService: DirectusService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    // Get the collection name from route data
    const collection = route.data['collection'];

    if (!collection) {
      console.error('No collection specified in route data');
      return of(null);
    }

    return this.directusService.getCollection(collection).pipe(
      catchError((error) => {
        console.error(`Error fetching collection ${collection}:`, error);
        return of(null);
      })
    );
  }
}
