import Head from 'next/head';
import Header from '../../components/Header/Header'
import Career from '../../components/Pages/JoinUs/Career';
import Footer from '../../components/Footer/Footer';


export default function Home() {
  return (
    <div>
      <Head>
        <title>Career</title>
        <meta
          name="description"
          content="Build your career and grow with us! Be a part of our office team or delivery team."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <Career />
        <Footer />
      </main>
    </div>
  );
}
