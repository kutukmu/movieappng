import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { FormComment } from '../interfaces/movie.interface';
import { Movie } from '../models/movie.model';
import { AppState } from '../movies/store';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.css']
})
  export class MoviedetailsComponent implements OnInit {

  
  
  constructor(private router:Router, private route:ActivatedRoute, private movieService:MoviesService, private store:Store<AppState>) { }

  imgBase="https://image.tmdb.org/t/p/original/"
  movie:Movie | undefined;
  ngOnInit(): void {
    this.route.params.subscribe(res =>{
      const id = res['id']
      this.store.select(store => store.movieList).subscribe(list =>{
        this.movie = list.movies.find(movie => movie.id == id)
      })
    })
  }


  addComment(comment:FormComment){
    this.movie?.comments.push(comment)
  }

  checkPath(str:string){
    return this.movieService.checkPath(str)
  }

}