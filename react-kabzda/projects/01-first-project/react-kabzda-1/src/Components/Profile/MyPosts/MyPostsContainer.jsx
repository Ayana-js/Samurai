import { connect } from 'react-redux';
import { addPostActionCreator } from '../../../redux/profileReducer';
import MyPosts from './MyPosts';

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

let mapStateToDispatch = (dispatch) => {
    return {
        addPost: (newPostText) => {
            dispatch(addPostActionCreator(newPostText))  
        }
    }
}
const MyPostsContainer = connect(mapStateToProps, mapStateToDispatch)(MyPosts)

export default MyPostsContainer;