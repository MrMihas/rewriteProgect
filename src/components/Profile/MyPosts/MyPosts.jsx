import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {updateNewPostText} from "../../../redux/state";

const MyPosts = (props) => {

    let newPostElem;
    newPostElem = React.createRef();

    let onAddPost = () => {

        let text = newPostElem.current.value;
        props.addPost(text);
    }

    let onChangePost = () => {
        let text = newPostElem.current.value;
        props.updateNewPostText(text);
    }

    let postsElements = props.posts.map(post => {
        return (
            <Post message={post.message} likesCount={post.likesCount}/>
        )
    })
    return (
        <div>
            <h2>My Posts</h2>
            <div>
                    <textarea name="" ref={newPostElem}
                              onChange={onChangePost}
                              value={props.newPostText}>
                    </textarea>
                <button onClick={onAddPost}> Add Post</button>
            </div>

            <h2>new post</h2>
            <div className={s.posts}>

                {postsElements}

            </div>
        </div>


    )
}

export default MyPosts;