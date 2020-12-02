import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {addPostCreator, updateNewPostTextCreator } from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";




const MyPostsContainer = (props) => {

let state = props.store.getState();
    let addPost = () => {
        // let text = newPostElem.current.value;
        props.store.dispatch(addPostCreator());
    }

    let onChangePost = (text) => {
        let action = updateNewPostTextCreator(text);
        props.store.dispatch(action);
    }

    return ( <MyPosts updateNewPostText={onChangePost} addPost={addPost}
                      posts={state.profilePage.posts}
                      newPostText={state.profilePage.newPostText}

    />  )
}

export default MyPostsContainer;