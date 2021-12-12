import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Messages from "./Messages/Messages";
import {Navigate} from "react-router-dom";
/*import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../validator/validator";*/
import AddMessageForm from "./AddMessageForm/AddMessageForm";

const Dialogs = (props) => {
    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = props.dialogsPage.messages.map(m => <Messages message={m.message}/>);

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageText)
    }

    if (!props.isAuth) return <Navigate to={"/login"}/>;
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <AddMessageForm onSubmit={addNewMessage} />
            </div>
        </div>
    )
}





export default Dialogs