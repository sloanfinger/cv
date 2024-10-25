import headshot from "@/assets/headshot.jpg";
import Image from "next/image";
import { type PropsWithChildren, type ReactNode } from "react";
import styles from "./Splash.module.css";

interface Props extends PropsWithChildren {
  title?: ReactNode;
}

export default function Splash({ title = null, children }: Props) {
  return (
    <>
      <header id="about" className={styles.splash}>
        <h1>{title} Sloan Finger</h1>

        <figure>
          <Image
            alt="Headshot of Sloan"
            fill={true}
            placeholder="blur"
            priority={true}
            src={headshot}
          />
        </figure>

        <p>
          <span> 350 S. Pope St. &bull; Athens, GA</span>
          <span>
            <a href="tel:+18504080107">(850) 408-0107</a>
          </span>
          <span>
            <a href="mailto:sloanfinger@uga.edu">sloanfinger@uga.edu</a>
          </span>
        </p>

        <p>
          Designing custom websites, building internal applications, and
          consulting to improve brands&rsquo; online presence.
        </p>
      </header>

      <hr />

      <main>{children}</main>
    </>
  );
}
