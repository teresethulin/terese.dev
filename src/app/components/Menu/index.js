import Link from 'next/link';
import styles from "./menu.module.scss";

const Menu = () => {
  return (
    <nav className={styles.menu}>
      <ul className={styles.menuList}>
        <li>
          <Link href="/">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about">
            About
          </Link>
        </li>
        <li>
          <Link href="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;