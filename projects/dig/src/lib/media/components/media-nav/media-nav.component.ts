import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UploadDirective} from '../../directives/upload.directive';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {Store} from '@ngrx/store';
import {Router, RouterModule} from '@angular/router';
import {selectRecentMedia} from '../../state/media/media.selectors';
import {map} from 'rxjs/operators';
import {MediaTitlePipe} from '../../pipes/media-title.pipe';
import {MatButtonModule} from '@angular/material/button';
import {resetMediaUpload, setUploadProgress, startMediaUpload} from '../../state/media/media.actions';

@Component({
  selector: 'app-media-nav',
  standalone: true,
  imports: [CommonModule, UploadDirective, MatIconModule, MatListModule, MediaTitlePipe, RouterModule, MatButtonModule],
  templateUrl: './media-nav.component.html',
  styleUrls: ['./media-nav.component.scss']
})
export class MediaNavComponent {
  readonly media$ = this.store.select(selectRecentMedia);

  constructor(private store: Store, private router: Router) {
  }

  afterUpload($event: any) {

  }

  startUpload($event: any) {
    const {name, size, type} = $event;
    this.store.dispatch(startMediaUpload({
      upload: {
        name,
        size,
        progress: 0,
        type
      }
    }))
  }

  setProgress($event: number | null) {
    if ($event === 100) {
      this.store.dispatch(resetMediaUpload())
    } else {
      this.store.dispatch(setUploadProgress({progress: $event ? +$event : -1}))
    }

  }
}
