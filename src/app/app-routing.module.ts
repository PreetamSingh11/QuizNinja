import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChallengeMainComponentComponent } from './components/challengePage/challenge-main-component/challenge-main-component.component';
import { HomeComponent } from './components/home/home.component';
import { CreateChallengeComponent } from './components/create-challenge/create-challenge.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'challenge', component: ChallengeMainComponentComponent },
  { path: 'createChallenge', component: CreateChallengeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
