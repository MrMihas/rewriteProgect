import React from "react";
import {addPostCreator, updateNewPostTextCreator } from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import Dialogs from "../../Dialogs/Dialogs";




// const MyPostsContainer = (props) => {
//
// // let state = props.store.getState();
// //     let addPost = () => {
// //         // let text = newPostElem.current.value;
// //         props.store.dispatch(addPostCreator());
// //     }
// //
// //     let onChangePost = (text) => {
// //         let action = updateNewPostTextCreator(text);
// //         props.store.dispatch(action);
// //     }
//
//     return (
//         <StoreContext.Consumer>
//             {
//                 store => {
//                     let state = store.getState();
//                     let addPost = () => {
//                         // let text = newPostElem.current.value;
//                         store.dispatch(addPostCreator());
//                     }
//
//                     let onChangePost = (text) => {
//                         let action = updateNewPostTextCreator(text);
//                         store.dispatch(action);
//                     }
//                     return(
//                     <MyPosts updateNewPostText={onChangePost} addPost={addPost}
//                              posts={state.profilePage.posts}
//                              newPostText={state.profilePage.newPostText}/>
//                 )}
//             }
//         </StoreContext.Consumer>
//                       )
// }

let mapStateToProps =(state)=>{
    return{
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
    }
};
let mapDispatchToProps = (dispatch) =>{
    return{
        updateNewPostText: ()=>{dispatch(addPostCreator())},
        addPost:(text)=>{dispatch(updateNewPostTextCreator(text))}
    }
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;