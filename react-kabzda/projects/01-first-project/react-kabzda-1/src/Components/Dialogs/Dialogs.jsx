import React from "react";
import { NavLink } from "react-router-dom";
import s from './Dialogs.module.css'
import DialogItem from "./DiologItem/DiologItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialigsElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id} />)
    let messagesElements = props.messages.map(m  => <Message message={m.message} id={m.id} />)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialigsElements }
            </div>
            <div className={s.messages}>
               { messagesElements }
            </div>
        </div>
    )
}

export default Dialogs;