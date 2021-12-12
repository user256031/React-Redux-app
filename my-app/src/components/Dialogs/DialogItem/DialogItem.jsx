import React from "react";
import s from './DialogItem.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id
    return (
        <div className={s.dialog + ' ' + s.active}>
            <img src='https://shlyahta.com.ua/wp-content/uploads/mr-bean-19.jpg'/>
            <NavLink to={path}>{props.name} </NavLink>
        </div>
    )
}

export default DialogItem