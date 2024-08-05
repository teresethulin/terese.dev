'use client';
import React, { useState, useRef, useEffect } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import Menu from "../Menu/index.js";
import MenuButton from "../MenuButton/index.js";

import styles from "./header.module.scss";

const Header = ({ configData }) => {
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

 const scrollToTop = () => {
    scroll.scrollToTop();
};

 const colorStyle = {
  "--text-color": configData?.main_color,
  "--logo-color": configData?.logo_color,
  "--line-color": configData?.line_color
 };

  return (
    <header className={styles.header} style={colorStyle}>
        <Link to="" onClick={scrollToTop} smooth duration={550} aria-label="home" className={styles.logo}>
          <h3>terese</h3>
        </Link>
        <Menu ref={menuRef} isOpen={isOpen} setIsOpen={setIsOpen} configData={configData}/>
        <MenuButton ref={menuButtonRef} onClick={toggleMenu} isOpen={isOpen} lineColor={configData?.burgerColor} buttonColor={configData?.menu_textColor}/>
    </header>
  );
};

export default Header;