import React from "react";
import { NavLink } from "react-router-dom";
import s from './../Dialogs.module.css'
import userPhoto from '../../../assets/images/user.png'

const DialogItem = (props) => {

    let path = '/dialogs/' + props.id

    return <div>
         <img className={s.ava} alt="" src={userPhoto}/>
        <NavLink to={path} className={s.dialogsItem} activeClassName={s.activeDialogItem}>  {props.name} </NavLink>
    </div>
}

export default DialogItem;