import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  template: `
    <!-- <section class="bg-[#F5F5F6]">
      <div class="flex container mx-auto py-20">

        <div></div>

   
        <div class="flex flex-col gap-4">
          <div class="flex items-center gap-2">
            <img src="assets/images/plane.svg" />
            <h2 class="text-3xl font-medium">
              About <span class="font-bold">VELOX</span>
            </h2>
          </div>
          <h2 class="text-5xl pb-2 border-b border-fire-500">Why choose us?</h2>
          <p>{{ about()[0].content }}</p>
        </div>
      </div>
    </section> -->

    <section class="bg-[#F5F5F6] py-16">
      <div class="w-[1080px] mx-auto px-4">
        <div class="flex flex-col md:flex-row items-center gap-12">
          <!-- Left Side Images -->
          <div class="md:w-1/2 relative">
            <!-- <div class="grid grid-cols-2 gap-4">
              <img
                src="assets/person1.jpg"
                alt="Immigration candidate 1"
                class="w-full h-48 object-cover rounded-lg"
              />
              <img
                src="assets/person2.jpg"
                alt="Immigration candidate 2"
                class="w-full h-48 object-cover rounded-lg"
              />
              <div class="col-span-2">
                <img
                  src="assets/person3.jpg"
                  alt="Immigration consultant"
                  class="w-full h-64 object-cover rounded-lg"
                />
              </div>
            </div>
            <img
              src="assets/maple-leaf.png"
              alt="Canadian maple leaf"
              class="absolute -top-8 right-0 w-24 h-24 object-contain"
            /> -->
            <img src="assets/images/about-us.svg" />
          </div>

          <!-- Right Side Content -->
          <div class="md:w-1/2">
            <div class="flex items-center gap-2 mb-4">
              <img src="assets/images/plane.svg" class="pb-1" />
              <h2 class="text-3xl font-medium">
                About <span class="font-bold">VELOX</span>
              </h2>
            </div>

            <h2 class="text-5xl pb-2 border-b border-fire-500 text-sea-900">
              Why choose us?
            </h2>

            <p class="text-gray-600 mb-6 py-5">
              {{ about()[0].content }}
            </p>

            <button
              class="px-6 py-2 border-2 border-red-500 text-red-500 rounded-lg hover:bg-red-500 hover:text-white transition-colors"
            >
              Read More
            </button>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: ``,
})
export class AboutComponent {
  about = signal([
    {
      content:
        'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.',
    },
  ]);
}
