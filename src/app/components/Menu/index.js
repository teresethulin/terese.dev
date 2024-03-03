import React, { useEffect } from 'react';
import classNames from 'classnames';

import Link from 'next/link';
import styles from "./menu.module.scss";

const Menu = React.forwardRef(({ isOpen }, ref) => {
  Menu.displayName = "Menu";

 useEffect(() => {
   if (isOpen && ref.current) {
      const menuItems = ref.current.querySelectorAll('[data-menu-item]');
      menuItems.forEach((item, index) => {
        item.style.transitionDelay = `${0.075 * index}s`;
      });
    }
 }, [isOpen, ref]);

  const menuClasses = classNames(styles.menu, {
    [styles.open]: isOpen,
 });

  return (
    <nav className={menuClasses} ref={ref}>
      <ul className={styles.menuList}>
        <li className={styles.menuItem} data-menu-item>
          <Link href="/">
            Home
          </Link>
        </li>
        <li className={styles.menuItem} data-menu-item>
          <Link href="/about">
            About
          </Link>
        </li>
        <li className={styles.menuItem} data-menu-item>
          <Link href="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
});

export default Menu;