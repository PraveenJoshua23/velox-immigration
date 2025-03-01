interface ServiceItem {
  id: number;
  label: string;
  path: string;
}

interface ServiceCategory {
  id: number;
  title: string;
  items: ServiceItem[];
}

export interface NavigationLink {
  id: number;
  label: string;
  href: string | null;
  isExternal: boolean;
  type: 'Primary' | 'Secondary' | 'LINK';
  hasDropdown?: boolean;
  serviceCategories?: ServiceCategory[];
}

export interface TopNavigation {
  id: number;
  logoTitle: NavigationLink;
  ctaButton: NavigationLink;
  navItem: NavigationLink[];
}

export interface NavigationResponse {
  data: {
    id: number;
    documentId: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    topNavigation: TopNavigation;
  };
  meta: any;
}
