import styles from './admin-page.module.scss';
import navCardsStyles from '../../components/nav-cards/nav-cards.module.scss';
import TopPanel from '../../components/top-panel';
import PersonVolunteer from '../../components/person-volunteer';
import AdminFilterPopup from '../../components/adminFilterPopup';
import {
  adminData,
  adminPageData,
} from './adminPage.constans';
import type { TAdminUsersData } from './adminPage.constans';
import NavCard from '../../components/nav-card';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { create } from 'zustand';

interface IUseFindUser {
  user: TAdminUsersData | null
  addUser: (newUser: TAdminUsersData) => void
}

export const useFindUser = create<IUseFindUser>((set) => ({
  user: null,
  addUser: (newUser: TAdminUsersData) =>
    set((state) => ({ ...state, user: newUser })),
}));

const AdminPage = () => {
  const { pathname } = useLocation();
  return pathname === '/admin'
    ? (<Navigate to='/admin/confirmation-blocking-applications' />)
    : (
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
