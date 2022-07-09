import Head from 'next/head';
import Header from '../../components/Header/Header';
import Partnership from '../../components/Pages/JoinUs/Partnership';
import Footer from '../../components/Footer/Footer';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Partnership</title>
        <meta
          name="description"
          content="Expand your reach with us! Swadeli is always excited to collaborate with brands as partners."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <Partnership />
        <Footer />
      </main>
    </div>
  );
}
