import React from "react";
import {addPostCreator, updateNewPostTextCreator} from "../../../redux/profile-reducer";
import Profile from "../Profile.jsx";
import posts from "./Post/Post.jsx";

const MainInfoContainer = (props) => {

    let addPost = () => {
        props.store.dispatch(addPostCreator());
    };
    let onChangePost = (text) => {
        let action = updateNewPostTextCreator(text);
        props.store.dispatch(action);
            };

    return (
       <Profile updateNewPostText={onChangePost} addPost={addPost} posts={props.posts} />
        );

}


export default MainInfoContainer;