import React from 'react';
import {Route} from "react-router-dom";
// import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Sidebar/Navbar.jsx";
import ProfileContainer from "./components/Profile/ProfileContainer.jsx";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/usersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";


const App = (props) => {
    return (
        <div className="app-wrapper">
            <HeaderContainer/>
            <Navbar />
            <div className="app-wrapper-content">

                <Route path="/profile/:userId?" render={
                    () => <ProfileContainer />}/>
                <Route path="/dialogs" render={
                    () => <DialogsContainer />}/>
                <Route path="/users" render={
                    () => <UsersContainer /> }/>

                {/* render faster than component*/}
            </div>
        </div>
    );

}

export default App;