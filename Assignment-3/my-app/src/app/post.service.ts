import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, map } from 'rxjs';
import { Post } from '../app/post/post.model';
import { Login } from './login/login.model';

  @Injectable({
    providedIn: 'root'
  })
  export class PostService {

    private posts: Post[] = [];
    private postUpDate = new Subject<Post[]>();

    private logins: Login[] = [];
    private loginUpDate = new Subject<Login[]>();

    constructor(private http: HttpClient){}

    getLogin() {
      this.http.get<{ messsage: string, logins: any}>("http://localhost:3008/login").pipe(map((loginData) => {
        return loginData.logins.map(logins => {
          return {
            email: logins.email,
            password: logins.password,
            id: logins._id
          };
        });
      })).subscribe((transformedLogin) => {
        this.logins = transformedLogin;
        this.loginUpDate.next([...this.logins]); //send
      });
    }

    getLoginUpdateListener() {
      return this.loginUpDate.asObservable();
    }

    addLogin(email: string, password: string) {
      const login: Login = { id: null, email: email, password: password };
      this.http.post<{ messsage: string; loginId: string; }>("http://localhost:3008/login", login).
        subscribe((responseData) => {
          const id = responseData.loginId;
          login.id = id;
          this.logins.push(login);
          this.loginUpDate.next([...this.logins]);
        });
    }

    getPosts() {
      this.http.get<{ messsage: string, posts: any}>("http://localhost:3008/posts").pipe(map((postData) => {
        return postData.posts.map(post => {
          return {
            title: post.title,
            content: post.content,
            id: post._id
          };
        });
      })).subscribe((transformedPost) => {
        this.posts = transformedPost;
        this.postUpDate.next([...this.posts]); //send
      });
    }


    getPostUpdateListener() {
      return this.postUpDate.asObservable();
    }

    addPost(title: string, content: string) {
      const post: Post = { id: null, title: title, content: content };
      this.http.post<{ messsage: string; postId: string; }>("http://localhost:3008/posts", post).
        subscribe((responseData) => {
          const id = responseData.postId;
          post.id = id;
          this.posts.push(post);
          this.postUpDate.next([...this.posts]);
        });
    }
    deletePost(postId: string) {
      this.http.delete("http://localhost:3008/posts/"+postId).subscribe(()=> {
        const updatedPost = this.posts.filter(post => post.id !==postId);
        this.posts = updatedPost;
        this.postUpDate.next([...this.posts]);
      });
    }
  };

