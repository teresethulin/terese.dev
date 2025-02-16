import React from "react";
import classNames from "classnames";
import styles from "./menubutton.module.scss";

const MenuButton = React.forwardRef(({ onClick, isOpen, lineColor, buttonColor }, ref) => {
  MenuButton.displayName = "MenuButton";
  const buttonClasses = classNames(styles.menuButton, {
    [styles.open]: isOpen,
 });

 const buttonStyle = {
  "--button-color": buttonColor,
  "--line-color": lineColor
 };

  return (
    <button ref={ref} aria-label="menu" className={buttonClasses} onClick={onClick} style={buttonStyle}>
      <p>{isOpen ? "Close" : "Menu"}</p>
        <span className={styles.burger}>
            <span className={styles.line}/>
            <span className={styles.line}/>
            <span className={styles.line}/>
        </span>
    </button>
  );
});

export default MenuButton;