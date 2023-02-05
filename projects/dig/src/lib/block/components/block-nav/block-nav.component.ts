import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDialog} from '@angular/material/dialog';
import {PageService} from '../../../page/services/page.service';
import {Store} from '@ngrx/store';
import {CreateNodeModalComponent} from '../../../page/components/create-node-modal/create-node-modal.component';
import {MatListModule} from '@angular/material/list';
import {Router, RouterModule} from '@angular/router';
import {selectContentBlocks} from '../../state/content-block/content-block.selectors';

@Component({
  selector: 'app-block-nav',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule, MatListModule, RouterModule],
  templateUrl: './block-nav.component.html',
  styleUrls: ['./block-nav.component.scss']
})
export class BlockNavComponent {
  readonly blocks$ = this.store.select(selectContentBlocks);

  constructor(public dialog: MatDialog, private pageService: PageService, private store: Store, private router: Router) {
  }

  create() {
    const dialogRef = this.dialog.open(CreateNodeModalComponent, {
      data: {
        global: true
      },
      height: '400px',
      width: '600px',
    });

    dialogRef.afterClosed().subscribe(res => {
      if (res?.node) {
        this.router.navigate(['/dig-cms/blocks', res.node.id])
      }
    })
  }
}
