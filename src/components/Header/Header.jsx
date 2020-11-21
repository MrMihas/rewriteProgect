import React from "react";
import s from "./Header.module.css";

const Header = () =>{
    return(
        <header className={s.header}>
            <img className='App-logo' src="https://avatarko.ru/img/kartinka/1/avatarko_anonim.jpg" />
        </header>
    )
}

export default Header;