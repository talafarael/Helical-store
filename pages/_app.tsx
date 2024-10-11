import Layout from "@/components/layout";

import type { AppProps } from "next/app";
import Head from "next/head";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";

export default function MyApp({ Component, pageProps, router }: AppProps) {
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
      <AnimatePresence mode="wait">
        <motion.div
          key={router.route}
          className="motion"
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          exit={{ opacity: 0 }} 
          transition={{ duration: 0.5 }}
        >
          <Component {...pageProps} />{" "}
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
}
