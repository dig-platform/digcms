import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {FormatButtonComponent} from '../buttons/format-button.component';

@Component({
  selector: 'dig-editor-toolbar',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatButtonModule, MatIconModule, MatMenuModule, FormatButtonComponent],
  template: `
    <mat-toolbar>
      <dig-editor-format-button format="h1"></dig-editor-format-button>
      <dig-editor-format-button format="h2"></dig-editor-format-button>
      <dig-editor-format-button format="h3"></dig-editor-format-button>
      <dig-editor-format-button format="paragraph"></dig-editor-format-button>
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
