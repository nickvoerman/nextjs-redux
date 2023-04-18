import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import { FC } from 'react';
import { storeWrapper } from '../lib/redux/store';
import '../styles/globals.scss'

const App: FC<AppProps> = ({ Component, pageProps }) => (
  <ThemeProvider attribute="class">
    <Component {...pageProps} />
  </ThemeProvider>
);

export default storeWrapper.withRedux(App);