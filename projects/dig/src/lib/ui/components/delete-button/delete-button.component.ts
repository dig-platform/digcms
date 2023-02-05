import {Component, EventEmitter, Input, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-delete-button',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './delete-button.component.html',
  styleUrls: ['./delete-button.component.scss']
})
export class DeleteButtonComponent {
  @Input() timeout = 2500;
  @Input() text = '';
  @Output() confirmed: EventEmitter<boolean> = new EventEmitter<boolean>();
  clicked = false;

  delete() {
    this.clicked = true;
    setTimeout(() => {
      this.clicked = false;
    }, this.timeout)
  }

  confirm() {
    this.confirmed.emit(true);
    this.clicked = false;
  }

  cancel() {
    this.clicked = false;
  }
}
