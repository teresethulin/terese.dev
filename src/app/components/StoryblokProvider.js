"use client";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";

import Page from "./Storyblok/Page";
import Grid from "./Storyblok/Grid";
import Hero from "./Hero";
import MenuItem from "./MenuItem";
import Menu from "./Menu";
import ImageItem from "./ImageItem";
import HeadingItem from "./HeadingItem";
import Sticker from "./Sticker";

storyblokInit({
  accessToken: process.env.storyblokApiToken,
  use: [apiPlugin],
  components: {
    page: Page,
    grid: Grid,
    hero: Hero,
    menu_links: Menu,
    menu_item: MenuItem,
    image_item: ImageItem,
    heading_item: HeadingItem,
    sticker: Sticker
  },
});
 
export default function StoryblokProvider({ children }) {
  return children;
}