import React from "react";
import s from "./Post.module.css";

const Post = (props) =>{
    return(
                    <div className={s.post}>
                        <a className={s.ava}>
                            <img src="https://avatarko.ru/img/kartinka/1/avatarko_anonim.jpg" alt=""/>
                        </a>

                       <div>
                           <p> {props.message}</p>
                           <div className={s.item}> <span className={`${s.colorRed}`}>♥</span> {props.likesCount}</div>
                       </div>
                    </div>

    )
}

export default Post;