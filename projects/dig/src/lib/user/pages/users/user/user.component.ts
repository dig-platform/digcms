import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {selectActiveUser} from '../../../state/users/user.selectors';
import {ActivatedRoute} from '@angular/router';
import {setActiveUser} from '../../../state/users/user.actions';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit{
  readonly user$ = this.store.select(selectActiveUser);

  constructor(private store: Store, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(({uid}) => this.store.dispatch(setActiveUser({uid})))
  }
}
