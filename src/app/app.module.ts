import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {DigModule} from 'dig';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    DigModule.forRoot({
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
