// appointment-booking.component.ts
import { Component, signal, OnInit } from '@angular/core';
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
  template: ` <div class="min-h-screen bg-gray-50 py-8">
    <div class="max-w-4xl mx-auto">
      <h1 class="text-2xl font-semibold text-center mb-8">
        To book an appointment with Anitha Gabriel – Please use the below links
      </h1>
      <!-- Booking Progress -->
      <!-- <div class="flex justify-center mb-8">
        <div class="flex items-center">
          <div
            [class]="
              'rounded-full w-10 h-10 flex items-center justify-center ' +
              (currentStep() >= 1
                ? 'bg-blue-600 text-white'
                : 'bg-gray-300 text-gray-600')
            "
          >
            1
          </div>
          <div
            [class]="
              'h-1 w-16 ' + (currentStep() >= 2 ? 'bg-blue-600' : 'bg-gray-300')
            "
          ></div>
          <div
            [class]="
              'rounded-full w-10 h-10 flex items-center justify-center ' +
              (currentStep() >= 2
                ? 'bg-blue-600 text-white'
                : 'bg-gray-300 text-gray-600')
            "
          >
            2
          </div>
          <div
            [class]="
              'h-1 w-16 ' + (currentStep() >= 3 ? 'bg-blue-600' : 'bg-gray-300')
            "
          ></div>
          <div
            [class]="
              'rounded-full w-10 h-10 flex items-center justify-center ' +
              (currentStep() >= 3
                ? 'bg-blue-600 text-white'
                : 'bg-gray-300 text-gray-600')
            "
          >
            3
          </div>
        </div>
      </div> -->

      <div class="bg-white rounded-lg shadow-lg overflow-hidden">
        <!-- Step 1: Select Consultation Type -->
        <div *ngIf="currentStep() === 1">
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
            <div class="grid grid-cols-2 gap-6">
              <div
                *ngFor="let consultation of consultations()"
                [class]="
                  'p-6 border rounded-lg cursor-pointer transition hover:shadow-md ' +
                  (selectedConsultation() === consultation.id
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200')
                "
                (click)="selectConsultation(consultation.id)"
              >
                <div class="flex items-start gap-4">
                  <div
                    [class]="
                      'rounded-full w-10 h-10 flex items-center justify-center shrink-0 ' +
                      consultation.color
                    "
                  ></div>
                  <div class="flex-1">
                    <h3 class="text-lg font-semibold text-gray-800">
                      {{ consultation.title }}
                    </h3>
                    <p class="text-gray-600 font-light text-sm my-3">
                      {{ consultation.description }}
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
                        consultation.duration
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

        <!-- Step 2: Select Date and Time -->
        <div
          *ngIf="currentStep() === 2"
          class="grid grid-cols-1 md:grid-cols-2"
        >
          <div class="p-6 border-r border-gray-200">
            <div class="flex items-center justify-between mb-6">
              <button
                (click)="goBack()"
                class="text-blue-600 flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <div>
                <img
                  src="assets/images/logo.svg"
                  alt="Ask Anitha"
                  class="h-16"
                />
              </div>
              <div></div>
              <!-- Empty div for flex spacing -->
            </div>

            <div class="mt-8">
              <!-- <div class="mb-8">
                <img
                  src="assets/images/logo-small.svg"
                  alt="Ask Anitha Small"
                  class="h-10"
                />
              </div> -->

              <h2 class="text-gray-700 text-lg font-medium">
                Anitha Gabriel - CICC Licensed Consultant
              </h2>
              <h3 class="text-2xl font-bold text-gray-900 mt-4">
                {{ getSelectedConsultation()?.title }}
              </h3>

              <div class="flex items-center gap-2 mt-4">
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
                <span class="text-gray-600">{{
                  getSelectedConsultation()?.duration
                }}</span>
              </div>

              <div class="flex items-center gap-2 mt-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 text-gray-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="text-gray-600"
                  >Web conferencing details provided upon confirmation.</span
                >
              </div>

              <div
                *ngIf="getSelectedConsultation()?.price"
                class="flex items-center gap-2 mt-4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 text-gray-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="text-gray-600">{{
                  getSelectedConsultation()?.price
                }}</span>
              </div>

              <div
                *ngIf="selectedDate() && selectedTime()"
                class="flex items-center gap-2 mt-4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 text-gray-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="text-gray-600">
                  {{ selectedTime() }} - {{ getEndTime() }},
                  {{ selectedDate() | date : 'EEEE, MMMM d' }}
                </span>
              </div>

              <!-- <div class="mt-8 text-center">
                <button
                  class="text-blue-600 cursor-pointer"
                  (click)="resetTimeSelection()"
                >
                  Cookie settings
                </button>
              </div> -->
            </div>
          </div>

          <div class="p-6">
            <h2 class="text-2xl font-semibold mb-8">Select a Date & Time</h2>

            <!-- Calendar Navigation -->
            <div class="flex items-center justify-between mb-6">
              <button
                class="text-gray-600 hover:text-gray-900"
                (click)="previousMonth()"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <h3 class="text-xl font-medium">
                {{ currentDate() | date : 'MMMM yyyy' }}
              </h3>
              <button
                class="text-gray-600 hover:text-gray-900"
                (click)="nextMonth()"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
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
              </button>
            </div>

            <!-- Calendar -->
            <div class="mb-8">
              <!-- Days of Week -->
              <div class="grid grid-cols-7 gap-1 text-center mb-2">
                <div class="text-gray-600 font-medium">MON</div>
                <div class="text-gray-600 font-medium">TUE</div>
                <div class="text-gray-600 font-medium">WED</div>
                <div class="text-gray-600 font-medium">THU</div>
                <div class="text-gray-600 font-medium">FRI</div>
                <div class="text-gray-600 font-medium">SAT</div>
                <div class="text-gray-600 font-medium">SUN</div>
              </div>

              <!-- Calendar Days -->
              <div class="grid grid-cols-7 gap-1">
                <ng-container *ngFor="let day of calendarDays()">
                  <div *ngIf="day.date === 0" class="h-10"></div>
                  <div
                    *ngIf="day.date !== 0"
                    [class]="
                      'h-10 w-10 rounded-full flex items-center justify-center mx-auto ' +
                      (day.available
                        ? 'cursor-pointer hover:bg-blue-100 '
                        : 'text-gray-400 ') +
                      (selectedDate() && selectedDate()
                        ? isSameDay(selectedDate()!, createDateFromDay(day))
                        : false
                        ? 'bg-blue-600 text-white'
                        : '')
                    "
                    (click)="
                      day.available && selectDate(createDateFromDay(day))
                    "
                  >
                    {{ day.date }}
                    <div
                      *ngIf="day.date === 19"
                      class="absolute -mb-10 text-xs"
                    >
                      •
                    </div>
                  </div>
                </ng-container>
              </div>
            </div>

            <!-- Time Zone -->
            <div class="mb-6">
              <h4 class="text-gray-700 font-medium mb-2">Time zone</h4>
              <div class="relative">
                <select
                  class="w-full p-3 border rounded-lg bg-white appearance-none pr-10"
                >
                  <option>India Standard Time</option>
                </select>
                <div
                  class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 text-gray-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <!-- Time Slots -->
            <div *ngIf="selectedDate()">
              <h3 class="text-lg font-medium mb-4">
                {{ selectedDate() | date : 'EEEE, MMMM d' }}
              </h3>
              <div class="grid grid-cols-4 gap-3">
                <button
                  *ngFor="let slot of availableTimeSlots()"
                  [class]="
                    'p-3 border rounded-lg text-center ' +
                    (selectedTime() === slot.time
                      ? 'bg-gray-700 text-white'
                      : 'bg-white hover:bg-blue-50 text-blue-600')
                  "
                  (click)="selectTime(slot.time)"
                >
                  {{ slot.time }}
                </button>

                <button
                  *ngIf="selectedTime()"
                  class="mt-4 p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                  (click)="nextStep()"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Step 3: Enter Details -->
        <div
          *ngIf="currentStep() === 3"
          class="grid grid-cols-1 md:grid-cols-2"
        >
          <div class="p-6 border-r border-gray-200">
            <div class="flex items-center justify-between mb-6">
              <button
                (click)="goBack()"
                class="text-blue-600 flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <div>
                <img
                  src="assets/images/logo.svg"
                  alt="Ask Anitha"
                  class="h-16"
                />
              </div>
              <div></div>
              <!-- Empty div for flex spacing -->
            </div>

            <div class="mt-8">
              <!-- <div class="mb-8">
                <img
                  src="assets/images/logo-small.svg"
                  alt="Ask Anitha Small"
                  class="h-10"
                />
              </div> -->

              <h2 class="text-gray-700 text-lg font-medium">
                Anitha Gabriel - CICC Licensed Consultant
              </h2>
              <h3 class="text-2xl font-bold text-gray-900 mt-4">
                {{ getSelectedConsultation()?.title }}
              </h3>

              <div class="flex items-center gap-2 mt-4">
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
                <span class="text-gray-600">{{
                  getSelectedConsultation()?.duration
                }}</span>
              </div>

              <div class="flex items-center gap-2 mt-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 text-gray-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="text-gray-600"
                  >Web conferencing details provided upon confirmation.</span
                >
              </div>

              <div
                *ngIf="getSelectedConsultation()?.price"
                class="flex items-center gap-2 mt-4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 text-gray-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="text-gray-600">{{
                  getSelectedConsultation()?.price
                }}</span>
              </div>

              <div
                *ngIf="selectedDate() && selectedTime()"
                class="flex items-center gap-2 mt-4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 text-gray-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="text-gray-600">
                  {{ selectedTime() }} - {{ getEndTime() }},
                  {{ selectedDate() | date : 'EEEE, MMMM d' }}
                </span>
              </div>

              <!-- <div class="mt-8 text-center">
                <button
                  class="text-blue-600 cursor-pointer"
                  (click)="resetTimeSelection()"
                >
                  Cookie settings
                </button>
              </div> -->
            </div>
          </div>

          <div class="p-6">
            <h2 class="text-2xl font-semibold mb-8">Enter Details</h2>

            <form [formGroup]="bookingForm" (ngSubmit)="submitBooking()">
              <!-- Name -->
              <div class="mb-6">
                <label class="block text-gray-700 mb-2">
                  Name <span class="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  formControlName="name"
                  class="w-full p-3 border rounded-lg"
                  [class.border-red-500]="
                    formSubmitted && bookingForm.get('name')?.invalid
                  "
                />
                <div
                  *ngIf="
                    formSubmitted &&
                    bookingForm.get('name')?.hasError('required')
                  "
                  class="text-red-500 text-sm mt-1"
                >
                  Name is required
                </div>
              </div>

              <!-- Email -->
              <div class="mb-6">
                <label class="block text-gray-700 mb-2">
                  Email <span class="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  formControlName="email"
                  class="w-full p-3 border rounded-lg"
                  [class.border-red-500]="
                    formSubmitted && bookingForm.get('email')?.invalid
                  "
                />
                <div
                  *ngIf="
                    formSubmitted &&
                    bookingForm.get('email')?.hasError('required')
                  "
                  class="text-red-500 text-sm mt-1"
                >
                  Email is required
                </div>
                <div
                  *ngIf="
                    formSubmitted && bookingForm.get('email')?.hasError('email')
                  "
                  class="text-red-500 text-sm mt-1"
                >
                  Please enter a valid email
                </div>
              </div>

              <!-- Add Guests Button -->
              <div class="mb-6">
                <button
                  type="button"
                  class="border border-blue-600 text-blue-600 rounded-full px-4 py-2 hover:bg-blue-50"
                >
                  Add Guests
                </button>
              </div>

              <!-- Phone -->
              <div class="mb-6">
                <label class="block text-gray-700 mb-2">
                  Please insert your country code and phone number
                  <span class="text-red-500">*</span>
                </label>
                <div class="relative">
                  <div
                    class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
                  >
                    <img
                      src="assets/images/flag-india.svg"
                      alt="India Flag"
                      class="h-5 w-7"
                    />
                  </div>
                  <input
                    type="tel"
                    formControlName="phone"
                    class="w-full p-3 pl-12 border rounded-lg"
                    [class.border-red-500]="
                      formSubmitted && bookingForm.get('phone')?.invalid
                    "
                  />
                </div>
                <div
                  *ngIf="
                    formSubmitted &&
                    bookingForm.get('phone')?.hasError('required')
                  "
                  class="text-red-500 text-sm mt-1"
                >
                  Phone number is required
                </div>
              </div>

              <!-- Notes -->
              <div class="mb-6">
                <label class="block text-gray-700 mb-2">
                  Please add your note to Anitha.
                  <span class="text-red-500">*</span>
                </label>
                <textarea
                  formControlName="notes"
                  rows="4"
                  class="w-full p-3 border rounded-lg"
                  [class.border-red-500]="
                    formSubmitted && bookingForm.get('notes')?.invalid
                  "
                ></textarea>
                <div
                  *ngIf="
                    formSubmitted &&
                    bookingForm.get('notes')?.hasError('required')
                  "
                  class="text-red-500 text-sm mt-1"
                >
                  Note is required
                </div>
              </div>

              <!-- Referral Source -->
              <div class="mb-8">
                <label class="block text-gray-700 mb-2">
                  Where did you hear about us?
                  <span class="text-red-500">*</span>
                </label>
                <div class="flex items-center gap-2 mb-2">
                  <input
                    type="checkbox"
                    id="source-youtube"
                    formControlName="sourceYoutube"
                    class="h-5 w-5"
                  />
                  <label for="source-youtube" class="text-gray-700"
                    >YouTube</label
                  >
                </div>
                <div class="flex items-center gap-2 mb-2">
                  <input
                    type="checkbox"
                    id="source-instagram"
                    formControlName="sourceInstagram"
                    class="h-5 w-5"
                  />
                  <label for="source-instagram" class="text-gray-700"
                    >Instagram</label
                  >
                </div>
                <div class="flex items-center gap-2 mb-2">
                  <input
                    type="checkbox"
                    id="source-facebook"
                    formControlName="sourceFacebook"
                    class="h-5 w-5"
                  />
                  <label for="source-facebook" class="text-gray-700"
                    >Facebook</label
                  >
                </div>
                <div class="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="source-friend"
                    formControlName="sourceFriend"
                    class="h-5 w-5"
                  />
                  <label for="source-friend" class="text-gray-700"
                    >Friend</label
                  >
                </div>
                <div
                  *ngIf="formSubmitted && !isReferralSourceSelected()"
                  class="text-red-500 text-sm mt-1"
                >
                  Please select at least one source
                </div>
              </div>

              <button
                type="submit"
                class="w-full p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                Book Appointment
              </button>
            </form>
          </div>
        </div>

        <!-- Success Message - Step 4 -->
        <div *ngIf="currentStep() === 4" class="p-8 text-center">
          <div
            class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8 text-green-600"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </div>

          <h2 class="text-2xl font-semibold text-gray-900 mb-4">
            Appointment Booked!
          </h2>
          <p class="text-gray-600 mb-8 max-w-md mx-auto">
            Your consultation with Anitha Gabriel has been confirmed. You will
            receive a confirmation email with details shortly.
          </p>

          <div class="max-w-md mx-auto bg-blue-50 p-6 rounded-lg mb-8">
            <div class="flex items-center gap-3 mb-4">
              <!-- <img
                src="assets/images/logo-small.svg"
                alt="Ask Anitha Small"
                class="h-8"
              /> -->
              <h3 class="text-lg font-medium text-gray-800">
                {{ getSelectedConsultation()?.title }}
              </h3>
            </div>

            <div class="flex items-center gap-2 mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-gray-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clip-rule="evenodd"
                />
              </svg>
              <span class="text-gray-700">
                {{ selectedTime() }} - {{ getEndTime() }},
                {{ selectedDate() | date : 'EEEE, MMMM d, yyyy' }}
              </span>
            </div>

            <div class="flex items-center gap-2 mb-3">
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
                getSelectedConsultation()?.duration
              }}</span>
            </div>

            <div class="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-gray-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                  clip-rule="evenodd"
                />
              </svg>
              <span class="text-gray-700"
                >Web conference - details sent to your email</span
              >
            </div>
          </div>

          <div class="flex justify-center gap-4">
            <button
              class="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
              (click)="addToCalendar()"
            >
              Add to Calendar
            </button>
            <button
              class="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              routerLink="/"
            >
              Return to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>`,
  styles: [],
})
export class AppointmentBookingComponent implements OnInit {
  // State Management
  currentStep = signal(1);
  selectedConsultation = signal<string>('');
  currentDate = signal<Date>(new Date());
  selectedDate = signal<Date | null>(null);
  selectedTime = signal<string>('');
  calendarDays = signal<CalendarDay[]>([]);
  bookingForm: FormGroup;
  formSubmitted = false;

