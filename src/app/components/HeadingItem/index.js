import { storyblokEditable } from "@storyblok/react";
import classNames from "classnames";

import styles from "./heading-item.module.scss";

const HeadingItem = ({ blok }) => {
    const itemStyles = {
        "--column-start": blok?.column_start,
        "--column-span": blok?.column_span,
        "--text-color": blok?.color
    };

    const headingTypeToClassName = {
        "h1": styles.h1,
        "h2": styles.h2,
        "h3": styles.h3,
        "h4": styles.h4
    };

    const HeadingElement = blok?.type;
    const headingClasses = classNames(styles.heading, headingTypeToClassName[HeadingElement]);

    return (
        <>
            {blok?.text && <HeadingElement {...storyblokEditable(blok)} className={headingClasses} style={itemStyles}>{blok?.text}</HeadingElement>}
        </>
    );
};

export default HeadingItem;