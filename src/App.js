import React from 'react';
import {Route} from "react-router-dom";
// import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header.jsx";
import Navbar from "./components/Sidebar/Navbar.jsx";
import Profile from "./components/Profile/Profile.jsx";
import DialogsContainer from "./components/Dialogs/DialogsContainer";


const App = (props) => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar />
            <div className="app-wrapper-content">

                <Route path="/profile" render={
                    () => <Profile />}/>
                <Route path="/dialogs" render={
                    () => <DialogsContainer />}/>

                {/* render faster than component*/}
            </div>
        </div>
    );

}

export default App;