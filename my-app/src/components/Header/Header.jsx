import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={s.header}>
            <img src='https://k2v.ru/wp-content/uploads/2020/12/7-300x300.png'/>
            <div className={s.loginBlock}>
                {props.isAuth
                    ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
                    : <NavLink className={s.avlink} to={'/login'}>Login</NavLink>
                }
            </div>
        </header>
    );
}
export default Header;

