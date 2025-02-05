import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  template: `
   <div class="container mx-auto px-4">
      <div class="flex">
        <!-- image div -->
        <div>

        </div>

        <!-- content div  -->
        <div class="flex flex-col gap-4">
          <div class="flex items-center gap-2">
            <img src="assets/images/plane.svg">
            <h2 class="text-3xl font-medium">About <span class="font-bold">VELOX</span></h2>
          </div>
          <h2 class="text-5xl pb-2 border-b border-fire-500">Why choose us?</h2>
          <p>{{about.content}}</p>
        </div>

      </div>
    </div>
  `,
  styles: ``
})
export class AboutComponent {
  about = signal([
    {
      content:'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.'
    }
  ])
}
