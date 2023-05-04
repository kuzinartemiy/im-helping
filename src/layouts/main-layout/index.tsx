import styles from './main-layout.module.scss';
import Header from '../../components/header';
import Footer from '../../components/footer';
import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

export default function MainLayout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className={styles.mainLayout}>
      <Header />
      <section className={styles.content}>
        <Outlet />
      </section>
      <Footer />
    </div>
  );
}
