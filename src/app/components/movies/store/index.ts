import { routerReducer } from '@ngrx/router-store';
import { ActionReducerMap } from '@ngrx/store';
import { AuthAppState, AuthReducer } from '../../auth/login/store/auth.reducers';
import { MovieListState, movieReducer } from './movies.reducer';
import * as fromRouter from "@ngrx/router-store"

export const rootReducer = {};

export interface AppState {
    movieList: MovieListState;
    auth:AuthAppState,
    router: fromRouter.RouterReducerState<any>
};


export const reducers: ActionReducerMap<AppState, any> = {
    movieList: movieReducer,
    auth:AuthReducer,
    router:routerReducer
};