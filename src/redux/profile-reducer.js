const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    posts: [],
    newPostText: "Злови журавля",
    profile: null
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_POST:
            let newPost = {
                id: 7,
                message: state.newPostText,
                likes: 0
            };
            return {
                ...state,
                posts : [...state.posts, newPost ],
                newPostText: "",
            };


        case UPDATE_NEW_POST_TEXT : {
            return {
                ...state,
                // posts : [...state.posts],
                newPostText :action.newText,
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state, profile: action.profile
            }
        }
        default:
            return state;

    }
    return state;
}

export const addPostCreator = () => ({type: ADD_POST})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const updateNewPostTextCreator = (text) => {
    return {type: UPDATE_NEW_POST_TEXT, newText: text}
}


export default profileReducer;