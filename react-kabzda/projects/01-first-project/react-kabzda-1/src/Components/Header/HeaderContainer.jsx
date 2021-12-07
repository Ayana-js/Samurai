import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import {getAuthMe, setAuthUserData, setAuthUserProfile} from '../../redux/authReducer'

class HeaderContainer extends React.Component {
  componentDidMount() {
     this.props.getAuthMe()
    }
  render () {
    return <Header {...this.props}/>
  }
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    userProfile: state.auth.userProfile
})

export default connect(mapStateToProps, {setAuthUserData, setAuthUserProfile, getAuthMe})(HeaderContainer);