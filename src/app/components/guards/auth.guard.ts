import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { AppState } from '../movies/store';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  auth:any;

  constructor(private store:Store<AppState>, private route:Router){
    
  }


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      return this.store.select(store => store.auth).pipe(map(res =>{
        if(res.user){
          return true
        }else{
          this.route.navigate(["login"])
          return false
        }
      }))
  }
  
}
