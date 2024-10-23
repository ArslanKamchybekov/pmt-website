'use client'
import { useEffect } from 'react';
import styles from './styles/Home.module.css';
import { useState } from 'react';

export default function Home() {
  const [shadow, setShadow] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;

      // Get the window dimensions
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;

      // Calculate the shadow position based on mouse position
      const xOffset = (clientX / windowWidth) * 40 - 20;
      const yOffset = (clientY / windowHeight) * 40 - 20;

      setShadow({ x: xOffset, y: yOffset });
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div>      
      {/* Hero Section with animated background */}
      <div
        className={styles.hero}
        style={{
          boxShadow: `${shadow.x}px ${shadow.y}px 50px rgba(0, 0, 0, 0.8)`,
        }}
      >
        <div className={styles.overlay}></div>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>Invest in the Future</h1>
          <p className={styles.subtitle}>Unlock the power of finance with PMT</p>
          <a href="https://forms.gle/7mXCx7iFVHxbQvDR7 " className={styles.ctaButton}>APPLY NOW</a>
          <a href="https://forms.gle/8g3XxHHPRWJXKeCo8" className={styles.ctaButton}>SIGN UP FOR OUR NEWSLETTER</a>
        </div>
      </div>
    </div>
  );
}
