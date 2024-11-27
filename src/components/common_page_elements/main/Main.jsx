import { BrowserRouter, Outlet } from 'react-router-dom';
import style from './Main.module.css'
import AppRouter from '../../app_router/AppRouter';

const Main = () => {
    return (  
        <main className={style.main}>
            <AppRouter/>
        </main>
    );
}

export default Main;