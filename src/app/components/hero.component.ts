import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, MatButtonModule, RouterLink],
  template: `
    <div class="hero">
      <h1>DigCms</h1>
      <p>Enterprise CMS made easy!</p>
      <div class="actions">
        <button mat-raised-button routerLink="/demo">Demo</button>
        <button mat-raised-button disabled>Docs</button>
      </div>
    </div>
  `,
  styles: [`
    .hero{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: var(--gutter-xl);
      em{
        font-style: normal;
        color: var(--color-primary-500);
      }
      h1{
        font-weight: 900;
        margin: 0;
      }
    }
    .actions{
      button{
        margin: 0 var(--gutter-sm)
      }
    }
  `]
})
export class HeroComponent {

}
