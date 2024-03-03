'use client';
import React, { useState, useRef, useEffect } from "react";
import Menu from "../Menu/index.js";
import MenuButton from "../MenuButton/index.js";

import styles from "./header.module.scss";

const Header = () => {
  const menuRef = useRef(null);
  const menuButtonRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
 };

 useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuButtonRef.current &&
        menuRef.current &&
        !menuButtonRef.current.contains(event.target) &&
        !menuRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
 }, [menuRef, menuButtonRef]);

  return (
    <header className={styles.header}>
        <h3 className={styles.logo}>terese</h3>
        <Menu ref={menuRef} isOpen={isOpen}/>
        <MenuButton ref={menuButtonRef} onClick={toggleMenu} isOpen={isOpen}/>
    </header>
  );
};

export default Header;