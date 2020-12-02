const UPDATE_NEW_TEXT_BODY = 'UPDATE-NEW-TEXT-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Mishka'},
        {id: 2, name: 'Sasha'},
        {id: 3, name: 'Tanya'},
        {id: 4, name: 'Mishelle'},
        {id: 5, name: 'Olya'}
    ],
    messages: [
        {
            id: 1,
            message: "hello pollow"
        },
        {
            id: 2,
            message: "hello plate"
        },
        {
            id: 3,
            message: "hello spoon"
        },
        {
            id: 4,
            message: "iron ass"
        },
        {
            id: 6,
            message: "how are you?"
        }

    ],

    newMessageBody: ""
}

const dialogsReducer = (state = initialState, action) => {
    debugger;
    switch (action.type) {

        case UPDATE_NEW_TEXT_BODY :
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({id: 7, message: body});
            return state;

        default:
            return state;

    }


}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_TEXT_BODY, body: body})

export default dialogsReducer;