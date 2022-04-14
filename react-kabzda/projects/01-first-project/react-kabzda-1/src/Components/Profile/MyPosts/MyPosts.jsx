import React from 'react';
import { Field, reduxForm } from 'redux-form';
import s from './MyPosts.module.css'
import Post from './Post/Post';

const NewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
    <Field placeholder={"Enter your message"} name={"newPostText"} component={"textarea"} /> 
    <div>
    <button> Add post</button>
    <button> Remove</button>
    </div>
</form>
    )}

const NewPostReduxForm = reduxForm({form: 'posts'}) (NewPostForm)

const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Post message={p.message} count={p.likesCount} />)

    let onAddPost = (values) => {
       props.addPost(values.newPostText)
    }

    return <div className={s.postsBlock}>
        <h3> My posts </h3>
        <div>
        </div>
        <div className={s.posts}>
            { postsElements }
        </div>
        <NewPostReduxForm onSubmit={onAddPost}/>
    </div>
}

export default MyPosts; 