import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class SeoService {
  private isBrowser: boolean;

  constructor(
    private meta: Meta,
    private titleService: Title,
    @Inject(PLATFORM_ID) platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

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

  updateCanonicalUrl(url: string) {
    if (this.isBrowser) {
      let link: HTMLLinkElement | null = this.getCanonicalLink();
      link?.setAttribute('href', url);
    }
  }

  private getCanonicalLink(): HTMLLinkElement | null {
    if (!this.isBrowser) {
      return null;
    }

    let link = document.querySelector(
      'link[rel="canonical"]'
    ) as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    return link;
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
      url: config.ogUrl,
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

    // Only attempt to update canonical URL on browser
    if (config.canonicalUrl && this.isBrowser) {
      this.updateCanonicalUrl(config.canonicalUrl);
    }
  }
}
