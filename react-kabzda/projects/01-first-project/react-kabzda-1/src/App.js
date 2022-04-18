import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Settings from './Components/Settings/Settings';
import News from './Components/News/News';
import Music from './Components/Music/Music';
import {Route} from "react-router-dom";
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import UsersContainer from './Components/Users/UsersContainer';
import ProfileContainer from './Components/Profile/ProfileContainer';
import HeaderContainer from './Components/Header/HeaderContainer';
import LoginContainer from './Components/Login/LoginContainer';


class App extends React.Component {
  render() {
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

export default App;
