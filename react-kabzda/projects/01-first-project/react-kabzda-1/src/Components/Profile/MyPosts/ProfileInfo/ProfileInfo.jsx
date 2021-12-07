import React from "react";
import Preloader from "../../../../common/preloader/Preloader";
import s from "./ProfileInfo.module.css"
import Profilephoto from '../../../../assets/images/user.png'

const ProfileInfo = (props) => {
    if(!props.profile) {
        return <Preloader/>
    }

    return (<div>
        <div>
            <img alt="" src='https://www.planetware.com/wpimages/2019/10/switzerland-in-pictures-most-beautiful-places-matterhorn.jpg' />
        </div>
        <div className={s.descriptionInfo}>
            <img alt="" src={props.profile.photos.large != null ? props.profile.photos.large : Profilephoto } className={s.photo} />
           <h2 className={s.profileName}> {props.profile.fullName} </h2>
            {props.profile.aboutMe} 
            {props.profile.contacts.facebook} 
            {props.profile.lookingForAjob}
            {props.profile.lookingForAJobDescription}
        </div>
    </div>
    )
} 

export default ProfileInfo