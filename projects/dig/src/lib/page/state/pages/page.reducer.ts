import { Action, createReducer, on } from '@ngrx/store';
import * as PageActions from './page.actions';
import {Page} from '../../interfaces/page';
import {ContentNode} from '../../interfaces/content-node';

export const pageFeatureKey = 'page';

export interface State {
  dirty: boolean;
  loaded: boolean;
  pages: Page[];
  activePage: Page | undefined;
}

export const initialState: State = {
  dirty: false,
  activePage: undefined,
  loaded: false,
  pages: []
};

export const reducer = createReducer(
  initialState,
  on(PageActions.loadPages, state => ({...state, loaded: false})),
  on(PageActions.loadPagesSuccess, (state, {pages}) => ({...state, pages, loaded: true})),
  on(PageActions.loadPageSuccess, (state, {page}) => ({...state, activePage: {...page}, loaded: true, dirty: false})),
  on(PageActions.resetPageState, (state) => ({...initialState}))
);
