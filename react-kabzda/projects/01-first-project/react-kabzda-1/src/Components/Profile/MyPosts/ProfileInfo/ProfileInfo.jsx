import React from "react";
import Preloader from "../../../../common/preloader/Preloader";
import s from "./ProfileInfo.module.css"
import Profilephoto from '../../../../assets/images/user.png'
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
    if(!props.profile) {
        return <Preloader/>
    }

    return (<div>
        <div className={s.descriptionInfo}>
            <img alt="" src={props.profile.photos.large != null ? props.profile.photos.large : Profilephoto } className={s.photo} />
           <h2 className={s.profileName}> {props.profile.fullName} </h2>
           <div> <ProfileStatus status={'Hey!!!'} /> </div>
            {props.profile.aboutMe} 
            {props.profile.contacts.facebook} 
            {props.profile.lookingForAjob}
            {props.profile.lookingForAJobDescription}
        </div>
    </div>
    )
} 

export default ProfileInfo