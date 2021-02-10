import React from "react";
import styles from "./User.module.css";
import icon from "../../assets/images/empty.png";

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
                          <img width="65px" src={u.photos.small !== null ? u.photos.small : icon}/>
                      </div>
                      <div>
                      </div>
                      {u.followed
                          ? <button onClick={() => {
                              props.unfollow(u.id)
                          }}>unfollow</button>
                          : <button onClick={() => {
                              props.follow(u.id)
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