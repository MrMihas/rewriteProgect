
import React from "react";
import s from "./Dialogs.module.css";
import UserItem from "./Dialog/UserItem";
import MessageItem from "./Message/MessageItem";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../redux/dialogs-reducer";


const Dialogs = (props) => {

    let state = props.store.getState().dialogPage;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
		console.log( props.store.dispatch(sendMessageCreator()));
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
       props.store.dispatch(updateNewMessageBodyCreator(body));
        console.log(body);
    }

    return (
        <section className={s.dialogs}>
            <div className={s.dialogsItems}>
                <UserItem dialogs={state.dialogs}/>
            </div>
            <div className={s.messages__item}>
                <MessageItem messages={state.messages}/>
            </div>
            <div className="field">
                <textarea placeholder="enter message"
                          onChange={onNewMessageChange}
                          value={state.newMessageText}></textarea>
                <button onClick={onSendMessageClick}> Send</button>
            </div>
        </section>
    );

}

export default Dialogs;

