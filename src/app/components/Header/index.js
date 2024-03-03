'use client';
import React, { useState } from "react";
import Menu from "../Menu/index.js";
import MenuButton from "../MenuButton/index.js";

import styles from "./header.module.scss";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
 };

  return (
    <header className={styles.header}>
        <h3 className={styles.logo}>terese</h3>
        <Menu isOpen={isOpen} setIsOpen={setIsOpen}/>
        <MenuButton onClick={toggleMenu} isOpen={isOpen}/>
    </header>
  );
};

export default Header;