import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutPageComponent } from './pages/about-us/about-us.component';
import { ServicesLayoutComponent } from './layout/service-layout.component';
import { PostPageComponent } from './pages/post/post-page.component';
import { StudyComponent } from './pages/services/study.component';
import { WorkComponent } from './pages/services/work.component';
import { VisitorVisaComponent } from './pages/services/visitor-visa.component';
import { LMIAComponent } from './pages/services/lmia.component';
import { ProvincialNomineeComponent } from './pages/services/provincial-nominee.component';
import { ExpressEntryComponent } from './pages/services/express-entry.component';
import { AtlanticImmigrationComponent } from './pages/services/atlantic-immigration.component';
import { BusinessImmigrationComponent } from './pages/services/business-immigration.component';
import { ContactFormComponent } from './pages/contact/contact.component';
import { FamilySponsorshipComponent } from './pages/services/family-sponsorship.component';
import { AppealsRefugeeComponent } from './pages/services/appeals.component';
import { BookYourAppointmentComponent } from './pages/book-your-appointment/book-your-appointment.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { OpenWorkPermitComponent } from './pages/services/open-work-permit.component';
import { PRCitizenshipComponent } from './pages/services/pr-citizenship.component';
import { ReviewServicesComponent } from './pages/services/review-services.component';
import { SopDliOpinionComponent } from './pages/services/sop-dli-opinion.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { DynamicResolverService } from './resolvers/dynamic-resolver.service';
import { postResolver } from './resolvers/post-resolver.service';
import { postsResolver } from './resolvers/posts-resolver.service';
import { PostListComponent } from './pages/post/post-list.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Velox Immigration | Trusted RCIC-Led Canadian Immigration Services',
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
      {
        path: 'study',
        children: [{ path: 'study-in-canada', component: StudyComponent }],
        title: 'Study in Canada | Velox Immigration',
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
          {
            path: 'open-pgwp-permits',
            component: OpenWorkPermitComponent,
            title: 'Open Work Permit | Velox Immigration',
            resolve: {
              data: DynamicResolverService,
            },
            data: {
              collection: 'open_pgwp_permit',
            },
          },
          {
            path: 'lmia-employer-permits',
            component: LMIAComponent,
            title: 'LMIA Employer Permits | Velox Immigration',
            resolve: {
              data: DynamicResolverService,
            },
            data: {
              collection: 'lmia_and_employer_permits',
            },
          },
          {
            path: 'extensions-coop',
            component: WorkComponent,
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
          {
            path: 'visitor-visas',
            component: VisitorVisaComponent,
            resolve: {
              data: DynamicResolverService,
            },
            data: {
              collection: 'visitor_visa',
            },
            title: 'Visitor Visas to Canada | Velox Immigration',
          },
        ],
      },
      {
        path: 'immigrate',
        children: [
          {
            path: 'express-entry',
            component: ExpressEntryComponent,
            resolve: {
              data: DynamicResolverService,
            },
            data: {
              collection: 'express_entry',
            },
            title: 'Express Entry | Velox Immigration',
          },
          {
            path: 'provincial-nominee',
            component: ProvincialNomineeComponent,
            resolve: {
              data: DynamicResolverService,
            },
            data: {
              collection: 'provincial_nominee_program',
            },
            title: 'Provincial Nominee Program | Velox Immigration',
          },
          {
            path: 'atlantic-immigration',
            component: AtlanticImmigrationComponent,
            resolve: {
              data: DynamicResolverService,
            },
            data: {
              collection: 'atlantic_immigration',
            },
            title: 'Atlantic Immigration | Velox Immigration',
          },
          {
            path: 'family-sponsorship',
            component: FamilySponsorshipComponent,
            resolve: {
              data: DynamicResolverService,
            },
            data: {
              collection: 'family_sponsorship',
            },
            title: 'Family Sponsorship | Velox Immigration',
          },
          {
            path: 'business-immigration',
            component: BusinessImmigrationComponent,
            resolve: {
              data: DynamicResolverService,
            },
            data: {
              collection: 'business_immigration',
            },
            title: 'Business Immigration | Velox Immigration',
          },
        ],
      },
      {
        path: 'other',
        children: [
          {
            path: 'pr-citizenship',
            component: PRCitizenshipComponent,
            resolve: {
              data: DynamicResolverService,
            },
            data: {
              collection: 'pr_card_citizenship',
            },
            title: 'Permanent Residency & Citizenship | Velox Immigration',
          },
          {
            path: 'appeals-refugee',
            component: AppealsRefugeeComponent,
            resolve: {
              data: DynamicResolverService,
            },
            data: {
              collection: 'appeals_refugees_hc_cases',
            },
            title: 'Refugee Claims & Appeals | Velox Immigration',
          },
          {
            path: 'review-services',
            component: ReviewServicesComponent,
            resolve: {
              data: DynamicResolverService,
            },
            data: {
              collection: 'application_review',
            },
          },
          {
            path: 'sop-dli-opinion',
            component: SopDliOpinionComponent,
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
