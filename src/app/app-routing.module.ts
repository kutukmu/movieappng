import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { AuthGuard } from './components/guards/auth.guard';
import { MoviedetailsComponent } from './components/moviedetails/moviedetails.component';
import { CreatemovieComponent } from './components/movies/createmovie/createmovie.component';
import { MoviesComponent } from './components/movies/movies.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
  {path:'movies', component:MoviesComponent, canActivate:[AuthGuard]},
  {path:"movies/create", component:CreatemovieComponent, canActivate:[AuthGuard]},
  {path:"movies/:id", component:MoviedetailsComponent, canActivate:[AuthGuard]},
  {path:"login", component:LoginComponent},
  {path:"profile", component:ProfileComponent, canActivate:[AuthGuard]},
  {path: '', redirectTo:"movies", pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }