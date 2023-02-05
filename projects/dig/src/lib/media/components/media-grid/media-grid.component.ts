import {Component, EventEmitter, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import {selectMedia, selectMediaTags} from '../../state/media/media.selectors';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {mergeMap} from 'rxjs';
import {map} from 'rxjs/operators';
import {MediaService} from '../../services/media.service';
import {Store} from '@ngrx/store';
import {loadMedia, resetMediaUpload, setUploadProgress, startMediaUpload} from '../../state/media/media.actions';
import {MediaUploadProgressComponent} from '../media-upload-progress/media-upload-progress.component';
import {MatChipsModule} from '@angular/material/chips';
import {MatGridListModule} from '@angular/material/grid-list';
import {MediaViewerComponent} from '../media-viewer/media-viewer.component';
import {RouterLink} from '@angular/router';
import {DropzoneDirective} from '../../directives/dropzone.directive';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-media-grid',
  standalone: true,
  imports: [CommonModule, MediaUploadProgressComponent, ReactiveFormsModule, MatChipsModule, MatGridListModule, MediaViewerComponent, RouterLink, DropzoneDirective, MatFormFieldModule, MatIconModule, MatInputModule],
  templateUrl: './media-grid.component.html',
  styleUrls: ['./media-grid.component.scss']
})
export class MediaGridComponent {
  readonly media$ = this.store.select(selectMedia);
  readonly tags$ = this.store.select(selectMediaTags);

  @Output() selectionChanged = new EventEmitter<any>();

  readonly filters = new FormGroup({
    query: new FormControl(''),
    tags: new FormControl([])
  })

  readonly visibleMedia$ = this.filters.valueChanges.pipe(
    mergeMap((filters: any) => this.media$.pipe(
      map(media => media.filter(file => {
        const filename = file.name.toLowerCase().trim();
        const {query, tags} = filters;
        if (!! query) {
          const cleanQuery = query.toLowerCase().trim();
          if (! filename.includes(cleanQuery)) {
            return false;
          }
        }
        if (tags && tags.length > 0) {
          if (! file.tags || file.tags.length === 0) {
            return false;
          }
          const tagMatches = tags.filter((t: any) => file.tags?.includes(t));
          if (tagMatches?.length === 0) {
            return false;
          }
        }
        return true;
      }))
    ))
  );

  constructor(private mediaService: MediaService, private store: Store) {
    this.store.dispatch(loadMedia());
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.filters.setValue({
        query: '',
        tags: []
      } as any)
    });
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

  tileClick(tile: any) {
    this.selectionChanged.emit(tile);
  }
}
