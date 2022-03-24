//import '../styles/globals.css'
import Router from 'next/router';
import Head from 'next/head';
import NProgress from 'nprogress'; //reps the loading bar
import { ChakraProvider } from '@chakra-ui/react';

import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  NProgress.configure({ showSpinner: false });

  Router.events.on('routeChangeStart', () => {
    NProgress.start();
  }); //shows a loader whenever a new page is opened

  Router.events.on('routeChangeComplete', () => {
    NProgress.done();
  });

  return (
    <>
      <Head>
        <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css' integrity='sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ==' crossOrigin='anonymous' referrerPolicy='no-referrer' />  {/* gets the nprogress loader */}
      </Head>
      <ChakraProvider>
        <Layout>
          <Component {...pageProps} /> {/* Passes all the pages from the folder as components */}
        </Layout>
      </ChakraProvider>
    </>
  )
}

export default MyApp
