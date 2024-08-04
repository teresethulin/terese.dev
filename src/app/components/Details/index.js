import React from "react";
import { storyblokEditable } from "@storyblok/react";
import Image from "next/image";
import { motion } from "framer-motion";

import { Chevron } from "../../../../public/icons/chevron";
import styles from "./details.module.scss";

const Details = ({ blok }) => {

  const itemStyles = {
      "--column-start": blok?.column_start,
      "--column-span": blok?.column_span,
      "--text-color": blok?.textColor,
      "--bg-color": blok?.backgroundColor,
      "--margin-top": blok?.marginTop + "rem",
      "--margin-top-desktop": blok?.marginTopDesktop + "rem"
  };

  const HeadingTag = (level) => {
      switch(level) {
          case 1:
              return 'h1';
          case 2:
              return 'h2';
          case 3:
              return 'h3';
          case 4:
              return 'h4';
          case 5:
              return 'h5';
          case 6:
              return 'h6';
          default:
              return 'span';
      }
  };

  const headingTypeToClassName = {
      "h1": styles.h1,
      "h2": styles.h2,
      "h3": styles.h3,
      "h4": styles.h4
  };

  const headings = blok?.text?.content?.map((item, index) => {
      if (item.type === "heading") {
        const Tag = HeadingTag(item?.attrs?.level);
        const headingClass = headingTypeToClassName[Tag];

          return (
              <Tag key={index} {...storyblokEditable(item)} className={headingClass}>
                  {item.content?.map((textItem, textIndex) => (
                      <React.Fragment key={textIndex}>{textItem?.text}</React.Fragment>
                  ))}
              </Tag>
          );
      }
      return null;
  });

  const paragraphs = blok?.text?.content?.map((item, index) => {
      if (item.type === "paragraph") {
          return (
              <p key={index} className={styles.body}>
                  {item.content?.map((textItem, textIndex) => (
                      <React.Fragment key={textIndex}>{textItem.text}</React.Fragment>
                  ))}
              </p>
          );
      }
      return null;
  });

  const renderListItems = (items) => {
      return items.map((item, index) => {
          if (item.type === "list_item") {
              return (
                  <li key={index} className={styles.body}>
                      {item.content.map((innerItem, innerIndex) => {
                      const textElements = innerItem.content?.map((textItem, textIndex) => {
                          const linkMark = textItem.marks?.find(mark => mark.type === "link");
                          if (linkMark) {
                              return `<a href="${linkMark.attrs.href}" target="_blank" rel="noopener noreferrer">${textItem.text}</a>`;;
                          } else {
                              return textItem.text;
                          }
                      });
                      return <p key={innerIndex} dangerouslySetInnerHTML={{ __html: textElements?.join('') }}></p>;
                  })}
                  </li>
              );
          }
          return null;
      });
  };

  const bulletLists = blok?.text?.content?.filter(item => item.type === "bullet_list").map(list => (
      <ul key={list.uuid || Math.random()} style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
          {renderListItems(list.content)}
      </ul>
  ));

  const fadeIn = {
    offscreen: {
    y: 75,
    opacity: 0
    },
    onscreen: {
    y: 0,
    opacity: 1,
    transition: {
        type: "spring",
        duration: 0.8
    }
    }
  };

  return (
      <motion.details initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: "some" }} variants={fadeIn} open={blok?.showAsOpen} {...storyblokEditable(blok)} className={styles.details} style={itemStyles}>
        {blok?.pretitle && <aside className={styles.pretitle}>{blok?.pretitle}</aside>}
        <summary className={styles.summary}>
          {blok?.date && <span className={styles.date}>{blok?.date}</span>}
          {blok?.overline && <span className={styles.overline}>{blok?.overline}</span>}
          {headings}
          <Chevron className={styles.chevron} color={blok?.textColor}/>
        </summary>
        <article className={styles.content}>
          {paragraphs}
          {bulletLists}
        </article>
      </motion.details>
  );
};

export default Details;