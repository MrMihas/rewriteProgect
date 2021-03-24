import React from "react";
import styles from "./User.module.css";
import icon from "../../assets/images/empty.png";
import {NavLink} from "react-router-dom";
import * as axios from "axios";

let Users = (props) => {

    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }



    return <div>

        <div className={styles.dFlex}>
            {pages.map(p => {
                return <span className={props.currentPage === p && styles.selectPage}
                             onClick={(e) => {
                                 props.onPageChanged(p)

                             }}>{p}</span>
            })}
        </div>
        {
            props.users.map(u => {
                return (

                    <div key={u.id}>

                  <span>
                      <div>
                         <NavLink to={'/profile/' + u.id}>
                              <img width="65px" src={u.photos.small !== null ? u.photos.small : icon}/>
                         </NavLink>
                      </div>
                      <div>
                      </div>
                      {u.followed
                          ? <button onClick={() => {

                              axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,  {
                                  withCredentials: true,
                                  headers: {
                                      "API-KEY": "d6d45361-ff6e-48f7-9165-d0a0123b12e6"
                                  }
                              } ).then(response => {
                                  if(response.data.resultCode === 0){
                                      props.unfollow(u.id);
                                  }
                              });



                          }}>unfollow</button>

                          : <button onClick={() => {

                              axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                  withCredentials: true,
                                  headers: {
                                      "API-KEY": "d6d45361-ff6e-48f7-9165-d0a0123b12e6"
                                  }
                              } ).then(response => {
                                  if(response.data.resultCode === 0){
                                      props.follow(u.id);
                                  }
                              });



                          }}>follow</button>
                      }
                  </span>

                        <span>
        <span>
            <div>{u.name}</div>
            <div>{u.status}</div>
        </span>
                            {/*<span>*/}
                            {/*    <div>{u.location.country}</div>*/}
                            {/*    <div>{u.location.city}</div>*/}
                            {/*</span>*/}
                  </span>
                    </div>
                )
            })
        }
    </div>
}

export default Users;