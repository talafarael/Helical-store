
import Layout from "@/components/layout";

import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect } from "react";
declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: { [key: string]: any }) => void;
  }
}
export {};
export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const pathsWithoutMenu = [/^\/product\/[a-zA-Z0-9_-]+$/, "/order"];

  const isNoMenuPage = pathsWithoutMenu.some((path) =>
    typeof path === "string" ? path === router.asPath : path.test(router.asPath)
  );
  useEffect(() => {
    const handleRouteChange = (url:string) => {
      window.gtag('config',  process.env.NEXT_PUBLIC_GA_ID  as string, {
        'page_title': document.title,
        'page_location': window.location.href,
        'page_path':  url
    });



      // window.gtag('config', process.env.NEXT_PUBLIC_GA_ID as string, {
      //   page_path: url,
      // });
    };

   
    router.events.on('routeChangeComplete', handleRouteChange);

   
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router]);

  return (
    <Layout boolMenu={!isNoMenuPage}>
{/* <GoogleRouter /> */}
     <Component {...pageProps} />
    </Layout>
  );
}
