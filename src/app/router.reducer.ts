import { createSelector } from "@ngrx/store";
import { AppState } from "./components/movies/store";
import * as fromRouter from "@ngrx/router-store"
export const getRouterState = (state:AppState) => state.router;

export const getCurrentRouteState = createSelector(getRouterState,
     (state:fromRouter.RouterReducerState) => state.state)