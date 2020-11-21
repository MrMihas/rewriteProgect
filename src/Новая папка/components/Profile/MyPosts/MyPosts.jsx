import React from "react";
import s from "./MyPosts.module.css";

const MyPosts =() =>{
    return(
        <React.Fragment>
            <h3>My Posts</h3>
            <div className={s.post}>
                <img className={s.ava} src="https://avatarko.ru/img/kartinka/1/avatarko_anonim.jpg" alt="" />
                <p className={s.item}>Lorem ipsum dolor sit amet.</p>
                <div className={s.item}> <span className={`${s.colorRed}`}>♥</span> 20</div>
            </div>
            <div>
                <textarea />
                <button >Send</button>
            </div>

        </React.Fragment>
    )
}