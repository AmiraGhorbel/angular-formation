import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { MatchesComponent } from './components/matches/matches.component';
import { PlayersComponent } from './components/players/players.component';
import { AddMatchComponent } from './components/add-match/add-match.component';

const routes: Routes = [
  { path: '',component:HomeComponent},
  { path: 'signin', component:LoginComponent},
  { path: 'subscription', component:SignupComponent },
  {path: 'allmatches', component:MatchesComponent},
  {path:'players', component:PlayersComponent},
  {path:'addMatch', component:AddMatchComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
