// Define interfaces for Directus responses
export type Global = {
  slug: string;
  title: string;
  description: string;
};

export type Author = {
  slug: string;
  name: string;
};

export type Page = {
  slug: string;
  title: string;
  content: string;
};

export type Post = {
  slug: string;
  image: string;
  title: string;
  content: string;
  author: Author;
  date_created: string;
  date_updated: string;
  user_created: string;
  user_updated: string;
  header_image: any;
  thumbnail_image: any;
};

export type HomePage = HomePageContent;

export type Menu = MenuContent;

export type AboutPage = AboutPageContent;

export type Schema = {
  global: Global;
  posts: Post[];
  pages: Page[];
  home_page: HomePage;
  menu: Menu;
  about_page: AboutPage;
};

export interface HomePageContent {
  id?: string;
  hero_title?: string;
  hero_description: string;
  hero_background: any;
  hero_cta_title: string;
  hero_cta_link: string;
  about_title: string;
  about_subtitle: string;
  about_description: string;
  about_ctaTitle: string;
  about_ctaLink: string;
  hero_subtitle: string;
  hero_caption: string;
  why_choose_title: string;
  why_choose_subtitle: string;
  why_choose_features: any;
  why_choose_cta_text: string;
  why_choose_cta_link: string;
  services_title: string;
  services_subtitle: string;
  services_features: any;
  our_process_title: string;
  our_process_subtitle: string;
  our_process_steps: any;
  testimonial_title: string;
  testimonial_subtitle: string;
  testimonials: any;
  // Add other fields from your Directus collection as needed
}

export interface MenuContent {
  id?: string;
  title: string;
  menu_item: MenuItems[];
  date_updated: string | null;
  // Add other fields from your Directus collection as needed
}

interface MenuItems {
  id?: string;
  label: string;
  url: string;
  visible: boolean;
  sub_menu?: MenuItems[];
}

export interface AboutPageContent {
  id: number;
  page_title: string;
  page_subtitle: string;
  story_header: string;
  story_content: string;
  founder_title: string;
  founder_content: string;
  founder_image: any | null;
  founder_ctaText: string;
  founder_ctaLink: string;
  corevalues_title: string;
  corevalue_content: any[];
  faq_items: any[];
  date_updated: string | null;
}
