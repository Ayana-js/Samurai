import React from "react";
import { NavLink } from "react-router-dom";
import s from './Dialogs.module.css'

const DialogItem = (props) => {

    let path = '/dialogs/' + props.id

    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path}>  {props.name} </NavLink>
    </div>
}

const Message = (props) => {
    return <div className={s.message}>
        {props.message}
    </div>
}

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Ayana" id="1" />
                <DialogItem name="Tom Hardy" id="2" />
                <DialogItem name="Sam Claflin" id="3" />
                <DialogItem name="Jhonny Depp" id="4" />
                <DialogItem name="Jason Momoa" id="5" />
                <DialogItem name="Chris Evans" id="6" />
            </div>
            <div className={s.messages}>
               <Message message="Hi, I'm Ayana"/>
               <Message message="Yo, you're so beautiful"/>
               <Message message="Yo, you're so beautiful"/>
               <Message message="Yo, you're so beautiful"/>
               <Message message="Yo, you're so beautiful"/>
            </div>
        </div>
    )
}

export default Dialogs;