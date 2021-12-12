import React from "react";
import {createField, Input, Textarea} from "../../common/FormsControls/FormsControls";
import {reduxForm} from "redux-form";

const ProfileDataForm = ({handleSubmit, profile}) =>{
    debugger
    return (<form onSubmit={handleSubmit}>
        <div>
            <button>Save</button>
        </div>
        <div><b>Name:</b> {createField("Full name", "fullName", [], Input)}</div>
        <div><b>About me:</b> {profile.aboutMe}
            {createField("About me", "aboutMe", [], Textarea)}</div>
        <div><b>Looking for a job:</b>
            {createField("", "LookingForAJob", [], Input, {type:"checkbox"})}</div>
        <div><b>Looking for a job description:</b> {profile.lookingForAJobDescription}
            {createField("My professional skiils", "LookingForAJobDescription", [], Textarea)}</div>
    </form>)
}

const ProfileDataReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataReduxForm;