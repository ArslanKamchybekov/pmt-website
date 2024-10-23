'use client';  // Mark this as a client component

import { motion } from 'framer-motion';
import styles from '../styles/People.module.css';

const eboardMembers = [
  { name: 'John Doe', position: 'President' },
  { name: 'Jane Smith', position: 'Vice President' },
];

const sectorLeaders = [
  { name: 'Alex Johnson', sector: 'Tech' },
  { name: 'Emily Davis', sector: 'Healthcare' },
];

const analysts = {
  Tech: ['Analyst 1', 'Analyst 2'],
  Healthcare: ['Analyst 3', 'Analyst 4'],
};

export default function People() {
  return (
    <div className={styles.peopleContainer}>
      <h1 className={styles.title}>Who We Are</h1>

      <h2 className={styles.sectionTitle}>Eboard</h2>
      <ul className={styles.eboardList}>
        {eboardMembers.map((member, index) => (
          <motion.li
            key={index}
            className={styles.eboardItem}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            {member.name} - <span className={styles.position}>{member.position}</span>
          </motion.li>
        ))}
      </ul>

      <h2 className={styles.sectionTitle}>Sector Leaders & Analysts</h2>
      {sectorLeaders.map((leader, index) => (
        <div key={index} className={styles.leaderContainer}>
          <motion.h3
            className={styles.leaderTitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            {leader.name} - {leader.sector}
          </motion.h3>
          <ul className={styles.analystList}>
            {analysts[leader.sector].map((analyst, i) => (
              <motion.li
                key={i}
                className={styles.analystItem}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 + 0.1 * (i + 1) }} // Staggering analysts
              >
                {analyst}
              </motion.li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
