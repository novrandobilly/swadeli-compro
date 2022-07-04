import Head from 'next/head';
import Header from '../../components/Header/Header'
import JoinUs from '../../components/Pages/JoinUs/JoinUs';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Join Us</title>
        <meta name="description" content="Join Swadeli" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <JoinUs />
      </main>
    </div>
  );
}
