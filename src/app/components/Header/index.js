'use client';
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link.js";
import Menu from "../Menu/index.js";
import MenuButton from "../MenuButton/index.js";

import styles from "./header.module.scss";

const Header = ({ menuData }) => {
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

 const colorStyle = {
  "--text-color": `var(--${menuData?.main_color}-50)`
 };

  return (
    <header className={styles.header} style={colorStyle}>
        <Link href="/" aria-label="home" className={styles.logo}>
          <h3>terese</h3>
        </Link>
        <Menu ref={menuRef} isOpen={isOpen} setIsOpen={setIsOpen} menuData={menuData}/>
        <MenuButton ref={menuButtonRef} onClick={toggleMenu} isOpen={isOpen} color={menuData?.main_color}/>
    </header>
  );
};

export default Header;