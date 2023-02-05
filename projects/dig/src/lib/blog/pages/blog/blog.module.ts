import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import {PostRowComponent} from '../../components/post-row/post-row.component';
import {UiTitleComponent} from '../../../ui/components/ui-title/ui-title.component';
import {UiHeaderComponent} from '../../../ui/components/ui-header/ui-header.component';


@NgModule({
  declarations: [
    BlogComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    PostRowComponent,
    UiTitleComponent,
    UiHeaderComponent
  ]
})
export class BlogModule { }
