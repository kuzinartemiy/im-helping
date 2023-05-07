import styles from './main-layout.module.scss';
import Header from '../../components/header';
import Footer from '../../components/footer';
import { Outlet } from 'react-router-dom';

export default function MainLayout() {
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
