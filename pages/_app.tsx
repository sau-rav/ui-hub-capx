import "../styles/globals.css";
import "odometer/themes/odometer-theme-default.css";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import type { AppProps } from "next/app";

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
        <div className="font-medium">
          <LoadingBar
            color="linear-gradient(90deg, rgba(255,227,172,1) 0%, rgba(235,211,0,1) 45%, rgba(237,175,54,1) 100%)"
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
