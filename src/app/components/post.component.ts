import {
  Component,
  OnInit,
  inject,
  signal,
  PLATFORM_ID,
  Inject,
  computed,
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Post } from '../utils/types/directus';
import { HeaderComponent } from './header.component';
import { FooterComponent } from './footer.component';
import { Title, Meta, DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { RecentPostsSidebarComponent } from './recent-posts-sidebar.component';
import { ShareDialogComponent } from './share-dialog.component';
import { AnalyticsService } from '../services/analytics.service';
import { AssetUrlPipe } from '../pipes/asset-url.pipe';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    HeaderComponent,
    FooterComponent,
    RecentPostsSidebarComponent,
    ShareDialogComponent,
    AssetUrlPipe,
  ],
  template: `
    <app-header />
    <div class="container mx-auto px-4 py-10 mt-4">
      @if (loading()) {
      <div class="flex justify-center items-center min-h-[50vh]">
        <div
          class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-sea-600"
        ></div>
      </div>
      } @else if (error()) {
      <div
        class="bg-red-50 border border-red-200 text-red-800 rounded-md p-6 my-8"
      >
        <h2 class="text-xl font-semibold mb-2">Error Loading Post</h2>
        <p>{{ errorMessage() }}</p>
        <button
          routerLink="/"
          class="mt-4 bg-sea-600 text-white px-4 py-2 rounded hover:bg-sea-700 transition-colors"
        >
          Return to Home
        </button>
      </div>
      } @else {
      <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <!-- Main Content - 3/4 width on large screens -->
        <div class="lg:col-span-3">
          <!-- Post Header -->
          <header class="mb-8">
            @if (post()?.header_image) {
            <div class="mb-6 rounded-lg overflow-hidden shadow-lg">
              <img
                [src]="
                  post()?.header_image
                    | assetUrl : '/assets/images/placeholder-header.jpg'
                "
                [alt]="post()?.title"
                class="w-full h-auto object-cover max-h-[400px]"
              />
            </div>
            }

            <h1 class="text-3xl md:text-4xl font-bold text-sea-900 mb-4">
              {{ post()?.title }}
            </h1>

            <!-- Post Date -->
            <div class="flex items-center text-gray-600 text-sm mb-4">
              <span class="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4 mr-1"
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
                Posted on: {{ formatDate(getLatestDate()) }}
              </span>
            </div>

            @if (post()?.author || post()?.date_created) {
            <div class="flex items-center text-gray-600 text-sm">
              @if (post()?.author) {
              <span class="mr-4">By {{ post()?.author?.name }}</span>
              }
            </div>
            }
          </header>

          <!-- Post Content -->
          <div
            class="prose prose-md max-w-none px-6 flex justify-center mx-auto"
          >
            <div [innerHTML]="safeContent()"></div>
          </div>

          <!-- Share Button -->
          <div class="mt-10 flex justify-center">
            <button
              (click)="showShareDialog.set(true)"
              class="flex items-center gap-2 bg-sea-600 text-white px-6 py-3 rounded-full hover:bg-sea-700 transition-colors shadow-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                />
              </svg>
              Share this post
            </button>
          </div>
        </div>

        <!-- Sidebar - 1/4 width on large screens -->
        <div class="lg:col-span-1">
          <app-recent-posts-sidebar />
        </div>
      </div>
      }
    </div>
    <app-footer />

    <!-- Share Dialog -->
    @if (showShareDialog()) {
    <app-share-dialog
      [postUrl]="currentUrl()"
      [postTitle]="post()?.title || ''"
      (close)="showShareDialog.set(false)"
    />
    }
  `,
})
export class PostComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private titleService = inject(Title);
  private metaService = inject(Meta);
  private sanitizer = inject(DomSanitizer);
  private analyticsService = inject(AnalyticsService);

  // Reactive signals
  post = signal<Post | null>(null);
  safeContent = signal<SafeHtml | null>(null);
  loading = signal<boolean>(true);
  error = signal<boolean>(false);
  errorMessage = signal<string>('');
  showShareDialog = signal<boolean>(false);

  // Computed values
  currentUrl = computed(() => {
    if (isPlatformBrowser(this.platformId)) {
      return window.location.href;
    }
    return '';
  });

  /**
   * Returns the most recent date between date_updated, date_created, or published_date
   */
  getLatestDate(): string {
    const post = this.post();
    if (!post) return '';

    // Check for date_updated and date_created fields
    const dateUpdated = post['date_updated'];
    const dateCreated = post['date_created'];

    // If both date_updated and date_created exist, return the most recent one
    if (dateUpdated && dateCreated) {
      const updatedDate = new Date(dateUpdated);
      const createdDate = new Date(dateCreated);
      return updatedDate > createdDate ? dateUpdated : dateCreated;
    }

    // If only one of them exists, return that one
    if (dateUpdated) return dateUpdated;
    if (dateCreated) return dateCreated;

    return '';
  }

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    this.loading.set(true);
    this.error.set(false);

    // Get the post data from the resolver
    this.route.data.subscribe((data) => {
      const resolvedData = data['data'];

      if (resolvedData && resolvedData.data) {
        const post = resolvedData.data;

        this.post.set(post);

        // Sanitize the HTML content
        if (post.body) {
          this.safeContent.set(
            this.sanitizer.bypassSecurityTrustHtml(post.body)
          );
        }

        this.updateMetaTags(post);
      } else {
        this.handleError('Post not found');
      }

      this.loading.set(false);
    });
  }

  private updateMetaTags(post: Post): void {
    if (isPlatformBrowser(this.platformId)) {
      this.titleService.setTitle(`${post.title} | Velox Immigration`);

      // Update meta description
      const description = post.title;

      this.metaService.updateTag({
        name: 'description',
        content: description,
      });

      // Add Open Graph tags
      this.metaService.updateTag({
        property: 'og:title',
        content: post.title,
      });

      this.metaService.updateTag({
        property: 'og:description',
        content: description,
      });

      if (post.image) {
        this.metaService.updateTag({
          property: 'og:image',
          content: post.image,
        });
      }
    }
  }

  private handleError(message: string): void {
    this.error.set(true);
    this.errorMessage.set(message);
    this.loading.set(false);
  }

  formatDate(dateString?: string): string {
    if (!dateString) return '';

    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }
}
