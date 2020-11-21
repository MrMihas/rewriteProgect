import React from "react";
import n from "./Navbar.module.css";
import {NavLink} from "react-router-dom";

import Friends from "./../Sidebar/Friends.jsx";


const Navbar = (props) =>{


 const newMenu = props.menu.map(item => {
            return (
                <li className={n.AppLink}>
                    <NavLink to={item.link} 
                             activeClassName={n.active}>{item.item}</NavLink>
                </li>
            )
        })
        return (
            <nav  className={n.aside}>
                <ul>
                    {newMenu}
                </ul>
                <Friends friends={props.friends}/>
            </nav>
        )
}

export default Navbar;