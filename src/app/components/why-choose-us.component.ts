import {
  Component,
  signal,
  AfterViewInit,
  ElementRef,
  Inject,
  PLATFORM_ID,
  Input,
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomePageContent } from '../utils/types/directus';

interface Reason {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-why-choose-us',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section class="bg-white py-16">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <div class="flex items-center justify-center gap-2 mb-4">
            <img src="assets/images/plane.svg" class="pb-1 hidden md:block" />
            <h2 class="text-3xl font-medium">
              {{ content.data?.why_choose_subtitle }}
            </h2>
          </div>
          <p class="text-gray-600 mt-2">
            {{ content.data?.why_choose_title }}
          </p>
        </div>

        <!-- Grid Layout -->
        <div
          class="reason-cards-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-12"
          #cardsContainer
          [class.animate-cards]="animateCards()"
        >
          <!-- Reasons -->
          @for(reason of content.data?.why_choose_features || []; track
          reason.title; let i = $index){
          <div
            class="reason-card bg-fire-600 bg-opacity-20 space-y-3 border border-fire-600 rounded-lg px-6 py-12 flex flex-col items-center text-center transition-all"
            [attr.data-index]="i"
          >
            <img src="assets/icons/tick-circle.svg" class="pb-1 size-10" />
            <h3 class="text-xl font-semibold text-sea-900 mb-3">
              {{ reason.title }}
            </h3>
            <p
              class="text-gray-600 font-light text-sm"
              [innerHTML]="reason.description"
            ></p>
          </div>
          }
        </div>

        <!-- CTA Button -->
        <div class="text-center">
          <button
            [routerLink]="content.data?.why_choose_cta_link || '/contact'"
            class="bg-fire-600 text-white px-8 py-3 rounded-lg hover:bg-fire-700 transition-colors inline-flex items-center gap-2"
          >
            <!-- {{ content.data?.why_choose_cta_text }}  -->Schedule a
            Consultation
          </button>
        </div>
      </div>
    </section>
  `,
  styles: `
    :host {
      display: block;
    }
    
    .reason-card {
      opacity: 0;
      transform: translateY(30px);
      transition: opacity 0.6s cubic-bezier(0.35, 0, 0.25, 1), 
                  transform 0.6s cubic-bezier(0.35, 0, 0.25, 1);
    }
    
    .animate-cards .reason-card {
      opacity: 1;
      transform: translateY(0);
    }
    
    .animate-cards .reason-card[data-index="0"] {
      transition-delay: 0ms;
    }
    
    .animate-cards .reason-card[data-index="1"] {
      transition-delay: 150ms;
    }
    
    .animate-cards .reason-card[data-index="2"] {
      transition-delay: 300ms;
    }
    
    .animate-cards .reason-card[data-index="3"] {
      transition-delay: 450ms;
    }
  `,
})
export class WhyChooseUsComponent implements AfterViewInit {
  animateCards = signal(false);
  @Input() content: { data: HomePageContent | null } = { data: null };

  reasons = signal<Reason[]>([
    {
      icon: '✔️',
      title: 'Expertise & Experience',
      description:
        'Years of immigration expertise and <strong>licensed RCIC-IRB guidance</strong>.',
    },
    {
      icon: '✔️',
      title: 'Personalized Service',
      description:
        'Every case is <strong>tailored to fit your specific needs</strong>.',
    },
    {
      icon: '✔️',
      title: 'Honesty & Transparency',
      description:
        'No false promises, just <strong>clear and realistic advice</strong>.',
    },
    {
      icon: '✔️',
      title: 'Bilingual Support',
      description:
        'We assist clients in <strong>English & Tamil</strong> for seamless communication.',
    },
  ]);

  constructor(
    private el: ElementRef,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      // Use Intersection Observer for scroll-based triggering
      this.setupIntersectionObserver();

      // Fallback - if the cards are already visible on load
      setTimeout(() => {
        if (!this.animateCards()) {
          const rect = this.el.nativeElement.getBoundingClientRect();
          if (rect.top < window.innerHeight) {
            this.animateCards.set(true);
          }
        }
      }, 300);
    }
  }

  private setupIntersectionObserver() {
    if (typeof IntersectionObserver === 'undefined') {
      // Fallback for browsers without IntersectionObserver
      this.animateCards.set(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          this.animateCards.set(true);
          observer.disconnect();
        }
      },
      {
        root: null,
        rootMargin: '0px 0px -100px 0px',
        threshold: 0.1,
      }
    );

    observer.observe(this.el.nativeElement);
  }
}
