import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { HeaderComponent } from '../../components/header.component';
import { FooterComponent } from '../../components/footer.component';
import { SheetsService } from '../../services/sheets.service';

interface ServiceCategory {
  name: string;
  services: string[];
}

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HeaderComponent,
    FooterComponent,
  ],
  template: `
    <app-header />
    <section class="min-h-screen bg-gray-50 py-12">
      <!-- Hero Section -->
      <div class="bg-sea-900 text-white py-16 mb-12">
        <div class="container mx-auto px-4">
          <h1 class="text-4xl md:text-5xl font-bold mb-4">
            Book Your Consultation
          </h1>
          <p class="text-xl opacity-90">
            Take the first step towards your Canadian journey
          </p>
        </div>
      </div>

      <!-- Main Content -->
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
          <!-- Left Column - Form -->
          <div class="bg-white rounded-lg shadow-lg p-8">
            <form
              [formGroup]="contactForm"
              (ngSubmit)="onSubmit()"
              class="space-y-6"
            >
              <!-- Personal Information -->
              <div class="space-y-4">
                <h3 class="text-xl font-semibold text-sea-900 mb-4">
                  Personal Information
                </h3>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1"
                      >First Name</label
                    >
                    <input
                      type="text"
                      formControlName="firstName"
                      class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-fire-600 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1"
                      >Last Name</label
                    >
                    <input
                      type="text"
                      formControlName="lastName"
                      class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-fire-600 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1"
                    >Email</label
                  >
                  <input
                    type="email"
                    formControlName="email"
                    class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-fire-600 focus:border-transparent"
                  />
                </div>

                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1"
                    >Phone</label
                  >
                  <input
                    type="tel"
                    formControlName="phone"
                    class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-fire-600 focus:border-transparent"
                  />
                </div>
              </div>

              <!-- Service Selection -->
              <div class="space-y-4">
                <h3 class="text-xl font-semibold text-sea-900 mb-4">
                  Service Information
                </h3>

                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1"
                    >Service Category</label
                  >
                  <select
                    formControlName="serviceCategory"
                    (change)="updateServices()"
                    class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-fire-600 focus:border-transparent"
                  >
                    <option value="">Select a category</option>
                    @for(category of serviceCategories(); track category.name) {
                    <option [value]="category.name">{{ category.name }}</option>
                    }
                  </select>
                </div>

                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1"
                    >Specific Service</label
                  >
                  <select
                    formControlName="specificService"
                    class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-fire-600 focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    @for(service of availableServices(); track service) {
                    <option [value]="service">{{ service }}</option>
                    }
                  </select>
                </div>

                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1"
                    >Message</label
                  >
                  <textarea
                    formControlName="message"
                    rows="4"
                    class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-fire-600 focus:border-transparent"
                  ></textarea>
                </div>
              </div>

              <button
                type="submit"
                [disabled]="!contactForm.valid"
                class="w-full bg-fire-600 text-white py-3 px-6 rounded-lg hover:bg-fire-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Book Consultation
              </button>
            </form>
          </div>

          <!-- Right Column - Information -->
          <div class="space-y-8">
            <!-- Main Info Card -->
            <div
              class="bg-white rounded-lg shadow-sm border-l-4 border-fire-600 p-6"
            >
              <h3 class="text-xl font-semibold text-sea-900 mb-4">
                Why Choose Us?
              </h3>
              <ul class="space-y-4">
                <li class="flex items-start">
                  <svg
                    class="w-6 h-6 text-fire-600 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span>Licensed Canadian Immigration Consultants</span>
                </li>
                <li class="flex items-start">
                  <svg
                    class="w-6 h-6 text-fire-600 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span>Personalized Immigration Strategy</span>
                </li>
                <li class="flex items-start">
                  <svg
                    class="w-6 h-6 text-fire-600 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span>End-to-End Application Support</span>
                </li>
              </ul>
            </div>

            <!-- CTA Card -->
            <div class="bg-fire-50 rounded-lg p-6">
              <h3 class="text-xl font-semibold text-sea-900 mb-4">
                Need Immediate Assistance?
              </h3>
              <p class="text-gray-700 mb-4">
                Our team is available to answer your questions
              </p>
              <div class="space-y-3">
                <a
                  href="tel:+1234567890"
                  class="flex items-center text-fire-600"
                >
                  <svg
                    class="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    ></path>
                  </svg>
                  +1 (234) 567-890
                </a>
                <a
                  href="mailto:info&#64;veloximmigration.com"
                  class="flex items-center text-fire-600"
                >
                  <svg
                    class="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    ></path>
                  </svg>
                  info&#64;veloximmigration.com
                </a>
              </div>
            </div>
          </div>
        </div>
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
export class ContactFormComponent {
  contactForm: FormGroup;

  serviceCategories = signal<ServiceCategory[]>([
    {
      name: 'Temporary Resident Services',
      services: [
        'Study in Canada',
        'Work in Canada',
        'Visitor Visa',
        'Parent/Grandparent Super Visa',
        'Labour Market Impact Assessment (LMIA)',
      ],
    },
    {
      name: 'Permanent Residency & Immigration Pathways',
      services: [
        'Express Entry',
        'Provincial Nominee Program (PNP)',
        'Atlantic Immigration Program',
        'Family Immigration',
        'Business Immigration',
        'Humanitarian & Compassionate Applications',
        'Refugee Claims Services',
      ],
    },
    {
      name: 'Family Sponsorship & Appeals',
      services: [
        'Spouse Sponsorship',
        'Children Sponsorship',
        'Parent Sponsorship',
        'Sponsorship Appeals',
      ],
    },
    {
      name: 'Canadian Citizenship & PR Services',
      services: ['Permanent Resident Card Renewal', 'Citizenship Applications'],
    },
    {
      name: 'Additional Services',
      services: ['Application Review'],
    },
  ]);

  availableServices = signal<string[]>([]);

  constructor(private fb: FormBuilder, private sheetsService: SheetsService) {
    this.contactForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      serviceCategory: ['', Validators.required],
      specificService: ['', Validators.required],
      message: [''],
    });
  }

  updateServices() {
    const selectedCategory = this.contactForm.get('serviceCategory')?.value;
    const category = this.serviceCategories().find(
      (cat) => cat.name === selectedCategory
    );
    this.availableServices.set(category?.services || []);
    this.contactForm.patchValue({ specificService: '' });
  }

  isSubmitting = signal(false);
  submitError = signal<string | null>(null);
  submitSuccess = signal(false);

  onSubmit() {
    if (this.contactForm.valid) {
      this.isSubmitting.set(true);
      this.submitError.set(null);
      this.submitSuccess.set(false);

      this.sheetsService.submitFormData(this.contactForm.value).subscribe({
        next: () => {
          this.submitSuccess.set(true);
          this.contactForm.reset();
          this.isSubmitting.set(false);
        },
        error: (error: any) => {
          console.error('Submission error:', error);
          this.submitError.set(
            'There was an error submitting your form. Please try again.'
          );
          this.isSubmitting.set(false);
        },
      });
    }
  }
}
