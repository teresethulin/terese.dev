import classNames from "classnames";
import styles from "./menubutton.module.scss";

const MenuButton = ({ onClick, isOpen }) => {
  const buttonClasses = classNames(styles.menuButton, {
    [styles.open]: isOpen,
 });

  return (
    <button className={buttonClasses} onClick={onClick}>
        <span className={styles.burger}>
            <span className={styles.line}/>
            <span className={styles.line}/>
            <span className={styles.line}/>
        </span>
    </button>
  );
};

export default MenuButton;