import { Action } from "@ngrx/store";
import { FormComment } from "../../interfaces/movie.interface";
import { Movie } from "../../models/movie.model";


export enum ActionConstants {
    loadingMovies = "[Movies] LOADING_MOVIES",
    addMovie = "[Movies] ADD_MOVIE",
    addMovies ="[Movies] SUCCESS_MOVIES",
    failSuccess=  "[Movies] ERROR_MOVIES",
    addComment = "[Movies] ADD_COMMENT"
}

export class addMovies implements Action {
    public readonly type = ActionConstants.addMovies
    constructor(public payload:Movie[]){

    }
}

export class addMovie implements Action{
    public readonly type = ActionConstants.addMovie
    constructor(public payload:Movie){}
}

export class loadMovies implements Action {
    public readonly type= ActionConstants.loadingMovies
    constructor(public payload:boolean){
    }
}

export class failMovies implements Action{
    public readonly type = ActionConstants.failSuccess

    constructor(public payload:string){

    }
}

export class addComment implements Action{
    public readonly type = ActionConstants.addComment
    constructor(public payload:{id:number, content:FormComment}){}
}