import styles from "./menubutton.module.scss";

const MenuButton = () => {
  return (
    <button className={styles.menuButton}>
        <span className={styles.burger}>
            <span className={styles.line}/>
            <span className={styles.line}/>
            <span className={styles.line}/>
        </span>
    </button>
  );
};

export default MenuButton;