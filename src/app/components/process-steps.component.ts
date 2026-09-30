import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomePageContent } from '../utils/types/directus';

@Component({
  selector: 'app-process-steps',
  standalone: true,
  imports: [RouterModule],
  template: `
    <section class="py-20 md:py-28 bg-sea-950 text-white">
      <div class="container mx-auto px-4">
        <!-- Section Title -->
        <div class="flex items-center gap-2 mb-14 md:mb-20">
          <img src="assets/images/plane.svg" class="w-6 h-6" alt="" />
          <h2 class="text-3xl md:text-5xl font-medium">
            {{ content.data?.our_process_title || 'Our Process in 3 Simple Steps' }}
          </h2>
        </div>

        <!-- Timeline: vertical line on the left on mobile, horizontal across the top from md -->
        <ol
          class="relative ml-2 border-l border-white/15 space-y-12 md:ml-0 md:border-l-0 md:space-y-0 md:grid md:grid-cols-3 md:gap-10"
        >
          @for (step of content.data?.our_process_steps || []; track step.title;
          let i = $index, last = $last) {
          <li class="reveal relative pl-8 md:pl-0">
            <!-- Dot; on md+ the line to the next step runs through the column gap -->
            <div
              class="absolute -left-[9px] top-1 md:static md:flex md:items-center md:mb-10"
              [class.md:-mr-10]="!last"
            >
              <span
                class="block size-4 shrink-0 rounded-full bg-fire-500 ring-4 ring-fire-500/25"
              ></span>
              @if (!last) {
              <span class="hidden md:block flex-1 h-px bg-white/20 ml-4"></span>
              }
            </div>

            <span
              class="block font-spartan text-6xl md:text-7xl font-medium leading-none text-white/15 mb-4"
              aria-hidden="true"
            >
              {{ (i + 1).toString().padStart(2, '0') }}
            </span>
            <h3 class="text-2xl font-medium mb-3">{{ step.title }}</h3>
            <p class="text-white/75 leading-relaxed">{{ step.description }}</p>
          </li>
          }
        </ol>

        <!-- Closing CTA -->
        <div
          class="mt-16 md:mt-20 pt-10 border-t border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6"
        >
          <p class="text-xl md:text-2xl font-spartan">
            Ready to take the first step?
          </p>
          <a
            routerLink="/book-your-appointment"
            class="bg-fire-600 text-white font-medium text-center px-8 py-3.5 rounded-lg hover:bg-fire-700 transition-colors"
          >
            Book a Consultation
          </a>
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
  @Input() content: { data: HomePageContent | null } = { data: null };
}
