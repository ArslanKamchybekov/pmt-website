/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Navbar from '../components/Navbar';
import styles from '../styles/About.module.css';

const bgBanner = "/uicBanner.jpg";

const Imagedheader = () => {
  return (
    <div className='relative'>
      {/* background image */}
      <div className={'h-60 bg-white flex justify-center items-center ' + styles.bannerFilter  }>
        <img className="object-cover w-[57vw] m-auto [filter:blur(2px)]" src={bgBanner} />
      </div>
      {/* center text */}
      <div className={'absolute top-[25%] text-center leading-[3rem] ' + styles.lazyCenter}>
        <h1 className={'pt-10 text-[3rem] mb-0'}>
          Portfolio Management Team
        </h1>
      </div>
    </div>
  )
}

/**
 * cards, simplified into JSON!
 * 
 * svgs: https://www.flaticon.com/authors/freepik
 */
const cardList = [
  {
    header: "100+ Members",
    img: {
      src: "/aboutCards/members.svg",
      alt: "Members Icon"
    },
    desc: "Join our diverse group of analysts and general members."
  },
  {
    header: "20+ Projects",
    img: {
      src: "/aboutCards/project.svg",
      alt: "Projects Icon"
    },
    desc: "Real-world financial analysis projects and stock pitches."
  },
  {
    header: "Collaborations",
    img: {
      src: "/aboutCards/teamwork.svg",
      alt: "Collaborations Icon"
    },
    desc: "Work with leading organizations such as STAC, SEC, and DIG."
  },
  {
    header: "Prestigious Alumni",
    img: {
      src: "/aboutCards/alum.svg",
      alt: "Alumni Icon"
    },
    desc: "Real-world financial analysis projects and stock pitches."
  }
]

/*
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

 */

export default function About() {
  return (
    <div>
      <Imagedheader />
      <div className={styles.aboutSection}>
        {/* Intro Section */}
        <section>
          <h1>About PMT</h1>
          <p>
            PMT is a student-run finance organization that aims to prepare students for the world of
            finance by offering hands-on experience, financial analysis, and collaboration
            with industry professionals. Our diverse membership is united by a passion for investment and markets.
          </p>
          <div className="right-0 mt-[-15vh] mr-[10vw] absolute max-w-[40vw]">
            <img className="h-[37vh]" src='/group-photo.jpg' />
            <div className={styles.caption}>
              caption text goes here
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
          <h2 className='text-[#0a0a0a]'>Key Highlights</h2>
          <div className={styles.grid}>
            {
              cardList.map((element, index) => {
                return (
                  <div className={styles.card} key={index}>
                    <div className='flex justify-around items-center'>
                      <img src={element.img.src} alt={element.img.alt} />
                      <h3>{element.header}</h3>
                    </div>
                    <p>{element.desc}</p>
                  </div>
                )
              })
            }
          </div>
        </section>
      </div>
    </div>
  );
}
