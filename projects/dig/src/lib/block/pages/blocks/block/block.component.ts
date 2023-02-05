import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {removeBlock, resetActiveBlock, setActiveContentBlock} from '../../../state/content-block/content-block.actions';
import {selectActiveContentBlock, selectContentBlocks} from '../../../state/content-block/content-block.selectors';
import {ContentNodeService} from '../../../../page/services/content-node.service';
import {ContentNode} from '../../../../page/interfaces/content-node';
import {resetActiveNode, setActiveNode} from '../../../../page/state/content-nodes/content-node.actions';
import {firstValueFrom} from 'rxjs';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.scss']
})
export class BlockComponent implements OnInit{
  readonly blocks$ = this.store.select(selectContentBlocks);
  readonly block$ = this.store.select(selectActiveContentBlock);

  private _activeNode!: ContentNode;
  public dirty: boolean = false;

  constructor(
    private contentService: ContentNodeService,
    private route: ActivatedRoute,
    private router: Router,
    private store: Store
  ) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(({blockId}) => {
      this.store.dispatch(setActiveContentBlock({blockId}));
    })
  }

  updateNode($event: ContentNode) {
    if ($event === this._activeNode) {
      return;
    }
    this._activeNode = {
      ...this._activeNode,
      ...$event
    } as ContentNode;
    this.dirty = true;
  }

  async saveActiveNode() {
    this.dirty = false;
    if (this._activeNode) {
      const node = await this.contentService.updateNode(this._activeNode);
      this.store.dispatch(setActiveNode({node}))
    }
    return;
  }
}
