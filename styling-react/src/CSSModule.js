import styles from './CSSModule.module.scss'
const CSSModule = () => {
    return(
        <div className={`${styles.wrapper} ${styles.inverted}`}>
            테스트 <span className="something">CSS MODULE</span>
        </div>


    );
};

export default CSSModule;