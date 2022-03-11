import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginType, RegisterSuccessType } from './login/store/auth.actions';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  signUpUrl:string = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key="
  singInUrl:string = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key="
  

  constructor(private http:HttpClient) { 

  }

  handleSignUp(formValue:{username:string, password:string,email:string}){
    return this.http.post<RegisterSuccessType>(this.signUpUrl + environment.apiKey, formValue)
  }

  handleSignIn(formValue:{username:string, password:string,email:string}){
    const url = this.singInUrl + environment.apiKey
    const obj = {email:formValue.email, password:formValue.password, returnSecureToken:true}
    return this.http.post<LoginType>(url, obj)
  }

  

}
