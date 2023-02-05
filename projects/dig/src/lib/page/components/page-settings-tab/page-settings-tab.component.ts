import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {DeleteButtonComponent} from '../../../ui/components/delete-button/delete-button.component';
import {Router} from '@angular/router';
import {PageService} from '../../services/page.service';
import {ContentNodeService} from '../../services/content-node.service';
import {Store} from '@ngrx/store';
import {selectActivePage} from '../../state/pages/page.selectors';
import {firstValueFrom} from 'rxjs';

@Component({
  selector: 'app-page-settings-tab',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatToolbarModule, DeleteButtonComponent],
  templateUrl: './page-settings-tab.component.html',
  styleUrls: ['./page-settings-tab.component.scss']
})
export class PageSettingsTabComponent {
  readonly page$ = this.store.select(selectActivePage);

  constructor(
    private router: Router,
    private pageService: PageService,
    private contentService: ContentNodeService,
    private store: Store
  ) {
  }

  async delete() {
    const page = await firstValueFrom(this.page$);
    if (! page) {
      throw new Error('Unable to delete page; page not loaded');
    }
    await this.pageService.delete(page.id);
    await this.contentService.deletePage(page.id);
    return this.router.navigate(['/dig-cms/pages'])
  }
}
