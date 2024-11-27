import { NavLink } from 'react-router-dom';
import style from './Products.module.css'

const ProductCard = ({src, header, description}) => {
    return (  
        <div  className={style.product_card}>
            <img src={src}></img>
            <div className={style.text_wrap}>
                <div className={style.text_info}>
                    <div className={style.header}>{header}</div>
                    <div className={style.description}>{description}</div>
                </div>
                <div className={style.links}>
                    <NavLink to='/about'>Подробнее</NavLink>
                    <NavLink to='/about'>Подать заявку</NavLink>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;