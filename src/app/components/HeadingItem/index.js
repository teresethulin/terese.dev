import { storyblokEditable } from "@storyblok/react";

import styles from "./heading-item.module.scss";

const HeadingItem = ({ blok }) => {
    const itemStyles = {
        "--column-start": blok?.column_start,
        "--column-span": blok?.column_span,
        "--heading-type": blok.type
    };

    const HeadingElement = blok.type;

    return (
        <>
            {blok?.text && <HeadingElement {...storyblokEditable(blok)} className={styles.heading} style={itemStyles}>{blok?.text}</HeadingElement>}
        </>
    );
};

export default HeadingItem;