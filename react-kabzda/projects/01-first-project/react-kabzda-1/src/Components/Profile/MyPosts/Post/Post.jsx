import React from 'react';
import s from './Post.module.css'
import userPhoto from '../../../../assets/images/user.png'

const Post = ({count, message}) => {
    return (
        <div className={s.item}>
            <img alt="" src={userPhoto} />
            {message}
            <div>
                <span>like</span>
                {count}
            </div>
        </div >
    )
}

export default Post;