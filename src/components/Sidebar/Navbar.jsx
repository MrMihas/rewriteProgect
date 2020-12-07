import React from "react";
import n from "./Navbar.module.css";
import {NavLink} from "react-router-dom";

import Friends from "./Friends/Friends.jsx";

let menuItem = [
    {
        item: "Profile",
        link: "/profile"
    },
    {
        item: "Dialogs",
        link: "/dialogs"
    },
    {
        item: "Settings",
        link: "/settings"
    }
];
  let friends = [
    {
        id: 1,
        name: "Pete",
        avatar: "https://avatarko.ru/img/kartinka/1/avatarko_anonim.jpg"
    },
    {
        id: 2,
        name: "John",
        avatar: "https://avatarko.ru/img/kartinka/1/avatarko_anonim.jpg"
    },
    {
        id: 3,
        name: "Monblan",
        avatar: "https://avatarko.ru/img/kartinka/1/avatarko_anonim.jpg"
    }
];

const Navbar = () => {

    const newMenu = menuItem.map(item => {
        return (
            <li className={n.AppLink}>
                <NavLink to={item.link}
                         activeClassName={n.active}>{item.item}</NavLink>
            </li>
        )
    });
    return (
        <nav className={n.aside}>
            <ul>
                {newMenu}
            </ul>
            <Friends friends={friends}/>
        </nav>
    )
};

export default Navbar;