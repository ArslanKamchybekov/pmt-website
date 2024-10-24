'use client';
import styles from './styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.hero}>
      <div className={styles.heroContent}>
        <div className={styles.logoContainer}>
          <img src="/logo.png" alt="Logo" className={styles.logo} />
        </div>
        <h1 className={styles.title}>Invest in the Future</h1>
        <p className={styles.subtitle}>Unlock the power of finance with Portfolio Management Team</p>
        <a href="https://forms.gle/7mXCx7iFVHxbQvDR7" className={styles.ctaButton}>APPLY NOW</a>
        <a href="https://forms.gle/8g3XxHHPRWJXKeCo8" className={styles.ctaButton}>SIGN UP FOR OUR NEWSLETTER</a>
      </div>
    </div>
  );
}
