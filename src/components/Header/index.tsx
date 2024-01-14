import Image from 'next/image';
import Link from 'next/link';

import Heart from '@/public/images/Heart';
import logo from '@/public/images/Logo_KaveHome.png';
import { useFavourites } from '@/src/context/FavouritesContext';

import styles from './Header.module.scss';

const Header = () => {
  const { favouritesList } = useFavourites();
  const numberOfFavourist = favouritesList.length;
  return (
    <nav className={styles.header}>
      <div className={styles['header__content']}>
        <Link href="/">
          <Image
            alt="Kave Home logo"
            height={21}
            src={logo}
            width={120}
            priority
          />
        </Link>
        <Link className={styles['header__content--image']} href="/favourites">
          <Heart
            className={` ${
              numberOfFavourist ? styles['header__content--filled'] : ''
            }`}
            isFilled={false}
          />
          {numberOfFavourist > 0 && <span>{numberOfFavourist}</span>}
        </Link>
      </div>
    </nav>
  );
};

export default Header;
