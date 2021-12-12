import {maxLengthCreator, required} from "../utilis/validator/validator";
import {Field, reduxForm} from "redux-form";
import {createField, Input} from "../common/FormsControls/FormsControls";
import React from "react";
import style from "../common/FormsControls/FormsControls.module.css"

const maxLength50 = maxLengthCreator(50);
const LoginForm = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField("Email", "email",[required], Input )}
            {createField("Password", "password",[required], Input, {type: "password"} )}
            {createField(null, "rememberMe",[required], Input, {type: "checkbox"}, "remember me" )}

            {error && <div className={style.form_summary_error}>
                {error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

export const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)