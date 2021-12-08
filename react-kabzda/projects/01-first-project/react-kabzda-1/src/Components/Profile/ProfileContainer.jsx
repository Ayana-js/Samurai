import React from 'react';
import Profile from './Profile';
import {setUserProfile, getProfile} from '../../redux/profileReducer'
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { WithAuthRedirect } from '../WithAuthRedirect/WithAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
    componentDidMount() {        
         this.props.getProfile(this.props.match.params.userId)
    }
    
    render () {
        return <Profile {...this.props} profile={this.props.profile} />
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})

export default compose (connect (mapStateToProps, {setUserProfile, getProfile}),
withRouter,
WithAuthRedirect)
(ProfileContainer)