let SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'}
    ],
    dialogs: [
        {id: 1, name: 'Jenich'},
        {id: 2, name: 'Dimych'},
        {id: 3, name: 'Andrey'},
        {id: 4, name: 'Sveta'},
        {id: 5, name: 'Sasha'},
        {id: 6, name: 'Serhey'}
    ],
}
const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {

        case SEND_MESSAGE:
            debugger;
            let body = action.newMessageText
            return {
                ...state,
                messages: [...state.messages, {id: 7, message: body}]
            };

        default:
            return state;

    }
}
    export const sendMessageCreator = (newMessageText) => ({type: SEND_MESSAGE, newMessageText})

    export default dialogsReducer;