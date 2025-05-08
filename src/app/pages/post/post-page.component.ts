import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { PostComponent } from '../../components/post.component';

@Component({
  selector: 'app-post-page',
  standalone: true,
  imports: [CommonModule, PostComponent],
  template: `<app-post />`
})
export class PostPageComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  
  ngOnInit(): void {
    // Check if we're on the correct route
    this.route.paramMap.subscribe(params => {
      const slug = params.get('slug');
      
      if (!slug && this.router.url === '/blog/posts') {
        // If we're on the /blog/posts route without a slug, redirect to the post list
        this.router.navigate(['/blog/posts']);
      }
    });
  }
}
