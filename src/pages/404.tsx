import { useEffect, useState } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';

import styles from '@/src/styles/NotFound.module.scss';

const NotFound = () => {
  const { asPath } = useRouter();
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    setHydrated(true);
  }, []);
  return (
    <>
      <main>
        <div className={styles['not-found']}>
          <h1>Page not found</h1>
          {hydrated && (
            <h4>
              Nothing was found at <code>{asPath}</code>.
            </h4>
          )}
          <Link href={'/'}> &larr; Home</Link>
        </div>
      </main>
    </>
  );
};

export default NotFound;
