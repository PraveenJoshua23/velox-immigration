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
export class StudyResolverService implements Resolve<any> {
  constructor(private directusService: DirectusService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    // Resolve logic goes here
    return this.directusService.getCollection('study_in_canada').pipe(
      catchError((error) => {
        return of('No data');
      })
    );
  }
}
