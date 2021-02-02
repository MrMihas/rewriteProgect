import {combineReducers, createStore} from "redux";
import {sidebarsReducer} from "./sidebar-reducer";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import usersReducer from "./users-reducer";



let reducers = combineReducers({
    sidebar: sidebarsReducer,
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
});


let store = createStore(reducers);

window.store = store;

export default store;