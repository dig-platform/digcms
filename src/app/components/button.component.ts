import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <button>
      <ng-content></ng-content>
    </button>
  `,
  styles: [`
    button{
      display: inline-block;
      padding: var(--gutter-sm) var(--gutter-lg);
      border-radius: var(--gutter-md);
      display: flex;
      align-items: center;
      flex-direction: row;
      background: var(--color-primary);
      color: var(--color-background-contrast);
    }
  `]
})
export class ButtonComponent {
}
