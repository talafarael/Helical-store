import Layout from "@/components/layout";

import type { AppProps } from "next/app";
import { useRouter } from "next/router";

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const pathsWithoutMenu = [/^\/product\/[a-zA-Z0-9_-]+$/, "/order"];

  const isNoMenuPage = pathsWithoutMenu.some((path) =>
    typeof path === "string" ? path === router.asPath : path.test(router.asPath)
  );
  return (
    <Layout boolMenu={!isNoMenuPage}>
      <Component {...pageProps} />
    </Layout>
  );
}
