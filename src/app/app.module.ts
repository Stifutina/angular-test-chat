import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { ChatComponent } from './chat/chat.component';

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyCuv1B5n5SfgKU7Qt-ScDzezjXiQyMzCmw',
    authDomain: 'chat-angular-c1179.firebaseapp.com',
    databaseURL: 'https://chat-angular-c1179.firebaseio.com',
    projectId: 'chat-angular-c1179',
    storageBucket: 'chat-angular-c1179.appspot.com',
    messagingSenderId: '217405485683'
  }
};

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
