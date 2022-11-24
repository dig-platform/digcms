import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-layout-main',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="layout-main">
      <ng-content></ng-content>
    </div>
  `,
  styles: [
  ]
})
export class LayoutMainComponent {

}
