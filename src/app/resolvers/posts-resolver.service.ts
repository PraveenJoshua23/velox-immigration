import { Injectable, inject } from '@angular/core';
import { ResolveFn, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, catchError, of } from 'rxjs';
import { DirectusService } from '../services/directus.service';
import { Post } from '../utils/types/directus';

@Injectable({
  providedIn: 'root'
})
export class PostsResolverService {
  private directusService = inject(DirectusService);

  resolve(): Observable<{ data: Post[] }> {
    return this.directusService.getCollection<Post[]>('posts').pipe(
      catchError(() => {
        return of({ data: [] });
      })
    );
  }
}

// Export a standalone resolver function for use with the routes
export const postsResolver: ResolveFn<{ data: Post[] }> = (
  _route: ActivatedRouteSnapshot,
  _state: RouterStateSnapshot
) => {
  return inject(PostsResolverService).resolve();
};
