import React from "react";
import n from "./Navbar.module.css";
import {NavLink} from "react-router-dom";

import Friends from "./Friends/Friends.jsx";
import StoreContext from "../../StoreContext";


const Navbar = () =>{
        return (
            <StoreContext.Consumer>
                {
                    store =>{

                        let state = store.getState().sidebar;
                        debugger
                        const newMenu = state.menuItem.map(item => {
                            return (
                                <li className={n.AppLink}>
                                    <NavLink to={item.link}
                                             activeClassName={n.active}>{item.item}</NavLink>
                                </li>
                            )
                        })
                        return(
                            <nav  className={n.aside}>
                                <ul>
                                    {newMenu}
                                </ul>
                                <Friends friends={store.friends}/>
                            </nav>
                        )
                    }
                }
            </StoreContext.Consumer>
        )
}

export default Navbar;