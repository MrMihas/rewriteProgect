import React from "react";
import s from "./friends.module.css";
import {NavLink} from "react-router-dom";

const Friends =(props)=>{

	const friends = props.friends.map(item =>{
		return(
			<a key={item.id} className={s.friends__block_user}>
				<img src={item.avatar} alt=""/>
				<span>{item.name}</span>
			</a>
		)
	})
	return(
			<div className={s.friends__block}>
				{friends}
			</div>
		)
}

export default Friends;