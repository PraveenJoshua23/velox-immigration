import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../components/header.component';
import { FooterComponent } from '../components/footer.component';

@Component({
  selector: 'app-services-layout',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  template: `
    <app-header />
    <main>
      <router-outlet />
    </main>
    <!-- Each service page ends with its own CTA -->
    <app-footer [hideContactBanner]="true" />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServicesLayoutComponent {}
