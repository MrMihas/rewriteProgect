import React from "react";
import s from "./ProfileInfo.module.css";


const ProfileInfo = () =>{
    return(
        <div >
            <img className={s.headPhoto} src='https://s32677.pcdn.co/wp-content/uploads/2020/03/bic_coronavirus_panic.jpg.optimal.jpg'/>
            <div>ava + content</div>

        </div>
    )
}

export default ProfileInfo;