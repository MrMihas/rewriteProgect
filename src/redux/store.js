import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import {sidebarsReducer} from "./sidebar-reducer";



let store = {

    _state: {

        profilePage: {

            posts: [
                {id: 1, message: 'Pasha', likesCount: 12},
                {id: 2, message: 'Kasha', likesCount: 2},
                {id: 3, message: 'Masha', likesCount: 133},
                {id: 4, message: 'Dasha', likesCount: 17},
            ],
            newPostText: "Злови журавля"
        },

        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Pasha'},
                {id: 2, name: 'Kasha'},
                {id: 3, name: 'Masha'},
                {id: 4, name: 'Dasha'},
            ],

            messages: [
                {id: 1, message: 'Pasdasdasdsha'},
                {id: 2, message: 'Kaasdasdassha'},
                {id: 3, message: 'Mashasdasdasda'},
                {id: 4, message: 'Dasasdasdasdasdha'},
            ],

            newMessageBody: ""


        },

        sidebar: {
            menuItem: [
                {
                    item: "Profile",
                    link: "/profile"
                },
                {
                    item: "Dialogs",
                    link: "/dialogs"
                },
                {
                    item: "Settings",
                    link: "/settings"
                }
            ],
            friends: [
                {
                    id: 1,
                    name: "Pete",
                    avatar: "https://avatarko.ru/img/kartinka/1/avatarko_anonim.jpg"
                },
                {
                    id: 2,
                    name: "John",
                    avatar: "https://avatarko.ru/img/kartinka/1/avatarko_anonim.jpg"
                },
                {
                    id: 3,
                    name: "Monblan",
                    avatar: "https://avatarko.ru/img/kartinka/1/avatarko_anonim.jpg"
                }
            ]

        },

    },
    _callSubscriber() {

    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    _addPost(){
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = "";
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },

   dispatch(action){
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogPage, action);
    this._state.sidebar = sidebarsReducer(this._state.sidebar, action);
            this._callSubscriber(this._state);
        }
   }


export default store;