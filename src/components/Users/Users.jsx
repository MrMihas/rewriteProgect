import React from "react";
import * as axios from "axios";
import icon from '../../assets/images/empty.png';

class Users extends React.Component{

    getUsers = () => {
        if (this.props.users.length === 0) {
            axios.get("http://127.0.0.1:5500/api/users.json").then(response => {
                this.props.setUsers(response.data.items);
            })
        }

    }


    render() {
        return <React.Fragment>
            <button onClick={this.getUsers}>get Users</button>
            {
                this.props.users.map(u => {
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
                              this.props.unfollow(u.id)
                          }}>unfollow</button>
                          : <button onClick={() => {
                              this.props.follow(u.id)
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
}

export default Users;
