import {combineReducers, createStore} from "redux";
import {sidebarsReducer} from "./sidebar-reducer";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";


let reducers = combineReducers({
    sidebar: sidebarsReducer,
    profilePage: profileReducer,

    dialogPage:dialogsReducer
});


let store = createStore(reducers);

export default store;