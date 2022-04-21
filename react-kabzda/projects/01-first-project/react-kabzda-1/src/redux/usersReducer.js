import { UserAPI } from "../api/api"

const FOLLOW = 'FOLLOW'
const UNFOLLOW ='UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const FOLLOWING_IS_FETCHING = 'FOLLOWING_IS_FETCHING'


let initialState = {
    users: [],
    pagesSize: 10,
    totalPagesCount: 0,
    currentPage: 1,
    isFetching: false,
    userFollowingProcess: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {    
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                } )
            } 
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: action.users

            }  
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.pageNumber
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalPagesCount: action.totalCount
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case FOLLOWING_IS_FETCHING:
            return {
                ...state,
                userFollowingProcess: action.isFetching
                ? [...state.userFollowingProcess, action.userId] 
                : state.userFollowingProcess.filter(id => id != action.userId)
            }
        default:
            return state
    }
}
export const followSuccess = (userId) => ({
    type: FOLLOW, userId })
export const unfollowSuccess = (userId) => ({
    type: UNFOLLOW, userId })
export const setUsers = (users) => ({
    type: SET_USERS, users })
export const setCurrentPage = (pageNumber) => ({
    type: SET_CURRENT_PAGE, pageNumber })
export const setTotalUsersCount = (totalCount) => ({
    type: SET_TOTAL_USERS_COUNT, totalCount })
export const toggleIsFetching = (isFetching) => ({
    type: TOGGLE_IS_FETCHING, isFetching })
export const followingIsFetching = (isFetching, userId) => ({
    type: FOLLOWING_IS_FETCHING, isFetching, userId })

export const requestUsers = ( pagesSize, currentPage) => {
    return (dispatch) => {
        dispatch (toggleIsFetching(true))
        dispatch (setCurrentPage(currentPage))
        UserAPI.getUsers(pagesSize, currentPage)
        .then(data => { 
            dispatch (toggleIsFetching(false))
            dispatch (setUsers(data.items))
            dispatch (setTotalUsersCount(data.totalCount))
      })
    }}

export const follow = ( id ) => {
    return (dispatch) => {
        dispatch (followingIsFetching(true, id))
            UserAPI.follow(id)
            .then(response => {                    
              if (response.data.resultCode === 0) {
                dispatch (unfollowSuccess(id))
                }
                dispatch (followingIsFetching(false, id))
              })
    }}

export const unfollow = ( id ) => {
    return (dispatch) => {
        dispatch (followingIsFetching(true, id))
            UserAPI.unfollow(id)
            .then(response => {                    
              if (response.data.resultCode === 0) {
                dispatch (unfollowSuccess(id))
                }
                dispatch (followingIsFetching(false, id))
              })
    }}




export default usersReducer