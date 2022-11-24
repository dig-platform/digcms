import { Action, createReducer, on } from '@ngrx/store';
import * as OrderActions from './order.actions';

export const orderFeatureKey = 'order';

export interface State {

}

export const initialState: State = {

};

export const reducer = createReducer(
  initialState,

  on(OrderActions.loadOrders, state => state),

);
