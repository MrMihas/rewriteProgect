const FOLLOW = "FOLLOW";
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [
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
        {
            id: 3,
            photoUrl: "https://avatarko.ru/img/kartinka/1/avatarko_anonim.jpg",
            followed: true,
            fullName: "Joke",
            status: "monster",
            location: {
                city: 'Romania',
                country: 'Romania'
            }
        },
    ]
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                }),

            };

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                }),

            }

        case SET_USERS:
            return {...state, users:[...state.users, ...action.users] }
            default:
            return state;
    }
}

export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => {
    return ({type: UNFOLLOW, userId})
};
export const setUsersAC = (users) => ({type: SET_USERS, users});


export default usersReducer;