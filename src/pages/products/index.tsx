import ProductsList from '@/src/components/ProductsList';
import { fetchProducts } from '@/src/services/fetchProducts';
import { ProductType } from '@/src/types';

interface ProductsProps {
  data: ProductType[];
}

const Products = ({ data }: ProductsProps) => {
  return (
    <ProductsList
      data={data}
      subTitle="Lorem ipsum dolor sit amet."
      title="Productos"
    />
  );
};

export default Products;

export async function getStaticProps() {
  const data = await fetchProducts();

  return {
    props: {
      data,
    },
    revalidate: 10,
  };
}
