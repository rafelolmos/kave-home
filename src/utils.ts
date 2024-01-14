import { CategoryType, ProductType } from './types';

export const getFavouritesData = (
  favArray: string[] | null,
  data: ProductType[]
) => {
  return data.filter((product) => favArray?.includes(product.productSku));
};

export const categories: CategoryType[] = [
  {
    id: 'estancias',
    title: 'Estancias',
  },
  {
    id: 'estilos',
    title: 'Estilos',
  },
  {
    id: 'muebles',
    title: 'Muebles',
  },
  {
    id: 'decoracion',
    title: 'Decoración',
  },
  {
    id: 'kave',
    title: 'We are Kave',
  },
  {
    id: 'proyectos',
    title: 'Proyectos',
  },
];
