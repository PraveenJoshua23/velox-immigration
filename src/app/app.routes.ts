import { Routes } from '@angular/router';
// import { MaintenanceComponent } from './pages/maintenance/maintenance.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutPageComponent } from './pages/about-us/about-us.component';
import { ServicesLayoutComponent } from './layout/service-layout.component';
import { ServicePageComponent } from './pages/services/service-page.component';
import { ServiceCategoryComponent } from './pages/services/service-category.component';
import { PostPageComponent } from './pages/post/post-page.component';
import { ContactFormComponent } from './pages/contact/contact.component';
import { BookYourAppointmentComponent } from './pages/book-your-appointment/book-your-appointment.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { DynamicResolverService } from './resolvers/dynamic-resolver.service';
import { postResolver } from './resolvers/post-resolver.service';
import { postsResolver } from './resolvers/posts-resolver.service';
import { PostListComponent } from './pages/post/post-list.component';

export const routes: Routes = [
  // Maintenance mode - all routes redirect to maintenance page
  // {
  //   path: '',
  //   component: MaintenanceComponent,
  //   title: 'Under Maintenance | Velox Immigration',
  // },
  // { path: '**', component: MaintenanceComponent },

  // COMMENTED OUT ROUTES - UNCOMMENT WHEN MAINTENANCE IS COMPLETE
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutPageComponent,
    title: 'About Us | Velox Immigration',
    resolve: {
      data: DynamicResolverService,
    },
    data: {
      collection: 'about_page',
    },
  },
  {
    path: 'contact',
    component: ContactFormComponent,
    title: 'Contact Us | Velox Immigration',
    resolve: {
      data: DynamicResolverService,
    },
    data: {
      collection: 'contact_page',
    },
  },
  {
    path: 'privacy-policy',
    component: PrivacyPolicyComponent,
  },
  {
    path: 'services',
    component: ServicesLayoutComponent,
    children: [
      { path: '', pathMatch: 'full', component: ServiceCategoryComponent },
      {
        path: 'study',
        children: [
          // One service in this category: go straight to it
          { path: '', pathMatch: 'full', redirectTo: 'study-in-canada' },
          { path: 'study-in-canada', component: ServicePageComponent },
        ],
        resolve: {
          data: DynamicResolverService,
        },
        data: {
          collection: 'study_in_canada',
        },
      },
      {
        path: 'work',
        children: [
        { path: '', pathMatch: 'full', component: ServiceCategoryComponent },
          {
            path: 'open-pgwp-permits',
            component: ServicePageComponent,
            resolve: {
              data: DynamicResolverService,
            },
            data: {
              collection: 'open_pgwp_permit',
            },
          },
          {
            path: 'lmia-employer-permits',
            component: ServicePageComponent,
            resolve: {
              data: DynamicResolverService,
            },
            data: {
              collection: 'lmia_and_employer_permits',
            },
          },
          {
            path: 'extensions-coop',
            component: ServicePageComponent,
            resolve: {
              data: DynamicResolverService,
            },
            data: {
              collection: 'extensions_and_coop_permits',
            },
          },
        ],
      },
      {
        path: 'visit',
        children: [
          { path: '', pathMatch: 'full', redirectTo: 'visitor-visas' },
          {
            path: 'visitor-visas',
            component: ServicePageComponent,
            resolve: {
              data: DynamicResolverService,
            },
            data: {
              collection: 'visitor_visa',
            },
          },
        ],
      },
      {
        path: 'immigrate',
        children: [
        { path: '', pathMatch: 'full', component: ServiceCategoryComponent },
          {
            path: 'express-entry',
            component: ServicePageComponent,
            resolve: {
              data: DynamicResolverService,
            },
            data: {
              collection: 'express_entry',
            },
          },
          {
            path: 'provincial-nominee',
            component: ServicePageComponent,
            resolve: {
              data: DynamicResolverService,
            },
            data: {
              collection: 'provincial_nominee_program',
            },
          },
          {
            path: 'atlantic-immigration',
            component: ServicePageComponent,
            resolve: {
              data: DynamicResolverService,
            },
            data: {
              collection: 'atlantic_immigration',
            },
          },
          {
            path: 'family-sponsorship',
            component: ServicePageComponent,
            resolve: {
              data: DynamicResolverService,
            },
            data: {
              collection: 'family_sponsorship',
            },
          },
          {
            path: 'business-immigration',
            component: ServicePageComponent,
            resolve: {
              data: DynamicResolverService,
            },
            data: {
              collection: 'business_immigration',
            },
          },
        ],
      },
      {
        path: 'other',
        children: [
        { path: '', pathMatch: 'full', component: ServiceCategoryComponent },
          {
            path: 'pr-citizenship',
            component: ServicePageComponent,
            resolve: {
              data: DynamicResolverService,
            },
            data: {
              collection: 'pr_card_citizenship',
            },
          },
          {
            path: 'appeals-refugee',
            component: ServicePageComponent,
            resolve: {
              data: DynamicResolverService,
            },
            data: {
              collection: 'appeals_refugees_hc_cases',
            },
          },
          {
            path: 'review-services',
            component: ServicePageComponent,
            resolve: {
              data: DynamicResolverService,
            },
            data: {
              collection: 'application_review',
            },
          },
          {
            path: 'sop-dli-opinion',
            component: ServicePageComponent,
            resolve: {
              data: DynamicResolverService,
            },
            data: {
              collection: 'sop_dli_opinion',
            },
          },
        ],
      },
    ],
  },
  {
    path: 'book-your-appointment',
    component: BookYourAppointmentComponent,
    title: 'Book a Consultation | Velox Immigration',
    resolve: {
      data: DynamicResolverService,
    },
    data: {
      collection: 'book_consultation',
    },
  },
  {
    path: 'blog',
    children: [
      {
        path: 'posts',
        component: PostListComponent,
        resolve: {
          data: postsResolver,
        },
        title: 'Blog Posts | Velox Immigration',
      },
      {
        path: 'posts/:slug',
        component: PostPageComponent,
        resolve: {
          data: postResolver,
        },
        title: 'Blog Post | Velox Immigration',
      },
      {
        path: '',
        redirectTo: 'posts',
        pathMatch: 'full',
      },
    ],
  },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404' },
];
