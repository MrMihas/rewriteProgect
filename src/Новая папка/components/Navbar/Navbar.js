import React from "react";
import myClass from "./Navbar.module.css";
import {NavLink} from "react-router-dom";


const Navbar= (props)=> {
        const newMenu = props.menuItem.map(item => {
            return (
                <li>
                    <NavLink to={item.link} className={`${myClass.AppLink} `}
                             activeClassName={myClass.active}>{item.item}</NavLink>
                </li>
            )
        })
        return (
            <nav className="nav">
                <ul>
                    {newMenu}
                </ul>
            </nav>
        )

}

export default Navbar;
