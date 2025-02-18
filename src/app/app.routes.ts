import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutPageComponent } from './pages/about-us/about-us.component';
import { ServicesLayoutComponent } from './layout/service-layout.component';
import { StudyComponent } from './pages/services/study.component';
import { WorkComponent } from './pages/services/work.component';
import { VisitorVisaComponent } from './pages/services/visitor-visa.component';
import { SuperVisaComponent } from './pages/services/super-visa.component';
import { LMIAComponent } from './pages/services/lmia.component';
import { ProvincialNomineeComponent } from './pages/services/provincial-nominee.component';
import { ExpressEntryComponent } from './pages/services/express-entry.component';
import { AtlanticImmigrationComponent } from './pages/services/atlantic-immigration.component';
import { FamilyImmigrationComponent } from './pages/services/family-immigration.component';
import { BusinessImmigrationComponent } from './pages/services/business-immigration.component';
import { ContactFormComponent } from './pages/contact/contact.component';
import { PRCardRenewalComponent } from './pages/services/pr-card-renewal.component';
import { CitizenshipComponent } from './pages/services/citizenship.component';
import { ApplicationReviewComponent } from './pages/services/application-review.component';
import { FamilySponsorshipComponent } from './pages/services/family-sponsorship.component';
import { AppealsHumanitarianComponent } from './pages/services/appeals.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutPageComponent,
  },
  {
    path: 'contact',
    component: ContactFormComponent,
  },
  {
    path: 'services',
    component: ServicesLayoutComponent,
    children: [
      {
        path: 'temporary-services',
        children: [
          { path: 'study', component: StudyComponent },
          { path: 'work', component: WorkComponent },
          { path: 'visitor-visa', component: VisitorVisaComponent },
          { path: 'super-visa', component: SuperVisaComponent },
          { path: 'lmia', component: LMIAComponent },
        ],
      },
      {
        path: 'permanent-residency',
        children: [
          { path: 'express-entry', component: ExpressEntryComponent },
          { path: 'provincial-nominee', component: ProvincialNomineeComponent },
          {
            path: 'atlantic-immigration',
            component: AtlanticImmigrationComponent,
          },
          { path: 'family-immigration', component: FamilyImmigrationComponent },
          {
            path: 'business-immigration',
            component: BusinessImmigrationComponent,
          },
        ],
      },
      {
        path: 'additional-services',
        children: [
          { path: 'pr-card-renewal', component: PRCardRenewalComponent },
          { path: 'citizenship', component: CitizenshipComponent },
          { path: 'application-review', component: ApplicationReviewComponent },
          { path: 'family-sponsorship', component: FamilySponsorshipComponent },
          {
            path: 'appeals-humanitarian',
            component: AppealsHumanitarianComponent,
          },
        ],
      },
    ],
  },
];
