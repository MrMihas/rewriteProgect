import React from "react";
import * as axios from "axios";
import icon from '../../assets/images/empty.png';

let Users = (props) => {

    if (props.users.length === 0) {
        axios.get("http://127.0.0.1:5500/api/users.json").then(response =>{
                debugger;
                props.setUsers(response.data.items);
            })
        // props.setUsers([
        //         {
        //             id: 1,
        //             photoUrl: "https://avatarko.ru/img/kartinka/1/avatarko_anonim.jpg",
        //             followed: false,
        //             fullName: "Peter",
        //             status: "Hero",
        //             location: {
        //                 city: 'Rome',
        //                 country: 'Italy'
        //             }
        //         },
        //         {
        //             id: 2,
        //             photoUrl: "https://avatarko.ru/img/kartinka/1/avatarko_anonim.jpg",
        //             followed: true,
        //             fullName: "Lyke",
        //             status: "Hero",
        //             location: {
        //                 city: 'Rome',
        //                 country: 'Italy'
        //             }
        //         },
        // ]);
    }


    return (
        props.users.map(u => {
            return (
                <div key={u.id}>
                  <span>
                      <div>
                          <img width="60px" src={u.photos.small !== null ? u.photos.small : icon }/>
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
    );
}

export default Users;