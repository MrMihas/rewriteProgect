import React from "react";

let Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoUrl: "https://avatarko.ru/img/kartinka/1/avatarko_anonim.jpg",
                followed: false,
                fullName: "Peter",
                status: "Hero",
                location: {
                    city: 'Rome',
                    country: 'Italy'
                }
            },
            {
                id: 2,
                photoUrl: "https://avatarko.ru/img/kartinka/1/avatarko_anonim.jpg",
                followed: true,
                fullName: "Lyke",
                status: "Hero",
                location: {
                    city: 'Rome',
                    country: 'Italy'
                }
            },
        ]);
    }


    return (
        props.users.map(u => {
            return (
                <div key={u.id}>
                  <span>
                      <div>
                          <img width="60px" src={u.photoUrl}/>
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
            <div>{u.fullName}</div>
            <div>{u.status}</div>
        </span>
                      <span>
                          <div>{u.location.country}</div>
                          <div>{u.location.city}</div>
                      </span>
                  </span>
                </div>
            )
        })
    );
}

export default Users;