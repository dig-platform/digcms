import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Store} from '@ngrx/store';
import {selectMediaUpload} from '../../state/media/media.selectors';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {FileSizePipe} from '../../pipes/file-size.pipe';

@Component({
  selector: 'app-media-upload-progress',
  standalone: true,
  imports: [CommonModule, MatProgressBarModule, FileSizePipe],
  templateUrl: './media-upload-progress.component.html',
  styleUrls: ['./media-upload-progress.component.scss']
})
export class MediaUploadProgressComponent {
  readonly upload$ = this.store.select(selectMediaUpload);

  constructor(private store: Store) {
  }
}
