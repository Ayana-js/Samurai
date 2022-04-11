import React from "react";
import {Field, reduxForm} from "redux-form";
import s from './Dialogs.module.css'
import DialogItem from "./DiologItem/DiologItem";
import Message from "./Message/Message";

const MessageForm = (props) => {
    return <form  onSubmit={props.handleSubmit}> 
    <div> <Field placeholder="Enter your message" name="message" component="input"/> </div>
    <button> Send message </button>
    </form>
}

const MessageReduxForm = reduxForm({form:'message'}) (MessageForm)


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

    const onSubmit = (formData) => {
        console.log(formData);
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
            <MessageReduxForm onSubmit={onSubmit}/>
            </div>
        </div>
    )
}

export default Dialogs;