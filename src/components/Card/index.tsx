import Image from 'next/image';
import { useRouter } from 'next/router';

import Heart from '@/public/images/Heart';
import { useFavourites } from '@/src/context/FavouritesContext';
import { ProductType } from '@/src/types';

import styles from './Card.module.scss';

interface CardProps {
  product: ProductType;
  variant?: 'detail' | undefined;
}

const Card = ({ product, variant }: CardProps) => {
  const {
    productName,
    productPrice,
    productImageUrl,
    productSku,
    productMaterials,
    productCategoryHierarchy,
  } = product;

  const router = useRouter();
  const { favouritesList, manageFavourites } = useFavourites();

  const isDetail = variant === 'detail';
  const handleDetail = (id: string) => {
    if (!isDetail) {
      router.push(`products/${id}`);
    }
  };

  const handleFavourites = (e: React.MouseEvent<SVGSVGElement>, id: string) => {
    e.stopPropagation();
    manageFavourites(id);
  };

  return (
    <div
      className={`${styles.card} ${variant ? styles[`card--${variant}`] : ''}`}
      onClick={() => handleDetail(productSku)}
    >
      <div className={styles['card__product']}>
        <Image
          alt="product image"
          className={styles['card__image']}
          src={productImageUrl || ''}
          {...(isDetail ? { fill: true } : { height: 267, width: 213.6 })}
        />
        <Heart
          className={`${styles['card__favourite']} ${
            favouritesList?.includes(productSku)
              ? styles['card__favourite--selected']
              : ''
          }`}
          onClick={(e) => handleFavourites(e, productSku)}
        />
      </div>
      <div className={styles['card__description']}>
        <div className={styles['card__description__title']}>{productName}</div>
        {isDetail && (
          <div className={styles['card__description__category']}>
            {productCategoryHierarchy}
          </div>
        )}
        <div className={styles['card__description__price']}>
          {productPrice}
          <span>€</span>
        </div>
        {isDetail && (
          <div className={styles['card__description__material']}>
            {productMaterials}
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
