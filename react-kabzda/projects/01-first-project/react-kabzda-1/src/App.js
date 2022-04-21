import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Settings from './Components/Settings/Settings';
import News from './Components/News/News';
import Music from './Components/Music/Music';
import {Route, withRouter} from "react-router-dom";
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import UsersContainer from './Components/Users/UsersContainer';
import ProfileContainer from './Components/Profile/ProfileContainer';
import HeaderContainer from './Components/Header/HeaderContainer';
import LoginContainer from './Components/Login/LoginContainer';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { initialize } from './redux/appReducer';
import Preloader from './common/preloader/Preloader';


class App extends React.Component {
  componentDidMount() {
    this.props.initialize()
  }
  render() {

    if (!this.props.initialized) {
      return <Preloader />
    }

  return (
    <div className='app-wrapper'>
      <HeaderContainer />
      <Navbar />
      <div className='app-wrapper-content'>
        <Route path='/music' component={Music}/>
        <Route path='/settings' component={Settings}/>
        <Route path='/news' component={News}/>
        <Route path='/dialogs' 
               render={ () => < DialogsContainer />} />
        <Route path='/profile/:userId?' 
               render={ () => < ProfileContainer />}/>
        <Route path='/users' 
               render={ () => < UsersContainer />}/>
        <Route path='/login'
               render={ () => <LoginContainer />} />
      </div>
    </div>
  )}
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default compose(
  withRouter,
 connect(mapStateToProps, {initialize})) (App);
