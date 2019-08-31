import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponentComponent } from './components/login-component/login-component.component';
import { DashboardComponentComponent } from './components/dashboard-component/dashboard-component.component';
import { MyChallengesComponentComponent } from './components/my-challenges-component/my-challenges-component.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';

import { CategoriesComponentComponent } from './components/categories-component/categories-component.component';
import { DashboardProfileComponentComponent } from './components/dashboard-profile-component/dashboard-profile-component.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ScrollDispatchModule, ScrollingModule} from '@angular/cdk/scrolling';
import { UsersListComponentComponent } from './components/challengePage/users-list-component/users-list-component.component';
import { ChallengeMainComponentComponent } from './components/challengePage/challenge-main-component/challenge-main-component.component';
import { HomeComponent } from './components/home/home.component';
import { CreateChallengeComponent } from './components/create-challenge/create-challenge.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
    DashboardComponentComponent,
    MyChallengesComponentComponent,
    CategoriesComponentComponent,
    DashboardProfileComponentComponent,
    UsersListComponentComponent,
    ChallengeMainComponentComponent,
    HomeComponent,
    CreateChallengeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule,
    BrowserAnimationsModule,
    ScrollingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
