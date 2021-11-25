import React from "react";
import s from "./Users.module.css"
import axios from "axios";

const Users = (props) => {
    debugger
    if (props.users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users?api_key=2c44fd22-9726-46ca-b8a9-6b121f75a70d").then(response => { 
        props.setUsers(response.data.items)
    })
    }

    return (
    <div> {
        props.users.map(u=> <div key={u.id}> 
                <div> {u.name} </div>
                <div> <img src={u.photoUrl} className={s.ava} /> </div>
                <div> {u.status} </div>
                <div> {u.country} </div>
                <div> {u.city} </div>
                <div> {u.followed
                ?<button onClick ={() => {props.unfollow(u.id)}} > UNFOLLOW </button>
                :<button onClick ={ () => {props.follow(u.id)} } > FOLLOW </button>}
                </div>                
             </div> 
             )
        }
    </div>
    )
}

export default Users