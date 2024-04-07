import { getStoryblokApi } from "@storyblok/react";
import StoryblokStory from "@storyblok/react/story";
import { notFound } from 'next/navigation'

export default async function Page({ params }) {
  const slug = params?.slug ? params.slug.join('/') : 'home';
  const { data } = await fetchData(slug);

  if (!data) {
    return notFound();
  }

  return (
    <StoryblokStory story={data.story} />
  );
}

export async function fetchData(slug) {
  let sbParams = { version: "draft" };

  const storyblokApi = getStoryblokApi();
  return storyblokApi.get(`cdn/stories/${slug}`, sbParams);
}