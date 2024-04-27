import { storyblokInit, apiPlugin } from '@storyblok/react/rsc';

export const initStoryblok = (options = {}) => {
  storyblokInit({
    accessToken: process.env.storyblokApiToken,
    use: [apiPlugin],
    ...options,
  });
};