import {Component, Inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Router} from '@angular/router';
import {PageService} from '../../../page/services/page.service';
import {ContentNodeService} from '../../../page/services/content-node.service';
import {Store} from '@ngrx/store';
import {MediaGridComponent} from '../media-grid/media-grid.component';

@Component({
  selector: 'app-media-modal',
  standalone: true,
  imports: [CommonModule, MediaGridComponent],
  templateUrl: './media-modal.component.html',
  styleUrls: ['./media-modal.component.scss']
})
export class MediaModalComponent {
  constructor(
    public dialogRef: MatDialogRef<MediaModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    // private router: Router,
    // private pageService: PageService,
    // private contentService: ContentNodeService,
    // private store: Store
  ) {}

  setMedia($event: any) {
    this.dialogRef.close({media: {...$event}})
  }

  cancel() {
    this.dialogRef.close();
  }
}
