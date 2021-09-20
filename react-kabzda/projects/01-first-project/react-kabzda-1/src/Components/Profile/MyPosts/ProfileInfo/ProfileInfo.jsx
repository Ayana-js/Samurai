import React from "react";
import s from "./ProfileInfo.module.css"

const ProfileInfo = () => {
    return (<div>
        <div>
            <img src='https://www.planetware.com/wpimages/2019/10/switzerland-in-pictures-most-beautiful-places-matterhorn.jpg' />
        </div>
        <div className={s.descriptionInfo}>
            ava + description
        </div>
    </div>
    )
}

export default ProfileInfo;