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
import { CreateItemComponent } from './crud/create-item/create-item.component';
import { ExperienceItemsComponent } from './home/experience-items/experience-items.component';
import { ItemlistComponent } from './crud/itemlist/itemlist.component';
import { ItemdetailComponent } from './crud/itemdetail/itemdetail.component';
import { NgIconsModule, provideIcons } from '@ng-icons/core';
import { ContactItemsComponent } from './home/contact-items/contact-items.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CreateItemComponent,
    ExperienceItemsComponent,
    ItemlistComponent,
    ItemdetailComponent,
    ContactItemsComponent,
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
