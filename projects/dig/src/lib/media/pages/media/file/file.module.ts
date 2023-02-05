import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FileRoutingModule } from './file-routing.module';
import { FileComponent } from './file.component';
import {UiHeaderComponent} from '../../../../ui/components/ui-header/ui-header.component';
import {UiTitleComponent} from '../../../../ui/components/ui-title/ui-title.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MediaViewerComponent} from '../../../components/media-viewer/media-viewer.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {ReactiveFormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {FileSizePipe} from '../../../pipes/file-size.pipe';
import {MatButtonModule} from '@angular/material/button';
import {DeleteButtonComponent} from '../../../../ui/components/delete-button/delete-button.component';


@NgModule({
  declarations: [
    FileComponent
  ],
  imports: [
    CommonModule,
    FileRoutingModule,
    UiHeaderComponent,
    UiTitleComponent,
    MatSidenavModule,
    MediaViewerComponent,
    MatFormFieldModule,
    MatChipsModule,
    MatIconModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatCardModule,
    MatListModule,
    FileSizePipe,
    MatButtonModule,
    DeleteButtonComponent
  ]
})
export class FileModule { }
