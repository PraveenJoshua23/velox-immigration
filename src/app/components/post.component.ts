import {
  Component,
  OnInit,
  inject,
  signal,
  PLATFORM_ID,
  Inject,
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Post } from '../utils/types/directus';
import { HeaderComponent } from './header.component';
import { FooterComponent } from './footer.component';
import { Title, Meta, DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderComponent, FooterComponent],
  template: `
    <app-header />
    <div class="container mx-auto px-4 py-8 mt-4">
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
      <div class="max-w-4xl mx-auto">
        <!-- Post Header -->
        <header class="mb-8">
          @if (post()?.image) {
          <div class="mb-6 rounded-lg overflow-hidden shadow-lg">
            <img
              [src]="post()?.image"
              [alt]="post()?.title"
              class="w-full h-auto object-cover max-h-[400px]"
            />
          </div>
          }

          <h1 class="text-3xl md:text-4xl font-bold text-sea-900 mb-4">
            {{ post()?.title }}
          </h1>

          @if (post()?.author || post()?.published_date) {
          <div class="flex items-center text-gray-600 text-sm">
            @if (post()?.author) {
            <span class="mr-4">By {{ post()?.author?.name }}</span>
            } @if (post()?.published_date) {
            <span>{{ formatDate(post()?.published_date) }}</span>
            }
          </div>
          }
        </header>

        <!-- Post Content -->
        <div class="prose prose-lg">
          <div [innerHTML]="safeContent()"></div>
        </div>

        <!-- Related Posts or Call to Action -->
        <!-- <div class="mt-12">
          <app-cta-banner
            title="Have Questions About Immigration?"
            description="Our team of immigration experts is ready to help you navigate the process."
            buttonText="Contact Us"
            buttonLink="/contact"
          />
        </div> -->
      </div>
      }
    </div>
    <app-footer />
  `,
})
export class PostComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private titleService = inject(Title);
  private metaService = inject(Meta);
  private sanitizer = inject(DomSanitizer);

  // Reactive signals
  post = signal<Post | null>(null);
  safeContent = signal<SafeHtml | null>(null);
  loading = signal<boolean>(true);
  error = signal<boolean>(false);
  errorMessage = signal<string>('');

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    this.loading.set(true);
    this.error.set(false);

    // Get the post data from the resolver
    this.route.data.subscribe((data) => {
      const resolvedData = data['data'];
      console.log('resolvedData', resolvedData);

      if (resolvedData && resolvedData.data) {
        const post = resolvedData.data;

        this.post.set(post);
        console.log(this.post());

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
