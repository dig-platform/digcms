import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlocksRoutingModule } from './blocks-routing.module';
import { BlocksComponent } from './blocks.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import {UiHeaderComponent} from '../../../ui/components/ui-header/ui-header.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {ReactiveFormsModule} from '@angular/forms';
import {UiTitleComponent} from '../../../ui/components/ui-title/ui-title.component';


@NgModule({
  declarations: [
    BlocksComponent
  ],
  imports: [
    CommonModule,
    BlocksRoutingModule,
    MatGridListModule,
    MatListModule,
    UiHeaderComponent,
    UiTitleComponent,
    MatFormFieldModule,
    MatIconModule,
    ReactiveFormsModule
  ]
})
export class BlocksModule { }
