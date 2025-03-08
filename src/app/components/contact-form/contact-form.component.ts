// src/app/components/contact-form.component.ts
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { SheetsService } from '../../services/sheets.service';
import { ContactFormData } from '../../services/sheets.service';

interface ServiceCategory {
  name: string;
  services: string[];
}

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" class="space-y-6">
      <!-- Submission status messages -->
      <div
        *ngIf="isSubmitting()"
        class="bg-blue-50 text-blue-700 p-4 rounded-lg"
      >
        Submitting your inquiry...
      </div>

      <div
        *ngIf="submitSuccess()"
        class="bg-green-50 text-green-700 p-4 rounded-lg"
      >
        Thank you for your message! We'll get back to you shortly.
      </div>

      <div *ngIf="submitError()" class="bg-red-50 text-red-700 p-4 rounded-lg">
        {{ submitError() }}
      </div>

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
            <div
              *ngIf="
                contactForm.get('firstName')?.invalid &&
                contactForm.get('firstName')?.touched
              "
              class="text-red-500 text-sm mt-1"
            >
              First name is required
            </div>
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
            <div
              *ngIf="
                contactForm.get('lastName')?.invalid &&
                contactForm.get('lastName')?.touched
              "
              class="text-red-500 text-sm mt-1"
            >
              Last name is required
            </div>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1"
              >Email</label
            >
            <input
              type="email"
              formControlName="email"
              class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-fire-600 focus:border-transparent"
            />
            <div
              *ngIf="
                contactForm.get('email')?.invalid &&
                contactForm.get('email')?.touched
              "
              class="text-red-500 text-sm mt-1"
            >
              <span *ngIf="contactForm.get('email')?.errors?.['required']"
                >Email is required</span
              >
              <span *ngIf="contactForm.get('email')?.errors?.['email']"
                >Please enter a valid email</span
              >
            </div>
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
            <div
              *ngIf="
                contactForm.get('phone')?.invalid &&
                contactForm.get('phone')?.touched
              "
              class="text-red-500 text-sm mt-1"
            >
              Phone number is required
            </div>
          </div>
        </div>
      </div>

      <!-- Service Selection -->
      <div class="space-y-4">
        <h3 class="text-xl font-semibold text-sea-900 mb-4">
          Service Information
        </h3>

        <div class="flex w-full space-x-4">
          <div class="w-1/2">
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
            <div
              *ngIf="
                contactForm.get('serviceCategory')?.invalid &&
                contactForm.get('serviceCategory')?.touched
              "
              class="text-red-500 text-sm mt-1"
            >
              Please select a service category
            </div>
          </div>

          <div class="w-1/2">
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
            <div
              *ngIf="
                contactForm.get('specificService')?.invalid &&
                contactForm.get('specificService')?.touched
              "
              class="text-red-500 text-sm mt-1"
            >
              Please select a specific service
            </div>
          </div>
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
        [disabled]="!contactForm.valid || isSubmitting()"
        class="w-full bg-fire-600 text-white py-3 px-6 rounded-lg hover:bg-fire-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {{ submitButtonText }}
      </button>
    </form>
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
  @Input() submitButtonText: string = 'Book Consultation';
  @Output() formSubmitted = new EventEmitter<ContactFormData>();

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
  isSubmitting = signal(false);
  submitError = signal<string | null>(null);
  submitSuccess = signal(false);

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

  onSubmit() {
    if (this.contactForm.valid && !this.isSubmitting()) {
      this.isSubmitting.set(true);
      this.submitError.set(null);
      this.submitSuccess.set(false);

      // Add submission date to the form data
      const formData: ContactFormData = {
        ...this.contactForm.value,
        submissionDate: new Date().toISOString(),
      };

      // Emit the form data for parent components
      this.formSubmitted.emit(formData);

      // Use the sheets service to submit the data
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
    } else {
      // Mark all fields as touched to show validation errors
      Object.keys(this.contactForm.controls).forEach((key) => {
        const control = this.contactForm.get(key);
        control?.markAsTouched();
      });
    }
  }

  // Method to reset the form and states
  resetForm() {
    this.contactForm.reset();
    this.submitSuccess.set(false);
    this.submitError.set(null);
    this.isSubmitting.set(false);
  }
}
