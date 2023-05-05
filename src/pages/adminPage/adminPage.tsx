import styles from './admin-page.module.scss';
import navCardsStyles from '../../components/nav-cards/nav-cards.module.scss';
// import AdminDefault from '../../components/admin-default';
import TopPanel from '../../components/top-panel';
import PersonVolunteer from '../../components/person-volunteer';
import AdminFilterPopup from '../../components/adminFilterPopup';
// import { useState } from 'react';
import { adminData, adminPageData } from './adminPage.constans';
import NavCard from '../../components/nav-card';
import { Outlet } from 'react-router-dom';

// interface IInitState {
//   window: 'confirmation' | 'statistics' | 'create';
// }

// const initState: IInitState = {
//   window: 'confirmation',
// };

const AdminPage = () => {
  // const [state] = useState(initState);
  return (
    <div className={styles.adminPage}>
      <aside className={styles.adminSidebar}>
        <PersonVolunteer
          avatar={adminData.avatar}
          name={adminData.name}
          id={adminData.id}
          phone={adminData.phone}
          about={adminData.about}
        />
        <ul className={styles.linkCardContainer}>
          {adminPageData.map((item, index) => {
            return (
              <li
                key={index}
                className={navCardsStyles.linkCard}
              >
                <NavCard
                  text={item.text}
                  icon={item.icon}
                  path={item.path}
                />
              </li>
            );
          })}
        </ul>
      </aside>
      <main className={styles.adminContent}>
        <TopPanel title='Title'>
          <AdminFilterPopup
            onClick={function (): void {
              throw new Error('Function not implemented.');
            }}
          />
        </TopPanel>
        <Outlet />
      </main>
    </div>
  );
};

export default AdminPage;
