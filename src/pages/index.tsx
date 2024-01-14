import Head from 'next/head';
import Link from 'next/link';

import Categories from '@/components/Categories';
import styles from '@/src/styles/Home.module.scss';
import { ProductType } from '@/src/types';

import ProductsList from '../components/ProductsList';
import { fetchProducts } from '../services/fetchProducts';
import { categories } from '../utils';

export default function Home({ data }: { data: ProductType[] }) {
  const dataFragment = data?.slice(0, 12) || [];
  return (
    <div className={styles.home}>
      <Head>
        <title>Kave Home</title>
        <meta content="Kave Home " name="description" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <div className={styles['home__hero']}>
        <div className={styles['home__hero--text']}>
          <h1>
            Cuando la realidad supera la ficción.
            <br />
            Trucos para estar en casa.
          </h1>
        </div>
      </div>

      <main>
        <Categories categories={categories} />
        <section>
          <ProductsList data={dataFragment} pagination={false} />
          <Link className={styles['link-button']} href="/products">
            VER TODOS LOS PRODUCTOS
          </Link>
        </section>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const data = await fetchProducts();

  return {
    props: {
      data,
    },
    revalidate: 10,
  };
}
