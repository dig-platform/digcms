import { Component } from '@angular/core';
import {CommonModule, Location} from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-back-button',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule],
  template: `
    <button mat-icon-button (click)="back()">
      <mat-icon>arrow_back_ios_new</mat-icon>
    </button>
  `,
  styles: [
  ]
})
export class BackButtonComponent {
  constructor(private location: Location) {
  }

  back() {
    this.location.back();
  }
}
