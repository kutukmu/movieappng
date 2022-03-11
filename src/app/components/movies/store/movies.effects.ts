import { Injectable } from "@angular/core";
import { Actions, createEffect, Effect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of, switchMap } from "rxjs";
import { MoviesService } from "../../services/movies.service";
import { ActionConstants, addMovies, failMovies, loadMovies } from "./movies.actions";
@Injectable()
export class MoviesEffect{


    @Effect() loadMovies$ = this.actions$.pipe(ofType<loadMovies>(ActionConstants.loadingMovies),
        mergeMap(() => this.moviesService.getMovies().pipe(
            map(movies => {
                return new addMovies(movies)
            },
            catchError(() => of(new failMovies("asdf")))
            )))
        )
    

    constructor(private moviesService:MoviesService, private actions$:Actions){}

}