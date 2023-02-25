import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Store} from '@ngrx/store';
import {Router, RouterModule} from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {selectShortcuts} from '../../../ui/state/editor/editor.selectors';

@Component({
  selector: 'dig-shortcut-nav',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule, MatListModule, RouterModule],
  templateUrl: './shortcut-nav.component.html',
  styleUrls: ['./shortcut-nav.component.scss']
})
export class ShortcutNavComponent {
  readonly shortcuts$ = this.store.select(selectShortcuts);

  constructor(private store: Store) {
  }

  create() {
    // todo create a shortcut
  }
}
