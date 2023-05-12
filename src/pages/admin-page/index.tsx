import styles from './admin-page.module.scss';
import navCardsStyles from '../../components/nav-cards/nav-cards.module.scss';
import TopPanel from '../../components/top-panel';
import PersonVolunteer from '../../components/person-volunteer';
import { adminPageData } from './admin-page.constants';
// import type { TAdminUsersData } from './adminPage.constans';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { create } from 'zustand';
import NavCard from '../../components/common/nav-card';
import AdminFilterPopup from '../../components/modals/admin-filter-popup';
import { type TAdminUsersData } from '../../types';
import { useStore } from '../../services/store';

interface IUseFindUser {
  user: TAdminUsersData | null
  addUser: (newUser: TAdminUsersData) => void
}

interface ISetTitleAdminPAge {
  title: string
  setTitle: (newTitle: string) => void
}

export const useFindUser = create<IUseFindUser>((set) => ({
  user: null,
  addUser: (newUser: TAdminUsersData) =>
    set((state) => ({ ...state, user: newUser })),
}));

export const useSetTitleAdminPage = create<ISetTitleAdminPAge>((set) => ({
  title: '',
  setTitle: (newTitle: string) =>
    set((state) => ({ ...state, title: newTitle })),
}));

const AdminPage = () => {
  const { title } = useSetTitleAdminPage();
  const { pathname } = useLocation();
  const adminData = useStore((store) => store.adminData);
  return pathname === '/profile/admin'
    ? (
    <Navigate to='/profile/admin/confirmation-blocking-applications' />)
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
                className={navCardsStyles.linkCard} style={{ marginBottom: '10px' }}
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
        <TopPanel title={title}>
          <AdminFilterPopup onClick={() => {}} />
        </TopPanel>
        <Outlet />
      </main>
    </div>
    );
};

export default AdminPage;
