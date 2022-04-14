import React from "react";
import { Field, reduxForm } from "redux-form";
import s from './Dialogs.module.css'
import DialogItem from "./DiologItem/DiologItem";
import Message from "./Message/Message";

const DialogsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Enter your message"} name={"newTextMessage"} component={"textarea"} />    
            </div>
            <div>
                <button>Send message</button>
            </div>
        </form>
    )
}

const DialogsFormRedux = reduxForm({form: 'dialogs'}) (DialogsForm)

const Dialogs = (props) => {
    let dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id} />)
    let messagesElements = props.messages.map(m  => <Message message={m.message} id={m.id} />)

    const sendMessage = (values) => {
        props.sendMessage(values.newTextMessage)
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
            <DialogsFormRedux onSubmit={sendMessage}/>
            </div>
        </div>
    )
}


export default Dialogs;