import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of } from "rxjs";
import { ActionConstants } from "src/app/components/movies/store/movies.actions";
import { AuthService } from "../../auth.service";
import { AuthActionConstants, LoginFail, LoginStart, LoginSuccess, RegisterFail, RegisterStart, RegisterSuccess } from "./auth.actions";

@Injectable()

export class AuthEffects {

    @Effect() signInUser$ = this.actions$.pipe(ofType<LoginStart>(AuthActionConstants.loginStart)
    ,mergeMap((action) => {
        return this.authService.handleSignIn(action.payload).pipe(map(res =>{
            this.route.navigate(["movies"])
            const json = JSON.stringify(res)
            localStorage.setItem("User", json)
            return new LoginSuccess(res)
        }),
        catchError((err:HttpErrorResponse) => {
            this.route.navigate(["login"])
            const msg = this.handleError(err.error.error.message)
            
            return of(new LoginFail(msg))
        }))
    }))


    @Effect() signUpUser$ = this.actions$.pipe(ofType<RegisterStart>( AuthActionConstants.registerStart),
    mergeMap((action) => {
        return this.authService.handleSignUp(action.payload).pipe(map(res =>{
            this.route.navigate(["movies"])
            const json = JSON.stringify(res)
            localStorage.setItem("User", json)
            return new RegisterSuccess(res)
        }),
        catchError((err:HttpErrorResponse) => {
            this.route.navigate(["login"])
            const msg = this.handleError(err.error.error.message)
            return of (new RegisterFail(msg))
        }))
    })
    )

    constructor(private authService:AuthService, private actions$:Actions, private route:Router){}

    handleError(msg:string){
        switch(msg){
            case "EMAIL_NOT_FOUND":
                return "This Email address is not found, please register before login"
            case "INVALID_PASSWORD":
                return "Password is wrong, please try again with correct password, if you remember ;)"
            case "USER_DISABLED":
                return "You have been banned from the website"
            case "EMAIL_EXISTS":
                return "This email address is already taken"
            case "OPERATION_NOT_ALLOWED":
                return "This operation is not allowed try different operation"
            case "TOO_MANY_ATTEMPTS_TRY_LATER":
                return "Please wait for 5 mins and try again"
            default:
                return msg

        }
    }

}