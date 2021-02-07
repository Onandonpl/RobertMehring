import config from "react-reveal/globals";
import Head from "next/head";

import Globals from "../components/Globals";
import Layout from "../components/Layout";
function MyApp({ Component, pageProps }) {
  config({ ssrFadeout: true });
  return (
    <>
      <Head>
        <title>Robert Mehring</title>
        <link rel="shortcut icon" href="/icons8-r-50.png" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
        <Globals />
      </Layout>
    </>
  );
}

export default MyApp;
