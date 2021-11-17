import React from "react";
import { addMessageActionCreator, updateNewMessageTextActionCreator } from "../../redux/dialogsReducer";
import s from './Dialogs.module.css'
import DialogItem from "./DiologItem/DiologItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />)
    let messagesElements = props.state.messages.map(m  => <Message message={m.message} id={m.id} />)
    
    let addMessage = () => {
       props.dispatch(addMessageActionCreator())
    }

    let onMessageChange = (e) => {
        let text = e.target.value
        let action = updateNewMessageTextActionCreator(text)
        props.dispatch(action)
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
               { messagesElements }
            </div>
            <div className={s.text}> 
            <textarea placeholder='Enter your message'
                      onChange={onMessageChange}
                      value={props.state.newMessageText} > 
            </textarea>
            <button onClick={ addMessage }> Send message</button>
            </div>
        </div>
    )
}

export default Dialogs;