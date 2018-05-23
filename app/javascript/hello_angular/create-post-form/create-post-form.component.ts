import { Component, EventEmitter, Output } from '@angular/core';
import templateString from './create-post-form.component.html';

import { Datastore } from '../_services/datastore.service'
import { PostService } from "../_services/post.service";

@Component({
  selector: 'app-create-post-form',
  template: templateString,
  providers: [
    Datastore
  ]
})
export class CreatePostFormComponent {
  @Output() createdPost = new EventEmitter();

  addPostError: boolean;
  addPostSuccess: boolean;
  formInput: any;
  submitted: boolean;

  constructor(
    private datastore: Datastore,
    private postService: PostService,
  ) {
    this.addPostError = false;
    this.addPostSuccess = false;
    this.formInput = {};
    this.submitted = false;
  }

  onSubmit() {
    this.submitted = true;
    this.resetAddPostDisplay();
    this.addPost();
  }

  addPost(): void {
    this.postService.addPost(this.formInput.title)
      .subscribe({
        next: result => {
          this.addPostError = false;
          this.addPostSuccess = true;
          this.createdPost.emit();
        },
        error: err => {
          this.addPostError = true;
          this.addPostSuccess = false;
        }
      });
  }

  resetAddPostDisplay(): void {
    this.addPostSuccess = false;
    this.addPostError = false;
  }
}
