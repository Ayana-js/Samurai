import React from "react";
import { NavLink } from "react-router-dom";
import s from './../Dialogs.module.css'

const DialogItem = (props) => {

    let path = '/dialogs/' + props.id

    return <div className={s.dialog + ' ' + s.active}>
         <img className={s.ava} src="https://www.film.ru/sites/default/files/people/1456277-1436872.jpg"/>
        <NavLink to={path}>  {props.name} </NavLink>
    </div>
}

export default DialogItem;