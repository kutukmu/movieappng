import { Component, OnInit } from '@angular/core';
import { genre } from '../../interfaces/movie.interface';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Movie } from '../../models/movie.model';
import { AppState } from '../store';
import { Store } from '@ngrx/store';
import { addMovie } from '../store/movies.actions';
import { Router } from '@angular/router';
import * as uuid from 'uuid';
import { MoviesService } from '../../services/movies.service';
@Component({
  selector: 'app-createmovie',
  templateUrl: './createmovie.component.html',
  styleUrls: ['./createmovie.component.css']
})
export class CreatemovieComponent implements OnInit {
  addOnBlur = true;
  createForm:FormGroup = new FormGroup({
    title: new FormControl("", [Validators.required]),
    description: new FormControl("", [Validators.required]),
    url: new FormControl("", [Validators.required]),
    imdbPoint: new FormControl("", [Validators.required]),
    genreType: new FormControl('', [Validators.required]),
    publishDate: new FormControl('', [Validators.required])
  })
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  genres:genre[] = [
    {id:1,name:"Horro"},
    {id:2,name:"Comedy"},
    {id:3,name:"Action"},
    {id:4,name:"Sci-fi"},
    {id:5,name:"Drama"},
    {id:6,name:"Western"},
    {id:6,name:"Romantic Comedy"},
    {id:6,name:"Mystery"},
  ]
  constructor(private store:Store<AppState>, private router:Router, private movieService:MoviesService) { }

  ngOnInit(): void {
  
  }


  remove(item:genre){}
  
  add(event:MatChipInputEvent){

  }

  handleSubmit(){
    const myId = Date.now();
    const {title, description, url, imdbPoint, genreType, publishDate} = this.createForm.value
    const gnr = {
      id:1,
      name:genreType
    }
    const movie  = new Movie(title, description, myId, imdbPoint, publishDate, url, [gnr], [])
    this.movieService.sendMovie(movie)
    this.store.dispatch( new addMovie(movie))
    this.router.navigate(['movies', movie.id])
  }

  
  

}
