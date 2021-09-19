import React from 'react';
import './App.css';
import Header from './Components/Header/Header'
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';


const App = () => {
  return (
    <div className='app-wrapper'>
          <img src='https://d1csarkz8obe9u.cloudfront.net/posterpreviews/app-logo-design-template-5ceda3418eba54b040875a86d7e7b8ec_screen.jpg?ts=1573502884'/>
      <Header />
      <Navbar />
      <Profile />
    </div>
  );
}

export default App;
