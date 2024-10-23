'use client'; // Mark this as a client component

import { motion } from 'framer-motion';
import styles from '../styles/Collaborations.module.css';

const partners = ['STAC', 'SEC', 'DIG', 'Barchart'];

export default function Collaborations() {
  return (
    <div className={styles.collaborationContainer}>
      <h1 className={styles.title}>Collaborations</h1>
      <p className={styles.description}>
        We collaborate with the following organizations and sponsors:
      </p>
      <div className={styles.cardGrid}>
        {partners.map((partner, index) => (
          <motion.div
            key={index}
            className={styles.partnerCard}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.05 }} // Staggering effect
          >
            {partner}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
