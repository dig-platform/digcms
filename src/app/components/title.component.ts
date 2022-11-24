import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="title">
      <ng-content></ng-content>
    </div>
  `,
  styles: [`
    .title{
      font-size: 2rem;
      font-weight: 900;
    }
  `]
})
export class TitleComponent {

}
