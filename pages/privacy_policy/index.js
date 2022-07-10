import Head from "next/head";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import PrivacyPolicy from "../../components/Pages/PrivacyPolicy/PrivacyPolicy";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Privacy Policy</title>
        <meta name="description" content="Privacy Policy" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <PrivacyPolicy />
        <Footer />
      </main>
    </div>
  );
}
