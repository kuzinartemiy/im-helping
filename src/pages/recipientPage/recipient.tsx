import styles from './recipient.module.scss';
import navCardsStyles from '../../components/nav-cards/nav-cards.module.scss';
import PersonVolunteer from '../../components/person-volunteer';
import { personVolunteer } from '../../utils/person-voluteer.constants';
import { Outlet } from 'react-router-dom';
import { recipientData } from './recipientPage.constans';
import NavCard from '../../components/nav-card';

const RecipientPage = () => {
  return (
    <main className={styles.recipientPage}>
      <section>
        <PersonVolunteer {...personVolunteer}></PersonVolunteer>
        <ul className={navCardsStyles.linkCardContainer}>
          {recipientData.map((item, index) => {
            return <li key={index} className={navCardsStyles.linkCard}>
              <NavCard text={item.text} icon={item.icon} path={item.path}/>
            </li>;
          })}
        </ul>
      </section>
      <section className={styles.recipientPage__applications}>
        <Outlet />
        <div className={styles.recipientPage__applications__opacity}></div>
      </section>
    </main>
  );
};

export default RecipientPage;
