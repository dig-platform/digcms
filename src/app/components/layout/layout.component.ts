import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="layout">
      <div class="layout-header-wrapper">
        <ng-content select="app-layout-header"></ng-content>
      </div>
      <div class="layout-main-wrapper">
        <ng-content></ng-content>
      </div>
      <div class="layout-footer-wrapper">
        <ng-content select="app-layout-footer"></ng-content>
      </div>
    </div>
  `,
  styles: [`
    .layout{
      height: 100vh;
      display: flex;
      flex-direction: column;
      .layout-header-wrapper{

      }
      .layout-main-wrapper{
        flex: 1;
        overflow: auto;
      }
      .layout-footer-wrapper{

      }
    }
  `]
})
export class LayoutComponent {

}
