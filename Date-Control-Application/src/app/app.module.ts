import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StaffLoginComponent } from './staff-login/staff-login.component';
import { StaffRegistrationComponent } from './staff-registration/staff-registration.component';
import { StaffEmailComponent } from './staff-email/staff-email.component';
import { StaffMembersComponent } from './staff-members/staff-members.component';

export const firebaseConfig = {
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
    AppComponent,
    StaffLoginComponent,
    StaffRegistrationComponent,
    StaffEmailComponent,
    StaffMembersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
