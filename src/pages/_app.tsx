import Layout from '@/src/components/layout';

import '@/src/styles/globals.scss';
import { FavouritesProvider } from '../context/FavouritesContext';

import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <FavouritesProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </FavouritesProvider>
  );
}
