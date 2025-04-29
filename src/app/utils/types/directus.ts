// Define interfaces for Directus responses
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
  // Add other fields from your Directus collection as needed
}

interface MenuItems {
  id?: string;
  label: string;
  url: string;
  visible: boolean;
  sub_menu?: MenuItems[];
}
