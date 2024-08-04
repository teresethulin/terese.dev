'use client'
import React from "react";

import Link from "next/link";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

import { LinkedIn } from "../../../../public/icons/linkedin";

import styles from "./footer.module.scss";

const Footer = ({ configData }) => {

 const colorStyle = {
  "--text-color": configData?.footer_textColor,
  "--bg-color": configData?.footer_bgColor
 };

  return (
    <footer className={styles.mask} style={colorStyle}>
      <section className={styles.fixed}>
        <div className={styles.content}>
          {configData?.menu_links?.map((menuItem) => (
            <ScrollLink key={menuItem?._uid} to={menuItem?.link?.anchor} smooth duration={550}>{menuItem?.name}</ScrollLink>
          ))}
          {configData?.social_media_links?.map((item) => (
            <Link key={item?._uid} href={item?.link?.url} target={item?.link?.target}><LinkedIn color={configData?.footer_textColor}/></Link>
          ))}
          <p className={styles.copyrightNotice}>Copyright © {new Date().getFullYear()}</p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;