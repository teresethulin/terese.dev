import React from "react";
import { storyblokEditable } from "@storyblok/react";

import styles from "./card.module.scss";

const Card = ({ blok }) => {
    const itemStyles = {
        "--column-start": blok?.column_start,
        "--column-span": blok?.column_span,
        "--selected-color": blok?.textColor
    };

    const paragraphs = blok?.text?.content?.map((item, index) => {
        if (item.type === "paragraph") {
            return (
                <p key={index} className={styles.body}>
                    {item.content.map((textItem, textIndex) => (
                        <React.Fragment key={textIndex}>{textItem.text}</React.Fragment>
                    ))}
                </p>
            );
        }
        return null;
    });

    return (
        <article {...storyblokEditable(blok)} className={styles.card} style={itemStyles}>
          {blok?.overline && <span className={styles.overline}>{blok?.overline}</span>}
          {paragraphs}
        </article>
    );
};

export default Card;