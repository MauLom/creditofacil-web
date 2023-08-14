import React from 'react';
import { Provider as StyletronProvider } from 'styletron-react';
import { LightTheme, BaseProvider } from 'baseui';
import { styletron } from '../styletron';
import { SessionProvider } from "next-auth/react"
function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <StyletronProvider value={styletron}>
        <BaseProvider theme={LightTheme}>
          <Component {...pageProps} />
        </BaseProvider>
      </StyletronProvider>
    </SessionProvider>

  );
}

export default MyApp;
