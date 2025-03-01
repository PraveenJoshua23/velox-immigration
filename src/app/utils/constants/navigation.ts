export const localServices = [
  {
    id: '1',
    title: 'Temporary Services',
    items: [
      {
        id: '1',
        label: 'Study in Canada',
        path: '/services/temporary-services/study',
      },
      {
        id: '2',
        label: 'Work in Canada',
        path: '/services/temporary-services/work',
      },
      {
        id: '3',
        label: 'Visitor Visa',
        path: '/services/temporary-services/visitor-visa',
      },
      {
        id: '4',
        label: 'Parent/Grandparent Super Visa',
        path: '/services/temporary-services/super-visa',
      },
      {
        id: '5',
        label: 'Labour Market Impact Assessment',
        path: '/services/temporary-services/lmia',
      },
    ],
  },
  {
    id: '2',
    title: 'Permanent Residency',
    items: [
      {
        id: '6',
        label: 'Express Entry',
        path: '/services/permanent-residency/express-entry',
      },
      {
        id: '7',
        label: 'Provincial Nominee Program',
        path: '/services/permanent-residency/provincial-nominee',
      },
      {
        id: '8',
        label: 'Atlantic Immigration Program',
        path: '/services/permanent-residency/atlantic-immigration',
      },
      {
        id: '9',
        label: 'Family Immigration',
        path: '/services/permanent-residency/family-immigration',
      },
      {
        id: '10',
        label: 'Business Immigration',
        path: '/services/permanent-residency/business-immigration',
      },
    ],
  },
  {
    id: '3',
    title: 'Additional Services',
    items: [
      {
        id: '11',
        label: 'PR Card Renewal',
        path: '/services/additional-services/pr-card-renewal',
      },
      {
        id: '12',
        label: 'Citizenship Applications',
        path: '/services/additional-services/citizenship',
      },
      {
        id: '13',
        label: 'Application Review',
        path: '/services/additional-services/application-review',
      },
      {
        id: '14',
        label: 'Family Sponsorship',
        path: '/services/additional-services/family-sponsorship',
      },
      {
        id: '15',
        label: 'Appeals & Humanitarian',
        path: '/services/additional-services/appeals',
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
    label: 'Book Your Appointment',
    href: '/contact',
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
