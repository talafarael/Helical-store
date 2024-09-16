import Layout from "@/components/layout";

import type { AppProps } from "next/app";

export default function MyApp({ Component, pageProps }: AppProps) {
  console.log(pageProps.newCategoryData);
  return (
    <Layout boolMenu={false}>
        afafa
      <Component {...pageProps} />
    </Layout>
  );
}
