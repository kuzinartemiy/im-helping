import styles from './contactsPage.module.scss';
import NavCards from '../../components/nav-cards';
// import TopPanel from '../../components/top-panel';
import { data } from './nav-cards.constants';
// import { ReactComponent as IconContactsGlobe } from '../../assets/icons/contacts-globe.svg';
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
          {/* <TopPanel title="Контакты" titleIcon={<IconContactsGlobe className={styles.colorBlueIcon} />} /> */}
          {/* <div className={styles.contactsBody}>
            <div className={styles.contactItem}>
              <p className={styles.contactItemText}>Эмейл</p>
              <p className={styles.contactItemValue}>www@yandex.ru</p>
            </div>
            <div className={styles.contactItem}>
              <p className={styles.contactItemText}>Соцсети</p>
              <p className={styles.contactItemValue}>https://vk.com/me2help</p>
            </div>
          </div> */}
        </section>
      </div>
    </>
  );
};

export default ContactsPage;
