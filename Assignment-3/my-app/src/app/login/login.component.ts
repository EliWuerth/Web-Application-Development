import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostService } from '../post.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  constructor(public postsService: PostService){ }

  onAddPost(form: NgForm){
    if(form.invalid){
      return;
    }
    this.postsService.addLogin(form.value.email, form.value.password);
    form.resetForm();
  }

}
