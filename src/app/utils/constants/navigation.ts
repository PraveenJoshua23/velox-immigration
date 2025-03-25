export const localServices = [
  {
    id: '1',
    title: 'Study',
    items: [
      {
        id: '1',
        label: 'Study in Canada',
        path: '/services/study/study-in-canada',
      },
    ],
  },
  {
    id: '2',
    title: 'Work',
    items: [
      {
        id: '2',
        label: 'Open & PGWP Work Permits',
        path: '/services/work/open-pgwp-permits',
      },
      {
        id: '3',
        label: 'LMIA & Employer-Based Permits',
        path: '/services/work/lmia-employer-permits',
      },
      {
        id: '4',
        label: 'Work Permit Extensions & Co-op',
        path: '/services/work/extensions-coop',
      },
    ],
  },
  {
    id: '3',
    title: 'Visit',
    items: [
      {
        id: '5',
        label: 'Visitor Visas to Canada',
        path: '/services/visit/visitor-visas',
      },
    ],
  },
  {
    id: '4',
    title: 'Immigrate',
    items: [
      {
        id: '6',
        label: 'Express Entry Programs',
        path: '/services/immigrate/express-entry',
      },
      {
        id: '7',
        label: 'PNP',
        path: '/services/immigrate/provincial-nominee',
      },
      {
        id: '8',
        label: 'AIP',
        path: '/services/immigrate/atlantic-immigration',
      },
      {
        id: '9',
        label: 'Family Sponsorship',
        path: '/services/immigrate/family-sponsorship',
      },
      {
        id: '10',
        label: 'Business Immigration',
        path: '/services/immigrate/business-immigration',
      },
    ],
  },
  {
    id: '5',
    title: 'Other Services',
    items: [
      {
        id: '11',
        label: 'PR Card & Citizenship',
        path: '/services/other/pr-citizenship',
      },
      {
        id: '12',
        label: 'Appeals / Refugee / H&C',
        path: '/services/other/appeals-refugee',
      },
      {
        id: '13',
        label: 'Review Services (GCMS, NOC, PFL, Refusal)',
        path: '/services/other/review-services',
      },
      {
        id: '14',
        label: 'SOP / DLI Change / Second Opinion',
        path: '/services/other/sop-dli-opinion',
      },
    ],
  },
];

export const nav = {
  id: 1,
  logoTitle: {
    id: 1,
    label: 'Velox',
    href: '/',
    isExternal: false,
    type: 'Primary',
  },
  ctaButton: {
    id: 2,
    label: 'Book Consultation',
    href: '/book-your-appointment',
    isExternal: false,
    type: 'Primary',
  },
  navItem: [
    {
      id: 3,
      label: 'Home',
      href: '/',
      isExternal: false,
      type: 'Primary',
    },
    {
      id: 4,
      label: 'About',
      href: '/about',
      isExternal: false,
      type: 'Primary',
    },
    {
      id: 5,
      label: 'Services',
      href: '/services',
      isExternal: false,
      type: 'Primary',
      hasDropdown: true,
      serviceCategories: localServices,
    },
    {
      id: 6,
      label: 'Contact',
      href: '/contact',
      isExternal: false,
      type: 'Primary',
    },
  ],
};
