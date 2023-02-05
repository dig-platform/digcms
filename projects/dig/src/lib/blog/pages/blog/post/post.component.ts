import { Component } from '@angular/core';
import {ContentNodeService} from '../../../../page/services/content-node.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {selectActivePost} from '../../../state/post/post.selectors';
import {setActivePost} from '../../../state/post/post.actions';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
  readonly post$ = this.store.select(selectActivePost);

  public dirty: boolean = false;

  constructor(
    private contentService: ContentNodeService,
    private route: ActivatedRoute,
    private router: Router,
    private store: Store
  ) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(({postId}) => {
      this.store.dispatch(setActivePost({postId}));
    })
  }
}
