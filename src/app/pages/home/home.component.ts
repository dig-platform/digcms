import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TitleComponent} from '../../components/title.component';
import {LayoutComponent} from '../../components/layout/layout.component';
import {LayoutHeaderComponent} from '../../components/layout/layout-header.component';
import {LayoutMainComponent} from '../../components/layout/layout-main.component';
import {LayoutFooterComponent} from '../../components/layout/layout-footer.component';
import {RouterLink, RouterModule} from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {BrandComponent} from '../../components/brand.component';
import {HeroComponent} from '../../components/hero.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    TitleComponent,
    LayoutComponent,
    LayoutHeaderComponent,
    LayoutMainComponent,
    LayoutFooterComponent,
    RouterModule,
    MatButtonModule,
    BrandComponent,
    HeroComponent
  ],
  template: `
    <app-layout>
      <app-layout-header>
        <app-brand></app-brand>
      </app-layout-header>
      <app-layout-main>
        <app-hero></app-hero>
      </app-layout-main>
      <app-layout-footer>
      </app-layout-footer>
    </app-layout>
  `,
  styles: [`
  `]
})
export default class HomeComponent {
}
