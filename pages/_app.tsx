import "../styles/globals.css";
import "odometer/themes/odometer-theme-default.css";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { GoogleAnalytics } from '@next/third-parties/google'

import type { AppProps } from "next/app";
import Head from "next/head";

import { Provider as StyletronProvider } from "styletron-react";
import { LightTheme, BaseProvider } from "baseui";
import LoadingBar from "react-top-loading-bar";
import { UserProvider } from "../src/context/user";

import { styletron } from "../src/styletron";

const queryClient = new QueryClient();

const Header = (): JSX.Element => (
  <Head>
    <link rel="preload" href="/bgEllipses.png" as="image" />
    <link rel="preload" href="/bgMobile.png" as="image" />

    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="manifest" href="/site.webmanifest" />
    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
    <meta name="msapplication-TileColor" content="#da532c" />
    <meta name="theme-color" content="#ffffff"></meta>
    <meta property="og:type" content="article" />
    <meta property="og:title" content="The next-generation trading platform" />
    <meta
      property="og:description"
      content="An AI-powered trading personal assistant"
    />
    <meta
      property="og:image"
      content="https://lh3.googleusercontent.com/drive-viewer/AKGpihbUSg4AIyeGPYQ111xdOdcX79IcK9Wf1E-C4xsSGJeuo4fo-A9mE7uj9XAgSrJ7d2tBqR9n1Bc0CdmKtTXIfH1VLSBN20Pd_Ro=w3456-h614"
    />
    <meta name="referrer" content="origin-when-cross-origin" />
  </Head>
);

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
    <QueryClientProvider client={queryClient}>
      <StyletronProvider value={styletron}>
        <BaseProvider theme={LightTheme}>
          <Header />
          <div className="font-medium">
            <LoadingBar
              color="linear-gradient(90deg, rgba(1,88,4,1) 1%, rgba(254,152,57,1) 63%)"
              progress={progress}
              onLoaderFinished={() => setProgress(0)}
              waitingTime={400}
              height={3}
            />
            <GoogleAnalytics gaId="G-CFH3LJJG5P" />
            <UserProvider>
              <Component {...pageProps} />
            </UserProvider>
          </div>
        </BaseProvider>
      </StyletronProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
