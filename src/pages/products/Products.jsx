import PageName from "../../components/UI/page_name/PageName";
import ProductCard from "./ProductCard";
import style from './Products.module.css'
import pit from '../../temporal_data/images/ShitPit.svg'

const Products = () => {
    return (  
        <div>
            <PageName>Все товары</PageName>
            <div className={style.products_wrapper}>
                <ProductCard src={pit} header="Торф для приготовления компостов СТБ 832-2006" description="Используют с целью улучшения плодородия почвы. Используется в сельском хозяйстве."/>
                <ProductCard src={pit} header="Торф для приготовления компостов СТБ 832-2006" description="Используют с целью улучшения плодородия почвы. Используется в сельском хозяйстве."/>
                <ProductCard src={pit} header="Торф для приготовления компостов СТБ 832-2006" description="Используют с целью улучшения плодородия почвы. Используется в сельском хозяйстве."/>
                <ProductCard src={pit} header="Торф для приготовления компостов СТБ 832-2006" description="Используют с целью улучшения плодородия почвы. Используется в сельском хозяйстве."/>
            </div>
        </div>
    );
}

export default Products;