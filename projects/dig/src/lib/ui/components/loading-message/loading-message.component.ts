import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@Component({
  selector: 'dig-loading-message',
  standalone: true,
  imports: [CommonModule, MatProgressSpinnerModule],
  templateUrl: './loading-message.component.html',
  styleUrls: ['./loading-message.component.scss']
})
export class LoadingMessageComponent {
}
