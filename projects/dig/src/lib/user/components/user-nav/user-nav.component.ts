import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Store} from '@ngrx/store';
import {selectRecentUsers} from '../../state/users/user.selectors';
import {MatListModule} from '@angular/material/list';
import {RouterModule} from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {loadUsers} from '../../state/users/user.actions';

@Component({
  selector: 'app-user-nav',
  standalone: true,
  imports: [CommonModule, MatListModule, RouterModule, MatIconModule, MatButtonModule],
  templateUrl: './user-nav.component.html',
  styleUrls: ['./user-nav.component.scss']
})
export class UserNavComponent {
  readonly users$ = this.store.select(selectRecentUsers);

  constructor(private store: Store) {
    this.store.dispatch(loadUsers());
  }
}
