import Heart from '@/public/images/Heart';

import styles from '../Card/Card.module.scss';

const CardPlaceholder = () => {
  return (
    <div className={styles.card}>
      <div className={styles['card__image']} />
      <Heart isFilled={false} />
      <div className={styles['card__title']}></div>
      <div className={styles['card__price']}>€</div>
    </div>
  );
};

export default CardPlaceholder;