  constructor(private fb: FormBuilder) {
    this.bookingForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      notes: ['', Validators.required],
      sourceYoutube: [false],
      sourceInstagram: [false],
      sourceFacebook: [false],
      sourceFriend: [false],
    });
  }

  ngOnInit(): void {
    this.generateCalendarDays();
  }

  // Consultation Options
  consultations = signal<Consultation[]>([
    {
      id: '20min',
      duration: '20 min',
      title: '20Minute - Virtual Consultation with Anitha',
      description:
        'Anitha Gabriel is a Regulated Canadian Immigration Consultant. Her license number is R706180 Her areas of expertise include Express Entry, Economic a...',
      price: '$215 CAD',
      color: 'bg-amber-500 text-white',
    },
    {
      id: '40min',
      duration: '40 min',
      title: '40minute - Virtual Consultation with Anitha',
      description:
        'Anitha Gabriel is a Regulated Canadian Immigration Consultant. Her license number is R706180 Her areas of expertise include Express Entry, Economic a...',
      price: '$375 CAD',
      color: 'bg-indigo-500 text-white',
    },
    {
      id: '60min',
      duration: '60 min',
      title: '60minute - Virtual Consultation with Anitha',
      description:
        'Anitha Gabriel is a Regulated Canadian Immigration Consultant. Her license number is R706180 Her areas of expertise include Economic and Business Imm...',
      price: '$525 CAD',
      color: 'bg-green-500 text-white',
    },
    {
      id: 'inperson',
      duration: '60 min',
      title: 'In-person consultation with Anitha (60 Minutes)',
      description:
        'Anitha Gabriel is a Regulated Canadian Immigration Consultant. Her license number is R706180 Anitha Gabriel (Kamal Lalwani) is a Regulated Canadian Im...',
      price: '$750 CAD',
      color: 'bg-yellow-500 text-white',
    },
  ]);

  // Time Slots Management
  availableTimeSlots = signal<TimeSlot[]>([
    { time: '12:10am', available: true },
    { time: '1:10am', available: true },
    { time: '1:30am', available: true },
    { time: '1:50am', available: true },
    { time: '9:10pm', available: true },
    { time: '9:50pm', available: true },
    { time: '10:10pm', available: true },
  ]);

  // Calendar Management
  generateCalendarDays(): void {
    const currentYear = this.currentDate().getFullYear();
    const currentMonth = this.currentDate().getMonth();

    const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
    const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);

    const daysInMonth = lastDayOfMonth.getDate();
    const startDay =
      firstDayOfMonth.getDay() === 0 ? 6 : firstDayOfMonth.getDay() - 1; // Adjust for Monday start

    const days: CalendarDay[] = [];

    // Empty cells for days before first day of month
    for (let i = 0; i < startDay; i++) {
      days.push({ date: 0, available: false });
    }

    // Actual days of the month
    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(currentYear, currentMonth, i);
      const available = this.isAvailableDate(date);
      days.push({
        date: i,
        available,
        month: currentMonth,
        year: currentYear,
      });
    }

    this.calendarDays.set(days);
  }

  isAvailableDate(date: Date): boolean {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const dateToCheck = new Date(date);
    dateToCheck.setHours(0, 0, 0, 0);

    // Mark current date + next 10 days as available for simplicity
    const maxDate = new Date(today);
    maxDate.setDate(maxDate.getDate() + 10);

    // Weekends not available
    const day = dateToCheck.getDay();
    if (day === 0 || day === 6) {
      return false;
    }

    return dateToCheck >= today && dateToCheck <= maxDate;
  }

  isSameDay(date1: Date, date2: Date): boolean {
    return (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()
    );
  }

  createDateFromDay(day: CalendarDay): Date {
    if (day.year !== undefined && day.month !== undefined) {
      return new Date(day.year, day.month, day.date);
    }
    return new Date(
      this.currentDate().getFullYear(),
      this.currentDate().getMonth(),
      day.date
    );
  }

  nextMonth(): void {
    const nextMonth = new Date(this.currentDate());
    nextMonth.setMonth(nextMonth.getMonth() + 1);
    this.currentDate.set(nextMonth);
    this.generateCalendarDays();
  }

  previousMonth(): void {
    const prevMonth = new Date(this.currentDate());
    prevMonth.setMonth(prevMonth.getMonth() - 1);

    // Don't allow going to past months
    const today = new Date();
    if (
      prevMonth.getFullYear() < today.getFullYear() ||
      (prevMonth.getFullYear() === today.getFullYear() &&
        prevMonth.getMonth() < today.getMonth())
    ) {
      return;
    }

    this.currentDate.set(prevMonth);
    this.generateCalendarDays();
  }

  // Step Management
  nextStep(): void {
    this.currentStep.update((step) => step + 1);
  }

  goBack(): void {
    this.currentStep.update((step) => Math.max(1, step - 1));
  }

  // Selection Handlers
  selectConsultation(id: string): void {
    this.selectedConsultation.set(id);
    this.nextStep();
  }

  selectDate(date: Date): void {
    this.selectedDate.set(date);
    this.selectedTime.set('');
  }

  selectTime(time: string): void {
    this.selectedTime.set(time);
  }

  resetTimeSelection(): void {
    this.selectedTime.set('');
  }

  // Helpers
  getSelectedConsultation(): Consultation | undefined {
    return this.consultations().find(
      (c) => c.id === this.selectedConsultation()
    );
  }

  getEndTime(): string {
    if (!this.selectedTime()) return '';

    const [timeStr, ampm] = this.selectedTime().split(/(?=[ap]m)/);
    let [hour, minute] = timeStr.split(':');

    // Convert to 24 hour format
    let hourNum = parseInt(hour);
    if (ampm.toLowerCase() === 'pm' && hourNum < 12) {
      hourNum += 12;
    } else if (ampm.toLowerCase() === 'am' && hourNum === 12) {
      hourNum = 0;
    }

    // Calculate end time based on duration
    const selectedConsultation = this.getSelectedConsultation();
    if (!selectedConsultation) return '';

    const durationInMinutes = parseInt(
      selectedConsultation.duration.split(' ')[0]
    );
    const minuteNum = parseInt(minute);

    let endHour = hourNum + Math.floor((minuteNum + durationInMinutes) / 60);
    const endMinute = (minuteNum + durationInMinutes) % 60;

    // Convert back to 12-hour format
    let endAmPm = 'am';
    if (endHour >= 12) {
      endAmPm = 'pm';
      if (endHour > 12) {
        endHour -= 12;
      }
    }
    if (endHour === 0) {
      endHour = 12;
    }

    return `${endHour}:${endMinute.toString().padStart(2, '0')}${endAmPm}`;
  }

  isReferralSourceSelected(): boolean {
    return (
      this.bookingForm.get('sourceYoutube')?.value ||
      this.bookingForm.get('sourceInstagram')?.value ||
      this.bookingForm.get('sourceFacebook')?.value ||
      this.bookingForm.get('sourceFriend')?.value
    );
  }

  // Form Submission
  submitBooking(): void {
    this.formSubmitted = true;

    if (this.bookingForm.valid && this.isReferralSourceSelected()) {
      // Here you would typically call a service to submit the booking
      console.log('Booking submitted:', {
        consultation: this.getSelectedConsultation(),
        date: this.selectedDate(),
        time: this.selectedTime(),
        formData: this.bookingForm.value,
      });

      // Move to success page
      this.nextStep();
    } else {
      // Scroll to first invalid field
      const invalidControls = document.querySelectorAll('.ng-invalid');
      if (invalidControls.length > 0) {
        (invalidControls[0] as HTMLElement).scrollIntoView({
          behavior: 'smooth',
        });
      }
    }
  }

  // Additional Features
  addToCalendar(): void {
    if (!this.selectedDate() || !this.selectedTime()) return;

    const consultation = this.getSelectedConsultation();
    if (!consultation) return;

    const startDate = new Date(this.selectedDate() as Date);
    const [startTimeStr, startAmPm] = this.selectedTime().split(/(?=[ap]m)/);
    let [startHour, startMinute] = startTimeStr.split(':');

    // Convert to 24-hour format for calendar
    let startHourNum = parseInt(startHour);
    if (startAmPm.toLowerCase() === 'pm' && startHourNum < 12) {
      startHourNum += 12;
    } else if (startAmPm.toLowerCase() === 'am' && startHourNum === 12) {
      startHourNum = 0;
    }

    startDate.setHours(startHourNum, parseInt(startMinute), 0);

    const endDate = new Date(startDate);
    const durationInMinutes = parseInt(consultation.duration.split(' ')[0]);
    endDate.setMinutes(endDate.getMinutes() + durationInMinutes);

    const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      `Consultation with Anitha Gabriel`
    )}&details=${encodeURIComponent(`${consultation.title}`)}&dates=${startDate
      .toISOString()
      .replace(/-|:|\.\d+/g, '')}/${endDate
      .toISOString()
      .replace(/-|:|\.\d+/g, '')}&ctz=Asia/Kolkata`;

    window.open(calendarUrl, '_blank');
  }
}
