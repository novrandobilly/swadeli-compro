import Head from "next/head";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Accordion from "../../components/Pages/Faq/Accordion";
import Image from "next/image";
import styles from "./FAQ.module.scss";
import img1 from "../../assets/img-faq.png";

export default function Home() {
  return (
    <div>
      <Head>
        <title>FAQ</title>
        <meta
          name="description"
          content="Find the answers to some frequently asked questions here"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <div className="bg-[#F6F4E3] pb-16 lg:pb-32 relative">
          <div className={`${styles["img-bckgrnd"]} z-[1]`}>
            <Image src={img1} alt="FAQ background" />
          </div>
          <div className="container mx-auto px-8 lg:px-28 z-10">
            <div className="flex flex-col lg:flex-row justify-center lg:gap-20 pt-6 lg:pt-0">
              <h1 className="text-[70px] lg:text-[160px] lg:text-[#1D493D] text-[#945200]  font-extrabold my-auto font-PoetsenOne">
                FAQ
              </h1>
              <p className="text-[20px] text-[#37413A]  lg:text-[#899E90] my-auto font-Roboto">
                Need help? <br /> Find the answers to some <br /> frequently
                asked questions here
              </p>
            </div>
            <div className=" lg:px-28 mt-9 lg:mt-0 z-10 relative">
              <Accordion />
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
}
