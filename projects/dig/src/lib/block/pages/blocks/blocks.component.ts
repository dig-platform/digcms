import { Component } from '@angular/core';
import {Store} from '@ngrx/store';
import {selectContentBlocks} from '../../state/content-block/content-block.selectors';

@Component({
  selector: 'app-blocks',
  templateUrl: './blocks.component.html',
  styleUrls: ['./blocks.component.scss']
})
export class BlocksComponent {
  readonly blocks$ = this.store.select(selectContentBlocks);

  constructor(private store: Store) {
  }
}
