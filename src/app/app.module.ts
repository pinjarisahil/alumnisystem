import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AppRoutingModule } from './app-routing.module';
import {MatToolbarModule } from '@angular/material/toolbar'; 
import {MatButtonModule} from '@angular/material/button'; 
import { AngularFireModule } from '@angular/fire';
import { AngularFirestore } from '@angular/fire/firestore';

import {MatIconModule} from '@angular/material/icon'; 
import {MatCardModule} from '@angular/material/card';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { DummyComponent } from './dummy/dummy.component';
import { SignupComponent } from './signup/signup.component';
import { SocialfeedsComponent } from './socialfeeds/socialfeeds.component';
import { NoticeboardComponent } from './noticeboard/noticeboard.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { ParentComponent } from './parent/parent.component';
import { AlumnisearchComponent } from './alumnisearch/alumnisearch.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { environment } from 'src/environments/environment';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DummyComponent,
    SignupComponent,
    SocialfeedsComponent,
    NoticeboardComponent,
    ParentComponent,
    AlumnisearchComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule,
    MatInputModule,
    MatSelectModule,
    MatSidenavModule,
    MatDividerModule,
    MatListModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestore,
    AngularFireDatabaseModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
