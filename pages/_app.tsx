import "../styles/globals.css";
import "odometer/themes/odometer-theme-default.css";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import type { AppProps } from "next/app";
import Head from "next/head";

import { Provider as StyletronProvider } from "styletron-react";
import { LightTheme, BaseProvider } from "baseui";
import LoadingBar from "react-top-loading-bar";

import { styletron } from "../src/styletron";

function MyApp({ Component, pageProps }: AppProps) {
  const [progress, setProgress] = useState(0);
  const router = useRouter();

  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      setProgress(10);
    });

    router.events.on("routeChangeComplete", () => {
      setProgress(100);
    });
  });

  return (
    <StyletronProvider value={styletron}>
      <BaseProvider theme={LightTheme}>
        <Head>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff"></meta>
          <meta property="og:type" content="article" />
          <meta
            property="og:title"
            content="The next-generation trading platform"
          />
          <meta
            property="og:description"
            content="An AI-powered trading personal assistant"
          />
        </Head>
        <div className="font-medium">
          <LoadingBar
            color="linear-gradient(90deg, rgba(1,88,4,1) 1%, rgba(254,152,57,1) 63%)"
            progress={progress}
            onLoaderFinished={() => setProgress(0)}
            waitingTime={400}
            height={3}
          />
          <Component {...pageProps} />
        </div>
      </BaseProvider>
    </StyletronProvider>
  );
}

export default MyApp;
