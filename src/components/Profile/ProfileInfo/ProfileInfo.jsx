import React from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import icon from "../../../assets/images/empty.png";

const ProfileInfo = (props) =>{

    if(!props.profile){
        return <Preloader/>
    }


    return(
        <div >
            <img className={s.headPhoto} src='https://s32677.pcdn.co/wp-content/uploads/2020/03/bic_coronavirus_panic.jpg.optimal.jpg'/>
            <div className={s.cont}>
                <p>My name is {props.profile.fullName}</p>

                <img src={ props.profile.photos.small !== null ? props.profile.photos.small : icon } alt=""/>
                <p>
                    {props.profile.aboutMe}
                </p>

                <p>{props.profile.lookingForAJob ? props.profile.lookingForAJobDescription: <p>No</p> }</p>

            </div>

        </div>
    )
}

export default ProfileInfo;