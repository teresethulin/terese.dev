import Image from "next/image";
import styles from "./page.module.scss";

export default function Home() {
  return (
      <main className={styles.main}>
          <Image
            src="/images/teresethulin.jpg"
            alt="Picture of Terese Thulin"
            width={272}
            height={320}
            style={{ borderRadius: 8 }}
            />
          <h1 className={styles.h1}>Terese Thulin</h1>
      </main>
  );
}
