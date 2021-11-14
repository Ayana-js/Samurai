import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DiologItem/DiologItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />)
    let messagesElements = props.state.messages.map(m  => <Message message={m.message} id={m.id} />)
    let newDialogElement = React.createRef()
    
    let addMessage = () => {
       props.addMessage()
    }

    let onMessageChange = () => {
        let text = newDialogElement.current.value
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
            <textarea onChange={onMessageChange} ref={newDialogElement} value={props.newMessageText} > </textarea>
            <button onClick={ addMessage }> Add message</button>
            </div>
        </div>
    )
}

export default Dialogs;