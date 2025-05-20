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
import { Post } from '../../utils/types/directus';
import { DirectusService } from '../../services/directus.service';
import { HeaderComponent } from '../../components/header.component';
import { FooterComponent } from '../../components/footer.component';
import { CtaBannerComponent } from '../../components/cta-banner.component';
import { Title, Meta, DomSanitizer } from '@angular/platform-browser';
import { RecentPostsSidebarComponent } from '../../components/recent-posts-sidebar.component';
import { AssetUrlPipe } from '../../pipes/asset-url.pipe';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    HeaderComponent,
    FooterComponent,
    RecentPostsSidebarComponent,
    AssetUrlPipe,
  ],
  template: `
    <app-header />
    <div class="container mx-auto px-4 py-8 mt-4">
      <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <!-- Main Content - 3/4 width on large screens -->
        <div class="lg:col-span-3">
          <h1 class="text-3xl md:text-4xl font-bold text-sea-900 mb-8">
            Blog Posts
          </h1>

          @if (loading()) {
          <div class="flex justify-center items-center min-h-[30vh]">
            <div
              class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-sea-600"
            ></div>
          </div>
          } @else if (error()) {
          <div
            class="bg-red-50 border border-red-200 text-red-800 rounded-md p-6 my-8"
          >
            <h2 class="text-xl font-semibold mb-2">Error Loading Posts</h2>
            <p>{{ errorMessage() }}</p>
            <button
              routerLink="/"
              class="mt-4 bg-sea-600 text-white px-4 py-2 rounded hover:bg-sea-700 transition-colors"
            >
              Return to Home
            </button>
          </div>
          } @else if (posts().length === 0) {
          <div class="text-center py-12 min-h-[30vh]">
            <h2 class="text-xl text-gray-600">
              No posts available at the moment.
            </h2>
            <p class="mt-2 text-gray-500">
              Please check back later for updates.
            </p>
          </div>
          } @else {
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            @for (post of posts(); track post.slug) {
            <div
              class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              @if (post.thumbnail_image) {
              <div class="h-48 overflow-hidden">
                <img
                  [src]="
                    post.thumbnail_image | assetUrl : '/assets/images/logo.svg'
                  "
                  [alt]="post.title"
                  class="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                />
              </div>
              }
              <div class="p-5">
                <h2
                  class="text-xl font-semibold text-sea-900 mb-2 line-clamp-2"
                >
                  {{ post.title }}
                </h2>

                @if (post.author || post.date_created) {
                <div class="flex items-center text-gray-600 text-sm mb-3">
                  @if (post.author) {
                  <span class="mr-4">By {{ post.author }}</span>
                  } @if (post.date_created) {
                  <span>{{ formatDate(post.date_created) }}</span>
                  }
                </div>
                }

                <div class="text-gray-600 mb-4 line-clamp-3">
                  {{ stripHtml(post.content) }}
                </div>

                <a
                  [routerLink]="['/blog/posts', post.slug]"
                  class="inline-block px-4 py-2 bg-sea-600 text-white rounded hover:bg-sea-700 transition-colors"
                >
                  Read More
                </a>
              </div>
            </div>
            }
          </div>

          <!-- Pagination could be added here in the future -->
          }
        </div>

        <!-- Sidebar - 1/4 width on large screens -->
        <div class="lg:col-span-1">
          <app-recent-posts-sidebar />
        </div>
      </div>
    </div>
    <app-footer />
  `,
})
export class PostListComponent implements OnInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
  private directusService = inject(DirectusService);
  private titleService = inject(Title);
  private metaService = inject(Meta);
  private sanitizer = inject(DomSanitizer);

  // Reactive signals
  posts = signal<Post[]>([]);
  loading = signal<boolean>(true);
  error = signal<boolean>(false);
  errorMessage = signal<string>('');

  ngOnInit(): void {
    this.loading.set(true);
    this.error.set(false);

    // Set page title and meta tags
    this.titleService.setTitle('Blog Posts | Velox Immigration');
    this.metaService.updateTag({
      name: 'description',
      content:
        'Explore our latest immigration articles, guides, and updates to stay informed about Canadian immigration processes and opportunities.',
    });

    // Fetch all posts
    this.directusService
      .getCollection<Post[]>('posts', 'filter[status][_eq]=published')
      .subscribe({
        next: (response) => {
          if (response && response.data) {
            this.posts.set(response.data);
          } else {
            this.posts.set([]);
          }
          this.loading.set(false);
        },
        error: (err) => {
          this.handleError(err.message || 'Failed to load posts');
        },
      });
  }

  private handleError(message: string): void {
    this.error.set(true);
    this.errorMessage.set(message);
    this.loading.set(false);
  }

  formatDate(dateString: string): string {
    if (!dateString) return '';

    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }

  stripHtml(html: string): string {
    // First sanitize the HTML using Angular's DomSanitizer
    // This ensures any potentially malicious scripts are removed
    const sanitizedHtml = this.sanitizer.sanitize(0, html) || '';

    // Then extract plain text for preview
    // Using a regex approach that works in both browser and server environments
    const plainText = sanitizedHtml
      .replace(/<[^>]*>/g, ' ')
      .replace(/\s{2,}/g, ' ') // Replace multiple spaces with a single space
      .trim();

    // Limit the length for preview
    return plainText.length > 150
      ? plainText.substring(0, 150) + '...'
      : plainText;
  }
}
