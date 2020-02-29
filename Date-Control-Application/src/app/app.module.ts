import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";

var config = {
  apiKey: "AIzaSyDECLa7VgYNbXmrwVub8pDZquaICYYFleI",
    authDomain: "datecontroldatabase.firebaseapp.com",
    databaseURL: "https://datecontroldatabase.firebaseio.com",
    projectId: "datecontroldatabase",
    storageBucket: "datecontroldatabase.appspot.com",
    messagingSenderId: "471452525084",
    appId: "1:471452525084:web:a3e0d8c3e823462c7ab5d9",
    measurementId: "G-8CV5FPTNWJ"
}
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
