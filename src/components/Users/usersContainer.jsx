import React from "react";
import {connect} from "react-redux";
import {
    follow,
    setUsers,
    unfollow,
    setCurrentPages,
    setUsersTotalCount,
    toggleIsFetching,
    toggleFollowingProgress
} from "../../redux/users-reducer";
import * as axios from "axios";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {usersAPI} from "../../api/api";


class UsersContainer extends React.Component {

    // constructor(props){
//     super(props);
// }
    componentDidMount() {
        this.props.toggleIsFetching(true);

        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items);
            this.props.setUsersTotalCount(data.totalCount);
        })
    }

    onPageChanged = (pageNumber) => {

        this.props.setCurrentPages(pageNumber);
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items);
        })
    }

    render() {

        return <>
            {this.props.isFetching ? <Preloader /> :
                <Users totalUsersCount={this.props.totalUsersCount}
                       pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage}
                       onPageChanged={this.onPageChanged}
                       users={this.props.users}
                       follow={this.props.follow}
                       unfollow={this.props.unfollow}
                        toggleFollowingProgress={this.props.toggleFollowingProgress}
                       followingInProgress={this.props.followingInProgress}


                />
            }

            {/*<Users totalUsersCount={this.props.totalUsersCount}*/}
            {/*       pageSize={this.props.pageSize}*/}
            {/*       currentPage={this.props.currentPage}*/}
            {/*       onPageChanged={this.onPageChanged}*/}
            {/*       users={this.props.users}*/}
            {/*       follow={this.props.follow}*/}
            {/*       unfollow={this.props.unfollow}*/}


            {/*/>*/}

        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }
};

/*let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPagesAC(pageNumber))
        }, setTotalUsersCount: (totalCount) => {
            dispatch(setUsersTotalCountAC(totalCount))
        }, toggleIsFetching: (isFetchitg) => {
            dispatch(toggleIsFetchingAC(isFetchitg))
        },

    }
};*/

export default connect(mapStateToProps,
    {
        follow,
        unfollow,
        setUsers,
        setCurrentPages,
        setUsersTotalCount,
        toggleIsFetching,
        toggleFollowingProgress,

    }
    )(UsersContainer);
