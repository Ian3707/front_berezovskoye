import { Navigate, NavLink, useNavigate } from "react-router-dom";
import style from './NavBar.module.css'

const NavButton = ({ children, src, to }) => {
    const navigate = useNavigate(); 

    const redirect = () => {
        navigate(to); 
    };

    return (  
        <div onClick={redirect} className={style.navbutton}>
            <img src={src} alt={src} />
            <div className={style.link}>{children}</div>
        </div>
    );
};

export default NavButton;