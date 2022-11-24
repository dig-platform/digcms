import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-text',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="text">
      <ng-content></ng-content>
    </div>
  `,
  styles: [
  ]
})
export class TextComponent {

}
