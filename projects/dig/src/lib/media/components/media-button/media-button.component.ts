import {Component, EventEmitter, Input, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatDialog} from '@angular/material/dialog';
import {CreatePageModalComponent} from '../../../page/components/create-page-modal/create-page-modal.component';
import {MatIconModule} from '@angular/material/icon';
import {MediaModalComponent} from '../media-modal/media-modal.component';

@Component({
  selector: 'app-media-button',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './media-button.component.html',
  styleUrls: ['./media-button.component.scss']
})
export class MediaButtonComponent {
  @Input() text = 'Add media';
  @Output() selectionChanged = new EventEmitter<any>();

  constructor(public dialog: MatDialog) {
  }
  showModal() {
    const dialogRef = this.dialog.open(MediaModalComponent, {
      data: {},
      height: '80vh',
      width: '80vw',
    });
    dialogRef.afterClosed().subscribe(data => {
      if (data && data.media) {
        this.selectionChanged.emit(data.media);
      }
    })
  }
}
