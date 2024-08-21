import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { DrawerComponent } from './components/drawer/drawer.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CardsComponent } from './components/cards/cards.component';
import {MatIconModule} from '@angular/material/icon';
import { AuthComponent } from './login-signup/auth.component'
import { HttpClientModule } from '@angular/common/http';
import { CreateNoteComponent } from './components/create-note/create-note.component';
import {MatMenuModule} from '@angular/material/menu';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    DrawerComponent,
    DashboardComponent,
    CardsComponent,
    AuthComponent,
    CreateNoteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule, BrowserAnimationsModule,
    MatCardModule, MatButtonModule, MatIconModule,ReactiveFormsModule,HttpClientModule, MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
