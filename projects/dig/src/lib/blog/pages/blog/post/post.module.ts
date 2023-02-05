import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostComponent } from './post.component';
import {UiTitleComponent} from '../../../../ui/components/ui-title/ui-title.component';
import {UiHeaderComponent} from '../../../../ui/components/ui-header/ui-header.component';
import {MatTabsModule} from '@angular/material/tabs';
import {BlockTabComponent} from '../../../../block/components/block-tab/block-tab.component';
import {BlockCodeTabComponent} from '../../../../block/components/block-code-tab/block-code-tab.component';
import {PostFormComponent} from '../../../components/post-form/post-form.component';
import {PostCodeComponent} from '../../../components/post-code/post-code.component';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    PostComponent
  ],
  imports: [
    CommonModule,
    PostRoutingModule,
    UiTitleComponent,
    UiHeaderComponent,
    MatTabsModule,
    BlockTabComponent,
    BlockCodeTabComponent,
    PostFormComponent,
    PostCodeComponent,
    MatButtonModule
  ]
})
export class PostModule { }
