'use client'; // Mark this as a client component

import { motion } from 'framer-motion';
import styles from '../styles/Alumni.module.css';

const alumniCompanies = [
  ['William Blair', 'https://www.williamblair.com/-/media/williamblairwebsite/feature/icon-cards/icon_williamblair_emblem_500px.png?h=500&w=500&la=en&hash=D1472282F1E5227DCA74CD81ECFCA48A'],
  ['Cushman and Wakefield', 'https://th.bing.com/th/id/R.f3d7b7415600edff150fbe1e2ddcec82?rik=yQFuTl63Ug9vUA&pid=ImgRaw&r=0'],
  ['Constellation', 'https://th.bing.com/th/id/OIP.XcR6RbZMaAtt6SPZTUkdRQHaEr?rs=1&pid=ImgDetMain'],
  ['Medline', 'https://chesterfieldbusinessnews.com/site/wp-content/uploads/2014/08/Medline287.jpg'],
  ['Schwab', 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Charles_Schwab_Corporation_logo.svg/2048px-Charles_Schwab_Corporation_logo.svg.png'],
  ['Northern Trust', 'https://th.bing.com/th/id/OIP.BhyAEwVYYZMU-fx-7PGljQHaE8?rs=1&pid=ImgDetMain'],
  ['Crowe', 'https://www.crowe.com/ae/-/media/crowe/firms/middle-east-and-africa/ae/crowehorwathae/services/crowe-logo.jpg?rev=c2eca53a635e45e8b7b764221cf3ab2d'],
  ['Northrop Grunman', 'https://th.bing.com/th/id/OIP.limz7WcXTa3zNBTjQ3YO2wAAAA?rs=1&pid=ImgDetMain'],
  ['Accenture', 'https://images.squarespace-cdn.com/content/v1/5d23ae890b7dee000180ec51/1586367987659-BZ5L8BA1UZBLNVFMATYK/ke17ZwdGBToddI8pDm48kPjg6bM-W17gCtBWJ8Mjp2AUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYwL8IeDg6_3B-BRuF4nNrNcQkVuAT7tdErd0wQFEGFSnBItPiluyZS-UhYJJ6omcW3Y-2_8y8J8iHad74oPUfQWBOqOCHXbC31Z0m-iT7ZRQQ/accenturelogo.png'],
  ['Clarity Partners', 'https://ww1.prweb.com/prfiles/2021/11/09/18321083/ClarityLogoBizWirecopy.jpg'],
  ['Bradford Allen', 'https://images.crunchbase.com/image/upload/c_pad,h_256,w_256,f_auto,q_auto:eco,dpr_1/v1509669954/occwksfwtiukdwjzchpp.jpg'],
  ['Goldman Sachs', 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Goldman_Sachs.svg/1200px-Goldman_Sachs.svg.png'],
  ['Golub Capital', 'https://media.licdn.com/dms/image/C4E0BAQHF898dsplN7w/company-logo_200_200/0/1519883247671?e=2147483647&v=beta&t=3LV39yFudS9soXjR7MAPL_-rV1mKZ4kITSyqV37Agho'],
  ['Motorola', 'https://th.bing.com/th/id/OIP.-UzIJKY1Va3dGEinHM8b3AHaGl?rs=1&pid=ImgDetMain'],
  ['Deloitte', 'https://th.bing.com/th/id/R.c8a5b4bd8da85d4d9f965e8d2da62f0e?rik=XqVnt%2fzgqEqbDw&pid=ImgRaw&r=0'],
  ['Lakeview Capital', 'https://media.licdn.com/dms/image/D560BAQGsXsBDGb6a4w/company-logo_200_200/0/1695912300359?e=2147483647&v=beta&t=A19x_1EBbCJCBqPA3HeVFZv5msHeGG6JCGqiFPQJUhY'],
  ['Citadel', 'https://th.bing.com/th/id/OIP.nErSAMBazZfixdw313PPlwHaEJ?rs=1&pid=ImgDetMain'],
  ['Citibank', 'https://logodix.com/logo/1311899.png'],
  ['Bank of America', 'https://www.charlotteobserver.com/latest-news/4s7bw4/picture221786265/alternates/FREE_1140/Bank_of_America_logo_(vertical).jpg']
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
            <img src={company[1]} className='flex' />
            {/* {company[0]} */}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
