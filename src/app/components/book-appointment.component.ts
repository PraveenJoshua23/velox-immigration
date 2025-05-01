// appointment-booking.component.ts
import { Component, signal, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormsModule,
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { RouterModule } from '@angular/router';

interface Consultation {
  id: string;
  duration: string;
  title: string;
  description: string;
  price: string;
  color: string;
  link: string;
}

interface TimeSlot {
  time: string;
  available: boolean;
}

interface CalendarDay {
  date: number;
  available: boolean;
  month?: number;
  year?: number;
}

@Component({
  selector: 'app-appointment-booking',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule],
  template: ` <div class=" bg-gray-50 py-8">
    <div class="max-w-4xl mx-auto">
      <h1 class="text-2xl font-semibold text-center mb-8">
        {{ content.link_heading }}
      </h1>

      <div class="bg-white rounded-lg shadow-lg overflow-hidden">
        <div>
          <div class="p-6 border-b">
            <div class="flex justify-center mb-8">
              <img src="assets/images/logo.svg" alt="Ask Anitha" class="h-16" />
            </div>

            <div class="text-center mb-8">
              <h2 class="text-xl font-medium text-gray-700">
                Anitha Gabriel - CICC Licensed Consultant
              </h2>
              <p class="text-gray-600 mt-4">
                Please choose from the options below to book your consultation.
              </p>
            </div>
          </div>

          <div class="p-6">
            <div
              [ngClass]="[
                'grid grid-cols-1 md:grid-cols-2 gap-6',
                content?.booking_links?.length === 1
                  ? 'md:grid-cols-1 max-w-md mx-auto'
                  : ''
              ]"
            >
              <div
                *ngFor="let consultation of content?.booking_links"
                class="p-6 border rounded-lg cursor-pointer transition hover:shadow-md"
                (click)="selectConsultation(consultation.booking_calendly_link)"
              >
                <div class="flex items-start gap-4">
                  <div
                    [class]="
                      'rounded-full w-10 h-10 flex items-center justify-center shrink-0 bg-indigo-500 text-white'
                    "
                  ></div>
                  <div class="flex-1">
                    <h3 class="text-lg font-semibold text-gray-800">
                      {{ consultation.booking_title }}
                    </h3>
                    <p class="text-gray-600 font-light text-sm my-3">
                      {{ consultation.booking_description }}
                    </p>
                    <div class="flex items-center gap-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5 text-gray-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <span class="text-gray-700">{{
                        consultation.booking_duration
                      }}</span>
                    </div>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`,
  styles: [],
})
export class AppointmentBookingComponent {
  @Input() content: any;
  // Consultation Options
  consultations = signal<Consultation[]>([
    {
      id: '30min',
      duration: '30 min',
      title: '30minute - Virtual Consultation with Anitha',
      description:
        'Anitha Gabriel is a Regulated Canadian Immigration Consultant. Her license number is R706180 Her areas of expertise include Express Entry, Economic a...',
      price: '$75 CAD',
      color: 'bg-indigo-500 text-white',
      link: 'https://calendly.com/admin-veloximmigration/30-minute-meeting-w-rcic',
    },
  ]);

  // Selection Handlers
  selectConsultation(link: string): void {
    window.location.href = link;
  }
}
