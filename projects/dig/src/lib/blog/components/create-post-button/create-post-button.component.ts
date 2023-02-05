import {Component, EventEmitter, Input, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {CreatePostModalComponent} from '../create-post-modal/create-post-modal.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-create-post-button',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule
  ],
  templateUrl: './create-post-button.component.html',
  styleUrls: ['./create-post-button.component.scss']
})
export class CreatePostButtonComponent {
  @Input() text = 'Create Post';
  @Output() selectionChanged = new EventEmitter<any>();

  constructor(public dialog: MatDialog) {
  }
  showModal() {
    const dialogRef = this.dialog.open(CreatePostModalComponent, {
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
