import React from "react";
import { Field, reduxForm } from "redux-form";
import { Textarea } from "../../common/FormsControls/FormsControls";
import { maxLengthCreator, required } from "../../utils/validators/validators";
import s from './Dialogs.module.css'
import DialogItem from "./DiologItem/DiologItem";
import Message from "./Message/Message";

const maxLength50 = maxLengthCreator(50)

const DialogsForm = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field placeholder={"Enter your message"} name={"newTextMessage"} component={Textarea} validate={[required, maxLength50]} />    
            </div>
            <div>
                <button>Send message</button>
            </div>
        </form>
    )
}

const DialogsFormRedux = reduxForm({form: 'dialogs'}) (DialogsForm)

const Dialogs = ({dialogs, messages, sendMessage}) => {
    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id} />)
    let messagesElements = messages.map(m  => <Message message={m.message} id={m.id} />)

    const onSendMessage = (values) => {
        sendMessage(values.newTextMessage)
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
            <DialogsFormRedux onSubmit={onSendMessage}/>
            </div>
        </div>
    )
}


export default Dialogs;