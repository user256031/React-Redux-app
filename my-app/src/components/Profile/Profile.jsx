import s from './Profile.module.css'
import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import ContainerMyPosts from "./MyPost/ContainerMyPosts";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus} isOwner={props.isOwner} savePhoto={props.savePhoto} saveProfile={props.saveProfile}/>
            <ContainerMyPosts store = {props.store} />
        </div>
    );
}
export default Profile;

