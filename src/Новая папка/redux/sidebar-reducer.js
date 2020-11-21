let initialState =   {
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
};

export const sidebarsReducer = (state = initialState, action)=>{
    return state;
}