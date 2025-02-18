import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '../../components/footer.component';
import { HeaderComponent } from '../../components/header.component';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderComponent, FooterComponent],
  template: `
    <!-- Header (Same as Home) -->
    <app-header />

    <main>
      <!-- Hero Section -->
      <section class="bg-sea-900 text-white py-20">
        <div class="container mx-auto px-4">
          <h1 class="text-5xl font-bold mb-6">About Velox Immigration</h1>
          <p class="text-xl">Your Trusted Partner in Canadian Immigration</p>
        </div>
      </section>

      <!-- Our Story Section -->
      <section class="py-16">
        <div class="container mx-auto px-4">
          <div class="max-w-4xl mx-auto">
            <h2 class="text-3xl font-bold mb-8 text-sea-900">
              The Story Behind Velox
            </h2>
            <div class="prose lg:prose-lg font-light">
              <p class="mb-6">
                Velox Immigration was created with a clear vision: to
                revolutionize the way people experience the immigration process.
                The name "Velox," derived from the Latin word for "swift,"
                represents more than just speed—it's about efficiency, clarity,
                and purposeful movement.
              </p>
              <p class="mb-6">
                For many, immigration can feel like a daunting maze—complex
                forms, waiting times, and constant uncertainty. This is
                precisely why Velox was founded: to offer a service that not
                only handles paperwork but also provides a clear,
                straightforward path to success.
              </p>
              <p>
                At Velox, we believe that immigration should be a journey marked
                by confidence and trust. We know that each case is unique, and
                while we can't control the length of processing times, we focus
                on minimizing obstacles and ensuring that every step is taken
                with precision.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Founder Section -->
      <section class="bg-gray-50 py-16">
        <div class="container mx-auto px-4">
          <div
            class="max-w-4xl mx-auto flex flex-col md:flex-row gap-12 items-center"
          >
            <div class="md:w-1/3">
              <img
                src="/assets/images/founder-2.png"
                alt="Anitha Gabriel"
                class="rounded-lg shadow-lg w-full"
              />
            </div>
            <div class="md:w-2/3">
              <h2 class="text-3xl font-bold mb-6 text-sea-900">
                Meet the Founder: Anitha Gabriel
              </h2>
              <div class="prose lg:prose-lg font-light">
                <p class="mb-4">
                  Anitha Gabriel is the visionary founder of Velox Immigration,
                  a practice born from her own immigrant journey and passion for
                  simplifying the Canadian immigration process.
                </p>
                <p class="mb-4">
                  As a Regulated Canadian Immigration Consultant (RCIC), Anitha
                  is officially licensed by the College of Immigration and
                  Citizenship Consultants (CICC), ensuring that her clients
                  receive expert, trustworthy guidance throughout every stage of
                  their immigration journey.
                </p>
                <p>
                  From being an international student to becoming a Canadian
                  citizen, she personally navigated the complexities of the
                  immigration process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Why Choose Us Section -->
      <section class="py-16">
        <div class="container mx-auto px-4">
          <div class="max-w-4xl mx-auto">
            <h2 class="text-3xl font-bold mb-8 text-center text-sea-900">
              Why Choose Velox Immigration?
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div class="bg-white p-6 rounded-lg shadow-lg">
                <h3 class="text-xl font-semibold mb-4">
                  Expertise & Experience
                </h3>
                <p class="font-light">
                  With firsthand experience of the Canadian immigration journey,
                  Anitha and our team are fully equipped to guide you through
                  every step.
                </p>
              </div>
              <div class="bg-white p-6 rounded-lg shadow-lg">
                <h3 class="text-xl font-semibold mb-4">Personalized Service</h3>
                <p class="font-light">
                  We don't treat you like just another case. We take the time to
                  understand your unique circumstances and tailor our services
                  to meet your specific needs.
                </p>
              </div>
              <div class="bg-white p-6 rounded-lg shadow-lg">
                <h3 class="text-xl font-semibold mb-4">
                  Honesty & Transparency
                </h3>
                <p class="font-light">
                  From the outset, we provide clear communication about your
                  options, the costs involved, and what to expect.
                </p>
              </div>
              <div class="bg-white p-6 rounded-lg shadow-lg">
                <h3 class="text-xl  mb-4 font-semibold">
                  Multilingual Support
                </h3>
                <p class="font-light">
                  We provide services in both English and Tamil to ensure that
                  language is never a barrier to your success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="bg-sea-900 text-white py-16">
        <div class="container mx-auto px-4 text-center">
          <h2 class="text-3xl font-bold mb-6">
            Take the first step towards your Canadian future
          </h2>
          <p class="mb-8 text-lg">
            Book a consultation with us today and experience the Velox
            difference.
          </p>
          <button
            routerLink="/contact"
            class="bg-fire-600 text-white px-8 py-3 rounded-lg cursor-pointer hover:bg-fire-700 transition-colors"
          >
            Book Your Consultation
          </button>
        </div>
      </section>
    </main>

    <!-- Footer -->
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
export class AboutPageComponent {
  navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/services', label: 'Our Services' },
    { path: '/contact', label: 'Contact' },
  ];
}
