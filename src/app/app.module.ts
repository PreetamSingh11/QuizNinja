import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponentComponent } from './components/login-component/login-component.component';
import { DashboardComponentComponent } from './components/dashboard-component/dashboard-component.component';
import { MyChallengesComponentComponent } from './components/my-challenges-component/my-challenges-component.component';

import { FormsModule } from '@angular/forms';
import { CategoriesComponentComponent } from './components/categories-component/categories-component.component';
import { DashboardProfileComponentComponent } from './components/dashboard-profile-component/dashboard-profile-component.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ScrollDispatchModule, ScrollingModule} from '@angular/cdk/scrolling';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
    DashboardComponentComponent,
    MyChallengesComponentComponent,
    CategoriesComponentComponent,
    DashboardProfileComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ScrollingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
