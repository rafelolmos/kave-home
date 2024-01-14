import { useState } from 'react';

import styles from './Pagination.module.scss';

type PaginationProps = {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
};

const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  currentPage,
  onPageChange,
}) => {
  const [startPage, setStartPage] = useState(1);
  const maxPageToShow = 8;

  const updateStartPage = (increment: boolean) => {
    setStartPage((prev) => {
      const newStartPage = prev + (increment ? maxPageToShow : -maxPageToShow);
      return Math.max(
        1,
        Math.min(newStartPage, totalPages - maxPageToShow + 1)
      );
    });
  };

  const pageNumbers = Array.from(
    { length: Math.min(maxPageToShow, totalPages - startPage + 1) },
    (_, i) => startPage + i
  );

  return (
    <div className={styles.pagination}>
      {startPage > 1 && (
        <span
          className={styles['pagination__arrow']}
          onClick={() => updateStartPage(false)}
        >
          &lt;
        </span>
      )}
      {pageNumbers.map((page) => (
        <span
          className={`${
            currentPage === page
              ? styles['pagination__page--active']
              : styles['pagination__page']
          }`}
          key={page}
          onClick={() => onPageChange(page)}
        >
          {page}
        </span>
      ))}
      {totalPages > startPage + maxPageToShow - 1 && (
        <span
          className={styles['pagination__arrow']}
          onClick={() => updateStartPage(true)}
        >
          &gt;
        </span>
      )}
    </div>
  );
};

export default Pagination;
