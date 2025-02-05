import { NgFor } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [NgFor],
  template: `
    <div class="container mx-auto px-4">
      <h3 class="text-3xl font-bold text-center mb-12">Our Services</h3>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          *ngFor="let service of services()"
          class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          class="service-card"
        >
          <h4 class="text-xl font-semibold mb-4">{{ service.title }}</h4>
          <p class="text-gray-600">{{ service.description }}</p>
          <a class="text-blue-600 hover:text-blue-700 mt-4 inline-block"
            >Read More</a
          >
        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export class ServicesComponent {
  services = signal([
      {
        title: 'Express Entry',
        description:
          'Federal Skilled Worker Program for qualified professionals seeking Canadian permanent residence.',
      },
      {
        title: 'Family Sponsorship',
        description:
          'Reunite with your family through spouse, parent, and child sponsorship programs.',
      },
      {
        title: 'Study Permits',
        description:
          'Obtain student visas and permits for international education in Canada.',
      },
    ]);
}
