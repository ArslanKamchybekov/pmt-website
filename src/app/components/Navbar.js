'use client'
import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/Navbar.module.css';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.navbar}>

      <div className={styles.logo} onClick={toggleMenu}>
        <Link href="/">
          <motion.p
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            PMT
          </motion.p>
        </Link>
      </div>
     
      <ul className={`${styles.navLinks} ${isMenuOpen ? styles.show : ''}`}>
        {['About', 'People', 'Collaborations', 'Alumni', 'Contact'].map((item) => (
          <li key={item}>
            <Link href={`/${item.toLowerCase()}`} onClick={toggleMenu}>
              <motion.p
                whileHover={{ color: '#f0a500' }}
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
