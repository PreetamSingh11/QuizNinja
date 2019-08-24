import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponentComponent } from './components/login-component/login-component.component';
import { DashboardComponentComponent } from './components/dashboard-component/dashboard-component.component';
import { MyChallengesComponentComponent } from './components/my-challenges-component/my-challenges-component.component';

import { FormsModule } from '@angular/forms';
import { CategoriesComponentComponent } from './components/categories-component/categories-component.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
    DashboardComponentComponent,
    MyChallengesComponentComponent,
    CategoriesComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
