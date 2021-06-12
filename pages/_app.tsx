import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Image from 'next/image';
import Head from 'next/head';

import Menu from '../components/layout/Menu';

function MyApp({ Component, pageProps }: AppProps) {


  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600&family=Poppins:wght@400;600&family=Playfair+Display:wght@800&display=swap" rel="stylesheet" />
      </Head>
      <div className="flex min-h-screen w-full">
        <div className="min-h-screen w-64 ">
          <div className="flex justify-center pt-10">
            <Image src="/images/logo.png" alt="logo" width={150} height={150} />
          </div>
          <div className="px-5 pt-10">
            <Menu />
          </div>
        </div>
        <div className="flex-1 min-h-screen bg-red-100">
          <Component {...pageProps} />
        </div>
      </div>
    </div>
  );
};

export default MyApp;
