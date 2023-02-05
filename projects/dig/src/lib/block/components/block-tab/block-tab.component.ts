import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DeleteButtonComponent} from '../../../ui/components/delete-button/delete-button.component';
import {firstValueFrom} from 'rxjs';
import {removeBlock, resetActiveBlock, setActiveContentBlock} from '../../state/content-block/content-block.actions';
import {selectActiveContentBlock} from '../../state/content-block/content-block.selectors';
import {ContentNode} from '../../../page/interfaces/content-node';
import {ContentNodeService} from '../../../page/services/content-node.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {setActiveNode} from '../../../page/state/content-nodes/content-node.actions';
import {MatCardModule} from '@angular/material/card';
import {PluginFormComponent} from '../../../core/components/plugin-form/plugin-form.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {map} from 'rxjs/operators';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-block-tab',
  standalone: true,
  imports: [CommonModule, DeleteButtonComponent, MatCardModule, PluginFormComponent, MatToolbarModule, MatInputModule, MatButtonModule],
  templateUrl: './block-tab.component.html',
  styleUrls: ['./block-tab.component.scss']
})
export class BlockTabComponent {
  readonly block$ = this.store.select(selectActiveContentBlock);
  readonly contentNode$ = this.block$.pipe(map(data => ({...data} as ContentNode)))

  private _activeNode!: ContentNode;
  public dirty: boolean = false;

  constructor(
    private contentService: ContentNodeService,
    private route: ActivatedRoute,
    private router: Router,
    private store: Store
  ) {
  }


  updateBlock($event: ContentNode) {
    if ($event === this._activeNode) {
      return;
    }
    this._activeNode = {
      ...this._activeNode,
      ...$event
    } as ContentNode;
    this.dirty = true;
  }

  async saveActiveBlock() {
    this.dirty = false;
    if (this._activeNode) {
      const node = await this.contentService.updateNode(this._activeNode);
      this.store.dispatch(setActiveContentBlock({blockId: node.id}))
    }
    return;
  }

  async removeBlock() {
    const node = await firstValueFrom(this.block$);
    if (! node?.id) {
      throw new Error('No block to delete');
    }
    this.store.dispatch(removeBlock({blockId: node.id}))
    this.store.dispatch(resetActiveBlock());
    await this.contentService.delete(node.id);
    return this.router.navigate(['/dig-cms/blocks']);
  }
}
