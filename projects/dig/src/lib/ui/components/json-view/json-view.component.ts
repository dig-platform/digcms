import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {CodeViewComponent} from '../code-view/code-view.component';

@Component({
  selector: 'app-json-view',
  standalone: true,
  imports: [CommonModule, CodeViewComponent],
  templateUrl: './json-view.component.html',
  styleUrls: ['./json-view.component.scss']
})
export class JsonViewComponent {
  @Input() data: any = {}

  get json() {
    return JSON.stringify(this.data, null, 2);
  }
}
