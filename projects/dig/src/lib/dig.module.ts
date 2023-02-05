import {isDevMode, ModuleWithProviders, NgModule} from '@angular/core';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {DigRoutingModule} from './dig-routing.module';
import {CommonModule} from '@angular/common';
import {DigConfig, provideDig, provideFirebase} from './dig';
import * as fromPageReducer from './page/state/pages/page.reducer';
import * as fromContentNodeReducer from './page/state/content-nodes/content-node.reducer';
import {PageEffects} from './page/state/pages/page.effects';
import {ContentNodeEffects} from './page/state/content-nodes/content-node.effects';
import { PluginEffects } from './core/state/plugins/plugin.effects';
import * as fromPluginReducer from './core/state/plugins/plugin.reducer';
import {SettingsEffects} from './core/state/settings/settings.effects';
import * as fromSettingsReducer from './core/state/settings/settings.reducer';
import { DigEffects } from './core/state/dig/dig.effects';
import * as fromDigReducer from './core/state/dig/dig.reducer';
import * as fromContentBlock from './block/state/content-block/content-block.reducer';
import {ContentBlockEffects} from './block/state/content-block/content-block.effects';
import * as fromMedia from './media/state/media/media.reducer';
import {MediaEffects} from './media/state/media/media.effects';
import {AuthEffects} from './user/state/auth/auth.effects';
import {UserEffects} from './user/state/users/user.effects';
import * as fromUser from './user/state/users/user.reducer';
import * as fromPost from './blog/state/post/post.reducer';
import {PostEffects} from './blog/state/post/post.effects';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// minimal version, requires you to setup:
// * ngrx
@NgModule({
  declarations: [
  ],
  imports: [
  ],
  exports: [
  ]
})
export class DigModuleMin { }

// complete version, builds out of the box
@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),

    StoreModule.forFeature(fromDigReducer.digFeatureKey, fromDigReducer.reducer),
    StoreModule.forFeature(fromPluginReducer.pluginFeatureKey, fromPluginReducer.reducer),
    StoreModule.forFeature(fromSettingsReducer.settingsFeatureKey, fromSettingsReducer.reducer),
    StoreModule.forFeature(fromPageReducer.pageFeatureKey, fromPageReducer.reducer),
    StoreModule.forFeature(fromContentNodeReducer.contentNodeFeatureKey, fromContentNodeReducer.reducer),
    StoreModule.forFeature(fromContentBlock.contentBlockFeatureKey, fromContentBlock.reducer),
    StoreModule.forFeature(fromMedia.mediaFeatureKey, fromMedia.reducer),
    StoreModule.forFeature(fromUser.userFeatureKey, fromUser.reducer),
    StoreModule.forFeature(fromPost.postFeatureKey, fromPost.reducer),
    EffectsModule.forFeature([
      SettingsEffects,
      PluginEffects,
      DigEffects,
      PageEffects,
      ContentNodeEffects,
      ContentBlockEffects,
      MediaEffects,
      AuthEffects,
      UserEffects,
      PostEffects
    ]),
  ],
  exports: [
  ]
})
export class DigModule {
  static forRoot(config: DigConfig): ModuleWithProviders<DigModule> {
    return {
      ngModule: DigModule,
      providers: [
        provideFirebase(config.firebase),
        provideDig(config),
      ],
    };
  }
}
