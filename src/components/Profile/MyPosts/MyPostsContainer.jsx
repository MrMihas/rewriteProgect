import React from "react";
import {addPostCreator, updateNewPostTextCreator } from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";




const MyPostsContainer = (props) => {

// let state = props.store.getState();
//     let addPost = () => {
//         // let text = newPostElem.current.value;
//         props.store.dispatch(addPostCreator());
//     }
//
//     let onChangePost = (text) => {
//         let action = updateNewPostTextCreator(text);
//         props.store.dispatch(action);
//     }

    return (
        <StoreContext.Consumer>
            {
                store => {
                    let state = store.getState();
                    let addPost = () => {
                        // let text = newPostElem.current.value;
                        store.dispatch(addPostCreator());
                    }

                    let onChangePost = (text) => {
                        let action = updateNewPostTextCreator(text);
                        store.dispatch(action);
                    }
                    return(
                    <MyPosts updateNewPostText={onChangePost} addPost={addPost}
                             posts={state.profilePage.posts}
                             newPostText={state.profilePage.newPostText}/>
                )}
            }
        </StoreContext.Consumer>
                      )
}

export default MyPostsContainer;