import { getStoryblokApi } from '@storyblok/react/rsc';
import { initStoryblok } from '../storyblok';
import StoryblokProvider from './components/StoryblokProvider';
import Header from './components/Header/index.js';
import { Work_Sans } from 'next/font/google';

import './globals.css';

const WorkSans = Work_Sans({ weight: '400', subsets: ['latin'] });

export const metadata = {
  title: 'Terese Thulin | Developer + Designer',
  description: 'CV & portfolio site',
};

export default async function RootLayout({ children }) {
  const fetchMenuData = async () => {
    initStoryblok();
    let sbParams = { version: 'draft' };

    const storyblokApi = getStoryblokApi();
    const {
      data: {
        story: { content },
      },
    } = await storyblokApi.get(`cdn/stories/config`, sbParams, {
      cache: 'no-store',
    });
    return content;
  };

  const menuData = await fetchMenuData();

  return (
    <html lang="en">
      <body className={WorkSans.className}>
        <StoryblokProvider>
          <Header menuData={menuData} />
          {children}
        </StoryblokProvider>
      </body>
    </html>
  );
}
