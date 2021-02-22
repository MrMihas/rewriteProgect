import React from "react";
import s from "./Header.module.css";
import {NavLink} from "react-router-dom";

const Header = (props) =>{
    return(
        <header className={s.header}>
            <img className='App-logo' src="https://avatarko.ru/img/kartinka/1/avatarko_anonim.jpg" />
            <div className={s.loginBlock}>
                {props.isAuth ?props.login : <NavLink to={'/login'}>Login</NavLink>   }

            </div>
        </header>
    )
}

export default Header;