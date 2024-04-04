import { storyblokEditable } from "@storyblok/react";
import Image from "next/image";

import styles from "./image-item.module.scss";

const ImageItem = ({ blok }) => {
    const itemStyles = {
        "--column-start": blok?.column_start,
        "--column-span": blok?.column_span
    };

    return (
        <>
            {blok?.image?.filename && <figure {...storyblokEditable(blok)} className={styles.figure} style={itemStyles}><Image src={blok?.image?.filename} alt={blok?.image?.alt} width="1000" height="1000" /></figure>}
        </>
    );
};

export default ImageItem;