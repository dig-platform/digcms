import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import {UiTitleComponent} from '../../../ui/components/ui-title/ui-title.component';
import {UserRowComponent} from '../../components/user-row/user-row.component';
import {UiHeaderComponent} from '../../../ui/components/ui-header/ui-header.component';


@NgModule({
  declarations: [
    UsersComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    UiHeaderComponent,
    UiTitleComponent,
    UserRowComponent
  ]
})
export class UsersModule { }
