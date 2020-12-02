import React from 'react';
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";
import store from './redux/redux-store';


export let rerenderEntireTree = (state) =>{

    ReactDOM.render( <BrowserRouter>
        <App state={state}
             dispatch={store.dispatch.bind(store)}
             store={store}/>
    </BrowserRouter>, document.getElementById('root'));
}



rerenderEntireTree(store.getState());

store.subscribe(() =>{
    let state = store.getState();
    rerenderEntireTree(state);
});

// serviceWorker.unregister();