import Head from "next/head";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import styles from "./Home.module.scss";
import Body from "../components/Body/Body";
import { useState } from "react";
import Modal from "../components/Modal/modal";

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
      {/* <Header />
          <Modal />
          <Footer /> */}
    </div>
  );
}
