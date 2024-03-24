import { storyblokEditable } from "@storyblok/react";
import Link from "next/link";
import classNames from 'classnames';

import styles from "./menu-item.module.scss";

const MenuItem = ({ blok, isOpen }) => {
    const itemClasses = classNames(styles.menuItem, {
    [styles.open]: isOpen,
 });

    return (
        <li className={itemClasses} data-menu-item>
            <Link href={blok?.link?.cached_url} {...storyblokEditable(blok)}>
                {blok?.name}
            </Link>
        </li>
    );
};

export default MenuItem;