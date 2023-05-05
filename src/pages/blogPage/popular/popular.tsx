import styles from '../blogPage.module.scss';
import { ReactComponent as IconPopular } from '../../../assets/icons/popular.svg';
import TopPanel from '../../../components/top-panel';

const Popular = () => {
  return (
    <>
      <TopPanel title="Популярное" titleIcon={<IconPopular className={styles.colorBlueIcon} />} />
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

export default Popular;