import { ZenportEatsProvider, useZenportEats } from '@modules/ZenportEats/hooks/useZenportEats';

import Head from 'next/head';
import Header from '@components/Header';
import type { NextPage } from 'next';
import ZenportEats from '../modules/ZenportEats';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Zenport Eats Inc.</title>
        <meta name="description" content="A zenport App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ZenportEatsProvider>
        <Header />
        <ZenportEats />
      </ZenportEatsProvider>
    </>
  );
};

export default Home;
