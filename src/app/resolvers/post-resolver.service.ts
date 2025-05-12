import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { Observable, catchError, map, of } from 'rxjs';
import { DirectusService } from '../services/directus.service';
import { Post } from '../utils/types/directus';

@Injectable({
  providedIn: 'root'
})
export class PostResolverService {
  private directusService = inject(DirectusService);

  resolve(route: ActivatedRouteSnapshot): Observable<{ data: Post | null }> {
    const slug = route.paramMap.get('slug');
    
    if (!slug) {
      return of({ data: null });
    }
    
    return this.directusService.getCollection<Post[]>('posts').pipe(
      map(response => {
        const post = response.data.find(p => p.slug === slug);
        return { data: post || null };
      }),
      catchError(() => {
        return of({ data: null });
      })
    );
  }
}

// Export a standalone resolver function for use with the routes
export const postResolver: ResolveFn<{ data: Post | null }> = (
  route: ActivatedRouteSnapshot,
  _state: RouterStateSnapshot
) => {
  return inject(PostResolverService).resolve(route);
};
