import { User } from "../user.model";
import { AuthActionConstants, LoginFail, LoginStart, LoginSuccess, LoginType, LogoutFail, LogoutStart, LogoutSuccess, RegisterFail, RegisterStart, RegisterSuccess, RegisterSuccessType } from "./auth.actions";


export interface AuthAppState {
    loading:boolean,
    user: LoginType | undefined | RegisterSuccessType,
    errorMsg:string
}

export const InitialState:AuthAppState = {
    loading:false,
    user:undefined,
    errorMsg:""
}

export function AuthReducer(state = InitialState , action:AuthActions):AuthAppState{
    switch(action.type){
        case AuthActionConstants.loginStart:
            return {...state, loading:true}
        case AuthActionConstants.loginSuccess:
            return {...state, user: action.payload, loading:false, errorMsg:""}
        case AuthActionConstants.loginFail:
            return {...state, errorMsg:action.payload, loading:false}
        case AuthActionConstants.registerStart:
            return {...state, loading:true}
        case AuthActionConstants.registerSuccess:
            return {...state, user:action.payload, loading:false, errorMsg:""}
        case AuthActionConstants.registerFail:
            return {...state, errorMsg:action.payload, loading:false}
        case AuthActionConstants.logoutStart:
            return {...state, loading:true, errorMsg:""}
        case AuthActionConstants.logoutSuccess:
            return {...state, loading:false, user:undefined}
        case AuthActionConstants.logoutFail:
            return {...state, loading:false, errorMsg:"Logout Failed"}

        default:
            return state
    }

}

export type AuthActions = LoginStart | LoginSuccess | LoginFail | RegisterStart | RegisterSuccess | RegisterFail | LogoutStart | LogoutSuccess | LogoutFail