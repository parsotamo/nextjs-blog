import Head from 'next/head';

import Layout from '../components/layout/layout';
import { NotificationProvider } from '../store/notification-context';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <NotificationProvider>
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </Layout>
    </NotificationProvider>
  );
}

export default MyApp;
