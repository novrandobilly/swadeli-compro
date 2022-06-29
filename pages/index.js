import Head from "next/head";
import Header from "../components/Header/Header";
import styles from "./Home.module.scss";

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
      </main>
    </div>
  );
}
