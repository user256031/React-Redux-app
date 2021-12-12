import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";


let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'This is my first post', likesCount: 25},
                {id: 2, message: 'Hi, how are you', likesCount: 30},
                {id: 3, message: 'I am fine thanks)are you?', likesCount: 35},
                {id: 4, message: 'Vsux', likesCount: 35}
            ],
            newPostText: ''
        },
        dialogsPage: {
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
            newMessageText: ''
        },
        sidebar: {
            friends: [
                {id: 1, name: 'Jenich'},
                {id: 2, name: 'Dimych'},
                {id: 3, name: 'Andrey'},
                {id: 4, name: 'Andre'},
                {id: 5, name: 'Oleh'},
                {id: 6, name: 'Petya'},
            ]
        }
    },
    _callSubscriber() {
        console.log('State was changed')
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);

    }
}

export default store;
window.store = store;
//store - OOP