import Layout from "@/components/layout";

import type { AppProps } from "next/app";
import Head from "next/head";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
const variants = {
  initial: { opacity: 0, x: -100 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 100 },
};
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
          initial="initial"
          animate="animate"
          exit="exit"
          variants={variants}
          transition={{ duration: 0.3 }}
        >
          <Component {...pageProps} />{" "}
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
}
