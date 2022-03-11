import { HttpClient } from '@angular/common/http';
import { importExpr } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { arraysAreNotAllowedInProps } from '@ngrx/store/src/models';
import { map, Observable, tap } from 'rxjs';
import { Result, Movie as IMovie } from '../interfaces/movie.interface';
import { Movie } from '../models/movie.model';
import { AppState } from '../movies/store';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  baseUrl:string = "https://api.themoviedb.org/3/trending/movie/day?api_key="
  detailsUrl:string = 'https://api.themoviedb.org/3/movie/{movie_id}?api_key='
  imageUrl:string = "https://image.tmdb.org/t/p/w500/"
  apiKey:string = "7ddacbf851f854f89c22a1629e65d6a1"

  constructor(private http:HttpClient, private store:Store<AppState>) { }

  getMovies(){
    
    const url = `https://ngg-movie-app-default-rtdb.firebaseio.com/movies.json`
    return this.http.get<Result>(url).pipe(map(item =>{
      const newArr = this.convertToArray(item)
      return newArr.map(movie =>{
        const newMovie = this.createMovie(movie, movie.id)
        return newMovie
      })
    }))
  }

  getMovie(id:number){
    console.log("get movie")
    const url = `https://ngg-movie-app-default-rtdb.firebaseio.com/movies/${id}.json`
    return this.http.get<IMovie>(url).pipe(map(res =>{
      return this.createMovie(res ,id)
    }))
  }

  sendMovie(movie:Movie){
    const url = "https://ngg-movie-app-default-rtdb.firebaseio.com/movies.json"
    this.http.post(url, movie).subscribe(res =>{
      
    })
  }

  createMovie(movie:IMovie, id:number){

    let res;
    if(movie.genre_ids){
      const gnr = movie.genre_ids.map(item => {
        return {
          id:item,
          name:"Action"
        }
      })
      res  = gnr
    }else{
      
    }

    const arr  = []
    
    if(movie.comments){
      for(let item of movie.comments){
        if(item.name){
          arr.push(item)
        }
      }
    }

    
    const newMovie = new Movie(
        movie.title,
        movie.overview,
        id,
        movie.rate,
        movie.release_date, 
        movie.poster_path,
        [{
          id:1,
          name:"Action"
        }],
        arr)
    return newMovie
  }

  convertToArray(obj:any){
    const arr = []
    for(let key in obj){
      const movie = obj[key]
      movie.id = key
      arr.push(movie)
    }

    return arr
  }

  checkPath(str:string){
    return str[0] == "/"
  }





}


