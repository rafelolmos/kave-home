import Link from 'next/link';

import { CategoryType } from '@/src/types';

import Carousel from '../Carousel';

import styles from './Categories.module.scss';

interface CategoriesProps {
  categories: CategoryType[];
}
const Categories = ({ categories }: CategoriesProps) => {
  return (
    <div className={styles.categories}>
      <h2>Inspírate</h2>
      <div className={styles['categories__links']}>
        {categories.map((category) => (
          <Link href="" key={category.id}>
            {category.title}
          </Link>
        ))}
      </div>
      <div className={styles['categories__items']}>
        <Carousel items={categories} />
      </div>
    </div>
  );
};

export default Categories;
