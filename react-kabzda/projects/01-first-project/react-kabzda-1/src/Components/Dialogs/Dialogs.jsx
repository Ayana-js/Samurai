import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DiologItem/DiologItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id} />)
    let messagesElements = props.messages.map(m  => <Message message={m.message} id={m.id} />)
    
    let addMessage = () => {
       props.sendMessage()
    }

    let onMessageChange = (e) => {
        let text = e.target.value
        props.updateNewMessageText(text)
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
                      value={props.newMessageText} > 
            </textarea>
            <button onClick={ addMessage }> Send message</button>
            </div>
        </div>
    )
}

export default Dialogs;