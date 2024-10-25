import Image from "next/image";
import Link from "next/link";
import type { ComponentProps } from "react";
import styles from "./Projects.module.css";

interface Props {
  title: string;
  features: Readonly<string[]>;
  linkHref: ComponentProps<typeof Link>["href"];
  bannerSrc: ComponentProps<typeof Image>["src"];
}

function ProjectCard({ title, features, linkHref, bannerSrc }: Props) {
  return (
    <article className={styles.card}>
      <figure>
        <Image
          alt={title}
          src={bannerSrc}
          priority={false}
          fill
        />
      </figure>

      <h3>
        <Link href={linkHref} target="_blank">
          {title}
        </Link>
      </h3>

      <ul>
        {features.map((description, index) => (
          <li key={index}>{description}</li>
        ))}
      </ul>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <h2>Projects</h2>

      <div>
        <ProjectCard
          title="Cook’s Radon"
          features={[
            "Designed a new website using React, Next.js, and Tailwind CSS",
            "Managed the company’s digital software suite, including Gmail and other Google Workspace services",
            "Added more interactivity to the website, allowing guests to request estimates and schedule on-site appointments in a way that integrated with Cook’s Radon’s existing internal workflow",
            "Managed digital advertising with separate campaigns driving both website visits and office calls",
            "Worked with Google Ads representatives to maximize lead generation from the digital advertising budget",
          ]}
          linkHref="https://cooksradon.com/"
          bannerSrc="https://picsum.photos/640/360"
        />

        <ProjectCard
          title="Pig-N-Chik"
          features={[
            "Designed a new website using React, Next.js, and Tailwind CSS",
            "Improved website performance, accessibility, and SEO, resulting in a nearly 2.5x boost in traffic over the first year, and a 5x increase in traffic over three years",
            "Partnered with Pig-N-Chik’s hired marketing firm to implement the digital components of several in-store promotions",
            "Worked with restaurant management and Clover to improve Pig-N-Chik’s online ordering experience and rewards program",
          ]}
          linkHref="https://pignchik.net"
          bannerSrc="https://picsum.photos/640/360"
        />

        <ProjectCard
          title="CV"
          features={[
            "Created for UGA CSCI 4300.",
            "Created (so far) using HTML and CSS.",
            "Deployed via Github Pages.",
          ]}
          linkHref="https://sloanfinger.github.io/cv"
          bannerSrc="https://picsum.photos/640/360"
        />
      </div>
    </section>
  );
}
