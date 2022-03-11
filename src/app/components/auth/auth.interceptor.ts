import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpParams, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { AppState } from "../movies/store";

@Injectable()


export class AuthInterceptor implements HttpInterceptor{


    constructor(private store:Store<AppState>){

    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = localStorage.getItem('User')
        if(!token){
            return next.handle(req)
        }
        const user = JSON.parse(token)
        const reqClone = req.clone({
            params: new HttpParams().set("auth", user.idToken)
        })
        return next.handle(reqClone)
    }


}