import styles from "./Education.module.css";

export default function Education() {
  return (
    <section id="education" className={styles.education}>
      <h2>Education</h2>
      <div>
        <p>
          <b>The University of Georgia</b>, <i>Morehead Honors College</i>,
          Athens, GA
        </p>
        <ul>
          <li>Bachelor of Arts, Sociology</li>
          <li>Bachelor of Science, Computer Science</li>
          <li>Minor, Mathematics</li>
        </ul>
        <p>May 2027 Expected graduation; 3.43 GPA.</p>
      </div>
    </section>
  );
}
