import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PostService } from '../post.service';
import { Post } from '../post/post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['../styles.css']
})
export class PostListComponent implements OnInit, OnDestroy{
  posts: Post[]=[];
  private postsSub: Subscription;

  constructor(private postsService: PostService) {

  }
  ngOnInit() {
    this.postsService.getPosts();
      this.postsSub = this.postsService.getPostUpdateListener().subscribe((posts: Post[])=>{
        this.posts = posts;
      });

  }
  onDelete(postId: string){
    this.postsService.deletePost(postId)
  }
  ngOnDestroy() {
      this.postsSub.unsubscribe();
  }

}
