import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadCreateComponent } from './head-create/head-create.component';
import { PostListComponent } from './post-list/post-list.component';
//import { PostService } from './post.service';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { LoginListComponent } from './login-list/login-list.component';
import { LoginComponent } from './login/login.component';
import { PostComponent } from './post/post-create/post.component';



@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    PostListComponent,
    HeadCreateComponent,
    LoginComponent,
    LoginListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatExpansionModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatToolbarModule,
    HttpClientModule,
    MatMenuModule,
    MatIconModule
  ],
  providers: [
    provideAnimationsAsync(),
    //PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
