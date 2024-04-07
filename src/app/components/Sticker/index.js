import { storyblokEditable } from "@storyblok/react";

import styles from "./sticker.module.scss";

const Sticker = ({ blok }) => {
    const itemStyles = {
        "--column-start": blok?.column_start,
        "--column-span": blok?.column_span,
        "--text-color": blok?.textColor,
        "--bg-color": blok?.backgroundColor,
        "--margin-top-tablet": blok?.marginTopTablet + "rem",
        "--margin-top-desktop": blok?.marginTopDesktop + "rem"
    };

    return (
        <>
            {blok?.text && <aside {...storyblokEditable(blok)} className={styles.sticker} style={itemStyles}>{blok?.text}</aside>}
        </>
    );
};

export default Sticker;