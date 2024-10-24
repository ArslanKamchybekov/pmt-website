import Navbar from '../components/Navbar';
import styles from '../styles/About.module.css';

const bg = "https://placehold.co/400x175/00000/31343C/svg?font=source-sans-pro&text=Placeholder%20SVG%20Bannerx";

const Imagedheader = () => {
  return (
    <div className='relative'>
      {/* background image */}
      <div className='h-60'>
        <img className="object-cover h-full w-full" src={bg} />
      </div>
      {/* center text */}
      <div className={'absolute top-[25%] text-center leading-[3rem] ' + styles.lazyCenter}>
        <h1 className={'pt-10 text-[3rem]'}>
          About
        </h1>
        <h2 className='text-[2rem] text-center italic'>built on caption text</h2>
      </div>
    </div>
  )
}

export default function About() {
  return (
    <div>
      <Imagedheader />
      <div className={styles.aboutSection}>
        {/* Intro Section */}
        <section>
          <h1>About PMT</h1>
          <p>
            adss is a student-run finance organization that aims to prepare students for the world of
            finance by offering hands-on experience, financial analysis, and collaboration
            with industry professionals. Our diverse membership is united by a passion for investment and markets.
          </p>
          <div className="right-0 mt-[-15vh] mr-[10vw] absolute max-w-[40vw]">
            <img className="h-[37vh]" src='https://placehold.co/600x400/00000/FFFFFF/svg?font=source-sans-pro&text=Placeholder%20SVG%20Banner' />
            <div className={styles.caption}>
              this is a test
            </div>
          </div>

        </section>

        {/* Mission Section */}
        <section>
          <div className={'m-auto w-min'}>
            <h1>Our Mission</h1>
            <p>
              We empower students with the knowledge, skills, and network to succeed in the financial industry.
              Through stock pitches, market research, and portfolio management, we provide a collaborative environment
              for learning and growth.
            </p>
          </div>

        </section>

        {/* Highlights Section */}
        <section className={styles.highlights}>
          <h2>Key Highlights</h2>
          <div className={styles.grid}>
            <div className={styles.card}>
              <img src="/members-icon.svg" alt="Members Icon" />
              <h3>100+ Members</h3>
              <p>Join our diverse group of analysts and general members.</p>
            </div>
            <div className={styles.card}>
              <img src="/projects-icon.svg" alt="Projects Icon" />
              <h3>20+ Projects</h3>
              <p>Real-world financial analysis projects and stock pitches.</p>
            </div>
            <div className={styles.card}>
              <img src="/collaborations-icon.svg" alt="Collaborations Icon" />
              <h3>Collaborations</h3>
              <p>Work with leading organizations such as STAC, SEC, and DIG.</p>
            </div>
            <div className={styles.card}>
              <img src="/alumni-icon.svg" alt="Alumni Icon" />
              <h3>Prestigious Alumni</h3>
              <p>Our alumni work at top firms like Goldman Sachs, JP Morgan, and Citadel.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
