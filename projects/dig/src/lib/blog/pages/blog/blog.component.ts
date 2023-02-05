import { Component } from '@angular/core';
import {Store} from '@ngrx/store';
import {selectPosts} from '../../state/post/post.selectors';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {
  readonly posts$ = this.store.select(selectPosts);

  constructor(private store: Store) {
  }
}
