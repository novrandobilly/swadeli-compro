import Head from 'next/head';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Accordion from '../../components/Pages/Faq/Accordion';
import Image from 'next/image';
import styles from './FAQ.module.scss';
import img1 from '../../assets/img-faq.png';

export default function Home() {
  return (
    <div>
      <Head>
        <title>FAQ</title>
        <meta name="description" content="Find the answers to some frequently asked questions here" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <div className="bg-[#F6F4E3] pb-32">
          <div className={styles['img-bckgrnd']}>
            <Image src={img1} alt="FAQ background" />
          </div>
          <div className="container mx-auto px-28">
            <div className="flex flex-row justify-center gap-20 ">
              <h1 className="text-[160px] text-[#1D493D] font-extrabold my-auto">FAQ</h1>
              <p className="text-[20px] text-[#899E90] my-auto">
                Need help? <br /> Find the answers to some <br /> frequently asked questions here
              </p>
            </div>
            <div className="px-28">
              <Accordion />
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
}
