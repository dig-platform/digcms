import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'dig-editor-toolbar',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatButtonModule, MatIconModule],
  template: `
    <mat-toolbar>
      <button mat-icon-button>
        <mat-icon>title</mat-icon>
      </button>
      <button mat-icon-button>
        <mat-icon fontSet="material-symbols-outlined">format_paragraph</mat-icon>
      </button>
      <button mat-icon-button>
        <mat-icon fontSet="material-symbols-outlined">format_quote</mat-icon>
      </button>
      <button mat-icon-button>
        <mat-icon fontSet="material-symbols-outlined">format_list_bulleted</mat-icon>
      </button>
      <button mat-icon-button>
        <mat-icon fontSet="material-symbols-outlined">format_list_numbered</mat-icon>
      </button>
      <button mat-icon-button>
        <mat-icon fontSet="material-symbols-outlined">code</mat-icon>
      </button>
    </mat-toolbar>
  `,
  styles: [
  ]
})
export class ToolbarComponent {

  constructor() {
  }
}
