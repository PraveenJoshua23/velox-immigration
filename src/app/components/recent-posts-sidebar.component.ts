import {
  Component,
  OnInit,
  inject,
  signal,
  PLATFORM_ID,
  Inject,
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Post } from '../utils/types/directus';
import { DirectusService } from '../services/directus.service';

@Component({
  selector: 'app-recent-posts-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <aside class="bg-white rounded-xl p-6">
      <h3 class="text-lg font-medium text-gray-900 mb-5 flex items-center">
        <span class="inline-block w-1 h-5 bg-sea-600 rounded mr-2"></span>
        Recent Posts
      </h3>

      @if (loading()) {
      <div class="flex justify-center items-center py-6">
        <div
          class="animate-spin rounded-full h-6 w-6 border-2 border-sea-200 border-t-sea-600"
        ></div>
      </div>
      } @else if (error()) {
      <div class="text-red-500 text-sm py-2">Unable to load recent posts</div>
      } @else if (recentPosts().length === 0) {
      <p class="text-gray-500 text-sm">No recent posts available</p>
      } @else {
      <div class="space-y-5">
        @for (post of recentPosts(); track post.slug) {
        <a
          [routerLink]="['/blog/posts', post.slug]"
          class="group flex gap-3 items-start hover:bg-gray-50 p-2 -mx-2 rounded-lg transition-colors"
        >
          @if (post.image) {
          <div
            class="shrink-0 w-16 h-16 rounded-md overflow-hidden bg-gray-100"
          >
            <img
              [src]="post.image"
              [alt]="post.title"
              class="w-full h-full object-cover"
            />
          </div>
          }
          <div class="flex-1 min-w-0">
            <h4
              class="text-sm font-medium text-gray-900 group-hover:text-sea-700 transition-colors line-clamp-2 mb-1"
            >
              {{ post.title }}
            </h4>
            @if (post.date_created) {
            <p class="text-xs text-gray-500">
              {{ formatDate(post.date_created) }}
            </p>
            }
          </div>
        </a>
        }
      </div>

      }
    </aside>
  `,
})
export class RecentPostsSidebarComponent implements OnInit {
  private directusService = inject(DirectusService);

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  // Reactive signals
  recentPosts = signal<Post[]>([]);
  loading = signal<boolean>(true);
  error = signal<boolean>(false);

  ngOnInit(): void {
    this.loading.set(true);
    this.error.set(false);

    // Fetch recent posts (limited to 5)
    this.directusService
      .getCollection<Post[]>(
        'posts?limit=5&sort=-date_updated&filter[status][_eq]=published'
      )
      .subscribe({
        next: (response) => {
          if (response && response.data) {
            this.recentPosts.set(response.data);
          } else {
            this.recentPosts.set([]);
          }
          this.loading.set(false);
        },
        error: (err) => {
          console.error('Error loading recent posts:', err);
          this.error.set(true);
          this.loading.set(false);
        },
      });
  }

  formatDate(dateString: string): string {
    if (!dateString) return '';

    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  }
}
