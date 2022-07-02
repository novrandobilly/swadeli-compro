import Head from 'next/head';
import Header from '../../components/Header/Header'
import AboutUs from '../../components/Pages/AboutUs/AboutUs'

export default function Home() {
  return (
    <div>
      <Head>
        <title>About Us</title>
        <meta
          name="description"
          content="About Swadeli. Swadeli is a quick commerce app that replaces the conventional with convenience. We are here to be your other (quicker) set of hands–handing you groceries in 15 minutes. "
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <AboutUs />
      </main>
    </div>
  );
}
