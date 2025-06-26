import { CommonModule } from '@angular/common';
import { Component, PLATFORM_ID, Inject, signal } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from '../../components/header.component';
import { FooterComponent } from '../../components/footer.component';
import { AppointmentBookingComponent } from '../../components/book-appointment.component';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-book-appointment',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HeaderComponent,
    FooterComponent,
    AppointmentBookingComponent,
  ],
  template: `
    <app-header />
    <section class="min-h-screen bg-gray-50">
      <!-- Hero Section -->
      <div class="bg-sea-950 text-white py-16 mb-12">
        <div class="container mx-auto px-4">
          <h1 class="text-4xl md:text-5xl mb-4">Book Your Consultation</h1>
          <p class="text-xl opacity-90">
            {{ content.page_subtitle }}
          </p>
        </div>
      </div>

      <!-- Main Content -->
      <div class="container mx-auto px-4">
        <!-- Disclaimer Dialog -->
        @if(showDisclaimer()) {
        <div
          class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
        >
          <div
            class="bg-white rounded-lg shadow-xl max-w-3xl w-full max-h-[80vh] flex flex-col"
          >
            <div class="p-6 overflow-y-auto">
              <h2 class="text-2xl font-semibold mb-4">Important Disclaimer</h2>
              <div
                class="text-gray-700 font-light prose max-w-none leading-relaxed"
                [innerHTML]="safeDisclaimerContent"
              ></div>
            </div>
            <div class="border-t p-4 flex justify-end">
              <button
                (click)="acceptDisclaimer()"
                class="px-6 py-2 bg-sea-600 hover:bg-sea-700 text-white rounded-md transition-colors"
              >
                I Accept
              </button>
            </div>
          </div>
        </div>
        }

        <!-- Disclaimer content (visible after acceptance) -->
        <!-- <div
          *ngIf="!showDisclaimer"
          class="text-gray-700 font-light leading-relaxed max-w-3xl mx-auto mb-12"
          [innerHTML]="safeDisclaimerContent"
        ></div> -->
        <app-appointment-booking [content]="content" />
      </div>
    </section>
    <app-footer [hideContactBanner]="true" />
  `,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
})
export class BookYourAppointmentComponent {
  content: any;
  safeDisclaimerContent!: SafeHtml;
  showDisclaimer = signal(true);

  constructor(
    private activatedRoute: ActivatedRoute,
    private route: Router,
    private sanitizer: DomSanitizer,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.activatedRoute.data.subscribe((response: any) => {
      this.content = response.data.data[0];

      // Sanitize the HTML content to avoid warnings
      if (this.content && this.content.disclaimer_content) {
        this.safeDisclaimerContent = this.sanitizer.bypassSecurityTrustHtml(
          this.content.disclaimer_content
        );
      }

      // if (
      //   this.content.status === 'draft' ||
      //   this.content.status === 'archived'
      // ) {
      //   this.route.navigate(['/']);
      // }
    });
  }

  acceptDisclaimer(): void {
    this.showDisclaimer.set(false);
  }
}
