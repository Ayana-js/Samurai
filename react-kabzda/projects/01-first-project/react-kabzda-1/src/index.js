import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

let dialogs = [
    {id: 1, name: 'Ayana'},
    {id: 2, name: 'Tom Hardy'},
    {id: 3, name: 'Sam Claflin'},
    {id: 4, name: 'Jhonny Depp'},
    {id: 5, name: 'Jason Momoa'},
    {id: 6, name: 'Chris Evans'},
]

let messages = [
    {id: 1, message: "Hi, I'm Ayana"},
    {id: 2, message: "Yo, you're so beautiful"},
    {id: 3, message: "Yo, you're so beautiful"},
    {id: 4, message: "Yo, you're so beautiful"},
    {id: 5, message: "Yo, you're so beautiful"},
    {id: 6, message: "Yo, you're so beautiful"},
]

let posts = [
    {id: 1, message: "Hi, how are you?", likesCount: 17},
    {id: 2, message: "It's my first post", likesCount: 15},
]

ReactDOM.render(<App dialogs={dialogs} messages={messages} posts={posts} />, document.getElementById('root'));


