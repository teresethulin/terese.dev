import { storyblokEditable } from "@storyblok/react";
import Link from "next/link";
import classNames from 'classnames';

import styles from "./menu-item.module.scss";

const MenuItem = ({ blok, isOpen, setIsOpen, color }) => {
    const itemClasses = classNames(styles.menuItem, {
        [styles.open]: isOpen,
    });

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const colorStyle = {
        "--text-color": `var(--${color}-50)`,
        "--hover-color": `var(--${color}-60)`,
        "--active-color": `var(--${color}-80)`
    };

    return (
        <li className={itemClasses} style={colorStyle} data-menu-item>
            <Link href={blok?.link?.cached_url} {...storyblokEditable(blok)} onClick={toggleMenu}>
                {blok?.name}
            </Link>
        </li>
    );
};

export default MenuItem;