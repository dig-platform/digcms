import { Action, createReducer, on } from '@ngrx/store';
import * as DigActions from './dig.actions';

export const digFeatureKey = 'dig';

export interface State {
  panels: any
}

export const initialState: State = {
  panels: {}
};

export const reducer = createReducer(
  initialState,
  on(DigActions.loadDigSuccess, (state, {persistedState}) => ({...state, ...persistedState})),
  on(DigActions.setPanel, (state, {id, panel}) => ({
    ...state,
    panels: {
      ...state.panels,
      [id]: {...panel}
    }
  })),
);
