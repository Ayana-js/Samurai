import React from 'react';
import './App.css';
import Dialogs from './Components/Dialogs/Dialogs';
import Header from './Components/Header/Header'
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import Settings from './Components/Settings/Settings';
import News from './Components/News/News';
import Music from './Components/Music/Music';
import {Route} from "react-router-dom";


const App = (props) => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>
        <Route path='/dialogs' 
               render={ () => < Dialogs state={props.state.dialogPage}
                                        updateNewMessageText={props.updateNewMessageText}
                                        addMessage={props.addMessage} />} />
        <Route path='/music' component={Music}/>
        <Route path='/settings' component={Settings}/>
        <Route path='/news' component={News}/>
        <Route path='/profile' 
               render={ () => < Profile state={props.state.profilePage} 
                                        addPost={props.addPost} 
                                        updateNewPostText={props.updateNewPostText}
                              />}/>
      </div>
    </div>
  );
}

export default App;
