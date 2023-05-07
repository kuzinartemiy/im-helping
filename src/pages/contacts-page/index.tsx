import styles from './contactsPage.module.scss';
import NavCards from '../../components/nav-cards';
import { contactsPageNavCards } from './contacts.constants';
import { Outlet } from 'react-router-dom';

const ContactsPage = () => (
  <div className={styles.container}>
    <section className={styles.nav}>
      <NavCards cards={contactsPageNavCards} />
    </section>
    <section className={styles.panel}>
      <Outlet />
    </section>
  </div>
);

export default ContactsPage;
