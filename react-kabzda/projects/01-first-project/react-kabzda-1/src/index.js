
import state from './redux/state'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { addPost, updateNewPostText, subscribe, updateNewMessageText, addMessage } from './redux/state'

let rerenderEntireTree = (state) => {
    ReactDOM.render(    
        <BrowserRouter>
            <App state={state} addPost={addPost} 
                 updateNewPostText={updateNewPostText} 
                 updateNewMessageText={updateNewMessageText}
                 addMessage={addMessage} />
        </BrowserRouter>, document.getElementById('root'));
}

rerenderEntireTree(state)
subscribe(rerenderEntireTree)

export default App;