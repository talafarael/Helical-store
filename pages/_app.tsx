import Layout from "@/components/layout";

import type { AppProps } from "next/app";
import Head from "next/head";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <title>Головна</title>
        <meta name="description" content="HelicalStore" />
        <link
          rel="icon"
          type="image/x-icon"
          sizes="32x32"
          href="/signal-wifi-svgrepo-comWhiteTwo.svg"
        />{" "}
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}
