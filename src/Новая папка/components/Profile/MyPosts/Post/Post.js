import React from "react";
import s from "./Post.module.css";



const Post = (props) => {

    const {posts} = props;
    let newsTemplate;

    if(posts.length){
        newsTemplate = props.posts.map(function (itm, index) {
            return (
                <div className={s.post} key={index}>
                    <img className={s.ava} src="https://avatarko.ru/img/kartinka/1/avatarko_anonim.jpg" alt="" />
                    <p className={s.item}>{itm.message}</p>
                    <div className={s.item}> <span className={`${s.colorRed}`}>♥</span> {itm.likes}</div>
                </div>

            )

        })
    } else{
        newsTemplate = <strong>no news</strong>
    }

    return (
        <React.Fragment>
            {newsTemplate}

        </React.Fragment>
    )
}

export default Post;