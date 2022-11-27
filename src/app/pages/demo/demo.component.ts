import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LayoutComponent} from '../../components/layout/layout.component';
import {TitleComponent} from '../../components/title.component';
import {LayoutHeaderComponent} from '../../components/layout/layout-header.component';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [CommonModule, LayoutComponent, LayoutHeaderComponent, TitleComponent],
  template: `
    <app-layout>
      <app-layout-header>
        <app-title>Demo</app-title>
      </app-layout-header>
      Content
    </app-layout>
  `,
  styles: [
  ]
})
export default class DemoComponent {

}
