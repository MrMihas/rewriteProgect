const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [],
    newPostText: "Злови журавля"
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_POST: {
            let newPost = {
                id: 7,
                message: state.newPostText,
                likes: 0
            };
            let stateCopy = {...state};
            stateCopy.posts = [...state.posts];
            stateCopy.posts.push(newPost);
            stateCopy.newPostText = "";
            return stateCopy;
            }
        case UPDATE_NEW_POST_TEXT : {
            let stateCopy = {...state};
            stateCopy.posts = [...state.posts];

            stateCopy.newPostText = action.newText;
            return stateCopy;
        }

        default:
            return state;

    }
    return state;
}

export const addPostCreator = () => ({type: ADD_POST})
export const updateNewPostTextCreator = (text) => {
    return {type: UPDATE_NEW_POST_TEXT, newText: text}
}


export default profileReducer;