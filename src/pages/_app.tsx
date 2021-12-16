import 'antd/dist/antd.css';

import type { AppProps } from 'next/app';
import { GlobalStyle } from '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
