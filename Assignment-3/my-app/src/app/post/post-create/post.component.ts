import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostService } from '../../post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {

  binding = '';
  enteredContent = '';
  enteredTitle = '';
  //@Output() postCreated = new EventEmitter<Post>();

  constructor(public postsService: PostService){}
  onAddPost(form: NgForm){
    if(form.invalid){
      return;
    }
    this.postsService.addPost(form.value.title, form.value.content);
    form.resetForm();
  }
}

