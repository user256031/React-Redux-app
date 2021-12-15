import React from "react";
import s from './Friends.module.css'
import FriendsItem from "./FriendsItem/FriendsItem";

const Friends = (props) => {
    let dialogsElements = props.state.friends.map(d => <FriendsItem key={d.id} name={d.name} id={d.id}/>);

    return (
        <div className={s.r}>
            {dialogsElements}
        </div>

    )
}

export default Friends