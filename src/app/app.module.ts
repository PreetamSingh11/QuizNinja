import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponentComponent } from './components/dashboard/login-component/login-component.component';
import { DashboardComponentComponent } from './components/dashboard/dashboard-component/dashboard-component.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressBarModule } from '@angular/material/progress-bar';


import { CategoriesComponentComponent } from './components/categories-component/categories-component.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScrollDispatchModule, ScrollingModule } from '@angular/cdk/scrolling';
import { UsersListComponentComponent } from './components/challengePage/users-list-component/users-list-component.component';
import { ChallengeMainComponentComponent } from './components/challengePage/challenge-main-component/challenge-main-component.component';
import { HomeComponent } from './components/home/home.component';
import { CreateChallengeComponent } from './components/create-challenge/create-challenge.component';

import { MatIconModule } from '@angular/material/icon';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgFlashMessagesModule } from 'ng-flash-messages';
import * as bootstrap from 'bootstrap';
import { MatchComponent } from './components/match/match.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
    DashboardComponentComponent,
    CategoriesComponentComponent,
    UsersListComponentComponent,
    ChallengeMainComponentComponent,
    HomeComponent,
    CreateChallengeComponent,
    NavbarComponent,
    MatchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatProgressBarModule,
    BrowserAnimationsModule,
    ScrollingModule,
    MatIconModule,
    NgFlashMessagesModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
