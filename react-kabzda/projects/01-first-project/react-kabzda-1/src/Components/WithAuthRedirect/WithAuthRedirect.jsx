import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";

export let WithAuthRedirect = (Component) => {
    let mapStateToProps = (state) => ({
        isAuth: state.auth.isAuth
    })
    class RedirectComponent extends React.Component {
        render () {
            if (!this.props.isAuth) return <Redirect to='/login'/> 

            return <Component {...this.props} />
        }
    }
    let ConnectedAuthRedirectComponent = connect(mapStateToProps)(RedirectComponent)
    return ConnectedAuthRedirectComponent
}


