import React from "react";
import s from "./Profile.module.css";
import Post from "./MyPosts/Post/Post";
import AboutUser from "./AboutUser";
import {addPostCreator, updateNewPostTextCreator} from "../../redux/profile-reducer";


const Profile = (props) => {

    let newPostElem;
    newPostElem = React.createRef();

    let onAddPost = () => {
        props.addPost();
    };
    let onChangePost = () => {
        let text = newPostElem.current.value;
        props.updateNewPostTextCreator(text);
    };

    return (
        <main>

            <section>

                <div className={s.headPhoto}>
                    <img src='https://s32677.pcdn.co/wp-content/uploads/2020/03/bic_coronavirus_panic.jpg.optimal.jpg'/>
                </div>

                <AboutUser/>

                <h3>My Posts</h3>

                <div>
                    <textarea onChange={onChangePost} ref={newPostElem} value={props.profilePage.newPostText}/>
                    <button onClick={onAddPost}>Send</button>
                </div>

            </section>
            <Post posts={props.profilePage.posts} dispatch={props.dispatch}/>
        </main>
        );

}


export default Profile;