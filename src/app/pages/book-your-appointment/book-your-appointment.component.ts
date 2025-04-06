import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from '../../components/header.component';
import { FooterComponent } from '../../components/footer.component';
import { AppointmentBookingComponent } from '../../components/book-appointment.component';

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
    <section class="min-h-screen bg-gray-50 py-12">
      <!-- Hero Section -->
      <div class="bg-sea-950 text-white py-16 mb-12">
        <div class="container mx-auto px-4">
          <h1 class="text-4xl md:text-5xl mb-4">Book Your Consultation</h1>
          <p class="text-xl opacity-90">
            Take the first step towards your Canadian journey
          </p>
        </div>
      </div>

      <!-- Main Content -->
      <div class="container mx-auto px-4">
        <div
          class="text-gray-700 font-light leading-relaxed max-w-3xl mx-auto mb-12"
        >
          <p class="mb-4">
            This Initial Consultation Agreement is made between the Regulated
            Canadian Immigration Consultant – Anitha Gabriel (RCIC #R1034239)
            and the client. The client agrees to pay the fees indicated in the
            booking tool below for the selected online consultation services.
          </p>

          <p class="mb-4">
            The purpose of the consultation is to provide the consultant with
            sufficient information to allow for a full analysis and
            comprehensive advice on immigration options, including estimated
            time frames, consultation fees and costs.
          </p>

          <p class="mb-4">
            <span class="font-semibold">Client responsibility:</span> Client
            must provide the RCIC with such factual information and
            documentation as are required to perform the consultation. Client
            must be accurate and honest and must inform RCIC of all information,
            even if negative or adverse, which might be relevant to the advice
            provided by RCIC in this matter. Failure to fully disclose all
            relevant information to RCIC will impact the advice given by RCIC
            and may void this Agreement, or seriously affect the outcome of the
            application of Client or the retention of any status that Client may
            obtain.
          </p>

          <p class="mb-4">
            <span class="font-semibold"
              >Advice current on date of consultation:</span
            >
            The advice provided by the RCIC to Client is based on the Canadian
            immigration law and policy current on the date of the consultation
            where relevant. The RCIC is not responsible or accountable for any
            change in government legislation or policy that may impact the
            processing of any subsequent application by Client.
          </p>

          <p class="mb-4">
            <span class="font-semibold">No guarantee on outcome:</span> RCIC
            shall provide consulting services to Client to the standard of a
            competent CICC member. RCIC does not guarantee that she will be able
            to assist Client in meeting his or her business, education,
            employment or immigration goals.
          </p>

          <p class="mb-4">
            <span class="font-semibold">Confidentiality:</span> RCIC is required
            to preserve the confidences and secrets of Client. This professional
            obligation exists to encourage candid and complete communications
            between Client and the RCIC. All information and documentation
            provided by Client and reviewed by the RCIC will not be divulged to
            any third party, other than RCIC's agents and employees, without
            prior consent, except as demanded by law.
          </p>

          <p class="mb-4">
            This agreement shall be governed by the laws in effect in the
            Province of Ontario and the Federal Laws of Canada applicable
            therein.
          </p>

          <p class="mb-4">
            Please be advised that Anitha Gabriel, RCIC #R1034239 is a member in
            good standing of the Immigration Consultants of Canada Regulatory
            Council (ICCRC) and as such is bound by its By-Law, Code of
            Professional Ethics, and Regulations.
          </p>

          <p>
            By paying the fee in the booking tool above the client agrees that
            he/she has read this initial consultation agreement and its clause
            and agreed to the terms and conditions outlined in it.
          </p>
        </div>
        <app-appointment-booking />
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
export class BookYourAppointmentComponent {}
