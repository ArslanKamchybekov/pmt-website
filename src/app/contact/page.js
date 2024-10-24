'use client';
import styles from '../styles/Contact.module.css';

export default function Contact() {
  return (
    <div>
      <div className={styles.banner}>
        <h2>Connect with Us</h2>
      </div>

      <div className={styles.contactSection}>
        <p className={styles.sub_title}>We’d love to hear from you! Reach out to us on our social media channels or send us an email.</p>

        {/* Connect Buttons */}
        <div className={styles.connectButtons}>
          <a href="mailto:pmtchicago@gmail.com" className={styles.connectButton} target="_blank" rel="noopener noreferrer">
            <img src="/gmail.png" alt="Email" className={styles.icon} />
            Email Us
          </a>
          <a href="https://www.instagram.com/pmtatuic/" className={styles.connectButton} target="_blank" rel="noopener noreferrer">
            <img src="/instagram.png" alt="Instagram" className={styles.icon} />
            Instagram
          </a>
          <a href="https://www.linkedin.com/company/portfolio-management-team" className={styles.connectButton} target="_blank" rel="noopener noreferrer">
            <img src="/linkedin.png" alt="LinkedIn" className={styles.icon} />
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}
