let store = {
    _subscriber() {
        console.log('no subscribers (observers)')
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
        },
        getState() {
            return this._state
        }
    }
}


let rerenderEntireTree = () => {
    console.log('State changed')
}



let state = {
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
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText
    rerenderEntireTree(state)
}

export const addPost = () => {
    
    let newPost = 
        {
            id:5, 
            message: state.profilePage.newPostText,
            likesCount: 0
        }

    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ''
    rerenderEntireTree(state)
}

export const updateNewMessageText = (newText) => {
        state.dialogPage.newMessageText = newText
    rerenderEntireTree(state)
}

export const addMessage = () => {

    let newMessage = 
        {
            id:7, 
            message: state.dialogPage.newMessageText,
        }

    state.dialogPage.messages.push(newMessage)
    state.dialogPage.newMessageText = ''
    rerenderEntireTree(state)
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer
}
 

export default state 