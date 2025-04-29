import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '../../components/footer.component';
import { HeaderComponent } from '../../components/header.component';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderComponent, FooterComponent],
  template: `
    <!-- Header -->
    <app-header />

    <main>
      <!-- Hero Section -->
      <section class="bg-sea-950 text-white py-20">
        <div class="container mx-auto px-4">
          <h1 class="text-4xl md:text-5xl mb-6">About Velox Immigration</h1>
          <p class="text-xl">Your Trusted Partner in Canadian Immigration</p>
        </div>
      </section>

      <!-- The Story Behind Velox -->
      <section class="py-16 bg-white">
        <div class="container mx-auto px-4">
          <div class="max-w-4xl mx-auto">
            <h2 class="text-3xl mb-8 text-sea-900">The Story Behind Velox</h2>
            <div class="prose lg:prose-lg font-light">
              <p class="mb-6">
                Velox Immigration was born from a simple yet powerful
                realization — immigration should not be a struggle; it should be
                a well-guided journey.
              </p>
              <p class="mb-6">
                The name "Velox", meaning swift in Latin, represents more than
                just speed. It stands for efficiency, precision, and clarity —
                the very principles that shape our approach. Every client has a
                unique story, and every case deserves careful attention. At
                Velox, we ensure that each step of the process is handled with
                expertise, integrity, and care.
              </p>
              <p class="mb-6">
                Too often, individuals and families encounter unnecessary
                obstacles, confusion, and delays, turning what should be an
                exciting new chapter into an overwhelming experience. Velox was
                founded to eliminate uncertainty, remove guesswork, and provide
                strategic solutions that make the immigration journey smoother
                and more accessible.
              </p>
              <p class="mb-6">
                Our mission is simple: to simplify, support, and empower. At
                Velox, we don't just guide clients through immigration—we help
                them build their future with confidence.
              </p>
              <!-- <p class="mb-6 flex items-center">
                <svg
                  class="w-5 h-5 text-green-600 mr-2 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                To ensure a&nbsp;
                <strong> straightforward, stress-free path to Canada</strong>.
              </p> -->
            </div>
            <!-- <div class="mt-8 text-center">
              <button
                routerLink="/services"
                class="bg-fire-600 text-white px-8 py-3 rounded-lg hover:bg-fire-700 transition-colors"
              >
                Discover Our Services →
              </button>
            </div> -->
          </div>
        </div>
      </section>

      <!-- Founder Section -->
      <section class="bg-gray-50 py-16">
        <div class="container mx-auto px-4">
          <div
            class="max-w-4xl mx-auto flex flex-col md:flex-row gap-12 items-center"
          >
            <div class="w-full max-w-[280px] md:max-w-none md:w-1/3 mx-auto">
              <img
                src="/assets/images/founder-2.png"
                alt="Anitha Gabriel"
                class="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
            <div class="md:w-2/3">
              <h2 class="text-3xl mb-6 text-sea-900">
                Meet the Founder: Anitha Gabriel
              </h2>
              <div class="prose lg:prose-lg font-light">
                <p class="mb-4">
                  <strong>Anitha Gabriel</strong> is the visionary founder of
                  Velox Immigration, a practice born from her own immigrant
                  journey and passion for simplifying the Canadian immigration
                  process. With extensive experience and a deep understanding of
                  immigration pathways, she has successfully helped countless
                  clients, providing expert, trustworthy guidance throughout
                  every stage of their immigration journey.
                </p>
                <p class="mb-4">
                  Her dedication is reinforced by recognized accreditations:
                </p>
                <ul class="mb-4 space-y-2 list-disc pl-5">
                  <li>
                    <span
                      ><strong
                        >Licensed by the College of Immigration and Citizenship
                        Consultants (CICC)</strong
                      ></span
                    >
                  </li>
                  <li>
                    <span
                      ><strong
                        >Authorized Representative before the Immigration &
                        Refugee Board (IRB)</strong
                      ></span
                    >
                  </li>
                  <!-- <li>
                    <span
                      ><strong
                        >Member of CAPIC (Canadian Association of Professional
                        Immigration Consultants)</strong
                      ></span
                    >
                  </li> -->
                </ul>
                <p>
                  Anitha's commitment, passion, and transparency shape her
                  approach, making her a trusted guide in the immigration
                  process. More than just an expert, she is known for her
                  genuine dedication—exactly what her clients seek.
                </p>
              </div>
              <div class="mt-8">
                <button
                  routerLink="/contact"
                  class="bg-fire-600 text-white px-8 py-3 rounded-lg hover:bg-fire-700 transition-colors"
                >
                  Schedule a Consultation →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Our Core Values Section -->
      <section class="py-16">
        <div class="container mx-auto px-4">
          <div class="max-w-4xl mx-auto">
            <h2 class="text-3xl mb-8 text-center text-sea-900">
              Our Core Values (V.E.L.O.X)
            </h2>
            <div class="grid grid-cols-1 gap-6">
              @for (value of coreValues(); track value.name) {
              <div
                class="p-6 rounded-lg shadow-lg "
                [class.bg-gray-50]="value.color === 'bg-sea-800'"
                [class.bg-gray-200]="value.color === 'bg-fire-600'"
              >
                <h3
                  class="text-2xl font-semibold mb-2 flex justify-center items-center"
                >
                  <!-- <svg
                    class="w-6 h-6 text-fire-600 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg> -->
                  <span>{{ value.name }}</span>
                </h3>
                <p class="font-ligh text-center">{{ value.description }}</p>
              </div>
              }
            </div>
            <!-- <div class="mt-10 text-center">
              <button
                routerLink="/contact"
                class="bg-fire-600 text-white px-8 py-3 rounded-lg hover:bg-fire-700 transition-colors"
              >
                Book a Consultation
              </button>
            </div> -->
          </div>
        </div>
      </section>

      <!-- FAQs Section -->
      <section class="bg-gray-50 py-16">
        <div class="container mx-auto px-4">
          <div class="max-w-4xl mx-auto">
            <h2 class="text-3xl mb-2 text-center text-sea-900">
              Frequently Asked Questions
            </h2>
            <p class="text-center mb-8 text-gray-600">
              Have questions? Find answers to common immigration concerns.
            </p>

            <div class="space-y-4">
              @for (faq of faqsList(); track faq.id) {
              <div class="bg-white rounded-lg shadow overflow-hidden">
                <button
                  class="w-full px-6 py-4 text-left flex justify-between items-center"
                  (click)="toggleFaq(faq.id)"
                >
                  <span class="font-normal">{{ faq.question }}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 transition-transform duration-300"
                    [class.rotate-180]="isOpen(faq.id)"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div
                  class="px-6 pb-4 transition-all duration-300"
                  [class.hidden]="!isOpen(faq.id)"
                  [class.max-h-0]="!isOpen(faq.id)"
                  [class.max-h-96]="isOpen(faq.id)"
                  [class.opacity-0]="!isOpen(faq.id)"
                  [class.opacity-100]="isOpen(faq.id)"
                >
                  <p class="text-gray-600 font-light">{{ faq.answer }}</p>
                </div>
              </div>
              }
            </div>

            <!-- <div class="mt-8 text-center">
              <button
                routerLink="/faqs"
                class="bg-sea-900 text-white px-8 py-3 rounded-lg hover:bg-sea-800 transition-colors"
              >
                See All FAQs
              </button>
            </div> -->
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="bg-sea-900 text-white py-16">
        <div class="container mx-auto px-4 text-center">
          <h2 class="text-3xl mb-6">
            Take the first step towards your Canadian future
          </h2>
          <p class="mb-8 text-md font-light">
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
  // Using signals for core values
  coreValues = () => [
    {
      name: 'Velocity',
      description:
        'We act with speed and precision, ensuring an efficient immigration process without unnecessary delays.',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>',
      color: 'bg-fire-600',
    },
    {
      name: 'Empowerment',
      description:
        'We equip our clients with knowledge, confidence, and guidance, helping them navigate their immigration journey with clarity and certainty.',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>',
      color: 'bg-sea-800',
    },
    {
      name: 'Loyalty',
      description:
        "We are dedicated to our clients' success, treating each case with the same care and responsibility as if it were our own.",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>',
      color: 'bg-fire-600',
    },
    {
      name: 'Openness',
      description:
        'Transparency is at the heart of our work. We provide honest advice, realistic expectations, and clear communication at every step.',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" /></svg>',
      color: 'bg-sea-800',
    },
    {
      name: 'Experience-Driven Solutions',
      description:
        "Our expertise and deep industry knowledge allow us to craft strategic, personalized solutions that maximize our clients' success.",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>',
      color: 'bg-fire-600',
    },
  ];

  // Using signals for FAQs
  private faqsData = [
    {
      id: 1,
      question: 'What are the most common pathways to immigrate to Canada?',
      answer:
        'The most common pathways include Express Entry (for skilled workers), Provincial Nominee Programs, Family Sponsorship, Study Permits leading to permanent residency, and Business Immigration programs.',
    },
    {
      id: 2,
      question: 'Why should I hire an immigration consultant?',
      answer:
        'Immigration processes can be complex and time-consuming, with requirements changing frequently. A licensed consultant ensures your application is prepared correctly, avoiding costly delays or rejections. We provide strategic advice tailored to your specific situation, guide you through document preparation, and advocate on your behalf throughout the process.',
    },
  ];

  // Using signal for FAQ list
  faqsList = signal(this.faqsData);

  // Signal to track open FAQ items
  openFaqId = signal<number | null>(null);

  // Computed value to check if a FAQ is open
  isOpen = (id: number) => this.openFaqId() === id;

  // Toggle FAQ open/close state
  toggleFaq(id: number) {
    this.openFaqId.update((currentId) => (currentId === id ? null : id));
  }
}
