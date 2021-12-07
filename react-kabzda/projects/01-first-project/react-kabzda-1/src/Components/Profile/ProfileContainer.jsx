import React from 'react';
import Profile from './Profile';
import {setUserProfile, getProfile} from '../../redux/profileReducer'
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

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

let withUrlDataContainerComponent = withRouter (ProfileContainer)

export default connect (mapStateToProps, {setUserProfile, getProfile})(withUrlDataContainerComponent);