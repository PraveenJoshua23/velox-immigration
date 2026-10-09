import { Injectable, signal } from '@angular/core';

/**
 * Lets whichever page is currently active tell the header that it already
 * shows its own primary CTA in the hero, so the header can hide its
 * "Book a Consultation" button until that CTA scrolls out of view — the
 * two never need to be visible at the same time.
 *
 * A plain signal (not the `[data-hero-cta]` DOM marker used for scroll
 * tracking) is what the header reads for its *initial* render, so server
 * and client agree from the first paint and there is no hydration flash.
 */
@Injectable({ providedIn: 'root' })
export class HeroCtaService {
  present = signal(false);
}
