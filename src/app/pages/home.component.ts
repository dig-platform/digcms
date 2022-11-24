import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonComponent} from '../components/button.component';
import {TitleComponent} from '../components/title.component';
import {LayoutComponent} from '../components/layout/layout.component';
import {LayoutHeaderComponent} from '../components/layout/layout-header.component';
import {LayoutMainComponent} from '../components/layout/layout-main.component';
import {LayoutFooterComponent} from '../components/layout/layout-footer.component';
import {RouterLink, RouterModule} from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent,
    TitleComponent,
    LayoutComponent,
    LayoutHeaderComponent,
    LayoutMainComponent,
    LayoutFooterComponent,
    RouterModule
  ],
  template: `
    <app-layout>
      <app-layout-header>
        <app-title>CartCart</app-title>
      </app-layout-header>
      <app-layout-main>
        <app-button>Sign In</app-button>
      </app-layout-main>
      <app-layout-footer>
        <app-button routerLink="/account/sign-up">Sign Up</app-button>
      </app-layout-footer>
    </app-layout>
  `,
  styles: [
  ]
})
export default class HomeComponent {
  test() {
    console.log('test');
  }
}
