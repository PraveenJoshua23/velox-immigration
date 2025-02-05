import { NgFor } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [NgFor],
  template: `
    <div class="container mx-auto px-4">
      <h3 class="text-3xl font-bold text-center mb-12">
        What Our Customers Say
      </h3>
      <div
        class="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8"
      >
        <div
          *ngFor="let testimonial of testimonials()"
          class="bg-white p-8 rounded-lg shadow-md"
          class="testimonial-card"
        >
          <p class="text-gray-600 mb-4">{{ testimonial.content }}</p>
          <div class="flex items-center">
            <div class="ml-4">
              <p class="font-semibold">{{ testimonial.name }}</p>
              <p class="text-gray-500">{{ testimonial.status }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export class TestimonialsComponent {
   testimonials = signal([
      {
        content:
          'Worem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.',
        name: 'Kate Johnson',
        status: 'Moved to Canada',
      },
    ]);
}
