import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";
import { useEffect } from "react";
import Lenis from "lenis";

const Page = ({ blok }) => {
  useEffect( () => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  }, []);

return (
  <main {...storyblokEditable(blok)}>
    {blok.body?.map((nestedBlok) => (
      <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
    ))}
  </main>
)};

export default Page;