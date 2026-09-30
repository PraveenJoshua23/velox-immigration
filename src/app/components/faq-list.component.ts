import { Component, input } from '@angular/core';
import { SafeHtmlComponent } from './safe-html.component';

/** Accordion of native <details>, with an animated open/close. */
@Component({
  selector: 'app-faq-list',
  standalone: true,
  imports: [SafeHtmlComponent],
  template: `
    <div class="space-y-4">
      @for (faq of items(); track faq.question) {
      <details
        #faqItem
        class="bg-white rounded-2xl border border-gray-200 open:shadow-sm"
      >
        <summary
          (click)="toggle($event, faqItem)"
          class="flex items-center justify-between gap-6 cursor-pointer list-none p-6 text-lg font-medium text-sea-900 [&::-webkit-details-marker]:hidden"
        >
          {{ faq.question }}
          <svg
            class="faq-icon size-5 shrink-0 transition-transform duration-300"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2.5"
            stroke-linecap="round"
            aria-hidden="true"
          >
            <path d="M12 5v14M5 12h14" />
          </svg>
        </summary>
        <app-safe-html
          class="block overflow-hidden"
          [htmlContent]="faq.answer"
          containerClass="px-6 pb-6 text-gray-700 leading-relaxed"
        />
      </details>
      }
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
      }

      /* + turns into x while open (not while the close animation runs) */
      details[open]:not([data-closing]) .faq-icon {
        transform: rotate(45deg);
      }
    `,
  ],
})
export class FaqListComponent {
  items = input<{ question: string; answer: string }[]>([]);

  /** Animates the native details open/close; the element stays a real <details>. */
  toggle(event: Event, details: HTMLDetailsElement) {
    event.preventDefault();
    const body = details.lastElementChild as HTMLElement;
    const opening = !details.open || details.dataset['closing'] === 'true';
    body.getAnimations().forEach((a) => a.cancel());
    delete details.dataset['closing'];

    if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
      details.open = opening;
      return;
    }

    details.open = true;
    const height = `${body.scrollHeight}px`;
    if (opening) {
      body.animate(
        [
          { height: '0px', opacity: 0 },
          { height, opacity: 1 },
        ],
        { duration: 300, easing: 'cubic-bezier(0.2, 0.8, 0.2, 1)' }
      );
    } else {
      details.dataset['closing'] = 'true';
      // fill: 'forwards' holds the collapsed state until the element is actually closed (no flash)
      const closing = body.animate(
        [
          { height, opacity: 1 },
          { height: '0px', opacity: 0 },
        ],
        { duration: 220, easing: 'ease-in', fill: 'forwards' }
      );
      // Rejects (ignored) if a click reopens it mid-close
      closing.finished.then(
        () => {
          details.open = false;
          delete details.dataset['closing'];
          closing.cancel();
        },
        () => {}
      );
    }
  }
}
