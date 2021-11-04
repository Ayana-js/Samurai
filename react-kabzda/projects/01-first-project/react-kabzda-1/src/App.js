import React from 'react';
import './App.css';
import Dialogs from './Components/Dialogs/Dialogs';
import Header from './Components/Header/Header'
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import Settings from './Components/Settings/Settings';
import News from './Components/News/News';
import Music from './Components/Music/Music';
import {BrowserRouter, Route} from "react-router-dom";





const App = (props) => {
  return (
    <BrowserRouter>
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>
        <Route path='/dialogs' render={ () => < Dialogs messages={props.messages} dialogs={props.dialogs}/>} />
        <Route path='/music' component={Music}/>
        <Route path='/settings' component={Settings}/>
        <Route path='/news' component={News}/>
        <Route path='/profile' render={ () => < Profile posts={props.posts}/>}/>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
