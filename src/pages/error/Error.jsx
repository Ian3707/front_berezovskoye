import styles from './Error.module.css'

const Error = () => {
    return (
        <a className={styles.link} href="/products">
            <header className={styles.top_header}>
            </header>

            <div>
                <div className={styles.starsec}></div>
                <div className={styles.starthird}></div>
                <div className={styles.starfourth}></div>
                <div className={styles.starfifth}></div>
            </div>


            <div className={styles.lamp__wrap}>
                <div className={styles.lamp}>
                    <div className={styles.cable}></div>
                    <div className={styles.cover}></div>
                    <div className={styles.in_cover}>
                        <div className={styles.bulb}></div>
                    </div>
                    <div className={styles.light}></div>
                </div>
            </div>
            <section className={styles.error}>
                <div className={styles.error__content}>
                    <div className={[styles.error__message, styles.message].join(' ')}>
                        <h1 className={styles.message__title}>Page Not Found</h1>
                        <p className={styles.message__text}>We're sorry, the page you were looking for isn't found here. The link you followed may either be broken or no longer exists. Please try again, or take a look at our.</p>
                    </div>
                    <div className={[styles.error__nav, styles.e_nav].join(' ')}>
                        <a className={[styles.link, styles.e_nav__link].join(' ')} href="/products"></a>
                    </div>
                </div>

            </section>

        </a>
    );
}

export default Error;