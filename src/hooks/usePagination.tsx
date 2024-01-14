import { useState, useEffect, useCallback } from 'react';

import { ProductType } from '@/src/types';

type UsePaginationProps = {
  data: ProductType[] | [];
  currentPage: number;
  itemsPerPage: number;
};

type UsePaginationReturn = {
  paginatedData: ProductType[] | [];
  totalPages: number;
};

const usePagination = ({
  data,
  currentPage,
  itemsPerPage,
}: UsePaginationProps): UsePaginationReturn => {
  const [paginatedData, setPaginatedData] = useState<ProductType[]>([]);
  const [totalPages, setTotalPages] = useState<number>(0);

  const calculateTotalPages = useCallback(
    (dataLength: number): number => {
      return Math.ceil(dataLength / itemsPerPage);
    },
    [itemsPerPage]
  );

  useEffect(() => {
    setTotalPages(calculateTotalPages(data.length));
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setPaginatedData(data.slice(startIndex, endIndex));
  }, [data, currentPage, itemsPerPage, calculateTotalPages]);

  return { paginatedData, totalPages };
};

export default usePagination;
