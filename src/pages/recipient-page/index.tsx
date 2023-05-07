import styles from './recipient.module.scss';
import navCardsStyles from '../../components/nav-cards/nav-cards.module.scss';
import PersonVolunteer from '../../components/person-volunteer';
import { Outlet } from 'react-router-dom';
import { recipientPageNavLinks } from './recipient-page.constans';
import NavCard from '../../components/common/nav-card';
import { useStore } from '../../services/store';

const RecipientPage = () => {
  const owner = useStore((state) => state.owner);
  return (
    <main className={styles.recipientPage}>
      <section>
        <PersonVolunteer {...owner} />
        <ul className={navCardsStyles.linkCardContainer}>
          {recipientPageNavLinks.map((item, index) => (
            <li key={index} className={navCardsStyles.linkCard}>
              <NavCard text={item.text} icon={item.icon} path={item.path}/>
            </li>
          ))}
        </ul>
      </section>
      <section className={styles.recipientPage__applications}>
        <Outlet />
      </section>
    </main>
  );
};

export default RecipientPage;
