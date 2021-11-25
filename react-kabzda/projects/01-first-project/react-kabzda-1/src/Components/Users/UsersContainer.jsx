import { connect } from 'react-redux';
import { followUserAC, setUsersAC, unfollowAC } from '../../redux/usersReducer';
import Users from './Users';

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
    }
}

let mapStateToDispatch = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followUserAC(userId))  
        }, 
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))  
        }, 
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        } 
    }
}
const UsersContainer = connect(mapStateToProps, mapStateToDispatch)(Users)

export default UsersContainer;