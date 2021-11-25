const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'
const ADD_MESSAGE = 'ADD-MESSAGE'

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT: 
            return {
                ...state,
                newMessageText: action.newText
            }
        case ADD_MESSAGE: 
        let text = state.newMessageText
            return {                
                ...state,
                newMessageText: '',
                messages: [...state.messages, {id: 7, message: text} ]
            }
        default:
            return state
        
    }  
}

export const addMessageActionCreator = () => ({
    type: ADD_MESSAGE
})
export const updateNewMessageTextActionCreator = (text) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    newText: text

})
export default dialogsReducer