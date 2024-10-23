'use client'; // Mark this as a client component

import { motion } from 'framer-motion';
import styles from '../styles/Alumni.module.css';

const alumniCompanies = [
  'William Blair',
  'Cushman and Wakefield',
  'Constellation',
  'Medline',
  'Schwab',
  'Northern Trust',
  'Crowe',
  'Northrop Grunman',
  'Accenture',
  'Clarity Partners',
  'Bradford Allen',
  'Goldman Sachs',
  'Golub Capital',
  'Motorola',
  'Deloitte',
  'Lakeview Capital',
  'Citadel',
  'Citibank',
  'Bank of America',
];

export default function Alumni() {
  return (
    <div className={styles.alumniContainer}>
      <h1 className={styles.title}>Alumni</h1>
      <p className={styles.description}>
        Our alumni have gone on to work at the following prestigious companies:
      </p>
      <div className={styles.cardGrid}>
        {alumniCompanies.map((company, index) => (
          <motion.div
            key={index}
            className={styles.companyCard}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.05 }} // Staggering effect
          >
            {company}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
