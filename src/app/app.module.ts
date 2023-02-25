import {isDevMode, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {DigModule} from 'dig';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    DigModule.forRoot({
      editor: {
        title: 'Digitalus CMS',
        shortcuts: [
          {
            title: 'Tours',
            path: '/tours',
            // optional description, displays a tooltip
            description: 'Manage tours and trips',
            // optional icon, see https://fonts.google.com/icons
            icon: 'tour',
          }
        ]
      },
      firebase: {
        apiKey: "AIzaSyCsXhq40XSFcsP9Pmz_LBFW_NT5ydhfVhw",
        authDomain: "dig-cms-64717.firebaseapp.com",
        projectId: "dig-cms-64717",
        storageBucket: "dig-cms-64717.appspot.com",
        messagingSenderId: "986528470206",
        appId: "1:986528470206:web:f7c842585e39c94088baef",
        measurementId: "G-R3W54H68G2"
      }
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
