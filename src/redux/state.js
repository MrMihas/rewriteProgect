
let state = {

    profilePage: {

            posts:  [
                {id: 1, message: 'Pasha',likesCount: 12},
                {id: 2, message: 'Kasha',likesCount: 2},
                {id: 3, message: 'Masha',likesCount: 133},
                {id: 4, message: 'Dasha',likesCount: 17},
            ]
    },

    dialogsPage: {

        messages: [
                    {id: 1, message: 'Pasdasdasdsha'},
                    {id: 2, message: 'Kaasdasdassha'},
                    {id: 3, message: 'Mashasdasdasda'},
                    {id: 4, message: 'Dasasdasdasdasdha'},
                ],

        dialogs:[
                    {id: 1, name: 'Pasha'},
                    {id: 2, name: 'Kasha'},
                    {id: 3, name: 'Masha'},
                    {id: 4, name: 'Dasha'},
                ]
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


}

export default state;