import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ContentNodeService} from '../../services/content-node.service';
import {MatCardModule} from '@angular/material/card';
import {ContentNodeListComponent} from '../content-node-list/content-node-list.component';
import {PluginFormComponent} from '../../../core/components/plugin-form/plugin-form.component';
import {Page} from '../../interfaces/page';
import {MatButtonModule} from '@angular/material/button';
import {ContentNode} from '../../interfaces/content-node';
import {Store} from '@ngrx/store';
import {selectActivePage} from '../../state/pages/page.selectors';
import {selectActiveContentNode, selectContentNodes} from '../../state/content-nodes/content-node.selectors';
import {removeNode, resetActiveNode, setActiveNode} from '../../state/content-nodes/content-node.actions';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {DeleteButtonComponent} from '../../../ui/components/delete-button/delete-button.component';
import {firstValueFrom} from 'rxjs';

@Component({
  selector: 'app-content-node-tab',
  standalone: true,
  imports: [CommonModule, MatCardModule, ContentNodeListComponent, PluginFormComponent, MatButtonModule, MatToolbarModule, MatIconModule, DeleteButtonComponent],
  templateUrl: './content-node-tab.component.html',
  styleUrls: ['./content-node-tab.component.scss']
})
export class ContentNodeTabComponent {
  readonly page$ = this.store.select(selectActivePage);
  public contentNodes$ = this.store.select(selectContentNodes);
  public activeNode$ = this.store.select(selectActiveContentNode);

  private _activeNode!: ContentNode;
  public dirty: boolean = false;

  constructor(
    private contentService: ContentNodeService,
    private store: Store
  ) {
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

  async removeNode() {
    const node = await firstValueFrom(this.activeNode$);
    if (! node) {
      throw new Error('No content node to delete');
    }
    this.store.dispatch(removeNode({nodeId: node.id}))
    this.store.dispatch(resetActiveNode());
    return this.contentService.delete(node.id);
  }
}
