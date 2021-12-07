import React from "react";
import s from "./Users.module.css"
import userPhoto from '../../assets/images/user.png'
import { NavLink } from "react-router-dom";

const Users = (props) => {
    let pageCount = Math.ceil(props.totalPagesCount / props.pagesSize)
    let pages = []
    for (let i = 1; i <= pageCount; i++) {
      pages.push(i)
    }
    return <div>
      <div className={s.pages}>
        {
          pages.map(p=> <span className={props.currentPage === p && s.selectedPage}
                       onClick={ () => props.onChangePage(p) }>{p}</span>)
        }
      </div>
      {
        props.users.map(u=> <div key={u.id}> 
                <div> {u.name} </div>             
                <div> <NavLink to={"/profile/" + u.id}>
                        <img alt="" src={u.photos.small !=null ? u.photos.small: userPhoto} className={s.ava} />
                      </NavLink> 
                </div>
                <div> {u.followed
                ?<button disabled={props.userFollowingProcess.some(id=> id===u.id)} onClick ={() => {
                  props.unfollow(u.id)
                  }} > UNFOLLOW </button>
                :<button  disabled={props.userFollowingProcess.some(id=> id===u.id)} onClick ={ () => {
                  props.follow(u.id)
                 }} > FOLLOW </button>}
                </div>                
             </div> 
             )
        }
    </div>
  }

export default Users