import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Store} from '@ngrx/store';
import * as NodeActions from '../../store/editor/node/node.actions';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';

@Component({
  selector: 'dig-editor-format-button',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, MatMenuModule],
  template: `
    <button mat-icon-button (click)="setFormat()">
      <mat-icon fontSet="material-symbols-outlined">format_{{format}}</mat-icon>
      <ng-content></ng-content>
    </button>
  `,
  styles: [
  ]
})
export class FormatButtonComponent {
  @Input() id!: string;
  @Input() format!: string;
  @Input() icon!: string;
  constructor(private store: Store) {
  }
  setFormat() {
    this.store.dispatch(NodeActions.formatNode({
      format: this.format,
      id: this.id
    }));
  }
}
