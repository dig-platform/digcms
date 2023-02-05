import {Component, Inject, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {selectRecentPages} from '../../state/pages/page.selectors';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Router} from '@angular/router';
import {PageService} from '../../services/page.service';
import {Store} from '@ngrx/store';
import {Page} from '../../interfaces/page';
import {ContentNodeService} from '../../services/content-node.service';
import {firstValueFrom, Observable} from 'rxjs';
import {ContentNode} from '../../interfaces/content-node';
import {selectContentNodes} from '../../state/content-nodes/content-node.selectors';
import {Plugin} from '../../../core/interfaces/plugin';
import {selectPlugins} from '../../../core/state/plugins/plugin.selectors';
import {selectActivePage} from '../../state/pages/page.selectors';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
import {MatListModule} from '@angular/material/list';
import {setActiveNode} from '../../state/content-nodes/content-node.actions';

@Component({
  selector: 'app-create-node-modal',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatCardModule, MatFormFieldModule, MatSelectModule, ReactiveFormsModule, MatInputModule, MatRadioModule, MatListModule],
  templateUrl: './create-node-modal.component.html',
  styleUrls: ['./create-node-modal.component.scss']
})
export class CreateNodeModalComponent {
  readonly page$: Observable<Page | undefined> = this.store.select(selectActivePage);
  readonly content$: Observable<ContentNode[]> = this.store.select(selectContentNodes);
  readonly plugins$: Observable<Plugin[]> = this.store.select(selectPlugins);

  readonly form = new FormGroup({
    name: new FormControl(null, [
      Validators.required,
      Validators.minLength(4)
    ]),
    type: new FormControl()
  })

  constructor(
    public dialogRef: MatDialogRef<CreateNodeModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private router: Router,
    private pageService: PageService,
    private contentService: ContentNodeService,
    private store: Store
  ) {}

  async create() {
    if (! this.form.valid) {
      throw new Error('Invalid form');
    }
    const {name, type} = this.form.value;
    const data: any = {
      type,
      name
    };

    if (! name || ! type) {
      throw new Error('Invalid content node request');
    }

    if (this.data.global) {
      data.scope = 'global';
    } else {
      const page = await firstValueFrom(this.page$);
      if (!page) {
        throw new Error('Invalid content node request; no page loaded');
      }
      const content = await firstValueFrom(this.content$);
      data.pageId = page.id;
      data.position = content.length;
    }
    const node = await this.contentService.createNode(data)
    this.store.dispatch(setActiveNode({node}));
    this.dialogRef.close({node});
  }

  close(): void {
    this.dialogRef.close();
  }
}
