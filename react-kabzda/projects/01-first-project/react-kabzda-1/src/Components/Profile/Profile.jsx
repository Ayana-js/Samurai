import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './MyPosts/ProfileInfo/ProfileInfo';
// import s from './Profile.module.css'

// const p = new Promise((resolve, reject) => {
//     console.log('setTimeOut started');
//     setTimeout(() => {
//         console.log('setTimeOut ended');
//         resolve({status: 'OK'})
//     }, 2000)
// })

// p.then((data) => console.log(data))

const Profile = (props) => {
    return <div>
        <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus} />
        <MyPostsContainer />
    </div>
}

export default Profile;