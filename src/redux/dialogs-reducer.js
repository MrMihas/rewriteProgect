const UPDATE_NEW_TEXT_BODY = 'UPDATE-NEW-TEXT-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';
//
// let initialState = {
//     messages: [
//         {
//             id: 1,
//             message: "hello pillow"
//         },
//     ],
//     dialogs: [
//         {id: 1, name: 'Mishka'},
//     ],
//     newMessageBody: ""
// }

let initialState = {
    messages: [
        {
            id: 1,
            message: 'call my name',
        },
    ],
    dialogs: [
        {
            id: 1,
            name: "Jack",
        },
    ],
    newMessageBody: ""

}

const dialogsReducer = (state = initialState, action) => {



    switch (action.type) {

        case UPDATE_NEW_TEXT_BODY :
            return {
                ...state,
                newMessageBody: action.body

            };

        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 7, message: body}],

            };

        default:
            return state;

    }


}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_TEXT_BODY, body: body})

export default dialogsReducer;