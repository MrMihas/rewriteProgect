import React from "react";
import n from "./Navbar.module.css";
import {NavLink} from "react-router-dom";

const Navbar = () =>{
    return(
        <nav className={n.aside}>
            <ul>
                <li className={n.AppLink}>
                    <NavLink exact to="/profile" activeClassName={n.active}> Profile </NavLink>
                {/* exact -- привязка к точному адрессу   */}
                </li>
                <li className={n.AppLink}>
                    <NavLink to="/dialogs" activeClassName={n.active}>Messages</NavLink>
                </li>
                <li className={n.AppLink}>News</li>
                <li className={n.AppLink}>Settings</li>
            </ul>
        </nav>
    )
}

export default Navbar;