import { getStoryblokApi } from "@storyblok/react/rsc";
import { initStoryblok } from "../storyblok";
import StoryblokStory from "@storyblok/react/story";

export default async function Home() {
  const { data } = await fetchData();

  return (
    <StoryblokStory story={data.story} />
  );
}

export async function fetchData() {
  initStoryblok();
  let sbParams = { version: "draft" };
 
  const storyblokApi = getStoryblokApi();
  return storyblokApi.get(`cdn/stories/home`, sbParams, {cache: "no-store"});
}