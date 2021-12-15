import React from "react";
import {createField, Input, Textarea} from "../../common/FormsControls/FormsControls";
import {reduxForm} from "redux-form";
import style from "../../common/FormsControls/FormsControls.module.css";

const ProfileDataForm = ({handleSubmit, profile, error}) =>{
    return (<form onSubmit={handleSubmit}>
        <div>
            <button>Save</button>
            {error && <div className={style.form_summary_error}>
                {error}
            </div>}
            {/*<div>
                <button>Login</button>
            </div>*/}
        </div>
        <div><b>Name:</b>{createField("Full name", "fullName", [], Input)}</div>
        <div><b>About me</b>:
            {createField("About me", "aboutMe", [], Textarea)}</div>
        <div><b>Looking for a job:</b>
            {createField("", "lookingForAJob", [], Input, {type:"checkbox"})}</div>
        <div><b>My professional skiils</b>:
            {createField("My professional skiils", "lookingForAJobDescription", [], Textarea)}</div>
    </form>)
}

const ProfileDataReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataReduxForm;