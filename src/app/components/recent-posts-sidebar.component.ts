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
    <aside class="bg-white rounded-lg shadow-md p-6">
      <h3 class="text-xl font-semibold text-sea-900 mb-4">Recent Posts</h3>

      @if (loading()) {
      <div class="flex justify-center items-center py-8">
        <div
          class="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-sea-600"
        ></div>
      </div>
      } @else if (error()) {
      <div class="text-red-500 text-sm py-2">Unable to load recent posts</div>
      } @else if (recentPosts().length === 0) {
      <p class="text-gray-500">No recent posts available</p>
      } @else {
      <div class="space-y-4">
        @for (post of recentPosts(); track post.slug) {
        <div class="group">
          <a [routerLink]="['/blog/posts', post.slug]" class="block">
            @if (post.image) {
            <div class="mb-2 h-24 overflow-hidden rounded">
              <img
                [src]="post.image"
                [alt]="post.title"
                class="w-full h-full object-cover transition-transform group-hover:scale-105 duration-300"
              />
            </div>
            }
            <h4
              class="font-medium text-sea-800 group-hover:text-sea-600 transition-colors line-clamp-2"
            >
              {{ post.title }}
            </h4>
            @if (post.date_created) {
            <p class="text-xs text-gray-500 mt-1">
              {{ formatDate(post.date_created) }}
            </p>
            }
          </a>
        </div>
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
