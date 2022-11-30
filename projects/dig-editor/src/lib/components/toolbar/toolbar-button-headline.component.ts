import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {Store} from '@ngrx/store';
import * as NodeActions from '../../store/editor/node/node.actions';

@Component({
  selector: 'dig-editor-toolbar-button-headline',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule, MatMenuModule],
  template: `
    <button mat-icon-button [matMenuTriggerFor]="menu">
      <mat-icon>title</mat-icon>
    </button>
    <mat-menu #menu="matMenu">
      <button *ngFor="let format of formats" mat-menu-item (click)="setFormat(format.format)">
        <mat-icon fontSet="material-symbols-outlined">format_{{format.format}}</mat-icon>
        {{format.label}}
      </button>
    </mat-menu>
  `,
  styles: [
  ]
})
export class ToolbarButtonHeadlineComponent {
  readonly formats = [
    {
      format: 'h1',
      label: 'Headline 1'
    },
    {
      format: 'h2',
      label: 'Headline 2'
    },
    {
      format: 'h3',
      label: 'Headline 3'
    },
    {
      format: 'h4',
      label: 'Headline 4'
    },
  ]
  constructor(private store: Store) {
  }
  setFormat(format: string) {
    this.store.dispatch(NodeActions.formatNode({format}));
  }
}
