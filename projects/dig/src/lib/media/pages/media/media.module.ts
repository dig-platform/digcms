import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MediaRoutingModule } from './media-routing.module';
import { MediaComponent } from './media.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MediaViewerComponent} from '../../components/media-viewer/media-viewer.component';
import {DropzoneDirective} from '../../directives/dropzone.directive';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MediaUploadProgressComponent} from '../../components/media-upload-progress/media-upload-progress.component';
import {MatChipsModule} from '@angular/material/chips';
import {ReactiveFormsModule} from '@angular/forms';
import {MediaGridComponent} from '../../components/media-grid/media-grid.component';


@NgModule({
  declarations: [
    MediaComponent
  ],
  imports: [
    CommonModule,
    MediaRoutingModule,
    MatGridListModule,
    MediaViewerComponent,
    DropzoneDirective,
    MatProgressBarModule,
    MediaUploadProgressComponent,
    MatChipsModule,
    ReactiveFormsModule,
    MediaGridComponent
  ]
})
export class MediaModule { }
