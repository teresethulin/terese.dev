import { storyblokEditable } from "@storyblok/react";
import Wrapper from "../Wrapper";
import { useAnimatedText } from "@/utils/animations";

import styles from "./hero.module.scss";

const Hero = ({ blok }) => {
  const alignment = {
    "--alignHorizontal": blok.alignHorizontal,
    "--text-align": blok.alignHorizontal.includes("center") ? "center" : "left"
  }

  const animatedHeading = useAnimatedText(blok.heading);

  return (
    <Wrapper {...storyblokEditable(blok)} backgroundColor={blok.backgroundColor ?? ""} textColor={blok.textColor ?? ""}>
      <div className={styles.hero} style={alignment}>
        {blok.overline && <span className={styles.overline}>{blok.overline}</span>}
        {blok.heading && <h1 className={styles.title}>{animatedHeading}</h1>}
        {blok.body && <p className={styles.body}>{blok.body}</p>}
      </div>
    </Wrapper>
  );
};

export default Hero;