import React from "react";
import * as axios from "axios";
import icon from '../../assets/images/empty.png';
import styles from "./User.module.css";



class Users extends React.Component {

    // constructor(props){
//     super(props);
// }
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        })
    }

onPageChanged = (pageNumber)=>{
    this.props.setCurrentPage(pageNumber);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
        this.props.setUsers(response.data.items);
    })
}
    render() {
        let pageCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        let pages = [];
        for (let i = 1; i <= pageCount; i++) {
            pages.push(i)
        }
        return <React.Fragment>
            <div>
                { pages.map(p=>{
                    return <span className={ this.props.currentPage === p && styles.selectPage}
                    onClick={(e)=>{this.onPageChanged(p)}}
                    >{p}</span>
                    }
                )}
            </div>
            {/*<button onClick={this.getUsers}>get Users</button>*/}
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
