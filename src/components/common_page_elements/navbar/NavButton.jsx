import { NavLink } from "react-router-dom";
import style from './NavBar.module.css'

const NavButton = ({children, src, to}) => {
    return (  
        <div className={style.navbutton}>
            <img src={src} alt={src}></img>
            <NavLink className={style.link} to={to}>{children}</NavLink>
        </div>
    );
}

export default NavButton;