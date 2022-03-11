import { importExpr } from "@angular/compiler/src/output/output_ast";
import { Action } from "@ngrx/store";
import { User } from "../user.model";

export enum AuthActionConstants  {
    loginStart = "[Auth] Login_Start",
    loginSuccess = "[Auth] Login_Success",
    loginFail = "[Auth] Login_Fail",

    registerStart = "[Auth] Register_Start",
    registerSuccess = "[Auth] Register_Success",
    registerFail = "[Auth] Register_Fail",

    logoutStart = "[Auth] Logout_Start",
    logoutSuccess = "[Auth] Logout_Success",
    logoutFail = "[Auth] Logout_Fail"

}

export type LoginType = {
    "localId": string,
    "email": string,
    "displayName": string,
    "idToken": string,
    "registered": true,
    "refreshToken": string,
    "expiresIn": number
}

export type RegisterSuccessType = {
        "idToken": string,
        "email": string,
        "refreshToken": string,
        "expiresIn": string,
        "localId": string
}



export class LoginStart implements Action{
    public readonly type = AuthActionConstants.loginStart
    constructor(public payload:{email:string, password:string, username:string}){
        console.log("here")
    }
}

export class LoginSuccess implements Action{
    public readonly type = AuthActionConstants.loginSuccess
    constructor(public payload:LoginType){

    }
}

export class LoginFail implements Action{
    public readonly type = AuthActionConstants.loginFail

    constructor(public payload:string){}
}

export class RegisterStart implements Action{
    public readonly type = AuthActionConstants.registerStart
    constructor(public payload:{email:string, password:string, username:string}){

    }
}

export class RegisterSuccess implements Action{
    public readonly type = AuthActionConstants.registerSuccess

    constructor(public payload:RegisterSuccessType){
    }

}

export class RegisterFail implements Action{
    public readonly type = AuthActionConstants.registerFail

    constructor(public payload:string){
    }

}

export class LogoutStart implements Action{
    public readonly type = AuthActionConstants.logoutStart
}

export class LogoutSuccess implements Action{
    public readonly type = AuthActionConstants.logoutSuccess
}

export class LogoutFail implements Action{
    public readonly type = AuthActionConstants.logoutFail
}



