import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ServiceHeaderComponent } from '../../components/service-header.component';
import { StudyResolverService } from '../../resolvers/study-resolver.service';

@Component({
  selector: 'app-study',
  standalone: true,
  imports: [CommonModule, RouterModule, ServiceHeaderComponent],
  template: `
    <div class="space-y-8">
      <app-service-header
        [title]="content.title"
        [description]="content.subtitle"
        backgroundImage="/assets/images/study-hero.png"
      />

      <!-- Overview Section -->
      <section class="bg-white p-6 ">
        <h2 class="text-2xl text-sea-900 mb-4">
          {{ content.intro_title }}
        </h2>
        <p class="text-gray-700">
          {{ content.intro_description }}
        </p>
      </section>

      <!-- Who We Help Section -->
      <section class="bg-gray-50 rounded-md p-6 ">
        <h2 class="text-2xl text-sea-900 mb-4">Who We Help</h2>
        <p class="text-gray-700">{{ content.who_we_help_intro }}</p>
        <ul class="py-3 space-y-2 list-disc pl-5 text-gray-700">
          @for(item of content.who_we_help_items; track item) {
          <li>
            <span class="font-medium">{{ item.list }}</span>
          </li>
          }
        </ul>
      </section>

      <!-- Our Services Section -->
      <section class="bg-white rounded-md p-6">
        <h2 class="text-2xl text-sea-900 mb-4">Our Services</h2>
        <p class="text-gray-700 mb-4">
          {{ content.what_we_offer_intro }}
        </p>

        <div class="space-y-6">
          @for(item of content.what_we_offer_items; track item) {
          <div>
            <h3 class="text-xl font-medium text-fire-600 mb-2">
              {{ item.title }}
            </h3>
            <p class="text-gray-700">
              {{ item.description }}
            </p>
          </div>
          }
        </div>
      </section>

      <!-- What You Need to Apply Section -->
      <section class="bg-gray-50 rounded-md p-6">
        <h2 class="flex items-center text-2xl text-sea-900 mb-4">
          <svg
            class="w-6 h-6 inline-block mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            ></path>
          </svg>
          <span class="mt-1">What You Need to Apply</span>
        </h2>
        <div [innerHTML]="content.what_you_need_to_apply"></div>
        <!-- <p class="text-gray-700 mb-4">
          Each case is different, but generally, you'll need the following:
        </p>

        <ul class="space-y-2 list-disc pl-5 text-gray-700 mb-4">
          <li>A valid letter of acceptance from a DLI</li>
          <li>Proof of sufficient funds</li>
          <li>Valid passport</li>
          <li>Recent photographs</li>
          <li>Biometrics</li>
          <li>
            An Immigration Medical Exam (IME) (only required in specific cases)
          </li>
          <li>
            A well-written Statement of Purpose (SOP) explaining your study plan
            and intentions
          </li>
          <li>
            Evidence of ties to your home country (such as family, property, or
            employment)
          </li>
        </ul>

        <p class="text-gray-700">
          If you're applying on behalf of a minor, additional documents are
          needed, such as a custodianship declaration, birth certificate, and
          identification for the parent(s) or guardian(s).
        </p>
        <p class="text-gray-700 mt-2">
          We will guide you through each of these requirements and help you
          gather a complete and accurate set of documents tailored to your
          unique situation.
        </p> -->
      </section>

      <!-- How We Work Section -->
      <section class="bg-white rounded-md p-6">
        <h2 class="text-2xl text-sea-900 mb-4">🛠️ How We Work</h2>
        <p class="text-gray-700 mb-4">
          {{ content.how_we_work_intro }}
        </p>

        <div class="space-y-4">
          @for(item of content.how_we_work_items; track item; let i = $index) {
          <div class="flex gap-3">
            <div
              class="bg-fire-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0"
            >
              {{ i + 1 }}
            </div>
            <div>
              <p class="font-medium">{{ item.title }}</p>
              <p class="text-gray-600">
                {{ item.description }}
              </p>
            </div>
          </div>
          }
        </div>
      </section>

      <!-- Why Choose Velox Section -->
      <section class="bg-gray-50 rounded-md p-6">
        <h2 class="text-2xl text-sea-900 mb-4">Why Choose Velox?</h2>
        <p class="text-gray-700">
          {{ content.why_choose_velox }}
        </p>
      </section>

      <!-- FAQ Section with Accordion -->
      <section class="bg-gray-50 rounded-md p-6">
        <h2 class="text-2xl text-sea-900 mb-6">
          <svg
            class="w-6 h-6 inline-block mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          Frequently Asked Questions
        </h2>

        <div class="space-y-4">
          @for(item of content.faq_items; track item; let i = $index) {
          <!-- FAQ Item 1 -->
          <div class="border rounded-lg overflow-hidden">
            <button
              (click)="toggleFaq(i)"
              class="w-full flex justify-between items-center p-4 text-left bg-white hover:bg-gray-50 transition-colors"
            >
              <span class="font-medium">{{ item.question }}</span>
              <svg
                [class]="
                  'w-5 h-5 transition-transform ' +
                  (activeFaq() === i ? 'transform rotate-180' : '')
                "
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
              [class]="
                'overflow-hidden transition-all duration-300 ' +
                (activeFaq() === i ? 'max-h-40' : 'max-h-0')
              "
            >
              <div class="p-4 border-t bg-gray-50">
                <p>
                  {{ item.answers }}
                </p>
              </div>
            </div>
          </div>
          }
        </div>
      </section>

      <!-- Ready to Begin Banner -->
      <section class="bg-fire-600 text-white rounded-lg p-8 my-8">
        <div class="flex flex-col md:flex-row items-center justify-between">
          <div class="mb-6 md:mb-0">
            <h2 class="text-2xl font-bold  mb-2">{{ content.banner_title }}</h2>
            <p class="text-lg font-light pr-4">
              {{ content.banner_description }}
            </p>
          </div>
          <div>
            <button
              [routerLink]="content.banner_cta_link"
              class="bg-white text-fire-600 px-8 py-3 rounded-lg cursor-pointer font-medium hover:bg-gray-100 transition-colors shadow-lg"
            >
              {{ content.banner_cta_text }}
            </button>
          </div>
        </div>
      </section>
    </div>
  `,
})
export class StudyComponent implements OnInit {
  activeFaq = signal(-1);
  content: any;

  constructor(private activatedRoute: ActivatedRoute, private route: Router) {
    this.activatedRoute.data.subscribe((response: any) => {
      this.content = response.data.data;
      if (
        this.content.status === 'draft' ||
        this.content.status === 'archived'
      ) {
        this.route.navigate(['/']);
      }
    });
  }

  ngOnInit(): void {}

  toggleFaq(index: number) {
    this.activeFaq.update((current) => (current === index ? -1 : index));
  }
}
