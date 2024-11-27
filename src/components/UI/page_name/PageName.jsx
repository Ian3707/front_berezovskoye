import style from './PageName.module.css'
import line from '../../../static_images/UI/Line.svg'

const PageName = ({children}) => {
    return (  
        <div className={style.page_name}>
            <img src={line} className={style.line}></img>
            <div className={style.text}>{children}</div>
            <img src={line} className={style.line}></img>
        </div>
    );
}

export default PageName;