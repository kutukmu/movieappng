import { Movie } from "../../models/movie.model";
import { ActionConstants, addComment, addMovie, addMovies, failMovies, loadMovies } from "./movies.actions";

export interface MovieListState {
    movies:Movie[],
    loading:boolean,
    err:string
}

export const InitialState:MovieListState = {
    movies: [],
    loading:false,
    err:""
}


export function movieReducer(state = InitialState, action:actionTypes):MovieListState{

    switch(action.type){
        case ActionConstants.loadingMovies:
            return {...state, loading:action.payload}
        case ActionConstants.addMovie:
            const arr = [...state.movies, action.payload] 
            return {...state, movies:arr}
        case ActionConstants.addMovies:
            return {...state, movies:action.payload, loading:false}
        case ActionConstants.failSuccess:
            return {...state,err:action.payload}
        case ActionConstants.addComment:
            const id = action.payload.id
            const content = action.payload.content
            
            return {...state,movies:[...state.movies.map(item =>{
                if(item.id == id){
                    return {
                        ...item,
                        comments:[...item.comments, content]
                    }
                }else{
                    return item
                }
            })]}


        default:
            return state
    }

}

export type actionTypes =  addMovies |  loadMovies |  failMovies | addComment | addMovie