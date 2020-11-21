import React from "react";
import s from "../Dialogs.module.css";


const MessageItem =(props) => {
                    const MessageData = props.messages.map(message =>{
                        return(
                            <div className={s.message} data-id={message.id}>{message.message} </div>
                        )
                    })
        return (
            <React.Fragment>
                {MessageData}
            </React.Fragment>
        )

}

export default MessageItem;