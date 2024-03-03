import { useEffect, useRef } from 'react';
import classNames from 'classnames';

import Link from 'next/link';
import styles from "./menu.module.scss";

const Menu = ({ isOpen, setIsOpen }) => {
  const menuRef = useRef(null);

 useEffect(() => {
   if (isOpen && menuRef.current) {
      const menuItems = menuRef.current.querySelectorAll('[data-menu-item]');
      menuItems.forEach((item, index) => {
        item.style.transitionDelay = `${0.075 * index}s`;
      });
    }
 }, [isOpen]);

 useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
 }, []);

  const menuClasses = classNames(styles.menu, {
    [styles.open]: isOpen,
 });

  return (
    <nav className={menuClasses} ref={menuRef}>
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
};

export default Menu;