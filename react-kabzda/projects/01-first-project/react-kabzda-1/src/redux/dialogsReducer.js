const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'
const ADD_MESSAGE = 'ADD-MESSAGE'

let initialState = {
    dialogs: [
        {id: 1, name: 'Ayana'},
        {id: 2, name: 'Tom'},
        {id: 3, name: 'Sam'},
        {id: 4, name: 'Jhonny'},
        {id: 5, name: 'Jason'},
        {id: 6, name: 'Chris'},
    ],

    messages: [
        {id: 1, message: "Hi, I'm Ayana"},
        {id: 2, message: "Hi, how are you?"},
        {id: 3, message: "How is it going?"},
        {id: 4, message: "Hi, I use new Social Network"},
        {id: 5, message: " I'm boring"},
        {id: 6, message: "What are you doing?"},
    ],

    newMessageText: ''
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: 
        let text = action.newMessageText
            return {                
                ...state,
                newMessageText: '',
                messages: [...state.messages, {id: 7, message: text} ]
            }
        default:
            return state
        
    }  
}

export const addMessageActionCreator = (newMessageText) => ({
    type: ADD_MESSAGE, newMessageText
})

export default dialogsReducer