"use client";
import { initStoryblok } from "../../storyblok";

import Page from "./Storyblok/Page";
import Grid from "./Storyblok/Grid";
import Hero from "./Hero";
import MenuItem from "./MenuItem";
import Menu from "./Menu";
import ImageItem from "./ImageItem";
import HeadingItem from "./HeadingItem";
import Sticker from "./Sticker";
import Card from "./Card";
import Footer from "./Footer";
import Details from "./Details";

initStoryblok({
  components: {
    page: Page,
    grid: Grid,
    hero: Hero,
    menu_links: Menu,
    menu_item: MenuItem,
    image_item: ImageItem,
    heading_item: HeadingItem,
    sticker: Sticker,
    card: Card,
    footer: Footer,
    details: Details
  },
});

export default function StoryblokProvider({ children }) {
  return children;
}