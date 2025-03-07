import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';

interface Service {
  icon: string;
  title: string;
  category: string;
  description: string;
  boldParts?: string[];
  route?: string;
  gridClass?: string;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <div
            class="text-black flex font-medium mb-3 items-center justify-center space-x-1.5"
          >
            <img src="assets/images/plane.svg" class="pb-1" />
            <h2 class="text-3xl font-medium">
              Our <span class="font-bold">Immigration </span>Services
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
              'bg-gray-50 py-10 px-6 rounded-lg flex flex-col gap-y-2 transition-all hover:shadow-lg cursor-pointer ' +
              (service.gridClass || '')
            "
            [routerLink]="[
              '/services',
              service.category,
              service.route ||
                service.title.toLowerCase().replace(' ', '-').replace('/', '')
            ]"
          >
            <img
              [src]="'/assets/icons/' + service.icon + '.svg'"
              [alt]="service.icon"
              class="size-6 mb-1"
            />
            <h3 class="text-xl font-semibold mb-2">{{ service.title }}</h3>
            <p
              class="text-gray-600 text-sm"
              [innerHTML]="formatDescription(service)"
            ></p>
          </div>
          }
        </div>

        <!-- SEO Keywords - Hidden but available for SEO -->
        <div class="sr-only">
          work in Canada, study visa expert, Express Entry PR consultant, best
          Canadian immigration firm, family sponsorship specialist, Provincial
          Nominee Program, PR Card renewal, citizenship application, visitor
          visa, super visa
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
      icon: 'service-study',
      title: 'Study in Canada',
      category: 'temporary-services',
      route: 'study',
      description: 'Secure your study permit & PGWP for long-term success.',
      boldParts: ['study permit & PGWP'],
    },
    {
      icon: 'service-work',
      title: 'Work in Canada',
      category: 'temporary-services',
      route: 'work',
      description: 'Obtain LMIA-backed or open work permits with ease.',
      boldParts: ['LMIA-backed or open work permits'],
    },
    {
      icon: 'service-visa',
      title: 'Visitor Visa & Family Reunification',
      category: 'temporary-services',
      route: 'visitor-visa',
      description: 'Travel to Canada & bring your loved ones for visits.',
      boldParts: ['Travel to Canada & bring your loved ones'],
    },
    {
      icon: 'service-express',
      title: 'Express Entry (PR Pathway)',
      category: 'permanent-residency',
      route: 'express-entry',
      description: "Navigate Canada's fastest PR pathway with expert help.",
      boldParts: ["Canada's fastest PR pathway"],
    },
    {
      icon: 'service-pnp',
      title: 'Provincial Nominee Program (PNP)',
      category: 'permanent-residency',
      route: 'provincial-nominee',
      description:
        'Explore province-specific immigration pathways to PR status.',
      boldParts: ['province-specific immigration pathways'],
    },
    {
      icon: 'service-business',
      title: 'Business Immigration',
      category: 'permanent-residency',
      route: 'business-immigration',
      description: 'Explore Start-Up Visa & Investor PR opportunities.',
      boldParts: ['Start-Up Visa & Investor PR opportunities'],
    },
    {
      icon: 'service-citizen',
      title: 'PR Card & Citizenship Services',
      category: 'additional-services',
      route: 'citizenship',
      description:
        'Renewal of PR cards & guidance through citizenship applications.',
      boldParts: ['PR cards & citizenship applications'],
    },
    {
      icon: 'service-more',
      title: 'Click here to know more...',
      category: 'additional-services',
      route: 'application-review',
      description:
        'Discover our full range of immigration & settlement services.',
      boldParts: ['immigration & settlement services'],
    },
  ]);

  formatDescription(service: Service): string {
    if (!service.boldParts || service.boldParts.length === 0) {
      return service.description;
    }

    let formattedDescription = service.description;
    for (const part of service.boldParts) {
      formattedDescription = formattedDescription.replace(
        part,
        `<strong>${part}</strong>`
      );
    }
    return formattedDescription;
  }
}
