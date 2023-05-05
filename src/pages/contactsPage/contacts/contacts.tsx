import styles from '../contactsPage.module.scss';
import { ReactComponent as IconContactsGlobe } from '../../../assets/icons/contacts-globe.svg';
import TopPanel from '../../../components/top-panel';

const Contacts = () => {
  return (
    <>
      <TopPanel title="Контакты" titleIcon={<IconContactsGlobe className={styles.colorBlueIcon} />} filter={false}/>
      <div className={styles.contactsBody}>
        <div className={styles.contactItem}>
          <p className={styles.contactItemText}>Эмейл</p>
          <p className={styles.contactItemValue}>www@yandex.ru</p>
        </div>
        <div className={styles.contactItem}>
          <p className={styles.contactItemText}>Соцсети</p>
          <p className={styles.contactItemValue}>https://vk.com/me2help</p>
        </div>
      </div>
    </>
  );
};

export default Contacts;
