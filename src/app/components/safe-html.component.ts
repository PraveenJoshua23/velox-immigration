import { Component, input, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { inject } from '@angular/core';

@Component({
  selector: 'app-safe-html',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div [class]="containerClass()" [innerHTML]="safeContent()"></div>
  `,
})
export class SafeHtmlComponent {
  private sanitizer = inject(DomSanitizer);

  // Input for the HTML content to be sanitized
  htmlContent = input<string>('');

  // Input for optional CSS classes
  containerClass = input<string>('');

  // Computed signal that sanitizes the HTML content
  safeContent = computed<SafeHtml>(() => {
    if (!this.htmlContent()) {
      return '';
    }
    return this.sanitizer.bypassSecurityTrustHtml(this.htmlContent());
  });
}
