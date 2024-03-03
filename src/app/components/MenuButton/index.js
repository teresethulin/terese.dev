import React from "react";
import classNames from "classnames";
import styles from "./menubutton.module.scss";

const MenuButton = React.forwardRef(({ onClick, isOpen }, ref) => {
  MenuButton.displayName = "MenuButton";
  const buttonClasses = classNames(styles.menuButton, {
    [styles.open]: isOpen,
 });

  return (
    <button ref={ref} className={buttonClasses} onClick={onClick}>
        <span className={styles.burger}>
            <span className={styles.line}/>
            <span className={styles.line}/>
            <span className={styles.line}/>
        </span>
    </button>
  );
});

export default MenuButton;