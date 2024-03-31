import { storyblokInit, apiPlugin, getStoryblokApi } from "@storyblok/react/rsc";

import StoryblokProvider from "./components/StoryblokProvider";
import Header from "./components/Header/index.js";

import "./globals.css";
 
storyblokInit({
  accessToken: process.env.storyblokApiToken,
  use: [apiPlugin]
});

export const metadata = {
  title: "Terese Thulin | Developer + Designer",
  description: "Home page of Terese Thulin",
};

export default async function RootLayout({ children }) {
  const fetchMenuData = async () => {
  let sbParams = { version: "draft" };
 
  const storyblokApi = getStoryblokApi();
  const { data: { story: { content } } } = await storyblokApi.get(`cdn/stories/config`, sbParams, {cache: "no-store"});
  return content;
  }

  const menuData = await fetchMenuData();

  return (
    <StoryblokProvider>
      <html lang="en">
        <body>
            <Header menuData={menuData} />
            {children}
        </body>
      </html>
    </StoryblokProvider>
  );
}
