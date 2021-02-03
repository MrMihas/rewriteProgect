import React from "react";
import * as axios from "axios";
import icon from '../assets/images/empty.png';

let Users = (props) => {

    let getUsers = () => {
        if (props.users.length === 0) {
            axios.get("http://127.0.0.1:5500/api/users.json").then(response => {
                props.setUsers(response.data.items);
            })
        }

    }

    return <React.Fragment>
        <button onClick={getUsers}>get Users</button>
        {
            props.users.map(u => {
                return (

                    <div key={u.id}>

                  <span>
                      <div>
                          <img width="60px" src={u.photos.small !== null ? u.photos.small : icon}/>
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
    </React.Fragment>
}

export default Users;