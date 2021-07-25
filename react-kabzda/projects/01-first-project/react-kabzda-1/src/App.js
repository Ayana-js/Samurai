import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className='app-wrapper'>
        <header className='header'> 
          <img src='https://d1csarkz8obe9u.cloudfront.net/posterpreviews/app-logo-design-template-5ceda3418eba54b040875a86d7e7b8ec_screen.jpg?ts=1573502884'/>
        </header>
        <nav className='nav'>
          <div> 
           <a>Profile</a> 
          </div>
          <div> 
           <a>News</a> 
          </div>
          <div> 
           <a></a> 
          </div>
          <div> 
           <a>Music</a> 
          </div>
          <div> 
           <a>Settings</a> 
          </div>
        </nav>
        <div className='content'>
          <img src='https://thumbs.dreamstime.com/b/landscape-seashells-tropical-beach-summer-holiday-55246816.jpg' />
          
        </div>
    </div>
  );
}

export default App;
