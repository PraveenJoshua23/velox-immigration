import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class SeoService {
  private meta = inject(Meta);
  private titleService = inject(Title);
  // DOCUMENT works during SSR too, so crawlers get the right canonical in the HTML
  private document = inject(DOCUMENT);

  updateTitle(title: string) {
    this.titleService.setTitle(title);
  }

  updateDescription(description: string) {
    this.meta.updateTag({ name: 'description', content: description });
  }

  updateKeywords(keywords: string) {
    this.meta.updateTag({ name: 'keywords', content: keywords });
  }

  updateOgTags(config: {
    title?: string;
    description?: string;
    url?: string;
    image?: string;
    type?: string;
  }) {
    if (config.title) {
      this.meta.updateTag({ property: 'og:title', content: config.title });
    }
    if (config.description) {
      this.meta.updateTag({
        property: 'og:description',
        content: config.description,
      });
    }
    if (config.url) {
      this.meta.updateTag({ property: 'og:url', content: config.url });
    }
    if (config.image) {
      this.meta.updateTag({ property: 'og:image', content: config.image });
    }
    if (config.type) {
      this.meta.updateTag({ property: 'og:type', content: config.type });
    }
  }

  updateTwitterTags(config: {
    title?: string;
    description?: string;
    image?: string;
    card?: string;
  }) {
    if (config.title) {
      this.meta.updateTag({ name: 'twitter:title', content: config.title });
    }
    if (config.description) {
      this.meta.updateTag({
        name: 'twitter:description',
        content: config.description,
      });
    }
    if (config.image) {
      this.meta.updateTag({ name: 'twitter:image', content: config.image });
    }
    if (config.card) {
      this.meta.updateTag({ name: 'twitter:card', content: config.card });
    }
  }

  /** Canonical link and og:url for the current page. */
  setUrl(url: string) {
    this.updateCanonicalUrl(url);
    this.meta.updateTag({ property: 'og:url', content: url });
  }

  updateCanonicalUrl(url: string) {
    let link = this.document.head.querySelector<HTMLLinkElement>(
      'link[rel="canonical"]'
    );
    if (!link) {
      link = this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.document.head.appendChild(link);
    }
    link.setAttribute('href', url);
  }

  setAllSeoData(config: {
    title: string;
    description: string;
    keywords?: string;
    ogTitle?: string;
    ogDescription?: string;
    ogUrl?: string;
    ogImage?: string;
    ogType?: string;
    twitterTitle?: string;
    twitterDescription?: string;
    twitterImage?: string;
    twitterCard?: string;
    canonicalUrl?: string;
  }) {
    this.updateTitle(config.title);
    this.updateDescription(config.description);

    if (config.keywords) {
      this.updateKeywords(config.keywords);
    }

    this.updateOgTags({
      title: config.ogTitle || config.title,
      description: config.ogDescription || config.description,
      url: config.ogUrl || config.canonicalUrl,
      image: config.ogImage,
      type: config.ogType || 'website',
    });

    this.updateTwitterTags({
      title: config.twitterTitle || config.ogTitle || config.title,
      description:
        config.twitterDescription || config.ogDescription || config.description,
      image: config.twitterImage || config.ogImage,
      card: config.twitterCard || 'summary_large_image',
    });

    if (config.canonicalUrl) {
      this.updateCanonicalUrl(config.canonicalUrl);
    }
  }
}
