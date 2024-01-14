import { GetStaticPaths, GetStaticPropsContext } from 'next';

import Card from '@/src/components/Card';
import { fetchProducts } from '@/src/services/fetchProducts';
import { ProductType } from '@/src/types';

import styles from './Product.module.scss';

interface ProductDetailProps {
  product: ProductType;
}

const ProductDetail = ({ product }: ProductDetailProps) => {
  return (
    <div className={styles.product}>
      <Card product={product} variant="detail" />
    </div>
  );
};

export default ProductDetail;

export async function getStaticProps(context: GetStaticPropsContext) {
  const { params } = context;
  if (!params) {
    return { notFound: true };
  }
  const data = await fetchProducts();
  const product = data.find(
    (item: ProductType) => item.productSku === params.productId
  );
  if (!product) {
    return { notFound: true };
  }

  return {
    props: {
      product,
    },
  };
}

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await fetchProducts();

  const paths = data.map((item: ProductType) => ({
    params: { productId: item.productSku },
  }));

  return {
    paths,
    fallback: false,
  };
};
