import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { Post } from './posts/models/post.model';
import * as PostActions from './posts/actions/post.actions';

interface AppSate {
  post: Post;
}

@Component({
  selector: 'app-root',
  template: `
    <div *ngIf="post | async as p">
      
      <h2>{{ p.text }}</h2>
      <h4>Votes: {{ p.likes }}</h4>
      
      <button (click)="upVote()">Up Vote</button>
      <button (click)="downVote()">Down Vote</button>
      <button (click)="reset()">Reset</button>
      
      <hr>
      
      <input type="text" [(ngModel)]="text">
      <button (click)="editText()">Change Title</button>
      
    </div>
  `,
})
export class AppComponent {

  post: Observable<Post>;
  text: string; // form input value

  constructor(private store: Store<AppSate>) {
    this.post = this.store.select('post')
  }

  editText() {
    this.store.dispatch(new PostActions.EditText(this.text))
  }

  upVote() {
    this.store.dispatch(new PostActions.UpVote())
  }

  downVote() {
    this.store.dispatch(new PostActions.DownVote())
  }

  reset() {
    this.store.dispatch(new PostActions.Reset())
  }
}
