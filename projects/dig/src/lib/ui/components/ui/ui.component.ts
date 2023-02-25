import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {PageNavComponent} from '../../../page/components/page-nav/page-nav.component';
import {AvatarComponent} from '../../../user/components/avatar/avatar.component';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {SignOutDirective} from '../../../user/directives/sign-out.directive';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import {RouterModule} from '@angular/router';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDividerModule} from '@angular/material/divider';
import {PersistentPanelDirective} from '../../directives/persistent-panel.directive';
import {Store} from '@ngrx/store';
import {loadDig, persistUiState, setPanel} from '../../../core/state/dig/dig.actions';
import {MatDialogModule} from '@angular/material/dialog';
import {BlockNavComponent} from '../../../block/components/block-nav/block-nav.component';
import {MediaNavComponent} from '../../../media/components/media-nav/media-nav.component';
import {IfRoleDirective} from '../../../user/directives/if-role.directive';
import {UserNavComponent} from '../../../user/components/user-nav/user-nav.component';
import {BlogNavComponent} from '../../../blog/components/blog-nav/blog-nav.component';
import {selectPanelState} from '../../../core/state/dig/dig.selectors';
import {ShortcutNavComponent} from '../../../shortcuts/components/shortcut-nav/shortcut-nav.component';
import {loadEditor} from '../../state/editor/editor.actions';
import {selectEditorTitle} from '../../state/editor/editor.selectors';

@Component({
  selector: 'app-ui',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatSidenavModule,
    PageNavComponent,
    AvatarComponent,
    MatButtonModule,
    MatMenuModule,
    SignOutDirective,
    MatIconModule,
    MatBadgeModule,
    RouterModule,
    MatExpansionModule,
    MatDividerModule,
    PersistentPanelDirective,
    MatDialogModule,
    BlockNavComponent,
    MediaNavComponent,
    IfRoleDirective,
    UserNavComponent,
    BlogNavComponent,
    ShortcutNavComponent
  ],
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.scss']
})
export class UiComponent {
  @Input() fullscreen: boolean = false;
  readonly panels$ = this.store.select(selectPanelState);
  readonly title$ = this.store.select(selectEditorTitle);

  constructor(private store: Store) {
    this.store.dispatch(loadDig());
    this.store.dispatch(loadEditor());
    this.store.dispatch(persistUiState());
  }
  setMenuState($event: boolean) {
    this.store.dispatch(setPanel({id: 'menu', panel: {open: $event}}));
  }
}
