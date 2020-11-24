import React from 'react';
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";
import store from './redux/state';


export let rerenderEntareTree = (state) =>{
    ReactDOM.render( <BrowserRouter>
        <App state={store.getState()}
             addPost={store.addPost.bind(store)}
             updateNewPostText={store.updateNewPostText.bind(store)} />
    </BrowserRouter>, document.getElementById('root'));
}



rerenderEntareTree(store.getState());

store.subscribe(rerenderEntareTree);

// serviceWorker.unregister();