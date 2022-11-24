import { Action, createReducer, on } from '@ngrx/store';
import * as MenuActions from './menu.actions';
import {Menu} from '../../interfaces/menu';

export const menuFeatureKey = 'menu';

export interface State {
  menu?: Menu;
}

export const initialState: State = {
  menu: undefined
};

export const reducer = createReducer(
  initialState,
  on(MenuActions.resetMenu, state => ({...initialState})),
);
