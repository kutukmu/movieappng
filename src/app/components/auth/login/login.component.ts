import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../movies/store';
import { AuthService } from '../auth.service';
import { LoginStart, LoginType, RegisterStart, RegisterSuccessType } from './store/auth.actions';
import { AuthAppState } from './store/auth.reducers';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  authForm:FormGroup;
  errors:string;
  isRegister:boolean = false
  auth:AuthAppState;

  constructor(private authService:AuthService, private store:Store<AppState>) { }

  ngOnInit(): void {
    this.authForm = new FormGroup({
      username:new FormControl(""),
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required])
    })

    this.store.select((store) => store.auth).subscribe(res =>{
      this.auth = res
    })

  }

  handleSwitch(){
    this.isRegister = !this.isRegister
  }

  handleSubmit(){
    if(!this.isRegister){
      this.store.dispatch(new LoginStart(this.authForm.value))
    }else{
      this.store.dispatch(new RegisterStart(this.authForm.value))
    }
  }
  getError(){
    const val = this.authForm.get("username")?.value
    console.log(val)
  }

}
