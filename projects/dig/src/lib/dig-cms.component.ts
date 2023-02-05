import { Component } from '@angular/core';
import {Store} from '@ngrx/store';
import {loadDig} from './core/state/dig/dig.actions';
import {DigCmsService} from './core/services/dig-cms.service';

@Component({
  selector: 'dig-cms',
  templateUrl: './dig-cms.component.html',
  styleUrls: ['./dig-cms.component.scss']
})
export class DigCmsComponent {
  loading: boolean = true;
  appCheck: boolean = false;
  constructor(
    private digCMs: DigCmsService,
    private store: Store) {
    this.store.dispatch(loadDig())
  }
}
