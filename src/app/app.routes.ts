import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutPageComponent } from './pages/about-us/about-us.component';
import { ServicesLayoutComponent } from './layout/service-layout.component';
import { StudyComponent } from './pages/services/study.component';
import { WorkComponent } from './pages/services/work.component';
import { VisitorVisaComponent } from './pages/services/visitor-visa.component';
import { SuperVisaComponent } from './pages/services/super-visa.component';
import { LMIAComponent } from './pages/services/lmia.component';

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
          // { path: 'express-entry', component: ExpressEntryComponent },
          // { path: 'provincial-nominee', component: ProvincialNomineeComponent },
          // {
          //   path: 'atlantic-immigration',
          //   component: AtlanticImmigrationComponent,
          // },
          // { path: 'family-immigration', component: FamilyImmigrationComponent },
          // {
          //   path: 'business-immigration',
          //   component: BusinessImmigrationComponent,
          // },
        ],
      },
      {
        path: 'additional-services',
        children: [
          // { path: 'pr-card-renewal', component: PRCardRenewalComponent },
          // { path: 'citizenship', component: CitizenshipComponent },
          // { path: 'application-review', component: ApplicationReviewComponent },
          // { path: 'family-sponsorship', component: FamilySponsorshipComponent },
          // {
          //   path: 'appeals-humanitarian',
          //   component: AppealsHumanitarianComponent,
          // },
        ],
      },
    ],
  },
];
