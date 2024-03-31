import { getStoryblokApi} from "@storyblok/react/rsc";
import StoryblokStory from "@storyblok/react/story";

import styles from "./page.module.scss";

export default async function Home() {
  const { data } = await fetchData();

  return (
      <section className={styles.container}>
        <StoryblokStory story={data.story} />
      </section>
  );
}

export async function fetchData() {
  let sbParams = { version: "draft" };
 
  const storyblokApi = getStoryblokApi();
  return storyblokApi.get(`cdn/stories/home`, sbParams, {cache: "no-store"});
}