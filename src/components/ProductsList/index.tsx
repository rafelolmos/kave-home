import { useState } from 'react';

import dynamic from 'next/dynamic';

import Pagination from '@/components/Pagination';
import CardPlaceholder from '@/src/components/CardPlaceholder';
import usePagination from '@/src/hooks/usePagination';
import { ProductType } from '@/src/types';

import styles from './ProductsList.module.scss';

const itemsPerPage = 20;
const DynamicCard = dynamic(() => import('@/components/Card'), {
  loading: () => <CardPlaceholder />,
});

interface ProductsListProps {
  data: ProductType[];
  pagination?: boolean;
  title?: string;
  subTitle?: string;
}

const ProductsList = (props: ProductsListProps) => {
  const { data, pagination = true, title, subTitle } = props;
  const [currentPage, setCurrentPage] = useState(1);
  const { paginatedData, totalPages } = usePagination({
    data,
    currentPage,
    itemsPerPage,
  });

  return (
    <main className={styles.products}>
      {title && <h3 className={styles.title}>{title}</h3>}
      {subTitle && <p className={styles.subtitle}>{subTitle}</p>}
      <ul className={styles['products__list']}>
        {paginatedData.map((product) => (
          <li key={product.productSku}>
            <DynamicCard product={product} />
          </li>
        ))}
      </ul>
      {pagination && (
        <div className={styles.pagination}>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      )}
    </main>
  );
};

export default ProductsList;
