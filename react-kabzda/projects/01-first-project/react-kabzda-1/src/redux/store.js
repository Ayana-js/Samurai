import dialogsReducer from "./dialogsReducer"
import profileReducer from "./profileReducer"
import sidebarReducer from "./sidebarReducer"

let store = {
    _callSubscriber () {
        console.log('State changed')
    },
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hi, how are you?", likesCount: 17},
                {id: 2, message: "It's my first post", likesCount: 15},
            ],
            newPostText: ['']
        },
        dialogPage: {
            dialogs: [
                {id: 1, name: 'Ayana'},
                {id: 2, name: 'Tom Hardy'},
                {id: 3, name: 'Sam Claflin'},
                {id: 4, name: 'Jhonny Depp'},
                {id: 5, name: 'Jason Momoa'},
                {id: 6, name: 'Chris Evans'},
            ],

            messages: [
                {id: 1, message: "Hi, I'm Ayana"},
                {id: 2, message: "Yo, you're so beautiful"},
                {id: 3, message: "Yo, you're so beautiful"},
                {id: 4, message: "Yo, you're so beautiful"},
                {id: 5, message: "Yo, you're so beautiful"},
                {id: 6, message: "Yo, you're so beautiful"},
            ],

            newMessageText: ['']
        },

        sidebar: {
            friends: [
                {id: 1, name: 'Tom Hardy'},
                {id: 2, name: 'Jason Mamoa'},
                {id: 3, name: 'Jhonny'},
                {id: 4, name: 'Sam'},
            ]
        }
    },
    getState() {
        return this._state
    },
    dispatch (action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogPage = dialogsReducer (this._state.dialogPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)
        this._callSubscriber(this._state)
    },
    subscribe (observer) {
        this._callSubscriber = observer
    }
}

export default store
