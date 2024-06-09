import "../styles/globals.css";
import "odometer/themes/odometer-theme-default.css";

import type { AppProps } from "next/app";

import { Provider as StyletronProvider } from "styletron-react";
import { LightTheme, BaseProvider } from "baseui";

import { styletron } from "../src/styletron";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StyletronProvider value={styletron}>
      <BaseProvider theme={LightTheme}>
        <div className="font-medium">
          <Component {...pageProps} />
        </div>
      </BaseProvider>
    </StyletronProvider>
  );
}

export default MyApp;
