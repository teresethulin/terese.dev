import React from "react";
import classNames from "classnames";
import styles from "./menubutton.module.scss";

const MenuButton = React.forwardRef(({ onClick, isOpen, color }, ref) => {
  MenuButton.displayName = "MenuButton";
  const buttonClasses = classNames(styles.menuButton, {
    [styles.open]: isOpen,
 });

 const buttonStyle = {
  "--button-color": `var(--${color}-50)`,
 };

  return (
    <button ref={ref} aria-label="menu" className={buttonClasses} onClick={onClick} style={buttonStyle}>
        <span className={styles.burger}>
            <span className={styles.line}/>
            <span className={styles.line}/>
            <span className={styles.line}/>
        </span>
    </button>
  );
});

export default MenuButton;