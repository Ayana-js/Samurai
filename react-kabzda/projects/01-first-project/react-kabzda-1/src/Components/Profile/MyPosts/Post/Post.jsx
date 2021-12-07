import React from 'react';
import s from './Post.module.css'

const Post = (props) => {
    return (
        <div className={s.item}>
            <img alt="" src='https://www.film.ru/sites/default/files/people/1456277-1436872.jpg' />
            {props.message}
            <div>
                <span>like</span>
                {props.count}
            </div>
        </div >
    )
}

export default Post;