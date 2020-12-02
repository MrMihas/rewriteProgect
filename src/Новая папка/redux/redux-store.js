import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarsReducer from "./sidebar-reducer";

let reducers = combineReducers({


    dialogPage: dialogsReducer,
    // sidebar: sidebarsReducer,
    profilePage: profileReducer,
});


let store = createStore(reducers);


export default store;