import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { firebaseConfig } from './environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    {provide: FIREBASE_OPTIONS, useValue: firebaseConfig}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
