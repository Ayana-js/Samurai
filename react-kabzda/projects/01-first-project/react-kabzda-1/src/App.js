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
          <div>
          <img src='https://www.planetware.com/wpimages/2019/10/switzerland-in-pictures-most-beautiful-places-matterhorn.jpg'/>
          <div> ava + description </div> 
          <div>
            My posts 
            <div> 
              New post 
            </div>
            <div>
              post 1 
            </div>
            <div>
              post 2
            </div>
          </div>
          </div>
        </div>
    </div>
  );
}

export default App;
