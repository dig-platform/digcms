import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DigCmsComponent } from './dig-cms.component';
import {IfAuthDirective} from './user/directives/if-auth.directive';
import {MatCardModule} from '@angular/material/card';
import {UiComponent} from './ui/components/ui/ui.component';
import {DigRoutingModule} from './dig-routing.module';
import {SignInDirective} from './user/directives/sign-in.directive';
import {MatButtonModule} from '@angular/material/button';
import {AppSetupComponent} from './core/components/app-setup/app-setup.component';


@NgModule({
  declarations: [
    DigCmsComponent
  ],
  imports: [
    CommonModule,
    DigRoutingModule,
    IfAuthDirective,
    MatCardModule,
    UiComponent,
    SignInDirective,
    MatButtonModule,
    AppSetupComponent
  ]
})
export class DigCmsModule { }
