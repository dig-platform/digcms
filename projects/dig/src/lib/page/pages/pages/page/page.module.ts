import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageRoutingModule } from './page-routing.module';
import { PageComponent } from './page.component';
import {UiComponent} from '../../../../ui/components/ui/ui.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {UiHeaderComponent} from '../../../../ui/components/ui-header/ui-header.component';
import {ContentNodeNavComponent} from '../../../components/content-node-nav/content-node-nav.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {ReactiveFormsModule} from '@angular/forms';
import {UiTitleComponent} from '../../../../ui/components/ui-title/ui-title.component';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {ContentNodeListComponent} from '../../../components/content-node-list/content-node-list.component';
import {PluginFormComponent} from '../../../../core/components/plugin-form/plugin-form.component';
import {ContentNodeTabComponent} from '../../../components/content-node-tab/content-node-tab.component';
import {
  ContentNodeCodeTabComponent
} from '../../../components/content-node-code-tab/content-node-code-tab.component';
import {PageSettingsTabComponent} from '../../../components/page-settings-tab/page-settings-tab.component';

@NgModule({
  declarations: [
    PageComponent
  ],
    imports: [
        CommonModule,
        PageRoutingModule,
        UiComponent,
        UiHeaderComponent,
        UiTitleComponent,
        MatSidenavModule,
        UiHeaderComponent,
        ContentNodeNavComponent,
        MatFormFieldModule,
        MatIconModule,
        ReactiveFormsModule,
        MatInputModule,
        MatButtonModule,
        MatTabsModule,
        MatCardModule,
        ContentNodeListComponent,
        PluginFormComponent,
        ContentNodeTabComponent,
        ContentNodeCodeTabComponent,
        PageSettingsTabComponent
    ]
})
export class PageModule { }
