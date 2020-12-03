import React from "react";
import s from "./Friends.module.css";
import StoreContext from "../../../StoreContext";

const Friends = (props) =>{

	


	return(

		<StoreContext.Consumer>
			{
				store =>{
					let state = store.getState().sidebar;
					const friendsList = state.friends.map(item =>{
						return(
							<a key={item.id} className={s.friends__block_user}>
								<img src={item.avatar} alt=""/>
								<span>{item.name}</span>
							</a>
						)
					})
					return(
						<div className={s.friends__block}>
							{friendsList}
						</div>

					)
				}
			}



		</StoreContext.Consumer>
		)
}

export default Friends;