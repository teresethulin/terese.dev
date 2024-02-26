import Navbar from "../Navbar";

import styles from "./header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
        <h3 className={styles.logo}>Terese Thulin</h3>
        <Navbar/>
    </header>
  );
};

export default Header;