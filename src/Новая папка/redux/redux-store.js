import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import {sidebarsReducer} from "./sidebar-reducer";

let reducers = combineReducers({

    profilePage: profileReducer,
    dialogPage: dialogsReducer,
    sidebar: sidebarsReducer
});


let store = createStore(reducers);


export default store;