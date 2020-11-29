import React from 'react';
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";
import store from './redux/redux-store';


export let rerenderEntareTree = (state) =>{

    ReactDOM.render( <BrowserRouter>

        <App state={state}
         debagger
             dispatch={store.dispatch.bind(store)}
              store={store}/>
    </BrowserRouter>, document.getElementById('root'));
}



rerenderEntareTree(store.getState());

store.subscribe(() =>{
    let state = store.getState();
    rerenderEntareTree(state);
});

// serviceWorker.unregister();