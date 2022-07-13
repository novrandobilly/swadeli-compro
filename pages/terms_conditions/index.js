import Head from "next/head";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import TermsAndConditions from "../../components/Pages/TnC/TermsAndConditions";
// import styles from './TAC.module.scss';
import styles from './TNC.module.scss'
import Image from 'next/image';
import Leaf from '../../assets/leaf.png';
import Tomato from '../../assets/tomato.png';
import Wortel from '../../assets/wortel.png';
import Broccoli from '../../assets/broccoli.png'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Terms &amp; Conditions</title>
        <meta name="description" content="Terms &amp; Conditions" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <div className={`${styles['broccoli']} z-[1]`}>
            <Image
              // width={1290.57}
              // height={1044.14}
              src={Broccoli}
              alt='Broccoli'
            />
        </div>
        <div className={`${styles['wortel']} z-[1]`}>
            <Image
              // width={1290.57}
              // height={1044.14}
              src={Wortel}
              alt='Wortel'
            />
        </div>
        <div className={`${styles['tomato']} z-[1]`}>
            <Image
              // width={1290.57}
              // height={1044.14}
              src={Tomato}
              alt='Tomato'
            />
        </div>
        <div className={`${styles["leaf"]} z-[1]`}>
          <Image
            // width={1290.57}
            // height={1044.14}
            src={Leaf}
            alt='Leaf'
          />
        </div>
        <TermsAndConditions />
        <Footer />
      </main>
    </div>
  );
}
