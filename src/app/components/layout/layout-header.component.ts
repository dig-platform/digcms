import {Component, Input, OnInit} from '@angular/core';
import {CommonModule, Location} from '@angular/common';
import {SlotDirective} from '../../directives/slot.directive';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {BackButtonComponent} from '../back-button.component';

@Component({
  selector: 'app-layout-header',
  standalone: true,
  imports: [CommonModule, SlotDirective, MatToolbarModule, MatIconModule, MatButtonModule, BackButtonComponent],
  template: `
    <mat-toolbar class="layout-header">
      <div class="layout-header-start">
        <app-back-button *ngIf="showBackButton"></app-back-button>
        <ng-content select="[slot]='start'"></ng-content>
      </div>
      <div class="layout-header-main">
        <ng-content></ng-content>
      </div>
      <div class="layout-header-end">
        <ng-content select="[slot]='end'"></ng-content>
      </div>
    </mat-toolbar>
  `,
  styles: [`
    .layout-header-main{
      flex: 1;
    }
  `]
})
export class LayoutHeaderComponent implements OnInit {
  @Input() showBackButton: boolean = true;

  constructor(private location: Location) {
  }

  ngOnInit(): void {
    this.showBackButton = !! this.location.path();
  }

}
