import { connect } from 'react-redux';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profileReducer';
import MyPosts from './MyPosts';

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

let mapStateToDispatch = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator())  
        }, 

        updateNewPostText: (text) => {
            let action = updateNewPostTextActionCreator(text)
            dispatch(action)
        }
    }
}
const MyPostsContainer = connect(mapStateToProps, mapStateToDispatch)(MyPosts)

export default MyPostsContainer;