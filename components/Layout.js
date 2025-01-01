import { Sora } from 'next/font/google';
import Head from 'next/head'; // Import Head for managing the document head

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
});

import Nav from '../components/Nav';
import Header from '../components/Header';
import TopLeftImg from '../components/TopLeftImg';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/th2.png" width={200} height={200} /> {/* Add favicon link */}
      </Head>
      <div className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}>
        <Nav />
        <Header />
        <TopLeftImg />
        {children}
      </div>
    </>
  );
};

export default Layout;
