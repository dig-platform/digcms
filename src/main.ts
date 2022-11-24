import {bootstrapApplication} from '@angular/platform-browser';
import AppComponent from './app/app.component';
import {provideRouter} from '@angular/router';
import {ROUTES} from './app/app.routes';
import {StoreModule} from '@ngrx/store';
import {importProvidersFrom} from '@angular/core';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {EffectsModule} from '@ngrx/effects';
import {StoreRouterConnectingModule} from '@ngrx/router-store';
import {reducer as OrderReducer} from './app/store/order/order.reducer';
import {reducer as MenuReducer} from './app/store/menu/menu.reducer';
import {reducer as UserReducer} from './app/store/user/user.reducer';
import {MenuEffects} from './app/store/menu/menu.effects';
import {OrderEffects} from './app/store/order/order.effects';
import {UserEffects} from './app/store/user/user.effects';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(ROUTES),
    importProvidersFrom(
      StoreModule.forRoot({
        menu: MenuReducer,
        order: OrderReducer,
        user: UserReducer
      }),
      StoreRouterConnectingModule.forRoot(),
      StoreDevtoolsModule.instrument(),
      EffectsModule.forRoot([
        MenuEffects,
        OrderEffects,
        UserEffects
      ]),
      BrowserAnimationsModule
    ),
  ]
})
