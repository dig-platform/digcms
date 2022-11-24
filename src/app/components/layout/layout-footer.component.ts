import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-layout-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="layout-footer">
      <ng-content></ng-content>
    </div>
  `,
  styles: [
  ]
})
export class LayoutFooterComponent {

}
