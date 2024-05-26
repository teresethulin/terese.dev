import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";

import styles from "./grid.module.scss";

const Grid = ({ blok }) => {
  return (
    <section {...storyblokEditable(blok)} id={blok?.anchorId} className={styles.grid} style={{ backgroundColor: blok?.backgroundColor }}>
      {blok?.columns?.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </section>
  );
};

export default Grid;