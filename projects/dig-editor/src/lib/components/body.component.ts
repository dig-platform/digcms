import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'dig-editor-body',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="dig-editor-body">
      <ng-content></ng-content>
    </div>
  `,
  styles: [
  ]
})
export class BodyComponent {

}
