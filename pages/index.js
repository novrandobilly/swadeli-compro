import Head from "next/head";
import Header from "../components/Header/Header";
import styles from "./Home.module.scss";
import Body from "../components/Body/Body";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Swadeli</title>
        <meta
          name="description"
          content="Swadeli Quick Commerce App. Groceries and time, at your hands. "
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <Body />
        <Footer />
      </main>
    </div>
  );
}
