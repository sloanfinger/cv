import styles from "./Experience.module.css";

export default function Experience() {
  return (
    <section id="experience" className={styles.experience}>
      <h2>Leadership and Experience</h2>

      <div>
        <dl>
          <dt>Shift Manager, Pig-N-Chik, Atlanta, GA</dt>
          <dd>May 2024&ndash;August 2024</dd>
        </dl>
        <dl>
          <dt>Shift Manager, Chick-fil-A Perimeter Pointe, Dunwoody, GA</dt>
          <dd>July 2022&ndash;March 2024</dd>
        </dl>
        <dl>
          <dt>Team Member, Chick-fil-A Bradfordville, Tallahassee, FL</dt>
          <dd>September 2021&ndash;June 2022</dd>
        </dl>
      </div>
    </section>
  );
}