import styles from './contactsPage.module.scss';
import NavCards from '../../components/nav-cards';
import TopPanel from '../../components/top-panel';
import { data } from './nav-cards.constants';

const ContactsPage = () => {
  return (
    <>
      <h1>HEADER</h1>
      <div className={styles.container}>
        <section>
          <NavCards data={data}></NavCards>
        </section>
        <section>
          <TopPanel title="Контакты" />
          <div> </div>
        </section>
      </div>
    </>
  );
};

export default ContactsPage;
