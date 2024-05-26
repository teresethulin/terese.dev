import React from "react";
import { storyblokEditable } from "@storyblok/react";

import styles from "./card.module.scss";

const Card = ({ blok }) => {
    const itemStyles = {
        "--column-start": blok?.column_start,
        "--column-span": blok?.column_span,
        "--text-color": blok?.textColor,
        "--bg-color": blok?.backgroundColor,
        "--margin-bottom-desktop": blok?.marginBottomDesktop
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
      <div {...storyblokEditable(blok)} className={styles.wrapper} style={itemStyles}>
        {blok?.pretitle && <aside className={styles.pretitle}>{blok?.pretitle}</aside>}
        <article className={styles.card}>
          {blok?.date && <span className={styles.date}>{blok?.date}</span>}
          {blok?.overline && <span className={styles.overline}>{blok?.overline}</span>}
          {paragraphs}
        </article>
      </div>
    );
};

export default Card;