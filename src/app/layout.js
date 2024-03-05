import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";

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

export default function RootLayout({ children }) {
  return (
    <StoryblokProvider>
      <html lang="en">
        <body>
            <Header />
          <main>
            {children}
          </main>
        </body>
      </html>
    </StoryblokProvider>
  );
}
