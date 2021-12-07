import { setAuthMe } from "../api/api"

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA'
const SET_AUTH_USER_PROFILE = 'SET_AUTH_USER_PROFILE'

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    userProfile: null
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
        default:
            return state
    }

}

export const setAuthUserData = (id, email, login) => ({
    type: SET_AUTH_USER_DATA, id, email, login })
export const setAuthUserProfile = (profile) => ({ type: SET_AUTH_USER_PROFILE, profile })

export const getAuthMe = () => {
    return (dispatch) => {
        setAuthMe()
        .then(data => { 
          if (data.resultCode === 0) {
             let {id, email, login} = data.data
             dispatch (setAuthUserData(id,email,login))
        }
    })
    }}

export default authReducer