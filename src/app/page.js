'use client';
import styles from './styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.hero}>
      {/* YouTube Video Background */}
      <div className={styles.videoBackground}>
        <iframe
          src="https://www.youtube.com/embed/koPkElMab4U?autoplay=1&mute=1&controls=0&showinfo=0&loop=1&playlist=koPkElMab4U"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      {/* Hero Content */}
      <div className={styles.overlay}></div>
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
