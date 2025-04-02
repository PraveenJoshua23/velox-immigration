import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { HeaderComponent } from '../../components/header.component';
import { FooterComponent } from '../../components/footer.component';
import { SheetsService } from '../../services/sheets.service';
import { localServices } from '../../utils/constants/navigation';

interface ServiceItem {
  id: string;
  label: string;
  path: string;
}

interface ServiceCategory {
  id: string;
  title: string;
  items: ServiceItem[];
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
    <section class="min-h-screen bg-gray-50 pb-12">
      <!-- Hero Section -->
      <div class="bg-sea-900 text-white py-16">
        <div class="container mx-auto px-4 max-w-5xl">
          <h1 class="text-4xl md:text-5xl mb-4">Contact Us</h1>
          <p class="text-xl opacity-90 max-w-3xl">
            Get in touch with our licensed immigration consultants to discuss
            your immigration goals and take your first step toward a new future
            in Canada.
          </p>
        </div>
      </div>

      <!-- Main Content -->
      <div class="container mx-auto px-4 max-w-5xl -mt-8">
        <div class="bg-white rounded-lg shadow-lg overflow-hidden">
          <div class="grid grid-cols-1 md:grid-cols-12">
            <!-- Left Column - Info -->
            <div class="md:col-span-4 bg-sea-800 text-white p-8">
              <h3 class="text-2xl font-medium mb-6">How We Can Help</h3>

              <div class="space-y-6">
                <div>
                  <h4 class="text-lg font-medium mb-2">Our Services</h4>
                  <p class="text-sea-100">
                    We offer comprehensive immigration services tailored to your
                    needs.
                  </p>
                </div>

                <div>
                  <h4 class="text-lg font-medium mb-2">Contact Information</h4>
                  <div class="space-y-3 mt-4">
                    <a
                      href="tel:+14166620652"
                      class="flex items-center text-sea-100 hover:text-white"
                    >
                      <svg
                        class="w-5 h-5 mr-3"
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
                      +1 416-662-0652
                    </a>
                    <a
                      href="mailto:info&#64;veloximmigration.com"
                      class="flex items-center text-sea-100 hover:text-white"
                    >
                      <svg
                        class="w-5 h-5 mr-3"
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

                <div>
                  <h4 class="text-lg font-medium mb-2">Why Choose Us?</h4>
                  <ul class="space-y-2">
                    <li class="flex items-start">
                      <svg
                        class="w-5 h-5 text-fire-400 mr-2 mt-0.5"
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
                        class="w-5 h-5 text-fire-400 mr-2 mt-0.5"
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
                        class="w-5 h-5 text-fire-400 mr-2 mt-0.5"
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
              </div>
            </div>

            <!-- Right Column - Form -->
            <div class="md:col-span-8 p-8">
              <h3 class="text-2xl font-medium text-sea-900 mb-6">
                Get in Touch
              </h3>

              @if(submitSuccess()) {
              <div
                class="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded mb-6"
              >
                Thank you for contacting us! We'll get back to you shortly.
              </div>
              } @if(submitError()) {
              <div
                class="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-6"
              >
                {{ submitError() }}
              </div>
              }

              <form
                [formGroup]="contactForm"
                (ngSubmit)="onSubmit()"
                class="space-y-5"
              >
                <!-- Personal Information -->
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
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

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                    @for(category of serviceCategories(); track category.id) {
                    <option [value]="category.title">
                      {{ category.title }}
                    </option>
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
                    @for(service of availableServices(); track service.id) {
                    <option [value]="service.label">{{ service.label }}</option>
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

                <button
                  type="submit"
                  [disabled]="!contactForm.valid || isSubmitting()"
                  class="w-full bg-fire-600 text-white py-3 px-6 rounded-lg hover:bg-fire-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span *ngIf="!isSubmitting()">Submit</span>
                  <span *ngIf="isSubmitting()">Submitting...</span>
                </button>
              </form>
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
export class ContactFormComponent implements OnInit {
  contactForm: FormGroup;

  // Using the new services structure
  serviceCategories = signal<ServiceCategory[]>([]);
  availableServices = signal<ServiceItem[]>([]);
  isSubmitting = signal(false);
  submitError = signal<string | null>(null);
  submitSuccess = signal(false);
  localServices = signal([...localServices]);

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

  ngOnInit() {
    // Initialize with the new structure
    this.serviceCategories.set(localServices);
  }

  updateServices() {
    const selectedCategory = this.contactForm.get('serviceCategory')?.value;
    const category = this.serviceCategories().find(
      (cat) => cat.title === selectedCategory
    );
    this.availableServices.set(category?.items || []);
    this.contactForm.patchValue({ specificService: '' });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.isSubmitting.set(true);
      this.submitError.set(null);
      this.submitSuccess.set(false);

      // Add timestamp to the form data for the sheet
      const formData = {
        ...this.contactForm.value,
        submissionDate: new Date().toISOString(),
      };

      this.sheetsService.submitFormData(formData).subscribe({
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
