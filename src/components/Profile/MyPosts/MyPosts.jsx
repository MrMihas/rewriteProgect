import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) =>{



    let postsElements = props.posts.map(post =>{
        return(
            <Post message={post.message} likesCount={post.likesCount}/>
        )
    })
    return(
            <div>
                <h2>My Posts</h2>
                <div>
                    <textarea name="" id=""></textarea>
                    <button> Add Post</button>
                </div>

                <h2>new post</h2>
                <div className={s.posts}>

                    {postsElements}

                </div>
            </div>


    )
}

export default MyPosts;