import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private posts: any[] = [];
  private postsUpdated = new BehaviorSubject<any[]>([]);

  constructor() { }

  addPost(postData: any) {
    this.posts.push(postData);
    this.postsUpdated.next([...this.posts]);
  }

  getPosts() {
    return [...this.posts];
  }

  getPostsUpdateListener() {
    return this.postsUpdated.asObservable();
  }
}

