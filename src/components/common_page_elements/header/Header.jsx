import style from './Header.module.css'
import { BrowserRouter, NavLink } from 'react-router-dom';
import NavBar from '../navbar/NavBar';
import AppRouter from '../../app_router/AppRouter';
import NavButton from '../navbar/NavButton';


import logo_berezeovskoye from '../../../static_images/header/Logo.svg'
import about_logo from '../../../static_images/header/About.svg'

const Header = () => {
    const handleClick = (event) => {
        if (event.ctrlKey) {
            alert('admin');
        }
    };

    return (  
        <header className={style.header}>
            <div className={style.logo}>
                <img onClick={e => handleClick(e)} src={logo_berezeovskoye} alt='logo'></img>
            </div>
            <NavBar className={style.navigation}/>
            <NavButton src={about_logo} to='/about'>О нас</NavButton>
            
        </header>
    );
}

export default Header;