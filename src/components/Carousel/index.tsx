import { CategoryType } from '@/src/types';

import styles from './Carousel.module.scss';

interface CarouselProps {
  items: CategoryType[];
}

const Carousel = ({ items }: CarouselProps) => {
  return (
    <div className={styles.container}>
      {items.map((item) => (
        <div className={styles['categories__items']} key={item.id}>
          <div className={styles['categories__items__card']} />
          <span className={styles['categories__items__title']}>
            {item.title}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Carousel;
