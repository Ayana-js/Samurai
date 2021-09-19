import React from 'react';
import s from './Post.module.css'

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src='https://scontent.ffru7-1.fna.fbcdn.net/v/t1.18169-9/23526_339558886310_1955560_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=9267fe&_nc_ohc=2axpRzF0_roAX9cIplg&_nc_ht=scontent.ffru7-1.fna&oh=f125800609edab3bdc7a2df38d27637a&oe=616B0F50' />
            {props.message}
            <div>
                <span>like</span>
                {props.count}
            </div>
        </div >
    )
}

export default Post;