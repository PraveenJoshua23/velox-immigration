import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutPageComponent } from './pages/about-us/about-us.component';
import { ServicesLayoutComponent } from './layout/service-layout.component';
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
import { StudyResolverService } from './resolvers/study-resolver.service';
import { AboutResolverService } from './resolvers/about-resolver.service';
import { DynamicResolverService } from './resolvers/dynamic-resolver.service';

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
          },
          {
            path: 'lmia-employer-permits',
            component: LMIAComponent,
            title: 'LMIA Employer Permits | Velox Immigration',
          },
          { path: 'extensions-coop', component: WorkComponent },
        ],
      },
      {
        path: 'visit',
        children: [{ path: 'visitor-visas', component: VisitorVisaComponent }],
        title: 'Visitor Visas to Canada | Velox Immigration',
      },
      {
        path: 'immigrate',
        children: [
          { path: 'express-entry', component: ExpressEntryComponent },
          { path: 'provincial-nominee', component: ProvincialNomineeComponent },
          {
            path: 'atlantic-immigration',
            component: AtlanticImmigrationComponent,
          },
          { path: 'family-sponsorship', component: FamilySponsorshipComponent },
          {
            path: 'business-immigration',
            component: BusinessImmigrationComponent,
          },
        ],
      },
      {
        path: 'other',
        children: [
          { path: 'pr-citizenship', component: PRCitizenshipComponent },
          { path: 'appeals-refugee', component: AppealsRefugeeComponent },
          { path: 'review-services', component: ReviewServicesComponent },
          { path: 'sop-dli-opinion', component: SopDliOpinionComponent },
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
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404' },
];
