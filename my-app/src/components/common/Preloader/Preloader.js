import React from "react";
import preloader from "../../../asseds/images/Spin-1s-200px.svg";
import style from './Preloader.module.css'

let Preloader = (props) => {
    return <div className={style.imagine}>
        <img className={style.imagine} src={preloader}/>
    </div>
}

export default Preloader;