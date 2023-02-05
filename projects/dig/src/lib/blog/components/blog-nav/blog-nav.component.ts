import {Component, Inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {Store} from '@ngrx/store';
import {RouterModule} from '@angular/router';
import {selectRecentPosts} from '../../state/post/post.selectors';
import {CreatePostButtonComponent} from '../create-post-button/create-post-button.component';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-blog-nav',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatListModule,
    CreatePostButtonComponent,
    MatButtonModule,
    RouterModule,
  ],
  templateUrl: './blog-nav.component.html',
  styleUrls: ['./blog-nav.component.scss']
})
export class BlogNavComponent {
  readonly posts$ = this.store.select(selectRecentPosts);

  constructor(
    private store: Store
  ) {}
}
