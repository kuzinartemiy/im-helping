import styles from './contactsPage.module.scss';
import NavCards from '../../components/nav-cards';
import { data } from './nav-cards.constants';
import { Outlet } from 'react-router-dom';

const ContactsPage = () => {
  return (
    <>
      <h1>HEADER</h1>
      <div className={styles.container}>
        <section className={styles.nav}>
          <NavCards data={data}></NavCards>
        </section>
        <section className={styles.panel}>
          <Outlet />
        </section>
      </div>
    </>
  );
};

export default ContactsPage;
