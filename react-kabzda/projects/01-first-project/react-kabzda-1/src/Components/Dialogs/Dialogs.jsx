import React from "react";
import { NavLink } from "react-router-dom";
import s from './Dialogs.module.css'

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    <NavLink to='/dialogs/1'>  Ayana </NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/2'>Aizhan </NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/3'>Tom Hardy </NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/3'>Sam Claflin </NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/4'>Chris Evans</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/5'>Jason Momoa</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>
                    Hi, I'm Ayana
                </div>
                <div className={s.message}>
                    Hello
                </div>
                <div className={s.message}>
                    Yo, you're both so beautiful
                </div>
            </div>
        </div>
    )
}

export default Dialogs;