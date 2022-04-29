import React from "react";
import Preloader from "../../../../common/Preloader/Preloader";
import s from "./ProfileInfo.module.css"
import Profilephoto from '../../../../assets/images/user.png'
import ProfileStatus from "./ProfileStatus";
import ProfileStatusWiyhHook from "./ProfileStatusWiyhHook";

const ProfileInfo = ({profile, updateStatus, status}) => {
    if(!profile) {
        return <Preloader/>
    }

    return (<div>
        <div className={s.descriptionInfo}>
            <img alt="" src={profile.photos.large != null ? profile.photos.large : Profilephoto } className={s.photo} />
           <h2 className={s.profileName}> {profile.fullName} </h2>
           <div> <ProfileStatusWiyhHook status={status} updateStatus={updateStatus}/> </div>
            {profile.aboutMe} 
            {profile.contacts.facebook} 
            {profile.lookingForAjob}
            {profile.lookingForAJobDescription}
        </div>
    </div>
    )
} 

export default ProfileInfo