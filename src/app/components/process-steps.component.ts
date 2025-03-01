import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';

interface ProcessStep {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-process-steps',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <!-- Section Title -->
        <div class="text-center mb-16">
          <div
            class="text-black flex font-medium mb-3 items-center justify-center space-x-1.5"
          >
            <img src="assets/images/plane.svg" class="pb-1" />
            <h2 class="text-3xl font-medium">
              Our <span class="font-bold">Process</span> in 3 Simple Steps
            </h2>
          </div>
        </div>

        <!-- Timeline Process Steps -->
        <div class="max-w-6xl mx-auto">
          <div class="relative">
            <!-- Horizontal Timeline Line -->
            <div
              class="hidden md:block absolute top-[15rem] left-0 right-0 h-1 bg-gray-300 z-0"
            ></div>

            <!-- Process Steps -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
              @for (step of processSteps(); track step.title) {
              <div class="flex flex-col items-center">
                <!-- Step Number Circle -->
                <div
                  class="w-[3.3rem] h-16 rounded-full bg-red-600 flex items-center justify-center text-white text-2xl font-bold mb-6"
                >
                  {{ processSteps().indexOf(step) + 1 }}
                </div>

                <!-- Step Content Card -->
                <div
                  class="bg-white p-8 rounded-lg shadow-md text-center h-full w-full"
                >
                  <h3 class="text-xl font-semibold text-red-600 mb-4">
                    {{ step.title }}
                  </h3>
                  <p class="text-gray-600">{{ step.description }}</p>
                </div>
              </div>
              }
            </div>
          </div>

          <!-- CTA Button -->
          <!-- <div class="text-center mt-16">
            <button
              routerLink="/contact"
              class="bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-red-700 transition-colors shadow-md"
            >
              Start Your Application Today
            </button>
          </div> -->
        </div>
      </div>
    </section>
  `,
  styles: `
    :host {
      display: block;
    }
  `,
})
export class ProcessStepsComponent {
  processSteps = signal<ProcessStep[]>([
    {
      icon: 'assessment',
      title: 'Initial Assessment',
      description:
        'The first step in your immigration journey is a preliminary assessment where we take the time to understand your goals and review your initial eligibility. This ensures that you are on the right path before proceeding further.',
    },
    {
      icon: 'consultation',
      title: 'Personalized Consultation',
      description:
        'A consultation meeting with our licensed RCIC expert provides you with in-depth insights and tailored recommendations. We discuss your immigration options, answer your questions, and develop a strategic plan to achieve your goals.',
    },
    {
      icon: 'application',
      title: 'Application Preparation & Submission',
      description:
        'Once your pathway is determined, we move forward with completing and submitting your application. Our team ensures that all documentation is accurate, complete, and aligned with immigration requirements for a seamless process.',
    },
  ]);
}
