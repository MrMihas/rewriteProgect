import React from 'react';
import {Route} from "react-router-dom";
// import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Profile from "./components/Profile/Profile.jsx";
import Dialogs from "./components/Dialogs/Dialogs.jsx";


const App = (props) => {

    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar friends={props.state.sidebar.friends} menu={props.state.sidebar.menuItem}/>
            <div className="app-wrapper-content">

                <Route path="/profile" render={
                    () => <Profile profilePage={props.state.profilePage}
                                   dispatch={props.dispatch}/>}/>
                <Route path="/dialogs" render={
                    () => <Dialogs
                          store={props.store}
                    />}/>

                {/* render faster than component*/}
            </div>
        </div>
    );

}

export default App;