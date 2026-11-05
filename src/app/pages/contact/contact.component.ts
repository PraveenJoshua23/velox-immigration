import { Component, ElementRef, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgTemplateOutlet } from '@angular/common';
import { HeaderComponent } from '../../components/header.component';
import { FooterComponent } from '../../components/footer.component';
import { SheetsService } from '../../services/sheets.service';
import { DirectusService } from '../../services/directus.service';
import { SeoService } from '../../services/seo.service';
import { BOOKING_URL } from '../../utils/booking';

const NOT_SURE = 'Not sure';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [NgTemplateOutlet, ReactiveFormsModule, HeaderComponent, FooterComponent],
  template: `
    <app-header />

    <main>
      <!-- Hero -->
      <section class="relative overflow-hidden bg-sea-950 text-white py-20 md:py-28">
        <img
          src="/assets/images/about-cover.webp"
          alt=""
          fetchpriority="high"
          class="absolute inset-0 size-full object-cover"
        />
        <div class="absolute inset-0 bg-gradient-to-r from-sea-950/95 via-sea-950/80 to-sea-950/50"></div>
        <div class="relative container mx-auto px-4">
          <h1 class="text-4xl md:text-6xl font-medium leading-[1.05] mb-6">Contact Us</h1>
          <p class="text-lg md:text-xl text-white/85 max-w-xl">
            Have a question about our services? Send us a message below. For advice about your
            immigration options or eligibility, book a consultation with Anitha Gabriel.
          </p>
        </div>
      </section>

      <section class="bg-gray-100 py-10 md:py-14">
        <div class="container mx-auto px-4 grid lg:grid-cols-12 gap-6 lg:gap-8">
          <!-- Contact details -->
          <aside class="lg:col-span-5 space-y-6">
            <div class="bg-white rounded-3xl shadow-sm p-6 sm:p-8">
              <h2 class="text-3xl text-sea-900 mb-6">Talk to Us</h2>
              <div class="divide-y divide-gray-200">
                @for (office of offices; track office.tel) {
                <div class="py-6 first:pt-0 last:pb-0">
                  <div class="flex gap-4">
                    <span class="w-7 shrink-0 pt-1.5 flex justify-center">
                      @if (office.country === 'CA') {
                      <svg class="size-6 text-fire-600" fill="currentColor" viewBox="-2015 -2000 4030 4030" aria-hidden="true">
                        <path d="m-90 2030 45-863a95 95 0 0 0-111-98l-859 151 116-320a65 65 0 0 0-20-73l-941-762 212-99a65 65 0 0 0 34-79l-186-572 542 115a65 65 0 0 0 73-38l105-247 423 454a65 65 0 0 0 111-57l-204-1052 327 189a65 65 0 0 0 91-27l332-652 332 652a65 65 0 0 0 91 27l327-189-204 1052a65 65 0 0 0 111 57l423-454 105 247a65 65 0 0 0 73 38l542-115-186 572a65 65 0 0 0 34 79l212 99-941 762a65 65 0 0 0-20 73l116 320-859-151a95 95 0 0 0-111 98l45 863z" />
                      </svg>
                      } @else {
                      <svg class="w-7 h-[19px] rounded-[2px]" viewBox="0 0 9 6" aria-hidden="true">
                        <path fill="#FF9933" d="M0 0h9v2H0z" />
                        <path fill="#fff" d="M0 2h9v2H0z" />
                        <path fill="#138808" d="M0 4h9v2H0z" />
                        <circle cx="4.5" cy="3" r=".8" fill="none" stroke="#000080" stroke-width=".2" />
                      </svg>
                      }
                    </span>
                    <div>
                      <h3 class="text-2xl text-sea-900">{{ office.region }}</h3>
                      <p class="mt-1 font-medium text-sea-900">{{ office.name }}</p>
                      <address class="mt-1 not-italic text-gray-700">
                        @for (line of office.address; track line) {<span class="block">{{ line }}</span>}
                      </address>
                    </div>
                  </div>
                  <ul class="mt-4 space-y-3">
                    <li class="flex items-center gap-4">
                      <svg class="size-5 w-7 shrink-0 text-fire-600" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1z" />
                      </svg>
                      <a [href]="'tel:' + office.tel" class="text-sea-900 hover:text-fire-600">{{ office.phone }}</a>
                    </li>
                    <li class="flex items-center gap-4">
                      <svg class="size-5 w-7 shrink-0 text-fire-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                        <rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 6L2 7" />
                      </svg>
                      <a [href]="'mailto:' + email" class="text-sea-900 hover:text-fire-600 break-all">{{ email }}</a>
                    </li>
                  </ul>
                </div>
                }
              </div>
            </div>

            <div class="bg-sea-950 text-white rounded-3xl p-6 sm:p-8">
              <h2 class="text-2xl mb-6">Consultations with Anitha Gabriel</h2>
              <ul class="space-y-4">
                <li class="flex gap-4">
                  <span class="size-7 shrink-0 rounded-full bg-fire-600 grid place-items-center" aria-hidden="true">
                    <svg class="size-4" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0z" /></svg>
                  </span>
                  <span>Regulated Canadian Immigration Consultant<span class="block">RCIC IRB • R1034239</span></span>
                </li>
                <li class="flex gap-4">
                  <span class="size-7 shrink-0 rounded-full bg-fire-600 grid place-items-center" aria-hidden="true">
                    <svg class="size-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3C6.5 3 2 6.9 2 11.5c0 2.4 1.2 4.6 3.2 6.1L4.5 21l4-2c1.1.3 2.3.5 3.5.5 5.5 0 10-3.9 10-8.5S17.5 3 12 3z" /></svg>
                  </span>
                  English and Tamil
                </li>
              </ul>
              <hr class="my-6 border-white/15" />
              <a
                [href]="bookingUrl"
                class="flex items-center justify-center gap-2 w-full bg-fire-600 text-white font-medium py-3.5 rounded-lg hover:bg-fire-700 transition-colors"
              >
                Book a Consultation
                <svg class="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg>
              </a>
            </div>
          </aside>

          <!-- Form -->
          <div class="lg:col-span-7 bg-white rounded-3xl shadow-sm p-6 sm:p-8 md:p-10">
            <h2 class="text-3xl text-sea-900 mb-2">Send Us a Message</h2>
            <p class="text-gray-700 mb-8">Tell us what you need help with.</p>

            @if (submitSuccess()) {
            <div role="status" class="rounded-2xl bg-green-50 border border-green-200 p-6 text-green-800">
              <p class="font-medium mb-1">Thank you, your message is on its way.</p>
              <p>We'll get back to you shortly.</p>
              <button
                type="button"
                (click)="submitSuccess.set(false)"
                class="mt-4 font-medium underline underline-offset-4"
              >
                Send another message
              </button>
            </div>
            } @else {
            @if (submitError()) {
            <div role="alert" class="rounded-xl bg-red-50 border border-red-200 text-red-700 px-4 py-3 mb-6">
              {{ submitError() }}
            </div>
            }

            <form [formGroup]="form" (ngSubmit)="onSubmit()" novalidate class="space-y-6">
              <div class="grid sm:grid-cols-2 gap-5">
                <ng-container *ngTemplateOutlet="field; context: { id: 'firstName', label: 'First name', type: 'text', auto: 'given-name', placeholder: 'First name', required: true }" />
                <ng-container *ngTemplateOutlet="field; context: { id: 'lastName', label: 'Last name', type: 'text', auto: 'family-name', placeholder: 'Last name', required: true }" />
                <ng-container *ngTemplateOutlet="field; context: { id: 'email', label: 'Email', type: 'email', auto: 'email', placeholder: 'you@example.com', required: true }" />
                <ng-container *ngTemplateOutlet="field; context: { id: 'phone', label: 'Phone (optional)', type: 'tel', auto: 'tel', placeholder: '+1 234 567 8900', required: false }" />
              </div>

              <div>
                <label for="service" class="block text-sm font-medium text-sea-900 mb-1.5">
                  Service interested in <span class="text-fire-600">*</span>
                </label>
                <select
                  id="service"
                  formControlName="service"
                  [class]="inputClass('service')"
                  [attr.aria-invalid]="showError('service')"
                  aria-describedby="service-hint service-error"
                >
                  <option value="">Select a service</option>
                  @for (group of servicesMenu; track group.label) {
                  <optgroup [label]="group.label">
                    @for (service of servicesIn(group.label); track service) {
                    <option [value]="service">{{ service }}</option>
                    }
                  </optgroup>
                  }
                  <option [value]="notSure">{{ notSure }}</option>
                </select>
                <p id="service-hint" class="mt-1.5 text-sm text-gray-500">
                  Choose Not sure if you need help identifying the right service.
                </p>
                @if (showError('service')) {
                <p id="service-error" class="mt-1.5 text-sm text-fire-700">Choose a service.</p>
                }
              </div>

              <div>
                <label for="message" class="block text-sm font-medium text-sea-900 mb-1.5">
                  Message <span class="text-fire-600">*</span>
                </label>
                <textarea
                  id="message"
                  formControlName="message"
                  rows="6"
                  placeholder="Tell us about your situation and how we can help."
                  [class]="inputClass('message')"
                  [attr.aria-invalid]="showError('message')"
                  aria-describedby="message-hint message-error"
                ></textarea>
                <p id="message-hint" class="mt-1.5 text-sm text-gray-500">
                  Please avoid including passport numbers or other sensitive documents in this enquiry.
                </p>
                @if (showError('message')) {
                <p id="message-error" class="mt-1.5 text-sm text-fire-700">Enter your message.</p>
                }
              </div>

              <button
                type="submit"
                [disabled]="isSubmitting()"
                class="w-full sm:w-auto bg-fire-600 text-white font-medium py-3.5 px-10 rounded-lg hover:bg-fire-700 transition-colors disabled:opacity-60 disabled:cursor-wait"
              >
                {{ isSubmitting() ? 'Sending…' : 'Send Message' }}
              </button>
            </form>
            }
          </div>
        </div>
      </section>
    </main>

    <app-footer />

    <ng-template #field let-id="id" let-label="label" let-type="type" let-auto="auto" let-placeholder="placeholder" let-required="required">
      <div [formGroup]="form">
        <label [for]="id" class="block text-sm font-medium text-sea-900 mb-1.5">
          {{ label }} @if (required) {<span class="text-fire-600">*</span>}
        </label>
        <input
          [id]="id"
          [type]="type"
          [formControlName]="id"
          [placeholder]="placeholder"
          [attr.autocomplete]="auto"
          [class]="inputClass(id)"
          [attr.aria-invalid]="showError(id)"
          [attr.aria-describedby]="id + '-error'"
        />
        @if (showError(id)) {
        <p [id]="id + '-error'" class="mt-1.5 text-sm text-fire-700">{{ errorFor(id, label) }}</p>
        }
      </div>
    </ng-template>
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
  private sheetsService = inject(SheetsService);
  private host: ElementRef<HTMLElement> = inject(ElementRef);

  bookingUrl = BOOKING_URL;
  notSure = NOT_SURE;
  email = 'info@veloximmigration.com';
  servicesMenu = inject(DirectusService).getServicesMenu();
  offices = [
    {
      region: 'Canada',
      country: 'CA',
      name: 'Velox Immigration Services Inc.',
      address: ['Oshawa, Ontario, Canada', 'Online appointments only'],
      phone: '+1 416-662-0652',
      tel: '+14166620652',
    },
    {
      region: 'Chennai, India',
      country: 'IN',
      name: 'Velox Immigration Services Private Limited',
      address: [
        'W-32/117, Plot No. C-10, 2nd Floor',
        '3rd Avenue, Anna Nagar',
        'Chennai 600040, Tamil Nadu, India',
      ],
      phone: '+91 77088 52882',
      tel: '+917708852882',
    },
  ];

  form = inject(FormBuilder).nonNullable.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: [''],
    service: ['', Validators.required],
    message: ['', Validators.required],
  });

  isSubmitting = signal(false);
  submitError = signal<string | null>(null);
  submitSuccess = signal(false);
  private submitted = signal(false);

  constructor() {
    inject(SeoService).setAllSeoData({
      title: 'Contact Us | Velox Immigration',
      description:
        'Contact Velox Immigration in Canada (+1 416-662-0652) or Chennai (+91 77088 52882). Send us a message or book a consultation with Anitha Gabriel, RCIC.',
    });
  }

  /** Service names under a menu category (the category itself if it has no sub-menu). */
  servicesIn(category = ''): string[] {
    const group = this.servicesMenu.find((g) => g.label === category);
    if (!group) return [];
    const subs = (group.sub_menu ?? []).filter((s: any) => s.visible);
    return subs.length ? subs.map((s: any) => s.label) : [group.label];
  }

  showError(id: string): boolean {
    const c = this.form.get(id)!;
    return c.invalid && (c.touched || this.submitted());
  }

  errorFor(id: string, label: string): string {
    if (this.form.get(id)!.hasError('email')) return 'Enter a valid email address.';
    const noun = { email: 'email address' }[id] ?? label.toLowerCase();
    return `Enter your ${noun}.`;
  }

  inputClass(id: string): string {
    return (
      'w-full rounded-lg border px-4 py-3 text-gray-900 bg-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-fire-600 focus:border-transparent ' +
      (this.showError(id) ? 'border-fire-600' : 'border-gray-300')
    );
  }

  onSubmit() {
    this.submitted.set(true);
    if (this.form.invalid) {
      // After the error states render, send the user to the first field that needs fixing
      setTimeout(() =>
        this.host.nativeElement.querySelector<HTMLElement>('[aria-invalid="true"]')?.focus()
      );
      return;
    }

    this.isSubmitting.set(true);
    this.submitError.set(null);
    const { service, ...rest } = this.form.getRawValue();
    // The sheet still has category + service columns, so derive the category from the menu
    const category =
      this.servicesMenu.find((g) => this.servicesIn(g.label).includes(service))?.label ?? service;
    this.sheetsService
      .submitFormData({
        ...rest,
        serviceCategory: category,
        specificService: service,
        submissionDate: new Date().toISOString(),
      })
      .subscribe({
        next: () => {
          this.submitSuccess.set(true);
          this.submitted.set(false);
          this.form.reset();
          this.isSubmitting.set(false);
        },
        error: () => {
          this.submitError.set(
            'Something went wrong sending your message. Please try again, or call us directly.'
          );
          this.isSubmitting.set(false);
        },
      });
  }
}
