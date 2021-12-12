import React from "react";
import s from './FriendsItem.module.css';

const FriendItem = (props) => {
    let path = "/dialogs/" + props.id
    return (
        <div className={s.r}>
            <img src='https://shlyahta.com.ua/wp-content/uploads/mr-bean-19.jpg'/>
            {props.name}
        </div>
    )
}

export default FriendItem