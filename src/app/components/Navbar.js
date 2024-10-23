'use client'
import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from '../styles/Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">
          <motion.p
            whileHover={{ scale: 1.1 }}  // Zoom effect on logo hover
            transition={{ duration: 0.3 }}
          >
            PMT
          </motion.p>
        </Link>
      </div>
      <ul className={styles.navLinks}>
        {['About', 'People', 'Collaborations', 'Alumni', 'Contact'].map((item) => (
          <li key={item}>
            <Link href={`/${item.toLowerCase()}`}>
              <motion.p
                whileHover={{ color: '#f0a500' }} // Change color on hover
                transition={{ duration: 0.3 }}
                className={styles.navLink}
              >
                {item}
              </motion.p>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
