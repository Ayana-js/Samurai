import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css'

const Profile = () => {
    return <div>
        <div>
            <img src='https://www.planetware.com/wpimages/2019/10/switzerland-in-pictures-most-beautiful-places-matterhorn.jpg' />
            <div> ava + description </div>
            <MyPosts />
        </div>
    </div>
}

export default Profile;