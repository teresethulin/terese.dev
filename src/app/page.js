import Image from "next/image";
import styles from "./page.module.scss";

export default function Home() {
  return (
      <section className={styles.main}>
          <Image
            src="/images/teresethulin.jpg"
            alt="Picture of Terese Thulin"
            width={272}
            height={320}
            style={{ borderRadius: 8 }}
            />
          <h1 className={styles.h1}>Digital multi-tool with a wide skillset in programming, design and processes</h1>
      </section>
  );
}
