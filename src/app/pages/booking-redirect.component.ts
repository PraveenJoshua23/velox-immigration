import { Component, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BOOKING_URL } from '../utils/booking';

/** Old booking URLs (bookmarks, search results) forward to Setmore. */
@Component({
  selector: 'app-booking-redirect',
  standalone: true,
  template: `
    <main class="container mx-auto px-4 py-24 text-center text-gray-700">
      Taking you to our booking page&hellip;
      <a [href]="bookingUrl" class="text-fire-600 underline">Continue</a>
    </main>
  `,
})
export class BookingRedirectComponent {
  bookingUrl = BOOKING_URL;

  constructor() {
    if (isPlatformBrowser(inject(PLATFORM_ID))) location.replace(BOOKING_URL);
  }
}
