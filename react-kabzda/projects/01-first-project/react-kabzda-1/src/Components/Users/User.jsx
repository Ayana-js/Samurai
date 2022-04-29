import React from "react";
import s from "./Users.module.css"
import userPhoto from '../../assets/images/user.png'
import { NavLink } from "react-router-dom";

const User = ({ userFollowingProcess, follow, unfollow, user }) => {

    return <div>
        <div> {user.name} </div>
        <div> <NavLink to={"/profile/" + user.id}>
            <img alt="" src={user.photos.small != null ? user.photos.small : userPhoto} className={s.ava} />
        </NavLink>
        </div>
        <div> {user.followed
            ? <button disabled={userFollowingProcess.some(id => id === user.id)} onClick={() => {
                unfollow(user.id)
            }} > UNFOLLOW </button>
            : <button disabled={userFollowingProcess.some(id => id === user.id)} onClick={() => {
                follow(user.id)
            }} > FOLLOW </button>}
        </div>
    </div> 
}

export default User