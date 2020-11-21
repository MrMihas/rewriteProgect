import React from "react";
import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem.jsx";
import Message from "./Message/Message.jsx";



const Dialogs = (props) => {


    let dialogsElements = props.state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);


    let messagesElements = props.state.messages.map(message => {
        return (
            <Message message={message.message}/>
        )
    })
    
    return (
        <section className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}

            </div>
            <div className={s.messages__item}>
                {messagesElements}

            </div>


            <div className="field">
                <textarea></textarea>
                <button> Send</button>
            </div>
        </section>
    )
}

export default Dialogs;
