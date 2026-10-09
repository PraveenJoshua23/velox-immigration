import { Component, ElementRef, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgTemplateOutlet } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HeaderComponent } from '../../components/header.component';
import { FooterComponent } from '../../components/footer.component';
import { SheetsService } from '../../services/sheets.service';
import { DirectusService } from '../../services/directus.service';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [NgTemplateOutlet, ReactiveFormsModule, HeaderComponent, FooterComponent],
  template: `
    <app-header />

    <main>
      <!-- Hero -->
      <section class="relative overflow-hidden bg-sea-950 text-white pt-20 pb-36 md:pt-28 md:pb-44">
        <img
          src="/assets/images/about-cover.webp"
          alt=""
          fetchpriority="high"
          class="absolute inset-0 size-full object-cover"
        />
        <div class="absolute inset-0 bg-gradient-to-r from-sea-950/95 via-sea-950/85 to-sea-950/60"></div>
        <div class="relative container mx-auto px-4">
          <h1 class="text-4xl md:text-6xl font-medium leading-[1.05] mb-6">Contact us</h1>
          <p class="text-lg md:text-xl text-white/80 max-w-2xl">
            {{ content?.page_subtitle }}
          </p>
        </div>
      </section>

      <!-- Details + form; the form card overlaps the hero -->
      <section class="bg-gray-100 pb-20 md:pb-28">
        <div class="container mx-auto px-4 grid lg:grid-cols-12 gap-8 lg:gap-12 -mt-24 md:-mt-32 relative">
          <!-- Form -->
          <div class="lg:col-span-7 lg:order-2 bg-white rounded-3xl shadow-xl p-6 sm:p-8 md:p-10">
            <h2 class="text-2xl md:text-3xl text-sea-900 mb-2">Send us a message</h2>
            <p class="text-gray-700 mb-8">
              Tell us a little about your situation and we'll get back to you.
            </p>

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

            <form [formGroup]="form" (ngSubmit)="onSubmit()" novalidate class="space-y-5">
              <div class="grid sm:grid-cols-2 gap-5">
                <ng-container *ngTemplateOutlet="field; context: { id: 'firstName', label: 'First name', type: 'text', auto: 'given-name' }" />
                <ng-container *ngTemplateOutlet="field; context: { id: 'lastName', label: 'Last name', type: 'text', auto: 'family-name' }" />
                <ng-container *ngTemplateOutlet="field; context: { id: 'email', label: 'Email', type: 'email', auto: 'email' }" />
                <ng-container *ngTemplateOutlet="field; context: { id: 'phone', label: 'Phone', type: 'tel', auto: 'tel' }" />
              </div>

              <div class="grid sm:grid-cols-2 gap-5">
                <div>
                  <label for="serviceCategory" class="block text-sm font-medium text-sea-900 mb-1.5">Service category</label>
                  <select
                    id="serviceCategory"
                    formControlName="serviceCategory"
                    (change)="form.controls.specificService.setValue('')"
                    [class]="inputClass('serviceCategory')"
                    [attr.aria-invalid]="showError('serviceCategory')"
                    aria-describedby="serviceCategory-error"
                  >
                    <option value="">Select a category</option>
                    @for (group of servicesMenu; track group.label) {
                    <option [value]="group.label">{{ group.label }}</option>
                    }
                  </select>
                  @if (showError('serviceCategory')) {
                  <p id="serviceCategory-error" class="mt-1.5 text-sm text-fire-700">Choose a category.</p>
                  }
                </div>
                <div>
                  <label for="specificService" class="block text-sm font-medium text-sea-900 mb-1.5">Service</label>
                  <select
                    id="specificService"
                    formControlName="specificService"
                    [class]="inputClass('specificService')"
                    [attr.aria-invalid]="showError('specificService')"
                    aria-describedby="specificService-error"
                  >
                    <option value="">{{ form.value.serviceCategory ? 'Select a service' : 'Choose a category first' }}</option>
                    @for (service of servicesIn(form.value.serviceCategory); track service) {
                    <option [value]="service">{{ service }}</option>
                    }
                  </select>
                  @if (showError('specificService')) {
                  <p id="specificService-error" class="mt-1.5 text-sm text-fire-700">Choose a service.</p>
                  }
                </div>
              </div>

              <div>
                <label for="message" class="block text-sm font-medium text-sea-900 mb-1.5">
                  Message <span class="font-normal text-gray-500">(optional)</span>
                </label>
                <textarea id="message" formControlName="message" rows="5" [class]="inputClass('message')"></textarea>
              </div>

              <button
                type="submit"
                [disabled]="isSubmitting()"
                class="w-full sm:w-auto bg-fire-600 text-white font-medium py-3.5 px-10 rounded-lg hover:bg-fire-700 transition-colors disabled:opacity-60 disabled:cursor-wait"
              >
                {{ isSubmitting() ? 'Sending…' : 'Send message' }}
              </button>
            </form>
            }
          </div>

          <!-- Contact details -->
          <aside class="lg:col-span-5 lg:order-1 space-y-6 lg:pt-40">
            <div class="bg-white rounded-3xl border border-gray-200 p-6 sm:p-8">
              <h2 class="text-2xl text-sea-900 mb-6">Talk to us directly</h2>
              <ul class="divide-y divide-gray-100">
                @for (office of offices; track office.tel) {
                <li class="flex items-center justify-between gap-4 py-4">
                  <span class="text-gray-700">{{ office.city }}</span>
                  <a [href]="'tel:' + office.tel" class="py-1 font-medium text-sea-900 hover:text-fire-600">{{ office.phone }}</a>
                </li>
                } @if (content?.contact_email) {
                <li class="flex items-center justify-between gap-4 py-4">
                  <span class="text-gray-700">Email</span>
                  <a [href]="'mailto:' + content.contact_email" class="py-1 font-medium text-sea-900 hover:text-fire-600 break-all">{{ content.contact_email }}</a>
                </li>
                }
              </ul>
            </div>

            <div class="bg-sea-950 text-white rounded-3xl p-6 sm:p-8">
              <h2 class="text-2xl mb-5">Why clients choose us</h2>
              <ul class="space-y-3">
                @for (item of content?.why_choose_use_items; track $index) {
                <li class="flex gap-3">
                  <svg class="size-6 shrink-0 text-fire-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" />
                  </svg>
                  {{ item.description }}
                </li>
                }
              </ul>
              <p class="mt-6 pt-6 border-t border-white/10 text-sm text-white/70">
                Licensed RCIC: Anitha Gabriel · Membership ID R1034239
              </p>
            </div>
          </aside>
        </div>
      </section>
    </main>

    <app-footer [hideContactBanner]="true" />

    <ng-template #field let-id="id" let-label="label" let-type="type" let-auto="auto">
      <div [formGroup]="form">
        <label [for]="id" class="block text-sm font-medium text-sea-900 mb-1.5">{{ label }}</label>
        <input
          [id]="id"
          [type]="type"
          [formControlName]="id"
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

  content: any;
  servicesMenu = inject(DirectusService).getServicesMenu();
  offices = [
    { city: 'Toronto, Canada', phone: '+1 416-662-0652', tel: '+14166620652' },
    { city: 'Chennai, India', phone: '+91 77088 53882', tel: '+917708853882' },
  ];

  form = inject(FormBuilder).nonNullable.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', Validators.required],
    serviceCategory: ['', Validators.required],
    specificService: ['', Validators.required],
    message: [''],
  });

  isSubmitting = signal(false);
  submitError = signal<string | null>(null);
  submitSuccess = signal(false);
  private submitted = signal(false);

  constructor() {
    inject(ActivatedRoute).data.subscribe((response: any) => {
      const data = response.data.data;
      this.content = Array.isArray(data) ? data[0] : data;
    });
    inject(SeoService).setAllSeoData({
      title: 'Contact Us | Velox Immigration',
      description:
        'Contact Velox Immigration in Toronto (+1 416-662-0652) or Chennai (+91 77088 53882). Send us a message and a licensed RCIC will get back to you.',
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
    const noun = { email: 'email address', phone: 'phone number' }[id] ?? label.toLowerCase();
    return `Enter your ${noun}.`;
  }

  inputClass(id: string): string {
    return (
      'w-full rounded-lg border px-4 py-3 text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-fire-600 focus:border-transparent ' +
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
    this.sheetsService
      .submitFormData({ ...this.form.getRawValue(), submissionDate: new Date().toISOString() })
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
