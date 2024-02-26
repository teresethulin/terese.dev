import Menu from "../Menu";
import MenuButton from "../MenuButton";

import styles from "./header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
        <h3 className={styles.logo}>terese</h3>
        <MenuButton/>
    </header>
  );
};

export default Header;