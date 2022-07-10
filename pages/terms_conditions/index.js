import Head from "next/head";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import TermsAndConditions from "../../components/Pages/TnC/TermsAndConditions";

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
        <TermsAndConditions />
        <Footer />
      </main>
    </div>
  );
}
