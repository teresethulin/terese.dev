import React, { useEffect } from 'react';
import Link from "next/link";
import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import classNames from 'classnames';

import { LinkedIn } from '../../../../public/icons/linkedin';

import styles from "./menu.module.scss";

const Menu = React.forwardRef(({ isOpen, setIsOpen, configData }, ref) => {
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

 const colorStyle = {
  "--bg-color": configData?.menu_bgColor,
  "--text-color": configData?.menu_textColor
 };

  return (
    <nav className={menuClasses} ref={ref} style={colorStyle}>
      <ul className={styles.menuList} {...storyblokEditable({configData})}>
        {configData?.menu_links?.map((nestedBlok) => (
          <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} isOpen={isOpen} setIsOpen={setIsOpen} color={configData?.menu_textColor} />
        ))}
      </ul>
      <ul className={styles.iconList}>
        {configData?.social_media_links?.map((item) => (
          item?.name === "LinkedIn" &&
            (<Link key={item?._uid} href={item?.link?.url} target={item?.link?.target}><LinkedIn color={configData?.menu_textColor}/></Link>)
        ))}
      </ul>
    </nav>
  );
});

export default Menu;