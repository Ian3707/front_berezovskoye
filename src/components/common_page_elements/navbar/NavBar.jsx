import { NavLink } from "react-router-dom";
import NavButton from "./NavButton";
import products_logo from '../../../static_images/header/Products.svg'
import style from './NavBar.module.css'

const NavBar = () => {
    return (  
        <div className={style.navbar}>
            <NavButton src={products_logo} to='/products'>Товары</NavButton>
            <NavButton src={products_logo} to='/news'>Новости</NavButton>
            <NavButton src={products_logo} to='/services'>Услуги</NavButton>
            <NavButton src={products_logo} to='/contacts'>Контакты</NavButton>
        </div>
    );
}

export default NavBar;