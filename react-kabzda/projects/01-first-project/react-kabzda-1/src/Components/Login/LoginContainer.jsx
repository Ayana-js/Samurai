import React, { useEffect } from 'react';
import Login from './Login';
import { login } from '../../redux/authReducer';
import { connect } from 'react-redux';

const LoginContainer = (props) => {
    return <Login login={props.login}/>
}

let mapStateToProps = (state) => ({
    rememberMe: state.auth.rememberMe,
    email: state.auth.email,
    password: state.auth.password
})

// let mapStateToDispatch = (dispatch) => {
//     return {
//         login: (newPostText) => {
//             dispatch(addPostActionCreator(newPostText))  
//         }
//     }
// }

export default connect(mapStateToProps)(LoginContainer);
