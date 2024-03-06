import styles from "./wrapper.module.scss";

const Wrapper = ({ backgroundColor, textColor, children }) => {
    return (
        <section className={styles.grid} style={{ backgroundColor: backgroundColor, color: textColor }}>{children}</section>
    )
};

export default Wrapper;