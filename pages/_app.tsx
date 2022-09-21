import * as React from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, EmotionCache } from "@emotion/react";
import theme from "../src/config/theme";
import createEmotionCache from "../src/config/createEmotionCache";
import { Provider } from "react-redux";
import { store } from "../src/store/store";
import WithAuth from "../src/layout/withAuth";
import { NextPageWithLayout } from "../src/layout/types";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

type AppPropsWithLayout = MyAppProps & {
  Component: NextPageWithLayout;
};
export default function MyApp(props: AppPropsWithLayout) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Provider store={store}>
          {getLayout(<Component {...pageProps} />)}
        </Provider>
      </ThemeProvider>
    </CacheProvider>
  );
}
