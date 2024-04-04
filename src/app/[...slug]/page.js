import { getStoryblokApi } from "@storyblok/react/rsc";
import StoryblokStory from "@storyblok/react/story";
import { notFound } from 'next/navigation'

import styles from "../page.module.scss";

export default async function Page({ params }) {
  const slug = params?.slug ? params.slug.join('/') : 'home';
  const { data } = await fetchData(slug);

  if (!data) {
    return notFound();
  }

  return (
      <section className={styles.main}>
        <StoryblokStory story={data.story} />
      </section>
  );
}

export async function fetchData(slug) {
  let sbParams = { version: "draft" };

  const storyblokApi = getStoryblokApi();
  return storyblokApi.get(`cdn/stories/${slug}`, sbParams);
}