import React from 'react';
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";
import store from './redux/state';


export let rerenderEntareTree = (state) =>{
    ReactDOM.render( <BrowserRouter>
        <App state={state}
             dispatch={store.dispatch.bind(store)}
              store={store}/>
    </BrowserRouter>, document.getElementById('root'));
}



rerenderEntareTree(store.getState());

store.subscribe(rerenderEntareTree);

// serviceWorker.unregister();