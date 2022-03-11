import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthAppState } from '../auth/login/store/auth.reducers';
import { FormComment } from '../interfaces/movie.interface';
import { Movie } from '../models/movie.model';
import { AppState } from '../movies/store';
import { addComment } from '../movies/store/movies.actions';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-movieform',
  templateUrl: './movieform.component.html',
  styleUrls: ['./movieform.component.css']
})
export class MovieformComponent implements OnInit {

  form:FormGroup;
  @Input('id') id:number;
  @Input("movie") movie:Movie;
  @Output() sendComment = new EventEmitter<FormComment>();
  auth:AuthAppState;

  constructor(private movieService: MoviesService, private router:Router, private store:Store<AppState>, private http:HttpClient) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      comment: new FormControl("")
    })

    this.store.select(store => store.auth).subscribe(res =>{
      this.auth = res
    })
  }


  handleSubmit(){
    const url = `https://ngg-movie-app-default-rtdb.firebaseio.com/movies/${this.id}/comments.json`
    const n = this.movie.comments.length
    this.http.patch(url, {[n]:{name:"username", comment:this.form.value.comment}}).subscribe((res) =>{
      this.movieService.getMovie(this.id).subscribe(res =>{
        console.log(res)
      })
    })

    
    this.store.dispatch( new addComment({id:this.id, content:{name:this.auth.user!.email, comment:this.form.value["comment"]}}))
    this.form.reset()
  }

  
  handleClick(){
    this.router.navigate(["/"])
  }
  

}
