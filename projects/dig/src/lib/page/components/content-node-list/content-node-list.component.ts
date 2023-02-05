import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import { CommonModule } from '@angular/common';
import {first, firstValueFrom, Observable} from 'rxjs';
import {ContentNodeService} from '../../services/content-node.service';
import {MatListModule} from '@angular/material/list';
import {CdkDragDrop, DragDropModule, moveItemInArray} from '@angular/cdk/drag-drop';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDialog} from '@angular/material/dialog';
import {CreateNodeModalComponent} from '../create-node-modal/create-node-modal.component';
import {Store} from '@ngrx/store';
import {selectActivePage} from '../../state/pages/page.selectors';
import {setActiveNode} from '../../state/content-nodes/content-node.actions';
import {selectActiveContentNode, selectContentNodes} from '../../state/content-nodes/content-node.selectors';
import {ContentNode} from '../../interfaces/content-node';

@Component({
  selector: 'app-content-node-list',
  standalone: true,
  imports: [CommonModule, MatListModule, DragDropModule, MatButtonModule, MatIconModule],
  templateUrl: './content-node-list.component.html',
  styleUrls: ['./content-node-list.component.scss']
})
export class ContentNodeListComponent  implements OnInit{
  @Output() selectionChanged: EventEmitter<ContentNode> = new EventEmitter<ContentNode>();

  readonly page$ = this.store.select(selectActivePage);

  public contentNodes$ = this.store.select(selectContentNodes);
  public activeNode$ = this.store.select(selectActiveContentNode);

  constructor(
    private contentService: ContentNodeService,
    public dialog: MatDialog,
    private store: Store
  ) {
  }

  selectNode(node: ContentNode) {
    this.store.dispatch(setActiveNode({node}))
  }



  async drop(event: CdkDragDrop<string[]>) {
    const nodes = await firstValueFrom(this.contentNodes$);
    moveItemInArray(nodes, event.previousIndex, event.currentIndex);
    return this.contentService.sortNodes(nodes);
  }

  ngOnInit(): void {
  }

  async createNode() {
    const page = await firstValueFrom(this.page$);
    if (! page) {
      throw new Error('Create content node error')
    }
    const dialogRef = this.dialog.open(CreateNodeModalComponent, {
      data: {
        pageId: page.id
      },
      height: '400px',
      width: '600px',
    });
  }
}
