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
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {MarkdownModule} from 'ngx-markdown';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';


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
    AppSetupComponent,
    HttpClientModule,
    MarkdownModule.forRoot({ loader: HttpClient }),
  ],
  providers: [
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'outline'}}
  ]
})
export class DigCmsModule { }
