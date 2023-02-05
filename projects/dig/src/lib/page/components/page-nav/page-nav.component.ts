import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Observable} from 'rxjs';
import {PageService} from '../../services/page.service';
import {Page} from '../../interfaces/page';
import {MatListModule} from '@angular/material/list';
import {RouterModule} from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {Store} from '@ngrx/store';
import {selectRecentPages} from '../../state/pages/page.selectors';
import {MatDialog} from '@angular/material/dialog';
import {CreatePageModalComponent} from '../create-page-modal/create-page-modal.component';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-page-nav',
  standalone: true,
  imports: [CommonModule, MatListModule, RouterModule, MatIconModule, MatButtonModule],
  templateUrl: './page-nav.component.html',
  styleUrls: ['./page-nav.component.scss']
})
export class PageNavComponent {
  readonly pages$: Observable<Page[] | null> = this.store.select(selectRecentPages);
  constructor(public dialog: MatDialog, private pageService: PageService, private store: Store) {
  }

  createPage() {
    const dialogRef = this.dialog.open(CreatePageModalComponent, {
      data: {},
      height: '400px',
      width: '600px',
    });
  }
}
