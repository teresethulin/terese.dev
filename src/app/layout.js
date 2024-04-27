import { getStoryblokApi } from "@storyblok/react/rsc";
import { initStoryblok } from "../storyblok";
import StoryblokProvider from "./components/StoryblokProvider";
import Header from "./components/Header/index.js";

import "./globals.css";

export const metadata = {
  title: "Terese Thulin | Developer + Designer",
  description: "Home page of Terese Thulin",
};

export default async function RootLayout({ children }) {
  const fetchMenuData = async () => {
    initStoryblok();
    let sbParams = { version: "draft" };
  
    const storyblokApi = getStoryblokApi();
    const { data: { story: { content } } } = await storyblokApi.get(`cdn/stories/config`, sbParams, {cache: "no-store"});
    return content;
  }

  const menuData = await fetchMenuData();

  return (
    <html lang="en">
        <body>
          <StoryblokProvider>
            <Header menuData={menuData} />
            {children}
          </StoryblokProvider>
        </body>
      </html>
  );
}
