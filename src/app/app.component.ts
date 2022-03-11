import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import { LoginSuccess } from './components/auth/login/store/auth.actions';
import { AppState } from './components/movies/store';
import { loadMovies } from './components/movies/store/movies.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class AppComponent implements OnInit {

  constructor(private store:Store<AppState>){

  }
  ngOnInit(): void {
    const user = localStorage.getItem("User")
    if(user){
      const json = JSON.parse(user)
      this.store.dispatch(new LoginSuccess(json))
    }

    console.log("here")
    this.store.dispatch(new loadMovies(true))
  }
  title = 'movieapp';


}
