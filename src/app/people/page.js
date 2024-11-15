'use client';  // Mark this as a client component
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { motion } from 'framer-motion';
import styles from '../styles/People.module.css';

const eboardMembers = [
  { name: 'Eliezer Zagorin', position: 'President', img: '/eliezer-zagorin.jpg' },
  { name: 'Al Pakrosnis', position: 'Vice President', img: '/al-pakrosnis.jpg' },
  { name: 'Dilay Heybeli', position: 'Social Relations Chair', img: '/dilay-heybeli.jpg' },
  { name: 'Subhana Hanif', position: 'Assistant Director of Communications', img: '/subhana-hanif.jpg' },
  { name: 'Quinn Basta', position: 'Senior Advisor', img: '/placeholder.jpeg' },
];

// img: '../../../public/placeholder.webp'
const sectorLeaders = [
  { name: 'Akshat Khatri', sector: 'Finance', img: '/akshat-khatri.jpg' },
  { name: 'Alan Sanchez', sector: 'Consumer Goods', img: '/alan-sanchez.jpg' },
  { name: 'Danielle Nead', sector: 'Healthcare', img: '/danielle-nead.jpg' },
  { name: 'Jared Hughes', sector: 'Technology', img: '/jared-hughes.jpg' },
  { name: 'Valentin Arroyo', sector: 'Energy', img: '/valentin-arroyo.jpg' },

];

const analysts = {
  Technology: ['Andres Fernandez', 'Brian Jung', 'George Dagres', 'Karim Hummos', 'Luis Miranda', 'Maks Zalesinski', 'Nihar Desai', 'Nomar Peña'],
  Healthcare: ['Muaz Bin Tariq', 'Advik Keshary', 'Angel Huerta', 'Riya Perla', 'Joel James', 'Liliana Niculescu', 'Karol Szklanny'],
  Finance: ['Ezra Gussin', 'Shivansh Amba', 'Elliot Morrissey', 'Awa Mirani', 'Sabina Anisetty', 'Chahel Tarigonda', 'Maria Lillig'],
  "Consumer Goods": ['Paulina Koziel', 'Stas Ilkiv', 'Madison Kloss', 'Maggie Eiswerth', 'Justin Zasspyko', 'Matthew Hilgart', 'Arianna Diaz', 'Arthur Rykala'],
  Energy: ['Matthew Li', 'Krrishil Rohan Raval', 'Max Thuc Tuong Le', 'Maksymilian Kaminski', 'Itzamna Mendoza', 'Asel Kahveci', 'Paul Zieba', 'Thomas Szyszka'],
};

export default function People() {
  return (
    <div className={styles.peopleContainer}>
      <h1 className={styles.title}>Who We Are</h1>

      <h2 className={styles.sectionTitle}>Eboard</h2>
      <ul className={styles.eboardList}>
        {eboardMembers.map((member, index) => (
          // eslint-disable-next-line react/jsx-key
          <motion.div className={styles.eboardMember}>
            <motion.li
              key={index}
              className={styles.eboardItem}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              {member.name} - <span className={styles.position}>{member.position}</span>
            </motion.li>

            <div className={styles.imageContainer}>
              <img src={member.img} alt="Eboard profiles" className={styles.membersImage} />
            </div>
          </motion.div>
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
            <div className={styles.sectorContainer}>
              <img src={leader.img} alt="Sector Leader Profile" className={styles.sectorImage} />
            </div>
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
