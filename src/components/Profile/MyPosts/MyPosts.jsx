import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";


const MyPosts = (props) => {

    let postsElements = props.posts.map(post => {
        return (
            <Post message={post.message} likesCount={post.likesCount}/>
        )
    })

    let newPostElem;
    newPostElem = React.createRef();

    let onAddPost = () => {
        // let text = newPostElem.current.value;
        props.addPost();
    }

    let onChangePost = () => {
        let text = newPostElem.current.value;
        props.updateNewPostText(text);
    }


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