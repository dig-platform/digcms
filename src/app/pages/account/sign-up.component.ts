import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LayoutComponent} from '../../components/layout/layout.component';
import {TitleComponent} from '../../components/title.component';
import {ButtonComponent} from '../../components/button.component';
import {LayoutHeaderComponent} from '../../components/layout/layout-header.component';
import {LayoutMainComponent} from '../../components/layout/layout-main.component';
import {LayoutFooterComponent} from '../../components/layout/layout-footer.component';
import {RouterModule} from '@angular/router';
import {TextComponent} from '../../components/text.component';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent,
    TitleComponent,
    LayoutComponent,
    LayoutHeaderComponent,
    LayoutMainComponent,
    LayoutFooterComponent,
    RouterModule,
    TextComponent
  ],
  template: `
    <app-layout>
      <app-layout-header>
        <app-title>Sign Up</app-title>
      </app-layout-header>
      <app-layout-main>
        <app-text>Create new account intro</app-text>
      </app-layout-main>
      <app-layout-footer>
      </app-layout-footer>
    </app-layout>
  `,
  styles: [
  ]
})
export default class SignUpComponent {

}
