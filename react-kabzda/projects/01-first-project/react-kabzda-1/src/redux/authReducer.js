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
                id: action.id,
                email: action.email,
                login: action.login,
                isAuth: true
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

export const setAuthUserData = (id, email, login) => ({
    type: SET_AUTH_USER_DATA, id, email, login })
export const setAuthUserProfile = (profile) => ({ type: SET_AUTH_USER_PROFILE, profile })
export const loginMe = ({login, password, rememberMe}) => ({
    type: LOGIN, login, password, rememberMe
})  

export const getAuthMe = () => {
    return (dispatch) => {
        AuthAPI.authMe()
        .then(data => { 
          if (data.resultCode === 0) {
             let {id, email, login} = data.data
             dispatch (setAuthUserData(id,email,login))
        }
    })
}}

export const login = ({email, password, rememberMe}) => {
    return (dispatch) => {
        AuthAPI.login()
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(loginMe({email, password, rememberMe}))
            }
        })
    }
}

export default authReducer