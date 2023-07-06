import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './home/home.component';
import { environment } from 'src/environments/environment.development';
import { FormsModule } from '@angular/forms';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { CreateItemComponent } from './create-item/create-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CreateItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
