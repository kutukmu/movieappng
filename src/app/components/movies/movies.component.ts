import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable, tap } from 'rxjs';
import { getCurrentRouteState } from 'src/app/router.reducer';
import { Movie } from '../models/movie.model';
import { MoviesService } from '../services/movies.service';
import { AppState } from './store';
import { loadMovies } from './store/movies.actions';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

 
  imgBase="https://image.tmdb.org/t/p/w500/"
  movies$:Observable<Movie[]>;
  loading$:Observable<boolean>;
  error$: Observable<string>
  constructor(private moviesService:MoviesService, private store:Store<AppState>) { }

  ngOnInit(): void {


    this.store.select(getCurrentRouteState).subscribe(res =>{
      console.log(res)
    })


    this.store.dispatch(new loadMovies(true))
    this.movies$ = this.store.select(store => store.movieList.movies).pipe(tap(item =>{
      
    }))
    this.loading$ = this.store.select(store => store.movieList.loading).pipe(tap(item =>{
      
    }))
  }

  handleClick(){
    this.store.dispatch(new loadMovies(true))
  }

  checkPath(str:string){
    return this.moviesService.checkPath(str)
  }

  



}
