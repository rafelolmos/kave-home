import ProductsList from '@/src/components/ProductsList';
import { fetchProducts } from '@/src/services/fetchProducts';
import { ProductType } from '@/src/types';
import { getFavouritesData } from '@/src/utils';

import { useFavourites } from '@/src/context/FavouritesContext';

interface FavouristsProps {
  data: ProductType[];
}

const Favourists = (props: FavouristsProps) => {
  const { data } = props;
  const { favouritesList } = useFavourites();

  return (
    <ProductsList
      data={getFavouritesData(favouritesList, data)}
      subTitle="Lorem ipsum dolor sit amet."
      title="Lista de Favouritos"
    />
  );
};

export default Favourists;

export async function getStaticProps() {
  const data = await fetchProducts();

  return {
    props: {
      data,
    },
    revalidate: 10,
  };
}
