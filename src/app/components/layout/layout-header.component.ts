import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SlotDirective} from '../../directives/slot.directive';

@Component({
  selector: 'app-layout-header',
  standalone: true,
  imports: [CommonModule, SlotDirective],
  template: `
    <div class="layout-header">
      <div class="layout-header-start">
        <ng-content select="[slot]='start'"></ng-content>
      </div>
      <div class="layout-header-main">
        <ng-content></ng-content>
      </div>
      <div class="layout-header-end">
        <ng-content select="[slot]='end'"></ng-content>
      </div>
    </div>
  `,
  styles: [`
    .layout-header{
      display: flex;
      flex-direction: row;
      align-items: center;
      background: #333;
      color: #fff;
      padding: var(--gutter-md)
    }
    .layout-header-start{
    }
    .layout-header-main{
      flex: 1;
    }
    .layout-header-end{
    }
  `]
})
export class LayoutHeaderComponent {

}
