import { Component } from '@angular/core';
import {Store} from '@ngrx/store';
import {selectUsers} from '../../state/users/user.selectors';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  readonly users$ = this.store.select(selectUsers);
  constructor(private store: Store) {
  }
}
