import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-brand',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="brand" routerLink="/">digcms</div>
  `,
  styles: [`
    .brand{
      font-size: 1.25rem;
      font-weight: 900;
    }
  `]
})
export class BrandComponent {

}
