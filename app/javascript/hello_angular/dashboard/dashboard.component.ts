import { Component, OnInit } from '@angular/core';
import templateString from './dashboard.component.html';

import { Post, PostArray } from '../_interfaces/post.interface';
import { PostService } from '../_services/post.service';

@Component({
  template: templateString,
  providers: [PostService]
})
export class DashboardComponent implements OnInit {

  isLoading: boolean;
  posts: Post[];

  constructor(
    private postService: PostService
  ) {
    this.isLoading = true;
    this.posts = [];
  }

  ngOnInit() {
    console.log("ngOnInit()!");
    debugger;
    this.postService.getPosts()
      .subscribe({
        next: resp => {
          console.log("We got posts!");
          this.isLoading = false;
          for (let entry of resp.data) {
            this.posts.push({id: entry.id, title: entry.attributes.title});
          }
        },
        error: err => {
          console.log("There was a problem fetching Posts!");
          this.isLoading = false;
        }
      })
  }
}
