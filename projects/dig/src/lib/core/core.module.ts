import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DigRoutingModule} from '../dig-routing.module';
import { CmsComponent } from './components/cms/cms.component';



@NgModule({
  declarations: [
    CmsComponent
  ],
  imports: [
    CommonModule,
    DigRoutingModule
  ]
})
export class CoreModule {
  constructor() {
  }}
