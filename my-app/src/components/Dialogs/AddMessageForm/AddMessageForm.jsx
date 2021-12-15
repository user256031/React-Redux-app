import {Field, reduxForm, reset} from "redux-form";
import React from "react";
import {maxLengthCreator, required} from "../../utilis/validator/validator";
import {Textarea} from "../../common/FormsControls/FormsControls";

const maxLength50 = maxLengthCreator(50);

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       validate={[required,maxLength50]}
                       name="newMessageText" placeholder="Enter your message"/>
            </div>
            <div>
                <button onClick={reset}>Send</button>
            </div>
        </form>
    )
}
export default reduxForm({form: "dialogAddMessageForm"})(AddMessageForm);