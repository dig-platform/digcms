import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import {UiHeaderComponent} from '../../../../ui/components/ui-header/ui-header.component';
import {UiTitleComponent} from '../../../../ui/components/ui-title/ui-title.component';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    UiHeaderComponent,
    UiTitleComponent,
    MatIconModule
  ]
})
export class UserModule { }
