import { Component, OnInit } from '@angular/core';
import templateString from './dashboard.component.html';

import { Post } from '../_models/post';
import { PostService } from '../_services/post.service';

@Component({
  template: templateString,
  providers: [PostService]
})
export class DashboardComponent implements OnInit {

  isLoading: boolean;
  error: boolean;
  posts: Post[];

  constructor(
    private postService: PostService
  ) {
    this.isLoading = true;
    this.error = false;
    this.posts = [];
  }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
    this.postService.getPosts().subscribe({
      next: posts => {
        this.posts = posts;
        this.isLoading = false;
      },
      error: err => {
        console.log("Problem getting Posts");
        this.isLoading = false;
        this.error = true;
      }
    });
  }

  onPostCreation() {
    this.getPosts();
  }
}
