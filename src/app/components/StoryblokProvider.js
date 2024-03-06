"use client";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";

import Page from "./Storyblok/Page";
import Grid from "./Storyblok/Grid";
import Hero from "./Hero";

storyblokInit({
  accessToken: process.env.storyblokApiToken,
  use: [apiPlugin],
  components: {
    page: Page,
    grid: Grid,
    hero: Hero
  },
});
 
export default function StoryblokProvider({ children }) {
  return children;
}