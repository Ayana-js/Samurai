import { stopSubmit } from "redux-form"
import { AuthAPI } from "../api/api"

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA'
const SET_AUTH_USER_PROFILE = 'SET_AUTH_USER_PROFILE'
const LOGIN = 'LOGIN'

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    userProfile: null,
    password: null,
    rememberMe: false
}

const authReducer = (state=initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {
                ...state,
                ...action.payload,
            }
        case SET_AUTH_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case LOGIN:
            return {
                ...state,
                email: action.email,
                rememberMe: action.rememberMe,
                password: action.password
            }
        default:
            return state
    }
}

export const setAuthUserData = (id, email, login, isAuth) => ({
    type: SET_AUTH_USER_DATA, payload: {id, email, login, isAuth} })
export const setAuthUserProfile = (profile) => ({ type: SET_AUTH_USER_PROFILE, profile })
export const loginMe = ({login, password, rememberMe}) => ({
    type: LOGIN, login, password, rememberMe
})  

export const getAuthMe = () => async (dispatch) => {
        let response = await AuthAPI.authMe()
          if (response.data.resultCode === 0) {
             let {id, email, login} = response.data.data
             dispatch (setAuthUserData(id,email,login, true))
    }
}

export const login = (email, password, rememberMe) => async (dispatch) => {
        let response = await AuthAPI.login(email, password, rememberMe)
        console.log(response);
            if (response.data.resultCode === 0) {
                dispatch(getAuthMe())
            }
            else {
                let message = response.data.messages.length > 0 ? response.data.messages[0]: "Some error"
                dispatch(stopSubmit("login", {_error: message}))
            }
    }

export const logout = () => async (dispatch) => {
        let response = await AuthAPI.logout()
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
}

export default authReducer