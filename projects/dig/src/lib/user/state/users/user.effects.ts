import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import * as UserActions from './user.actions';
import {UserService} from '../../services/user.service';
import {loadDig} from '../../../core/state/dig/dig.actions';
import {User} from '../../interfaces/user';


@Injectable()
export class UserEffects {

  loadUsers$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UserActions.loadUsers, loadDig),
      concatMap(() => this.userService.getUsers().pipe(
        concatMap((users: User[]) => this.userService.getUserRoles().pipe(
          map((roles: any) => {
            return UserActions.loadUsersSuccess({ users: users.map(u => ({
              ...u,
              role: roles[u.uid] ?   roles[u.uid] : 'guest'
            })) });
          })
        ))
      ))
    );
  });


  constructor(private actions$: Actions, private userService: UserService) {}
}
