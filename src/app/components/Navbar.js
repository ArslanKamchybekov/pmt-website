import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">
          <p>PMT</p>
        </Link>
      </div>
      <ul className={styles.navLinks}>
        <li><Link href="/"><p>Home</p></Link></li>
        <li><Link href="/about"><p>About</p></Link></li>
        <li><Link href="/people"><p>People</p></Link></li>
        <li><Link href="/collaborations"><p>Collaborations</p></Link></li>
        <li><Link href="/alumni"><p>Alumni</p></Link></li>
        <li><Link href="/newsletter"><p>Newsletter</p></Link></li>
        <li><Link href="/contact"><p>Contact</p></Link></li>
      </ul>
    </nav>
  );
}
