import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginListComponent } from './login-list/login-list.component';
import { LoginComponent } from './login/login.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostComponent } from './post/post-create/post.component';

const routes: Routes = [
  {
  path:'', component: PostListComponent
  },
  {
  path:'create',component: PostComponent
  },
  {
  path:'login',component: LoginComponent
  },
  {
    path:'userLogins',component: LoginListComponent
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
