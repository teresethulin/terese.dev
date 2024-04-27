import { getStoryblokApi } from "@storyblok/react";
import StoryblokStory from "@storyblok/react/story";
import { notFound } from 'next/navigation';
import { initStoryblok } from "../../storyblok";

export default async function Page({ params }) {
  const slug = params?.slug ? params.slug.join('/') : 'home';
  const data = await fetchData(slug);

  if (!data) {
    return notFound();
  }

  return (
    <StoryblokStory story={data.story} />
  );
}

export async function fetchData(slug) {
  initStoryblok();
  let sbParams = { version: "draft" };

  const storyblokApi = getStoryblokApi();

  if (storyblokApi) {
    try {
      const { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);
      return data;   
    } catch (error) {
      console.error("Failed to fetch data from Storyblok", error);
    }
  } else {
    throw new Error("Storyblok API is not available");
  }
}