import React from 'react';
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";
import {addPost, subscribe, updateNewPostText} from "./redux/state";
import state from './redux/state';


export let rerenderEntareTree = (state) =>{
    ReactDOM.render( <BrowserRouter>
        <App state={state} addPost={addPost} updateNewPostText={updateNewPostText} />
    </BrowserRouter>, document.getElementById('root'));
}



rerenderEntareTree(state);

subscribe(rerenderEntareTree);

// serviceWorker.unregister();