import React, { useEffect } from 'react';
import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import classNames from 'classnames';

import styles from "./menu.module.scss";

const Menu = React.forwardRef(({ isOpen, menuData }, ref) => {
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
      <ul className={styles.menuList} {...storyblokEditable({menuData})}>
        {menuData?.menu_links?.map((nestedBlok) => (
          <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} isOpen={isOpen} />
        ))}
      </ul>
    </nav>
  );
});

export default Menu;