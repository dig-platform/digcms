import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlockRoutingModule } from './block-routing.module';
import { BlockComponent } from './block.component';
import {UiHeaderComponent} from '../../../../ui/components/ui-header/ui-header.component';
import {UiTitleComponent} from '../../../../ui/components/ui-title/ui-title.component';
import {MatTabsModule} from '@angular/material/tabs';
import {ContentNodeTabComponent} from '../../../../page/components/content-node-tab/content-node-tab.component';
import {
  ContentNodeCodeTabComponent
} from '../../../../page/components/content-node-code-tab/content-node-code-tab.component';
import {BlockTabComponent} from '../../../components/block-tab/block-tab.component';
import {BlockCodeTabComponent} from '../../../components/block-code-tab/block-code-tab.component';
import {DeleteButtonComponent} from '../../../../ui/components/delete-button/delete-button.component';


@NgModule({
  declarations: [
    BlockComponent
  ],
  imports: [
    CommonModule,
    BlockRoutingModule,
    UiHeaderComponent,
    UiTitleComponent,
    MatTabsModule,
    ContentNodeTabComponent,
    ContentNodeCodeTabComponent,
    BlockTabComponent,
    BlockCodeTabComponent,
    DeleteButtonComponent
  ]
})
export class BlockModule { }
