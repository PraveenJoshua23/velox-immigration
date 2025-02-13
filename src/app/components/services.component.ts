import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

interface Service {
  icon: string;
  title: string;
  description: string;
  gridClass?: string;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <div
            class="text-black flex font-medium mb-3 items-center justify-center space-x-1.5"
          >
            <img src="assets/images/plane.svg" class="pb-1" />
            <h2 class="text-3xl  font-medium">
              Our <span class="font-bold">Services</span>
            </h2>
          </div>

          <h2 class="text-5xl pb-2 text-sea-900">
            Outstanding Immigration Services
          </h2>
        </div>

        <div
          class="grid grid-cols-1 md:grid-cols-3 gap-6 py-2 max-w-6xl mx-auto"
        >
          @for (service of services(); track service.title) {
          <div
            [class]="
              'bg-gray-50 p-6 rounded-lg flex flex-col gap-y-2 transition-all hover:shadow-lg ' +
              (service.gridClass || '')
            "
          >
            <img
              [src]="'/assets/icons/' + service.icon + '.svg'"
              [alt]="service.icon"
              class="size-6 mb-1"
            />
            <h3 class="text-xl font-semibold mb-2">{{ service.title }}</h3>
            <p class="text-gray-600 text-sm">{{ service.description }}</p>
          </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: ` :host {
    display: block;
  }`,
})
export class ServicesComponent {
  services = signal<Service[]>([
    {
      icon: 'service-family',
      title: 'Family Sponsorship',
      description:
        'Spouse, Parent, and Child sponsorship programs to reunite families in Canada',
    },
    {
      icon: 'service-study',
      title: 'Study Permits',
      description:
        'Student visas and permits for international education in Canada',
    },
    {
      icon: 'service-work',
      title: 'Work Permits',
      description:
        'Student visas and permits for international education in Canada',
    },
    {
      icon: 'service-visa',
      title: 'Visitor Visas',
      description: 'Tourist visas and super visas for temporary stays',
      gridClass: 'md:col-span-2',
    },
    {
      icon: 'service-business',
      title: 'Business Immigration',
      description: 'Investment and business immigration pathways to Canada',
    },
    {
      icon: 'service-citizen',
      title: 'Citizenship',
      description: 'Investment and business immigration pathways to Canada',
    },
    {
      icon: 'service-refugee',
      title: 'Refugee Services',
      description: 'Refugee and humanitarian applications assistance',
      gridClass: 'md:col-span-2',
    },
  ]);
}
