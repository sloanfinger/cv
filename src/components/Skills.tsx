import styles from "./Skills.module.css";

export default function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      <h2>Skills</h2>
      <ul>
        <li>
          Programming Languages: C/C++, HTML/CSS, JavaScript, TypeScript, Java,
          Kotlin, Python
        </li>
        <li>Frameworks and Libraries: React, Next.js, TailwindCSS, jQuery</li>
        <li>
          Software and Tooling: Git (with GitHub), Google Ads, Google Analytics,
          Twilio/SendGrid, Figma, Adobe Photoshop, Emacs
        </li>
      </ul>
    </section>
  );
}