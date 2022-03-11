import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { LoginSuccess, LogoutSuccess } from '../auth/login/store/auth.actions';
import { AuthAppState } from '../auth/login/store/auth.reducers';
import { AppState } from '../movies/store';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isClicked:boolean = false
  auth:AuthAppState;
  constructor(private store:Store<AppState>, private route:Router) { }

  ngOnInit(): void {
    this.store.select(store => store.auth).subscribe(res =>{
      this.auth = res
    })

  }

  handleClick(){
    this.isClicked = !this.isClicked

  }

  handleLogOut(){
    localStorage.removeItem("user")
    this.store.dispatch(new LogoutSuccess())
    localStorage.removeItem("User")
    this.route.navigate(["login"])
    
  }

}
