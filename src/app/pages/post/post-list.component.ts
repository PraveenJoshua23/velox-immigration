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
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            @for (post of posts(); track post.slug) {
            <a
              [routerLink]="['/blog/posts', post.slug]"
              class="group flex flex-col bg-white rounded-xl overflow-hidden transition-all duration-300 hover:translate-y-[-4px] hover:shadow-xl"
            >
              @if (post.thumbnail_image) {
              <div class="relative h-52 overflow-hidden">
                <img
                  [src]="
                    post.thumbnail_image | assetUrl : '/assets/images/logo.svg'
                  "
                  [alt]="post.title"
                  class="w-full h-full object-cover"
                />
                <div
                  class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                ></div>
              </div>
              }
              <div class="flex flex-col flex-grow p-5">
                <!-- Date and Author - Small subtle text -->
                @if (post.date_created || post.author) {
                <div class="text-xs text-gray-500 mb-2 flex items-center">
                  @if (post.date_created) {
                  <span class="inline-flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-3 w-3 mr-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    {{ formatDate(post.date_created) }}
                  </span>
                  } @if (post.author) {
                  <span class="mx-2">•</span>
                  <span>{{ post.author }}</span>
                  }
                </div>
                }

                <!-- Title - Clean and prominent -->
                <h2
                  class="text-xl font-medium text-gray-900 mb-3 line-clamp-2 group-hover:text-sea-700 transition-colors"
                >
                  {{ post.title }}
                </h2>

                <!-- Content preview - Light gray, smaller text -->
                <p class="text-sm text-gray-600 mb-4 line-clamp-2 flex-grow">
                  {{ stripHtml(post.content) }}
                </p>

                <!-- Read more - Subtle link style -->
                <div class="mt-auto">
                  <span
                    class="inline-flex items-center text-sm font-medium text-sea-600 group-hover:text-sea-800 transition-colors"
                  >
                    Read article
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </a>
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
