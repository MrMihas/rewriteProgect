import React from "react";
import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem.jsx";
import Message from "./Message/Message.jsx";
import {updateNewMessageBodyCreator, sendMessageCreator} from "../../redux/dialogs-reducer";


const Dialogs = (props) => {

    let state = props.dialogsPage;

    let messagesElements = state.messages.map(message => <Message message={message.message}/>);
    let dialogsElements = state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);


    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage();
    }

    let onNewMessageChange = (event) => {
        let body = event.target.value;
        props.updateNewMessageBody(body);
    }

    return (
        <section className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}

            </div>
            <div className={s.messages__item}>
                {messagesElements}

            </div>

            <div className="field">
                <textarea onChange={onNewMessageChange} value={newMessageBody}></textarea>
                <button onClick={onSendMessageClick}> Send</button>
            </div>
        </section>
    )
}

export default Dialogs;
