import Navbar from '../components/Navbar';
import styles from '../styles/About.module.css';

export default function About() {
  return (
    <div>
      <Navbar />
      <div className={styles.aboutSection}>
        {/* Intro Section */}
        <section className={styles.intro}>
          <h1>About PMT</h1>
          <p>
            PMT is a student-run finance organization that aims to prepare students for the world of
            finance by offering hands-on experience, financial analysis, and collaboration
            with industry professionals. Our diverse membership is united by a passion for investment and markets.
          </p>
        </section>

        {/* Mission Section */}
        <section className={styles.mission}>
          <h2>Our Mission</h2>
          <p>
            We empower students with the knowledge, skills, and network to succeed in the financial industry. 
            Through stock pitches, market research, and portfolio management, we provide a collaborative environment 
            for learning and growth.
          </p>
        </section>

        {/* Highlights Section */}
        <section className={styles.highlights}>
          <h2>Key Highlights</h2>
          <div className={styles.grid}>
            <div className={styles.card}>
              <img src="/members-icon.svg" alt="Members Icon" />
              <h3>100+ Members</h3>
              <p>Join our diverse group of analysts and general members.</p>
            </div>
            <div className={styles.card}>
              <img src="/projects-icon.svg" alt="Projects Icon" />
              <h3>20+ Projects</h3>
              <p>Real-world financial analysis projects and stock pitches.</p>
            </div>
            <div className={styles.card}>
              <img src="/collaborations-icon.svg" alt="Collaborations Icon" />
              <h3>Collaborations</h3>
              <p>Work with leading organizations such as STAC, SEC, and DIG.</p>
            </div>
            <div className={styles.card}>
              <img src="/alumni-icon.svg" alt="Alumni Icon" />
              <h3>Prestigious Alumni</h3>
              <p>Our alumni work at top firms like Goldman Sachs, JP Morgan, and Citadel.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
