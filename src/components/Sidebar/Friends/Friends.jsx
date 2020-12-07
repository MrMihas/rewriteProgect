import React from "react";
import s from "./Friends.module.css";

const Friends = (props) => {
    const friendsList = props.friends.map(item => {
        return (
            <a key={item.id} className={s.friends__block_user}>
                <img src={item.avatar} alt=""/>
                <span>{item.name}</span>
            </a>
        )
    })
    return (
        <div className={s.friends__block}>
            {friendsList}
        </div>


    )
}

export default Friends;