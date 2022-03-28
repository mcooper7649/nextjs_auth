import { Provider } from 'next-auth/client';
import Head from 'next/head';

import Layout from '../components/layout/layout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <Layout>
        <Head>
          <meta
            name="publish_date"
            property="og:publish_date"
            content="2022-03-23T00:00:00-0600"
          />
          <meta
            name="title"
            content="User Authententication | NextJS"
            property="og:title"
          />
          <meta
            name="description"
            property="og:description"
            content="User Authentication built using NextJS API and MongoDB DB for storage. Using Session to manage the active User data we can secure our routes and only grant access to pages based on logged in status."
          />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <meta
            name="image"
            property="og:image"
            content="https://img001.prntscr.com/file/img001/_PpBnvbjQGOh39arIxtMhQ.png"
          />
          <meta
            name="url"
            property="og:url"
            content="https://nextjs-auth-eta.vercel.app/"
          />
          <meta name="author" property="og:author" content="Michael Cooper" />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
